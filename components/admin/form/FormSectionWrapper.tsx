
import React from "react";
import { FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";

interface FormSectionWrapperProps {
  label: string;
  description?: string;
  children: React.ReactNode;
  error?: string;
}

const FormSectionWrapper: React.FC<FormSectionWrapperProps> = ({
  label,
  description,
  children,
  error,
}) => {
  return (
    <div className="space-y-2">
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>{children}</FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        {error && <FormMessage>{error}</FormMessage>}
      </FormItem>
    </div>
  );
};

export default FormSectionWrapper;
