import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { deleteSiteSettings, getSiteSettings, updateSiteSettings } from '@/lib/services/settingsService';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import siteDefaults from '@/lib/site-defaults.json';

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

const prettifyLabel = (value: string) =>
  value
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^\w/, (char) => char.toUpperCase());

const isRecord = (value: JsonValue): value is Record<string, JsonValue> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export default function SiteDataEditor({ pageId }: { pageId: string }) {
  const [jsonData, setJsonData] = useState('');
  const [formData, setFormData] = useState<Record<string, JsonValue>>({});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, [pageId]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getSiteSettings(pageId);
      if (data && Object.keys(data).length > 0) {
        setJsonData(JSON.stringify(data, null, 2));
        setFormData(data);
      } else {
        const fallback = siteDefaults[pageId as keyof typeof siteDefaults] || {
          pageTitle: prettifyLabel(pageId.replace('_page', '')),
        };
        setJsonData(JSON.stringify(fallback, null, 2));
        setFormData(fallback);
      }
    } catch (error) {
      toast({ title: "Error retrieving data", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const parsedData = JSON.parse(jsonData);
      await updateSiteSettings(pageId, parsedData);
      setFormData(parsedData);
      toast({ title: "Site settings updated successfully" });
    } catch (e) {
      toast({ title: "Invalid JSON format", variant: "destructive", description: e.message });
    }
  };

  const handleDelete = async () => {
    try {
      await deleteSiteSettings(pageId);
      await fetchData();
      toast({ title: "Website settings deleted", description: "The page will now fall back to the default seeded content until you save new values." });
    } catch (error) {
      toast({ title: "Delete failed", variant: "destructive" });
    }
  };

  const updateFormValue = (key: string, value: JsonValue) => {
    const nextState = {
      ...formData,
      [key]: value,
    };
    setFormData(nextState);
    setJsonData(JSON.stringify(nextState, null, 2));
  };

  const renderValueField = (key: string, value: JsonValue) => {
    if (typeof value === 'string') {
      const isLong = value.length > 120 || key.toLowerCase().includes('description') || key.toLowerCase().includes('content');
      if (isLong) {
        return (
          <Textarea
            value={value}
            onChange={(event) => updateFormValue(key, event.target.value)}
            className="min-h-[140px] rounded-[1.5rem] border-white/[0.08] bg-white/[0.03] text-white"
          />
        );
      }

      return (
        <Input
          value={value}
          onChange={(event) => updateFormValue(key, event.target.value)}
          className="h-12 rounded-full border-white/[0.08] bg-white/[0.03] text-white"
        />
      );
    }

    if (Array.isArray(value)) {
      return (
        <Textarea
          value={JSON.stringify(value, null, 2)}
          onChange={(event) => {
            try {
              updateFormValue(key, JSON.parse(event.target.value));
            } catch {
              setJsonData(JSON.stringify({ ...formData, [key]: event.target.value }, null, 2));
            }
          }}
          className="min-h-[180px] rounded-[1.5rem] border-white/[0.08] bg-white/[0.03] font-mono text-white"
        />
      );
    }

    if (isRecord(value)) {
      return (
        <Textarea
          value={JSON.stringify(value, null, 2)}
          onChange={(event) => {
            try {
              updateFormValue(key, JSON.parse(event.target.value));
            } catch {
              setJsonData(JSON.stringify({ ...formData, [key]: event.target.value }, null, 2));
            }
          }}
          className="min-h-[180px] rounded-[1.5rem] border-white/[0.08] bg-white/[0.03] font-mono text-white"
        />
      );
    }

    return (
      <Input
        value={String(value)}
        onChange={(event) => updateFormValue(key, event.target.value)}
        className="h-12 rounded-full border-white/[0.08] bg-white/[0.03] text-white"
      />
    );
  };

  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-6 text-white backdrop-blur-xl">
      <h2 className="text-2xl font-black tracking-tight">{prettifyLabel(pageId)}</h2>
      <p className="mt-2 max-w-3xl text-sm text-slate-400">
        Edit common fields in visual mode, then switch to raw JSON when you need to adjust nested blocks or custom structures.
      </p>

      <div className="mt-6 flex-grow">
        {isLoading ? (
          <p className="py-10 text-center text-gray-400">Loading configuration...</p>
        ) : (
          <Tabs defaultValue="visual" className="h-full">
            <TabsList className="grid w-full max-w-sm grid-cols-2 rounded-full border border-white/[0.08] bg-white/[0.04]">
              <TabsTrigger value="visual" className="rounded-2xl">Visual Editor</TabsTrigger>
              <TabsTrigger value="json" className="rounded-2xl">Raw JSON</TabsTrigger>
            </TabsList>

            <TabsContent value="visual" className="mt-6 space-y-5">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-5">
                  <label className="mb-3 block text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                    {prettifyLabel(key)}
                  </label>
                  {renderValueField(key, value)}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="json" className="mt-6 h-[560px]">
              <textarea
                className="h-full w-full resize-none rounded-[1.5rem] border border-cyan-400/20 bg-white/[0.03] p-4 font-mono text-sm text-cyan-100 outline-none transition-colors focus:border-cyan-400"
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
              />
            </TabsContent>
          </Tabs>
        )}
      </div>

      <div className="mt-6 flex justify-between gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={handleDelete}
          className="rounded-full border-red-400/30 bg-red-500/10 px-6 font-bold text-red-200 hover:bg-red-500/15 hover:text-white"
        >
          Delete Page Data
        </Button>
        <Button onClick={handleSave} className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 font-bold text-white hover:from-blue-500 hover:to-violet-500">
          Save Website Settings
        </Button>
      </div>
    </div>
  );
}
