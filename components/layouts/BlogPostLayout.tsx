
import React from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import Contact from '@/components/Contact';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostLayoutProps {
  title: string;
  subtitle?: string;
  date: string;
  author: string;
  readTime?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  children: React.ReactNode;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  title,
  subtitle,
  date,
  author,
  readTime = "10 min read",
  category,
  tags,
  featuredImage,
  children
}) => {
  return (
    <PremiumPageLayout 
      title={`${title} | Touchpointe Digital`}
      description={subtitle || title}
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-10">
            <Link to="/blog" className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-blue-400 hover:text-blue-300 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
          </div>
          
          {/* Featured image */}
          <div className="rounded-3xl overflow-hidden mb-12 aspect-video bg-white/[0.02] border border-white/[0.1] shadow-2xl">
            <img 
              src={featuredImage} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Category */}
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
              {category}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 text-white tracking-tight leading-tight">
            {title}
          </h1>
          
          {/* Subtitle if available */}
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
          
          {/* Meta information */}
          <div className="flex flex-wrap items-center text-gray-500 text-sm mb-12 gap-8 font-semibold">
            <div className="flex items-center">
              <Calendar className="h-4.5 w-4.5 mr-2 text-blue-400" />
              {date}
            </div>
            <div className="flex items-center">
              <User className="h-4.5 w-4.5 mr-2 text-blue-400" />
              {author}
            </div>
            {readTime && (
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>
                {readTime}
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none mb-16 prose-headings:text-white prose-p:text-gray-400 prose-a:text-blue-400 prose-strong:text-white prose-ul:text-gray-400">
            {children}
          </div>
          
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center flex-wrap gap-3">
                <Tag className="h-4 w-4 text-blue-400 mr-2" />
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center rounded-lg bg-white/[0.04] border border-white/[0.08] px-4 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Share buttons */}
          <div className="border-t border-white/[0.08] pt-10 mb-16">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-sm">Share this article</h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white rounded-xl transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white rounded-xl transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 5.89c-.7.31-1.45.53-2.23.63.8-.48 1.42-1.24 1.7-2.14-.75.44-1.58.76-2.46.93-.71-.75-1.7-1.22-2.8-1.22-2.12 0-3.83 1.71-3.83 3.83 0 .3.03.59.1.88-3.18-.16-6-1.69-7.89-4.01-.33.57-.52 1.23-.52 1.93 0 1.33.68 2.5 1.7 3.19-.63-.02-1.22-.19-1.74-.47v.05c0 1.85 1.32 3.4 3.07 3.75-.32.09-.66.13-1.01.13-.25 0-.49-.02-.73-.07.49 1.52 1.9 2.63 3.57 2.66-1.3 1.02-2.95 1.63-4.73 1.63-.31 0-.61-.02-.91-.06 1.69 1.08 3.7 1.71 5.85 1.71 7.02 0 10.85-5.82 10.85-10.85 0-.17 0-.33-.01-.49.75-.54 1.4-1.21 1.92-1.98z"></path>
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white rounded-xl transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </PremiumPageLayout>
  );
};

export default BlogPostLayout;
