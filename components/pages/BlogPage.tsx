
import React, { useEffect, useState } from 'react';
import PremiumPageLayout from '@/components/layouts/PremiumPageLayout';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getContentByCategory, ContentItem } from '@/lib/services/contentService';
import { format } from 'date-fns';
import { useToast } from '@/components/ui/use-toast';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [blogPosts, setBlogPosts] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Fetch blog posts from Supabase
  useEffect(() => {
    const fetchBlogPosts = async () => {
      setIsLoading(true);
      try {
        const posts = await getContentByCategory('blog');
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        toast({
          title: "Error loading blog posts",
          description: "Unable to load blog posts. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, [toast]);

  // Get unique tags from all blog posts for category filter
  const categories = ['All', ...[...new Set(blogPosts.flatMap(post => post.tags || []))]];

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         (post.subtitle && post.subtitle.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || (post.tags && post.tags.includes(selectedCategory));
    return matchesSearch && matchesCategory;
  });

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  // Calculate estimated read time (rough estimate based on content length)
  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <PremiumPageLayout 
      title="Blog | Touchpointe Digital - Marketing Insights"
      description="Insights, tips, and strategies on digital marketing, SEO, social media, and web development from Touchpointe Digital's experts."
    >
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
            Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Insights and strategies to help your business thrive in the digital landscape
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 mb-16 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-3 border border-white/[0.08] rounded-xl bg-white/[0.04] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-shrink-0">
              <select
                className="block w-full px-4 py-3 border border-white/[0.08] rounded-xl bg-[#0f0c29] text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm appearance-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Featured Post - Show the first post in the featured layout */}
            {filteredPosts.length > 0 && (
              <div className="mb-16">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-white/[0.15] transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] group">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden relative bg-white/[0.02]">
                      <img 
                        src={filteredPosts[0].featuredImage || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} 
                        alt={filteredPosts[0].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0818]/80 to-transparent lg:hidden" />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      {filteredPosts[0].tags && filteredPosts[0].tags.length > 0 && (
                        <div className="inline-block w-fit px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
                          {filteredPosts[0].tags[0]}
                        </div>
                      )}
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-gray-400 mb-8 text-lg leading-relaxed">{filteredPosts[0].subtitle}</p>
                      <div className="flex flex-wrap items-center text-gray-500 text-sm mb-8 gap-6 font-medium">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                          {filteredPosts[0].publishedAt ? formatDate(filteredPosts[0].publishedAt) : formatDate(filteredPosts[0].createdAt)}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-blue-400" />
                          {getReadTime(filteredPosts[0].content)}
                        </div>
                      </div>
                      <Link to={`/blog/${filteredPosts[0].slug || filteredPosts[0].id}`} className="inline-flex items-center text-sm font-bold tracking-wider text-blue-400 hover:text-blue-300 transition-colors uppercase w-fit">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Blog Posts Grid - Show all other posts in a grid */}
            {filteredPosts.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <div key={post.id} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] group">
                    <div className="aspect-video overflow-hidden relative bg-white/[0.02]">
                      <img 
                        src={post.featuredImage || "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {post.tags && post.tags.length > 0 && (
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                          {post.tags[0]}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">{post.subtitle}</p>
                      <div className="flex items-center justify-between text-gray-500 text-xs font-medium mb-6">
                        <div className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1.5 text-blue-400" />
                          {post.publishedAt ? formatDate(post.publishedAt) : formatDate(post.createdAt)}
                        </div>
                        <div className="flex items-center">
                          <User className="h-3.5 w-3.5 mr-1.5 text-blue-400" />
                          {getReadTime(post.content)}
                        </div>
                      </div>
                      <Link to={`/blog/${post.slug || post.id}`} className="inline-flex items-center text-sm font-bold tracking-wider text-blue-400 hover:text-blue-300 transition-colors uppercase w-fit">
                        Read More
                        <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* No results state */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </>
        )}
        
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-white/[0.08] backdrop-blur-md rounded-3xl p-10 md:p-14 mt-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <h2 className="text-2xl md:text-3xl font-black mb-4 text-white relative z-10">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
            Get the latest digital marketing insights and trends delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3 relative z-10">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-5 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-500 text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
            />
            <button className="px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </PremiumPageLayout>
  );
};

export default BlogPage;
