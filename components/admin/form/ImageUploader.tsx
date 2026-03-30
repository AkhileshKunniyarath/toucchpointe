
import React, { useState } from "react";
import { FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ContentFormValues } from "./ContentFormTypes";
import { uploadImage } from "@/lib/services/uploadService";
import { useToast } from "@/components/ui/use-toast";

interface ImageUploaderProps {
  form: UseFormReturn<ContentFormValues>;
  previewImage: string | null;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  form,
  previewImage,
  setPreviewImage,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setPreviewImage(tempUrl);
      setIsUploading(true);

      try {
        const uploaded = await uploadImage(file);
        setPreviewImage(uploaded.url);
        form.setValue("featuredImage", uploaded.url);
        toast({
          title: "Image uploaded",
          description: "The featured image has been stored in MinIO.",
        });
      } catch (error) {
        setPreviewImage(null);
        form.setValue("featuredImage", "");
        toast({
          title: "Upload failed",
          description: error instanceof Error ? error.message : "Failed to upload image",
          variant: "destructive",
        });
      } finally {
        URL.revokeObjectURL(tempUrl);
        setIsUploading(false);
      }
    }
  };

  return (
    <div className="space-y-4 bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/[0.08]">
      <FormLabel className="text-gray-400 font-black uppercase tracking-widest text-[10px] ml-1">Visual Asset (Featured Image)</FormLabel>
      <div className="border-2 border-dashed border-white/[0.1] rounded-2xl p-6 text-center bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/50 transition-all group">
        {previewImage ? (
          <div className="space-y-4">
            <div className="relative group">
              <img
                src={previewImage}
                alt="Preview"
                className="mx-auto h-56 object-cover rounded-xl shadow-2xl border border-white/[0.1]"
              />
              {isUploading ? (
                <div className="absolute inset-0 rounded-xl bg-black/60 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Uploading to MinIO
                  </div>
                </div>
              ) : null}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="rounded-full h-12 w-12 shadow-2xl bg-white/[0.05] border border-white/[0.08] hover:bg-red-500/20"
                  onClick={() => {
                    setPreviewImage(null);
                    form.setValue("featuredImage", "");
                  }}
                  disabled={isUploading}
                >
                  <Trash2 className="h-6 w-6 text-red-400" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-6 cursor-pointer" onClick={() => document.getElementById("image-upload")?.click()}>
            <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <ImagePlus className="h-8 w-8 text-blue-400" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white transition-colors">
              Initialize Graphic Uplink
            </p>
            <p className="mt-2 text-[9px] text-gray-600 font-bold uppercase tracking-tight">
              RAW, JPEG, PNG • MAX 10MB
            </p>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
              disabled={isUploading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
