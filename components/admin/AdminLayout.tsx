
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileStack, Settings2, Inbox, PlusCircle, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isAuthenticated, getUserEmail } from "@/lib/auth-utils";
import { supabase } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  eyebrow?: string;
  actions?: React.ReactNode;
}

const navItems = [
  { to: "/admin/dashboard", label: "Command Center", icon: LayoutDashboard },
  { to: "/admin/content", label: "Projects & Insights", icon: FileStack },
  { to: "/admin/leads", label: "Client Inquiries", icon: Inbox },
];

const websitePagesGrouped = [
  {
    category: "Home",
    links: [{ to: "/admin/page/home_page", label: "Home Page" }]
  },
  {
    category: "Solutions",
    links: [
      { to: "/admin/page/services_page", label: "Services Overview" },
      { to: "/admin/page/strategic_automation_page", label: "Strategic Automation" },
      { to: "/admin/page/enterprise_platforms_page", label: "Enterprise Platforms" },
      { to: "/admin/page/creative_branding_page", label: "Creative Branding" },
      { to: "/admin/page/data_intelligence_page", label: "Data Intelligence" },
      { to: "/admin/page/digital_marketing_page", label: "Digital Marketing" },
      { to: "/admin/page/marketing_automation_page", label: "Marketing Automation" },
      { to: "/admin/page/web_development_page", label: "Web Development" },
      { to: "/admin/page/industries_page", label: "Industries Overview" },
      { to: "/admin/page/healthcare_page", label: "Healthcare" },
      { to: "/admin/page/fmcg_page", label: "FMCG" },
      { to: "/admin/page/education_page", label: "Education" },
      { to: "/admin/page/ecommerce_page", label: "Ecommerce" },
      { to: "/admin/page/real_estate_page", label: "Real Estate" }
    ]
  },
  {
    category: "Products",
    links: [
      { to: "/admin/page/touchpointe_os_page", label: "Touchpointe OS" },
      { to: "/admin/page/dynamite_framework_page", label: "Dynamite Framework" },
      { to: "/admin/page/intelligent_agent_page", label: "Intelligent Agent" }
    ]
  },
  {
    category: "Insights",
    links: [
      { to: "/admin/page/insights_page", label: "Insights Page" },
      { to: "/admin/page/blog_page", label: "Blog Overview" },
      { to: "/admin/page/case_studies_page", label: "Case Studies Overview" }
    ]
  },
  {
    category: "Company",
    links: [
      { to: "/admin/page/company_page", label: "Company Page" },
      { to: "/admin/page/about_page", label: "About Page" },
      { to: "/admin/page/contact_page", label: "Contact Page" }
    ]
  }
];

