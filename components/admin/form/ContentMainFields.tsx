
import React from "react";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ContentFormValues } from "./ContentFormTypes";
import RichTextEditor from "../RichTextEditor";

interface ContentMainFieldsProps {
  form: UseFormReturn<ContentFormValues>;
}

const ContentMainFields: React.FC<ContentMainFieldsProps> = ({ form }) => {
  return (
    <div className="space-y-10 bg-white/[0.03] backdrop-blur-md p-10 rounded-[2rem] border border-white/[0.08] shadow-2xl">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-400 font-black uppercase tracking-widest text-[10px] ml-1">Asset Designation (Title)</FormLabel>
            <FormControl>
              <Input 
                placeholder="PROXIMA VOYAGE" 
                className="h-14 bg-white/[0.05] border-white/[0.08] text-white placeholder:text-gray-600 rounded-2xl focus:ring-1 focus:ring-blue-500/50 transition-all font-bold uppercase tracking-tight px-6"
                {...field} 
              />
            </FormControl>
            <FormMessage className="text-xs font-bold text-red-400" />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="subtitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-400 font-black uppercase tracking-widest text-[10px] ml-1">Core Description (Subtitle)</FormLabel>
            <FormControl>
              <Input 
                placeholder="Expediting global digital expansion through AI-driven architecture." 
                className="h-14 bg-white/[0.05] border-white/[0.08] text-white placeholder:text-gray-600 rounded-2xl focus:ring-1 focus:ring-blue-500/50 transition-all font-medium px-6"
                {...field} 
              />
            </FormControl>
            <FormMessage className="text-xs font-bold text-red-400" />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-400 font-black uppercase tracking-widest text-[10px] ml-1">Narrative Architecture (Content)</FormLabel>
            <FormControl>
              <RichTextEditor 
                value={field.value || ""} 
                onChange={field.onChange}
              />
            </FormControl>
            <FormMessage className="text-xs font-bold text-red-400" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ContentMainFields;
