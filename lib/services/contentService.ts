
import { supabase } from "@/lib/supabase/client";

// Define the ContentItem interface and export it
export interface ContentItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'blog' | 'case-study';
  tags: string[];
  createdAt: string;
  publishedAt: string | null;
  status: 'draft' | 'published';
  content: string;
  featuredImage?: string;
  clientName?: string;
  clientIndustry?: string;
  slug?: string;
}

// Get all content items
export const getAllContent = async (): Promise<ContentItem[]> => {
  try {
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error getting content:', error);
      return [];
    }

    // Map the response to our ContentItem interface
    return data.map(item => ({
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      category: item.category,
      tags: item.tags,
      createdAt: item.created_at,
      publishedAt: item.published_at,
      status: item.status,
      content: item.content,
      featuredImage: item.featured_image,
      clientName: item.client_name,
      clientIndustry: item.client_industry,
      slug: item.slug
    }));
  } catch (error) {
    console.error('Error getting content:', error);
    return [];
  }
};

// Get single content item by ID
export const getContentById = async (id: string): Promise<ContentItem | undefined> => {
  try {
    console.log(`Fetching content with ID: ${id}`);
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error getting content by ID:', error);
      return undefined;
    }

    if (!data) {
      console.log(`No content found with ID: ${id}`);
      return undefined;
    }

    console.log(`Found content with ID ${id}:`, data);
    return {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle || '',
      category: data.category,
      tags: data.tags || [],
      createdAt: data.created_at,
      publishedAt: data.published_at,
      status: data.status,
      content: data.content || '',
      featuredImage: data.featured_image,
      clientName: data.client_name,
      clientIndustry: data.client_industry,
      slug: data.slug
    };
  } catch (error) {
    console.error('Error getting content by ID:', error);
    return undefined;
  }
};

// Get content by slug
export const getContentBySlug = async (slug: string): Promise<ContentItem | undefined> => {
  try {
    console.log(`Fetching content with slug: ${slug}`);
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error getting content by slug:', error);
      return undefined;
    }

    if (!data) {
      console.log(`No content found with slug: ${slug}`);
      return undefined;
    }

    console.log(`Found content with slug ${slug}:`, data);
    return {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle || '',
      category: data.category,
      tags: data.tags || [],
      createdAt: data.created_at,
      publishedAt: data.published_at,
      status: data.status,
      content: data.content || '',
      featuredImage: data.featured_image,
      clientName: data.client_name,
      clientIndustry: data.client_industry,
      slug: data.slug
    };
  } catch (error) {
    console.error('Error getting content by slug:', error);
    return undefined;
  }
};

// Get content by category
export const getContentByCategory = async (category: 'blog' | 'case-study'): Promise<ContentItem[]> => {
  console.log(`Fetching content for category: ${category}`);
  try {
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('category', category)
      .eq('status', 'published') // Only published content
      .order('published_at', { ascending: false });

    if (error) {
      console.error(`Error getting ${category} content:`, error);
      throw error;
    }

    console.log(`Found ${data.length} ${category} items`);
    // Add detailed info about each returned post
    if (data.length > 0) {
      data.forEach((item, index) => {
        console.log(`Item ${index + 1}:`, {
          id: item.id,
          title: item.title,
          category: item.category,
          status: item.status,
          tags: item.tags,
          slug: item.slug,
        });
      });
    }
    
    return data.map(item => ({
      id: item.id,
      title: item.title,
      subtitle: item.subtitle || '',
      category: item.category,
      tags: item.tags || [],
      createdAt: item.created_at,
      publishedAt: item.published_at,
      status: item.status,
      content: item.content || '',
      featuredImage: item.featured_image,
      clientName: item.client_name,
      clientIndustry: item.client_industry,
      slug: item.slug
    }));
  } catch (error) {
    console.error(`Error getting ${category} content:`, error);
    throw error;
  }
};

// Helper function to generate a slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')    // Remove non-word chars
    .replace(/\-\-+/g, '-')      // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '')          // Trim hyphens from start
    .replace(/-+$/, '');         // Trim hyphens from end
};

// Create new content item
export const createContent = async (item: Omit<ContentItem, 'id' | 'createdAt'>): Promise<ContentItem | null> => {
  try {
    // Generate slug if not provided
    const slug = item.slug || generateSlug(item.title);
    
    const { data, error } = await supabase
      .from('content')
      .insert([
        {
          title: item.title,
          subtitle: item.subtitle,
          content: item.content,
          category: item.category,
          tags: item.tags,
          status: item.status,
          published_at: item.publishedAt,
          featured_image: item.featuredImage,
          client_name: item.clientName,
          client_industry: item.clientIndustry,
          slug: slug
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Error creating content:', error);
      return null;
    }

    return {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      category: data.category,
      tags: data.tags,
      createdAt: data.created_at,
      publishedAt: data.published_at,
      status: data.status,
      content: data.content,
      featuredImage: data.featured_image,
      clientName: data.client_name,
      clientIndustry: data.client_industry,
      slug: data.slug
    };
  } catch (error) {
    console.error('Error creating content:', error);
    return null;
  }
};

// Update existing content item
export const updateContent = async (id: string, updates: Partial<ContentItem>): Promise<ContentItem | null> => {
  try {
    // Map our ContentItem keys to database column names
    const mappedUpdates: any = {};
    if (updates.title !== undefined) mappedUpdates.title = updates.title;
    if (updates.subtitle !== undefined) mappedUpdates.subtitle = updates.subtitle;
    if (updates.content !== undefined) mappedUpdates.content = updates.content;
    if (updates.category !== undefined) mappedUpdates.category = updates.category;
    if (updates.tags !== undefined) mappedUpdates.tags = updates.tags;
    if (updates.status !== undefined) mappedUpdates.status = updates.status;
    if (updates.publishedAt !== undefined) mappedUpdates.published_at = updates.publishedAt;
    if (updates.featuredImage !== undefined) mappedUpdates.featured_image = updates.featuredImage;
    if (updates.clientName !== undefined) mappedUpdates.client_name = updates.clientName;
    if (updates.clientIndustry !== undefined) mappedUpdates.client_industry = updates.clientIndustry;
    if (updates.slug !== undefined) mappedUpdates.slug = updates.slug;
    
    // If title is updated but slug isn't, regenerate the slug
    if (updates.title !== undefined && updates.slug === undefined) {
      mappedUpdates.slug = generateSlug(updates.title);
    }

    const { data, error } = await supabase
      .from('content')
      .update(mappedUpdates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating content:', error);
      return null;
    }

    return {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      category: data.category,
      tags: data.tags,
      createdAt: data.created_at,
      publishedAt: data.published_at,
      status: data.status,
      content: data.content,
      featuredImage: data.featured_image,
      clientName: data.client_name,
      clientIndustry: data.client_industry,
      slug: data.slug
    };
  } catch (error) {
    console.error('Error updating content:', error);
    return null;
  }
};

// Delete content item
export const deleteContent = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('content')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting content:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting content:', error);
    return false;
  }
};

// Get available tags
export const getAvailableTags = async (): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('content')
      .select('tags');

    if (error) {
      console.error('Error getting tags:', error);
      return [];
    }

    // Flatten the array of arrays and remove duplicates
    const allTags = data.flatMap(item => item.tags);
    return [...new Set(allTags)];
  } catch (error) {
    console.error('Error getting tags:', error);
    return [];
  }
};

// Types for content with complete data
export interface FullContentItem extends ContentItem {
  content: string;
  featuredImage?: string;
  clientName?: string;
  clientIndustry?: string;
}
