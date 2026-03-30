import React from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";
import SiteDataEditor from "@/components/admin/SiteDataEditor";

const AdminPageEditor = () => {
  const { pageId } = useParams<{ pageId: string }>();

  if (!pageId) {
    return (
      <AdminPageWrapper>
        <AdminLayout>
          <div className="flex h-[600px] items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <p className="text-slate-400">Please select a page from the sidebar to edit.</p>
          </div>
        </AdminLayout>
      </AdminPageWrapper>
    );
  }

  return (
    <AdminPageWrapper>
      <AdminLayout>
        <div className="h-[calc(100vh-140px)] min-h-[600px]">
          <SiteDataEditor pageId={pageId} />
        </div>
      </AdminLayout>
    </AdminPageWrapper>
  );
};

export default AdminPageEditor;
