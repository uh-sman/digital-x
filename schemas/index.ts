import * as z from "zod"; // Import zod
export const OrganizationSchema = z.object({
    name:  z.string().min(1,{
        message: "Name is required"
    })
  });


export const registerSchema = z.object({
    name:  z.string().min(1,{
        message: "Name is required"
    }),
    email: z.string().email({
        message: "Invalid email address"
    }),
    password: z.string().min(6,{
      message: "Password must be at least 6 characters long"  
    })
  });


export const loginSchema = z.object({
    email: z.string().email({
        message: "Invalid email address"
    }),
    password: z.string()
  });


