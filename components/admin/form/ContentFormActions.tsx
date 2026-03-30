
import React from "react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContentFormActionsProps {
  isLoading: boolean;
  status: "draft" | "published";
}

const ContentFormActions: React.FC<ContentFormActionsProps> = ({ isLoading, status }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end gap-4 pt-12 border-t border-white/[0.08]">
      <Button
        type="button"
        variant="ghost"
        className="h-14 px-8 rounded-2xl text-gray-400 hover:text-white hover:bg-white/[0.05] font-black uppercase tracking-widest text-xs transition-all"
        onClick={() => navigate("/admin/content")}
      >
        Abort Process
      </Button>
      <Button 
        type="submit" 
        disabled={isLoading}
        className="h-14 px-10 rounded-2xl bg-white text-black hover:bg-blue-600 hover:text-white font-black uppercase tracking-widest text-xs transition-all shadow-2xl shadow-blue-500/20 border-none"
      >
        {isLoading ? (
          <span className="flex items-center gap-3">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            Syncing...
          </span>
        ) : (
          <span className="flex items-center gap-3">
            <Save className="h-5 w-5" />
            {status === "published" ? "Commit to Production" : "Save Local Cache"}
          </span>
        )}
      </Button>
    </div>
  );
};

export default ContentFormActions;
