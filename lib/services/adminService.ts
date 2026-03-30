import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

export interface AdminSettingSummary {
  key: string;
  title: string;
  updatedAt: string | null;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface PageSpeedReport {
  id: number;
  url: string;
  email: string | null;
  performance_score: number;
  accessibility_score: number;
  best_practices_score: number;
  seo_score: number;
  created_at: string;
}

export const getSettingsInventory = async (): Promise<AdminSettingSummary[]> => {
  try {
    const response = await axios.get(`${API_BASE}/api/admin/settings`);
    return response.data;
  } catch (error) {
    console.error("Error fetching settings inventory", error);
    return [];
  }
};

export const getContactMessages = async (limit = 50): Promise<ContactMessage[]> => {
  try {
    const response = await axios.get(`${API_BASE}/api/admin/contact-messages`, {
      params: { limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching contact messages", error);
    return [];
  }
};

export const getPageSpeedReports = async (limit = 50): Promise<PageSpeedReport[]> => {
  try {
    const response = await axios.get(`${API_BASE}/api/admin/pagespeed-reports`, {
      params: { limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching PageSpeed reports", error);
    return [];
  }
};
