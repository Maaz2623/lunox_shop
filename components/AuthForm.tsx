"use client";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const AuthForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
      <ScrollArea className="m-5 h-full p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="flex justify-around gap-5 items-center">
              <CustomInput
                name="firstName"
                label="Fist Name"
                control={form.control}
                placeholder="Enter your first name"
              />
              <CustomInput
                name="lastName"
                label="Last Name"
                control={form.control}
                placeholder="Enter your last name"
              />
            </div>

            <div className="mt-4">
              <CustomInput name="email" label="Email" control={form.control} placeholder="Enter your email" />
            </div>



          </form>
        </Form>
      </ScrollArea>
  );
};

export default AuthForm;
