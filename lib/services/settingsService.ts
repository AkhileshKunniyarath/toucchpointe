import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '';

export const getSiteSettings = async (key: string) => {
  try {
    const response = await axios.get(`${API_BASE}/api/settings/${key}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching site settings for', key, error);
    return null;
  }
};

export const updateSiteSettings = async (key: string, data: any) => {
  try {
    const payload = {
      ...data,
      updatedAt: new Date().toISOString(),
    };
    const response = await axios.post(`${API_BASE}/api/settings/${key}`, payload);
    return response.data;
  } catch (error) {
    console.error('Error updating site settings for', key, error);
    throw error;
  }
};

export const deleteSiteSettings = async (key: string) => {
  try {
    const response = await axios.delete(`${API_BASE}/api/settings/${key}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting site settings for', key, error);
    throw error;
  }
};
