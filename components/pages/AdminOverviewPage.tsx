import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";
import { getAllContent, ContentItem } from "@/lib/services/contentService";
import { getContactMessages, getSettingsInventory, ContactMessage, AdminSettingSummary } from "@/lib/services/adminService";
import { Button } from "@/components/ui/button";

const StatCard = ({ label, value, note }: { label: string; value: string | number; note: string }) => (
  <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,0.24)]">
    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">{label}</p>
    <p className="mt-4 text-4xl font-black text-white">{value}</p>
    <p className="mt-2 text-sm text-slate-400">{note}</p>
  </div>
);

const AdminOverviewPage = () => {
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    const load = async () => {
      const [content, contacts] = await Promise.all([
        getAllContent(),
        getContactMessages(5),
      ]);

      setContentItems(content);
      setMessages(contacts);
    };

    load();
  }, []);

  const publishedCount = useMemo(() => contentItems.filter((item) => item.status === "published").length, [contentItems]);
  const caseStudyCount = useMemo(() => contentItems.filter((item) => item.category === "case-study").length, [contentItems]);
  const insightCount = useMemo(() => contentItems.filter((item) => item.category === "blog").length, [contentItems]);
  const latestCaseStudies = useMemo(() => contentItems.filter((item) => item.category === "case-study").slice(0, 4), [contentItems]);

  return (
    <AdminPageWrapper>
      <AdminLayout
        title="Software Company Control Panel"
        description="Keep your studio site current, showcase shipped work, and review new client inquiries without the extra sections."
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <StatCard label="Case Studies" value={caseStudyCount} note="Project proof and delivery outcomes" />
            <StatCard label="Insights" value={insightCount} note={`${publishedCount} total entries currently published`} />
            <StatCard label="Client Inquiries" value={messages.length} note="Recent outreach captured from the contact form" />
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Delivery Proof</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Recent case studies</h2>
                </div>
                <Button asChild variant="ghost" className="rounded-2xl border border-white/10">
                  <Link to="/admin/content">Open Content</Link>
                </Button>
              </div>
              <div className="mt-6 space-y-4">
                {latestCaseStudies.length === 0 ? (
                  <p className="text-sm text-slate-400">No case studies found.</p>
                ) : (
                  latestCaseStudies.map((item) => (
                    <div key={item.id} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-white">{item.title}</p>
                          <p className="text-sm text-cyan-300">{item.clientName || item.clientIndustry || "Case study entry"}</p>
                        </div>
                        <p className="text-xs text-slate-500">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <p className="mt-3 text-sm text-slate-400">{item.subtitle}</p>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Studio Focus</p>
                <h2 className="mt-2 text-2xl font-black text-white">Primary service lines</h2>
                <p className="mt-2 text-sm text-slate-400">Keep the admin aligned with how a software development company actually sells and delivers work.</p>
              </div>
              <div className="mt-6 grid gap-4">
                {[
                  { title: "Custom Web Platforms", copy: "Client portals, dashboards, internal tools, and SaaS products." },
                  { title: "AI And Automation", copy: "Workflow automation, intelligent agents, and operational tooling." },
                  { title: "Enterprise Integrations", copy: "CRM, ERP, and data systems connected into one delivery stack." },
                ].map((service) => (
                  <div key={service.title} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-5">
                    <p className="text-lg font-black text-white">{service.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{service.copy}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Inbound Pipeline</p>
                  <h2 className="mt-2 text-2xl font-black text-white">Latest client inquiries</h2>
                </div>
                <Button asChild variant="ghost" className="rounded-2xl border border-white/10">
                  <Link to="/admin/leads">Open Inquiries</Link>
                </Button>
              </div>
              <div className="mt-6 space-y-4">
                {messages.length === 0 ? (
                  <p className="text-sm text-slate-400">No contact messages found.</p>
                ) : (
                  messages.map((message) => (
                    <div key={message.id} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-white">{message.name}</p>
                          <p className="text-sm text-cyan-300">{message.email}</p>
                        </div>
                        <p className="text-xs text-slate-500">
                          {new Date(message.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <p className="mt-3 line-clamp-3 text-sm text-slate-400">{message.message}</p>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>
        </div>
      </AdminLayout>
    </AdminPageWrapper>
  );
};

export default AdminOverviewPage;
