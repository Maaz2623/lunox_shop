import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";


const formSchema = authFormSchema()

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}


const CustomInput = ({control, name, label, placeholder}: CustomInput) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input className="w-full rounded-[5px] --font-ibm-plex-serif " placeholder={placeholder} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};

export default CustomInput;
