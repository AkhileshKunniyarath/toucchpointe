
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ContentFormValues } from "./ContentFormTypes";

interface ContentTypeSelectorProps {
  form: UseFormReturn<ContentFormValues>;
}

const ContentTypeSelector: React.FC<ContentTypeSelectorProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem className="space-y-4 bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/[0.08]">
          <FormLabel className="text-gray-400 font-black uppercase tracking-widest text-[10px] ml-1">Asset Classification</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-3"
            >
              <div className="flex items-center space-x-3 group cursor-pointer group">
                <RadioGroupItem value="blog" id="blog" className="border-white/[0.2] bg-white/[0.05] text-blue-500" />
                <Label htmlFor="blog" className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors cursor-pointer uppercase tracking-tight">Blog Archive</Label>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <RadioGroupItem value="case-study" id="case-study" className="border-white/[0.2] bg-white/[0.05] text-blue-500" />
                <Label htmlFor="case-study" className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors cursor-pointer uppercase tracking-tight">Case Study Repository</Label>
              </div>
            </RadioGroup>
          </FormControl>
          <FormMessage className="text-xs font-bold text-red-400" />
        </FormItem>
      )}
    />
  );
};

export default ContentTypeSelector;
