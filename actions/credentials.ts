"use server";
import { registerSchema, loginSchema } from "@/schemas";
import * as z from "zod";
import { NextRequest, NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import axios from "axios";
import { getUserByEmail } from "@/lib";
import jwt from "jsonwebtoken"; // Import the jsonwebtoken library
import bcrypt from "bcryptjs";
import db from "@/lib/db";
// import cookie from "cookie"

// import jwt from 'jsonwebtoken'; // Import the jsonwebtoken library
// import { setCookie } from 'nookies'; // Import setCookie function from nookies

export const signUp = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);
  if (!validatedFields?.success) return { error: "Invalid fields" };

  try {
    const res = NextResponse.next()
    const { email, password, name } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return { error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate JWT for the newly registered user
    // const user = await db.user.create({
    //   data: {
    //     email,
    //     name,
    //     password: hashedPassword,
    //   },
    // });
    const token = jwt.sign({ userId: "axchvjb577yu9g5ev" }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    const oneDay = 24 * 60 * 60 * 1000;
    // { expires: Date.now() - oneDay }
    // {
    //   name: "token",
    //   value: token,
    //   expires: Date.now() - oneDay,
    //   secure: true,
    //   httpOnly: true,
    // }
    // const { cookies } = cookie
  //   const setCookie = cookies().set("token", token, { httpOnly: true , expires: Date.now() - oneDay, secure: true,  sameSite: "strict", path: "/", priority: "high"});
  //   if (!setCookie) {
  //     return { error: "Failed to set cookie" };
  //   }
  //   headers().set("Set-Cookie", `token=${token}; Path=/; HttpOnly; Max-Age=86400`);
  //  res.cookies.set("authToken", "123yjsdfgds3783dfhwldhjsk", { httpOnly: true , expires: Date.now() - oneDay, secure: true,  sameSite: "strict", path: "/" });
  //  if (cookie) {
  //   // Use the cookie value here
  //   console.log("Cookie value:", cookie);
  // } else {
  //   console.log("No cookie found named 'token'");
  // }
    // res.cookie("token", token, { httpOnly: true , expires: Date.now() - oneDay, secure: true,  sameSite: "strict", path: "/api/auth/signup" });
    // Save the token as a cookie
    // document.cookie = `authToken=${token}; max-age=${86400}; path=/`;
    // setCookie("authToken", token, { maxAge: 86400, path: "/", httpOnly: true }); // Add httpOnly flag for security

    return { success: "User created successfully!", token }
  } catch (error) {
    // Handle any errors
    console.error("Error during signup:", error);
    return { error: "An error occurred. Please try again later." };
  }
};

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);
  if (!validatedFields?.success) return { error: "Invalid fields" };

  try {
    const { email, password } = validatedFields.data;
    const user = await getUserByEmail(email);
    if (!user) {
      return { error: "User not found" };
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password as string
    );
    if (!isPasswordValid) {
      return { error: "Invalid credentials" };
    }

    // Generate JWT for the authenticated user
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "", {
      expiresIn: "1d",
    });

    // Save the token as a cookie
    // document.cookie = `authToken=${token}; max-age=${86400}; path=/`;

    // Set cookie using your framework's function
    // setCookie("authToken", token, { maxAge: 86400, path: "/", httpOnly: true }); // Add httpOnly flag for security

    console.log(`User with email: ${email} logged in successfully!`);

    return { success: "User logged in successfully!" };
  } catch (error) {
    // Handle any errors
    console.error("Error during login:", error);
    return { error: "An error occurred. Please try again later." };
  }
};

// export const signUp = async (values: z.infer<typeof registerSchema>) => {
//   // Implement sign up logic here
//   const validatedFields = registerSchema.safeParse(values);
//   if (!validatedFields.success) {
//     return { error: "Invalid input" };
//   }
//   try {
//     const user = await axios.post("/api/auth/register", validatedFields.data)
//     return { success: "User created successfully!", user };
//   } catch (error) {
//     return { error: "An error occurred. Please try again later." };
//   }
// }

interface SetCookieOptions {
  maxAge?: number;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
}
// function setCookie(name: string, value: string, options: SetCookieOptions = {}): void {
//   // Build the cookie string
//   // let cookieString = `${name}=${value}`;
//   const cookieString = cookie.serialize(name, value, {
//     maxAge: options.maxAge ?? 3600, // 1 hour in seconds
//   })
// // Add other options if provided
// if (options.maxAge) {
//   cookieString += `; Max-Age=${options.maxAge}`;
// }

// if (options.path) {
//   cookieString += `; Path=${options.path}`;
// }

// // Add HttpOnly flag for security (prevents client-side script access)
// cookieString += `; HttpOnly=true`;

// // Add Secure flag if using HTTPS (prevents sending cookie over insecure connections)
// if (options.secure && process.env.NODE_ENV === 'production') {
//   cookieString += `; Secure`;
// }

// // Set the cookie header (replace this with your framework's method)
// document.cookie = cookieString; // This won't work in server-side TS, replace with framework specific logic
// }

// Interface for cookie options
