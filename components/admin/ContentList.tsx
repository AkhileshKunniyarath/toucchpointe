import React from "react";
import { Edit, Trash2, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContentItem } from "@/lib/services/contentService";

interface ContentListProps {
  items: ContentItem[];
  isLoading: boolean;
  contentType: "blog" | "case-study";
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ContentList: React.FC<ContentListProps> = ({ 
  items, 
  isLoading, 
  contentType,
  onEdit,
  onDelete
}) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setItemToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      onDelete(itemToDelete);
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  if (isLoading) {
    return (
      <div className="p-12 flex justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="p-16 text-center bg-white/[0.04] rounded-[2rem] border border-dashed border-white/[0.1] backdrop-blur-xl">
        <p className="text-gray-500 font-black uppercase tracking-widest text-xs">
          No {contentType === "blog" ? "blog posts" : "case studies"} archived.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.04] backdrop-blur-xl rounded-[2rem] border border-white/[0.08] overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/[0.08] bg-white/[0.03]">
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Asset Title</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Taxonomy</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Deployment</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Visibility</th>
              <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] text-right">Operations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05]">
            {items.map((item) => (
              <tr key={item.id} className="group hover:bg-white/[0.04] transition-all duration-300">
                <td className="px-8 py-6">
                  <div className="text-sm font-black text-white mb-1 group-hover:text-violet-300 transition-colors uppercase tracking-tight">{item.title}</div>
                  <div className="text-xs text-gray-500 font-medium truncate max-w-md">{item.subtitle}</div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 text-[9px] font-black text-blue-300 uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="inline-flex items-center rounded-full bg-white/[0.05] border border-white/[0.1] px-2.5 py-1 text-[9px] font-black text-gray-500 uppercase tracking-widest">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {new Date(item.createdAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] ${
                    item.status === "published" 
                      ? "bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]" 
                      : "bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]"
                  }`}>
                    {item.status === "published" ? (
                      <Eye className="mr-2 h-3.5 w-3.5" />
                    ) : (
                      <EyeOff className="mr-2 h-3.5 w-3.5" />
                    )}
                    {item.status === "published" ? "Live" : "Draft"}
                  </span>
                </td>
                <td className="px-8 py-6 text-right whitespace-nowrap">
                  <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => onEdit(item.id)}
                      className="h-10 w-10 rounded-full bg-white/[0.05] border border-white/[0.1] hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:text-white hover:border-blue-500 transition-all"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDeleteClick(item.id)}
                      className="h-10 w-10 rounded-full bg-white/[0.05] border border-white/[0.1] hover:bg-red-600 hover:text-white hover:border-red-500 transition-all"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-[#06060f]/95 border-white/[0.08] backdrop-blur-2xl rounded-[2rem] max-w-md p-8">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-2xl font-black text-white uppercase tracking-tight">Confirm Deletion</DialogTitle>
            <DialogDescription className="text-gray-400 font-medium leading-relaxed">
              This asset will be permanently purged from the production database. This process is irreversible.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-8 flex gap-3">
            <Button variant="ghost" className="flex-1 h-12 rounded-xl text-gray-400 hover:bg-white/[0.05] hover:text-white font-black uppercase tracking-widest text-[10px]" onClick={() => setDeleteDialogOpen(false)}>
              Abort
            </Button>
            <Button variant="destructive" className="flex-1 h-12 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-widest text-[10px] shadow-2xl" onClick={handleConfirmDelete}>
              Purge Asset
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContentList;
