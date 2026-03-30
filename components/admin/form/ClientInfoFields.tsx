
import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ContentFormValues } from "./ContentFormTypes";

interface ClientInfoFieldsProps {
  form: UseFormReturn<ContentFormValues>;
  visible: boolean;
}

const ClientInfoFields: React.FC<ClientInfoFieldsProps> = ({ form, visible }) => {
  if (!visible) return null;

    <div className="space-y-6 bg-white/[0.03] backdrop-blur-md p-6 rounded-2xl border border-white/[0.08]">
      <FormField
        control={form.control}
        name="clientName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-400 font-black uppercase tracking-widest text-[10px] ml-1">Entity Designation (Client)</FormLabel>
            <FormControl>
              <Input 
                placeholder="GLOBAL NEXUS CORP" 
                className="h-12 bg-white/[0.05] border-white/[0.08] text-white placeholder:text-gray-600 rounded-xl px-4 font-bold uppercase tracking-tight"
                {...field} 
              />
            </FormControl>
            <FormMessage className="text-xs font-bold text-red-400" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="clientIndustry"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-400 font-black uppercase tracking-widest text-[10px] ml-1">Sector Architecture</FormLabel>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className="h-12 bg-white/[0.05] border-white/[0.08] text-white rounded-xl px-4 font-bold uppercase tracking-tight">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a0a1a] border-white/[0.1] text-gray-300">
                  <SelectItem value="Healthcare" className="focus:bg-blue-600 focus:text-white uppercase text-[10px] font-black">Healthcare</SelectItem>
                  <SelectItem value="E-commerce" className="focus:bg-blue-600 focus:text-white uppercase text-[10px] font-black">E-commerce</SelectItem>
                  <SelectItem value="Real Estate" className="focus:bg-blue-600 focus:text-white uppercase text-[10px] font-black">Real Estate</SelectItem>
                  <SelectItem value="Education" className="focus:bg-blue-600 focus:text-white uppercase text-[10px] font-black">Education</SelectItem>
                  <SelectItem value="Tourism" className="focus:bg-blue-600 focus:text-white uppercase text-[10px] font-black">Tourism</SelectItem>
                  <SelectItem value="FMCG" className="focus:bg-blue-600 focus:text-white uppercase text-[10px] font-black">FMCG</SelectItem>
                  <SelectItem value="Technology" className="focus:bg-blue-600 focus:text-white uppercase text-[10px] font-black">Technology</SelectItem>
                  <SelectItem value="Finance" className="focus:bg-blue-600 focus:text-white uppercase text-[10px] font-black">Finance</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage className="text-xs font-bold text-red-400" />
          </FormItem>
        )}
      />
    </div>
};

export default ClientInfoFields;
