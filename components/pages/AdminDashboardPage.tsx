
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, BriefcaseBusiness, Search, Filter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ContentList from "@/components/admin/ContentList";
import AdminLayout from "@/components/admin/AdminLayout";
import { getAllContent, deleteContent, ContentItem } from "@/lib/services/contentService";
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const AdminDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("case-study");
  const [statusFilter, setStatusFilter] = useState<"all" | "draft" | "published">("all");
  const [query, setQuery] = useState("");
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const authData = localStorage.getItem("touchpointe_auth");
    
    if (!authData) {
      navigate("/admin");
      return;
    }
    
    try {
      const parsed = JSON.parse(authData);
      const tokenDate = new Date(parsed.timestamp);
      const currentDate = new Date();
      
      // Token expires after 24 hours
      if (currentDate.getTime() - tokenDate.getTime() > 24 * 60 * 60 * 1000) {
        localStorage.removeItem("touchpointe_auth");
        navigate("/admin");
        return;
      }
      
      // Load data
      loadContentItems();
    } catch (error) {
      localStorage.removeItem("touchpointe_auth");
      navigate("/admin");
    }
  }, [navigate]);

  const loadContentItems = async () => {
    setIsLoading(true);
    
    try {
      const data = await getAllContent();
      setContentItems(data);
    } catch (error) {
      toast({
        title: "Error loading content",
        description: "Could not load your content items. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filteredItems = useMemo(() => {
    return contentItems.filter((item) => {
      const matchesCategory = item.category === activeTab;
      const matchesStatus = statusFilter === "all" || item.status === statusFilter;
      const searchTarget = `${item.title} ${item.subtitle} ${item.slug ?? ""} ${item.tags.join(" ")}`.toLowerCase();
      const matchesQuery = searchTarget.includes(query.toLowerCase());
      return matchesCategory && matchesStatus && matchesQuery;
    });
  }, [activeTab, contentItems, query, statusFilter]);

  const handleDeleteContent = async (id: string) => {
    try {
      const success = await deleteContent(id);
      if (success) {
        setContentItems(contentItems.filter(item => item.id !== id));
        toast({
          title: "Content deleted",
          description: "The content has been successfully deleted",
        });
      } else {
        toast({
          title: "Error deleting content",
          description: "Could not delete the content. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error deleting content",
        description: "An error occurred while deleting the content.",
        variant: "destructive",
      });
    }
  };

  const content = (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Total Library Items</p>
          <p className="mt-4 text-4xl font-black text-white">{contentItems.length}</p>
        </div>
        <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Case Studies</p>
          <p className="mt-4 text-4xl font-black text-emerald-300">
            {contentItems.filter((item) => item.category === "case-study").length}
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Insight Articles</p>
          <p className="mt-4 text-4xl font-black text-amber-300">
            {contentItems.filter((item) => item.category === "blog").length}
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">
        <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-xl">
          <div className="border-b border-white/10 px-3 pb-4">
            <h3 className="font-black uppercase tracking-[0.2em] text-white">Content Types</h3>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={() => setActiveTab("case-study")}
              className={`px-4 py-3 rounded-2xl font-bold flex items-center gap-3 transition-all text-sm ${
                activeTab === "case-study"
                  ? "bg-cyan-400/15 text-white shadow-lg border border-cyan-400/20"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <BriefcaseBusiness className="h-4 w-4" />
              Case Studies
            </button>
            <button
              onClick={() => setActiveTab("blog")}
              className={`px-4 py-3 rounded-2xl font-bold flex items-center gap-3 transition-all text-sm ${
                activeTab === "blog"
                  ? "bg-cyan-400/15 text-white shadow-lg border border-cyan-400/20"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <FileText className="h-4 w-4" />
              Insight Articles
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, slug, subtitle, or tags"
                className="h-12 rounded-full border-white/[0.08] bg-white/[0.03] pl-11 text-white"
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Select value={statusFilter} onValueChange={(value: "all" | "draft" | "published") => setStatusFilter(value)}>
                <SelectTrigger className="h-12 w-full rounded-full border-white/[0.08] bg-white/[0.03] text-white sm:w-[180px]">
                  <Filter className="mr-2 h-4 w-4 text-slate-500" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="published">Published only</SelectItem>
                  <SelectItem value="draft">Drafts only</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="ghost"
                className="h-12 rounded-full border border-white/[0.08] bg-white/[0.03]"
                onClick={() => {
                  setQuery("");
                  setStatusFilter("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>

          <ContentList
            items={filteredItems}
            isLoading={isLoading}
            contentType={activeTab as "blog" | "case-study"}
            onEdit={(id) => navigate(`/admin/content/edit/${id}`)}
            onDelete={handleDeleteContent}
          />
        </div>
      </div>
    </div>
  );

  return (
    <AdminPageWrapper>
      <AdminLayout
        title="Projects And Insights"
        description="Manage the two content types that matter most for a software development company: shipped work and expert insight."
      >
        {content}
      </AdminLayout>
    </AdminPageWrapper>
  );
};

export default AdminDashboardPage;
