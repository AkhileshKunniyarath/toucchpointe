
export interface ContentFormValues {
  title: string;
  subtitle: string;
  content: string;
  category: 'blog' | 'case-study';
  tags: string[];
  clientName?: string;
  clientIndustry?: string;
  featuredImage?: string;
  status: 'draft' | 'published';
  slug?: string;
}
