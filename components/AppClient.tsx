"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { isAuthenticated } from "@/lib/auth-utils";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Service submenu pages
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import CreativeBrandingPage from "./pages/CreativeBrandingPage";
import MarketingAutomationPage from "./pages/MarketingAutomationPage";

// Solutions pages
import EnterprisePlatformsPage from "./pages/EnterprisePlatformsPage";
import DataIntelligencePage from "./pages/DataIntelligencePage";
import StrategicAutomationPage from "./pages/StrategicAutomationPage";

// Products pages
import TouchpointeOSPage from "./pages/TouchpointeOSPage";
import DynamiteFrameworkPage from "./pages/DynamiteFrameworkPage";
import IntelligentAgentPage from "./pages/IntelligentAgentPage";

// Company pages
import InsightsPage from "./pages/InsightsPage";
import CompanyPage from "./pages/CompanyPage";

// Admin pages
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminOverviewPage from "./pages/AdminOverviewPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import ContentFormPage from "./pages/ContentFormPage";
import AdminPageEditor from "./pages/AdminPageEditor";
import AdminLeadsPage from "./pages/AdminLeadsPage";

const queryClient = new QueryClient();

// Improved protected route component with proper async handling and state management
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        const authed = await isAuthenticated();
        setIsAuthed(authed);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthed(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    // Still checking authentication
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  return isAuthed ? children : <Navigate to="/admin" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Service submenu routes */}
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketingPage />}
          />
          <Route
            path="/services/web-development"
            element={<WebDevelopmentPage />}
          />
          <Route
            path="/services/creative-branding"
            element={<CreativeBrandingPage />}
          />
          <Route
            path="/services/marketing-automation"
            element={<MarketingAutomationPage />}
          />

          {/* Insights submenu routes */}
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />

          {/* Solutions routes */}
          <Route
            path="/enterprise-platforms"
            element={<EnterprisePlatformsPage />}
          />
          <Route path="/data-intelligence" element={<DataIntelligencePage />} />
          <Route
            path="/strategic-automation"
            element={<StrategicAutomationPage />}
          />

          {/* Products routes */}
          <Route path="/touchpointe-os" element={<TouchpointeOSPage />} />
          <Route path="/dynamite" element={<DynamiteFrameworkPage />} />
          <Route path="/hattie-ai" element={<IntelligentAgentPage />} />

          {/* Company routes */}
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/company" element={<CompanyPage />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminOverviewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/content"
            element={
              <ProtectedRoute>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/page/:pageId"
            element={
              <ProtectedRoute>
                <AdminPageEditor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/leads"
            element={
              <ProtectedRoute>
                <AdminLeadsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/create-content"
            element={
              <ProtectedRoute>
                <ContentFormPage />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/blogs-and-case-studies" element={<Navigate to="/admin/content" replace />} />
          <Route
            path="/admin/content/edit/:id"
            element={
              <ProtectedRoute>
                <ContentFormPage />
              </ProtectedRoute>
            }
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
