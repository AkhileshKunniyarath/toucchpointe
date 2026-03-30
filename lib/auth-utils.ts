
import { supabase } from "@/lib/supabase/client";
import { Session, User } from "@supabase/supabase-js";

/**
 * Check if a user is authenticated with Supabase
 * @returns {Promise<boolean>} Authentication status
 */
export const isAuthenticated = async (): Promise<boolean> => {
  try {
    // 1. Check for manual local env login
    const localAuth = localStorage.getItem("touchpointe_auth");
    if (localAuth) {
      try {
        const parsed = JSON.parse(localAuth);
        // Valid if within 24 hours
        const tokenDate = new Date(parsed.timestamp);
        const currentDate = new Date();
        if (currentDate.getTime() - tokenDate.getTime() <= 24 * 60 * 60 * 1000) {
          return true;
        }
      } catch (e) {
        // Fall back
      }
    }

    // 2. Fall back to Supabase
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Auth check error:", error);
      return false;
    }
    
    return !!session;
  } catch (error) {
    console.error("Auth check error:", error);
    return false;
  }
};

/**
 * Get the currently authenticated user's email
 * @returns {Promise<string>} User email or empty string
 */
export const getUserEmail = async (): Promise<string> => {
  try {
    const localAuth = localStorage.getItem("touchpointe_auth");
    if (localAuth) {
      try {
        const parsed = JSON.parse(localAuth);
        if (parsed.email) return parsed.email;
      } catch (e) {}
    }

    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error("Get user error:", error);
      return "";
    }
    
    return user?.email || "";
  } catch (error) {
    console.error("Get user error:", error);
    return "";
  }
};

/**
 * Get the current session and user
 * @returns {Promise<{session: Session | null, user: User | null}>} Current session and user
 */
export const getSessionAndUser = async (): Promise<{session: Session | null, user: User | null}> => {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error("Get session error:", error);
      return { session: null, user: null };
    }
    
    return { session, user: session?.user || null };
  } catch (error) {
    console.error("Get session error:", error);
    return { session: null, user: null };
  }
};
