
import React from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import ContentForm from "@/components/admin/form/ContentForm";
import AdminPageWrapper from "@/components/admin/AdminPageWrapper";

const ContentFormPage: React.FC = () => {
  return (
    <AdminPageWrapper>
      <AdminLayout
        title="Content Editor"
        description="Create new posts, update drafts, and control publication metadata from one editing workspace."
      >
        <ContentForm />
      </AdminLayout>
    </AdminPageWrapper>
  );
};

export default ContentFormPage;
