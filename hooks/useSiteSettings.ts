import { useState, useEffect } from "react";
import { getSiteSettings } from "@/lib/services/settingsService";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeDeep<T>(base: T, override: unknown): T {
  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  if (isPlainObject(base)) {
    const result: Record<string, unknown> = { ...base };
    const overrideObject = isPlainObject(override) ? override : {};

    Object.keys(overrideObject).forEach((key) => {
      const baseValue = result[key];
      const overrideValue = overrideObject[key];

      if (isPlainObject(baseValue) || Array.isArray(baseValue)) {
        result[key] = mergeDeep(baseValue as never, overrideValue);
      } else {
        result[key] = overrideValue;
      }
    });

    return result as T;
  }

  return (override === undefined ? base : override) as T;
}

export function useSiteSettings<T = any>(pageId: string, defaultData: T) {
  const [data, setData] = useState<T>(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const fetchSettings = async () => {
      setIsLoading(true);
      try {
        const settings = await getSiteSettings(pageId);
        if (isMounted) {
          if (settings && Object.keys(settings).length > 0) {
            setData(mergeDeep(defaultData, settings));
          } else {
            setData(defaultData);
          }
        }
      } catch (error) {
        console.error("Failed to load site settings for", pageId, error);
        if (isMounted) setData(defaultData);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchSettings();

    return () => {
      isMounted = false;
    };
  }, [pageId]); // Intentionally omitting defaultData to prevent infinite loops

  return { data, isLoading };
}
