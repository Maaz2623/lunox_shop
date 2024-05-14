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
import { authFormSchema } from "@/lib/utils";


const AuthForm = () => {


  const [user, setUser] = useState(null)


  const formSchema = authFormSchema()


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address1: ""
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      address1: values.address1
    }

    
    console.log(userData);
  }

  return (
      <div className="m-5 h-full p-5">
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

            <div className="mt-4">
            <CustomInput name="address1" label="Adress 1" control={form.control} placeholder="Enter your address" />
            </div>



          <Button type="submit">
            Submit
          </Button>
          </form>
        </Form>
      </div>
  );
};

export default AuthForm;
