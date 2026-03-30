
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogPostLayout from '@/components/layouts/BlogPostLayout';
import { toast } from '@/components/ui/use-toast';
import { ContentItem, getContentById, getContentBySlug } from '@/lib/services/contentService';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (postSlug: string) => {
    try {
      console.log('Fetching blog post with slug or ID:', postSlug);
      let fetchedPost;
      
      // Try to fetch by slug first
      fetchedPost = await getContentBySlug(postSlug);
      
      // If not found by slug, try by ID (for backward compatibility)
      if (!fetchedPost) {
        fetchedPost = await getContentById(postSlug);
      }
      
      console.log('Fetched post:', fetchedPost);
      
      if (fetchedPost && fetchedPost.category === 'blog') {
        setPost(fetchedPost);
      } else {
        console.log('No blog post found with slug/ID:', postSlug);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      toast({
        title: "Error",
        description: "Failed to load the blog post. Please try again.",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  // Default values for demo blog posts (used when accessing from the BlogPage instead of admin-created content)
  const blogPosts = [
    {
      id: "1",
      title: "10 SEO Strategies That Actually Work in 2023",
      excerpt: "Discover which SEO tactics are delivering results this year and which outdated practices you should leave behind.",
      category: "SEO",
      date: "August 15, 2023",
      author: "Priya Thomas",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "8 min read",
      content: `
        <h2>The Evolution of SEO in 2023</h2>
        <p>Search engine optimization continues to evolve at a rapid pace. What worked a few years ago may no longer be effective today. Search engines, particularly Google, are constantly refining their algorithms to better understand user intent and deliver more relevant results.</p>
        <p>In this article, we'll explore the most effective SEO strategies for 2023, based on data and real-world results.</p>
        
        <h2>1. Focus on User Experience</h2>
        <p>Google's Page Experience update has made user experience a crucial ranking factor. This includes metrics like Core Web Vitals, mobile-friendliness, safe browsing, and HTTPS security.</p>
        <p>Websites that provide a smooth, fast, and secure experience for users are more likely to rank higher in search results. This means optimizing your website's loading speed, ensuring it's mobile-responsive, and fixing any usability issues.</p>
        
        <h2>2. Create In-Depth, Comprehensive Content</h2>
        <p>Gone are the days when you could rank with thin, keyword-stuffed content. Today's SEO landscape rewards depth and comprehensiveness. Content that thoroughly addresses the user's query and covers all aspects of a topic tends to perform better.</p>
        <p>Instead of creating multiple short articles, focus on publishing fewer but more comprehensive pieces that provide real value to your audience.</p>
        
        <h2>3. Optimize for Voice Search</h2>
        <p>With the increasing popularity of voice assistants like Siri, Alexa, and Google Assistant, optimizing for voice search has become increasingly important.</p>
        <p>Voice searches tend to be more conversational and question-based. To optimize for voice search, focus on long-tail keywords and natural language phrases that match how people speak.</p>
        
        <h2>4. Build Quality Backlinks</h2>
        <p>Backlinks remain a strong ranking factor, but quality matters more than quantity. A few links from authoritative, relevant websites in your industry are worth more than numerous links from low-quality sources.</p>
        <p>Focus on creating link-worthy content and building relationships with influencers and websites in your niche.</p>
        
        <h2>5. Leverage Structured Data</h2>
        <p>Structured data helps search engines understand the content of your pages better, which can lead to enhanced search results with rich snippets, knowledge panels, and other SERP features.</p>
        <p>Implementing schema markup for your content can increase visibility and click-through rates, even if it doesn't directly impact rankings.</p>
      `,
      tags: ["SEO", "Digital Marketing", "Content Strategy", "Google Algorithm"],
    },
    // ... remaining blog posts from BlogPage.tsx
  ];

  const findDefaultPost = (postSlug: string) => {
    return blogPosts.find(post => post.id === postSlug);
  };

  const defaultPost = slug ? findDefaultPost(slug) : null;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  // If the blog post doesn't exist or isn't a blog post, redirect to the blog page
  if (!loading && (!post || post.category !== 'blog') && !defaultPost) {
    return <Navigate to="/blog" />;
  }

  if (post) {
    // Render admin-created blog post
    return (
      <BlogPostLayout
        title={post.title}
        subtitle={post.subtitle}
        date={new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
        author="Touchpointe Digital Team"
        category={post.tags[0] || "Digital Marketing"}
        tags={post.tags}
        featuredImage={post.featuredImage || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
      >
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </BlogPostLayout>
    );
  } else if (defaultPost) {
    // Render default blog post
    return (
      <BlogPostLayout
        title={defaultPost.title}
        subtitle={defaultPost.excerpt}
        date={defaultPost.date}
        author={defaultPost.author}
        readTime={defaultPost.readTime}
        category={defaultPost.category}
        tags={defaultPost.tags || ["Digital Marketing"]}
        featuredImage={defaultPost.image}
      >
        <div dangerouslySetInnerHTML={{ __html: defaultPost.content }} />
      </BlogPostLayout>
    );
  }

  return <Navigate to="/blog" />;
};

export default BlogPostPage;
