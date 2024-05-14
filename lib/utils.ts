import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const authFormSchema =  () => z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  address1: z.string().min(1).max(100),
  email: z.string().email(),
  
})