const pageMeta: Record<string, { eyebrow: string; title: string; description: string }> = {
  "/admin/dashboard": {
    eyebrow: "Studio Ops",
    title: "Software Company Control Panel",
    description: "Run your web presence, project proof, insights, and inbound pipeline from one focused admin workspace.",
  },
  "/admin/content": {
    eyebrow: "Portfolio",
    title: "Projects And Insights",
    description: "Manage case studies that win clients and insight articles that support your software delivery brand.",
  },
  "/admin/site-settings": {
    eyebrow: "Website Ops",
    title: "Website Content",
    description: "Update page content, messaging, and section data for your software development company site.",
  },
  "/admin/leads": {
    eyebrow: "Pipeline",
    title: "Client Inquiries",
    description: "Review new client outreach, qualification notes, and messages from companies looking to hire your team.",
  },
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title, description, eyebrow, actions }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [email, setEmail] = useState<string>("");
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setCheckingAuth(true);
        const isAuthed = await isAuthenticated();
        
        if (!isAuthed) {
          navigate("/admin", { replace: true });
          return;
        }
        
        // Get the user email
        const userEmail = await getUserEmail();
        setEmail(userEmail);
      } catch (error) {
        console.error("Auth check error:", error);
        navigate("/admin", { replace: true });
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
    
    // Add an auth state listener to handle sign-out events
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        navigate("/admin", { replace: true });
      }
    });
    
    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    setCheckingAuth(true);
    try {
      await supabase.auth.signOut();
      // Clear any local storage auth items
      localStorage.removeItem('supabase.auth.token');
      
      toast({
        title: "Logged out",
        description: "You have been logged out successfully",
      });
      
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Logout failed",
        description: "There was an issue logging out. Please try again.",
        variant: "destructive",
      });
    } finally {
      setCheckingAuth(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#06060f]">
        <div className="text-center relative">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent mx-auto mb-6 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
          <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Accessing Command System...</p>
        </div>
      </div>
    );
  }

  const activeMeta = pageMeta[location.pathname] || pageMeta["/admin/dashboard"];
  const pageEyebrow = eyebrow || activeMeta.eyebrow;
  const pageTitle = title || activeMeta.title;
  const pageDescription = description || activeMeta.description;

  const Navigation = () => (
    <div className="flex h-full flex-col">
      <Link to="/admin/dashboard" className="flex items-center gap-4 px-2 transition-all duration-300 hover:opacity-90">
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-2.5 shadow-[0_0_24px_rgba(99,102,241,0.14)]">
          <img
            src="/lovable-uploads/40e1cbf6-8a11-4c6d-9513-32e74c66bc1d.png"
            alt="Touchpointe Digital"
            className="h-7 drop-shadow-[0_0_12px_rgba(100,130,255,0.45)]"
          />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">Touchpointe</p>
          <p className="text-sm font-semibold text-white">Software Studio Admin</p>
        </div>
      </Link>

      <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar pb-6 mt-6">
        <div className="space-y-2 mb-8">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "border-cyan-400/30 bg-cyan-400/10 text-white shadow-[0_12px_40px_rgba(34,211,238,0.08)]"
                    : "border-white/[0.06] bg-white/[0.02] text-slate-400 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </div>

        <div className="space-y-2">
          <div className="px-2 mb-2">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">Website Editor</p>
          </div>
          
          <Accordion type="multiple" defaultValue={["Home", "Solutions"]} className="w-full space-y-2">
            {websitePagesGrouped.map((group) => (
              <AccordionItem value={group.category} key={group.category} className="border-none">
                <AccordionTrigger className="w-full py-2.5 px-3 rounded-xl hover:bg-white/[0.03] text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white hover:no-underline transition-colors">
                  {group.category}
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-1 pl-3 pr-1 space-y-1">
                  {group.links.map((link) => (
                    <NavLink 
                      key={link.to} 
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
                          isActive
                            ? "border-cyan-400/30 bg-cyan-400/10 text-white shadow-lg"
                            : "border-transparent text-slate-400 hover:bg-white/[0.05] hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="mt-4 rounded-[1.75rem] border border-white/[0.08] bg-white/[0.04] p-5 flex-shrink-0 backdrop-blur-xl">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Authorized Operator</p>
        <p className="mt-2 truncate text-sm font-semibold text-white">{email}</p>
        <p className="mt-1 text-xs text-slate-400">Managing website, case studies, and client inquiries</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#06060f] text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,70,229,0.16),_transparent_22%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.14),_transparent_26%),radial-gradient(circle_at_top_center,_rgba(34,211,238,0.08),_transparent_30%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,120,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(120,120,255,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 flex min-h-screen">
        <aside className="hidden w-[300px] border-r border-white/[0.08] bg-[#06060f]/80 px-6 py-8 backdrop-blur-2xl xl:block">
          <Navigation />
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#06060f]/70 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-8">
              <div className="flex items-center gap-3">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="xl:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[320px] border-white/[0.08] bg-[#06060f]/95 px-6 py-8 backdrop-blur-2xl">
                    <Navigation />
                  </SheetContent>
                </Sheet>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-300">{pageEyebrow}</p>
                  <h1 className="mt-1 text-2xl font-black tracking-tight text-white md:text-4xl">{pageTitle}</h1>
                  <p className="mt-2 max-w-2xl text-sm text-slate-400">{pageDescription}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {actions}
                <Button asChild className="hidden h-11 rounded-full border-none bg-gradient-to-r from-blue-600 to-violet-600 px-5 text-white shadow-lg shadow-blue-700/30 hover:from-blue-500 hover:to-violet-500 md:inline-flex">
                  <Link to="/admin/create-content">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Entry
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="rounded-full border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </header>

          <main className="px-5 py-6 md:px-8 md:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
