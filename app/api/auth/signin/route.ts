import { ApiError } from "next/dist/server/api-utils";
import { NextResponse, NextRequest } from "next/server";
import { getUserByEmail, createUser } from "@/lib";
import { User, PrismaClient, Prisma, PrismaPromise } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie"
import  { headers, cookies } from "next/headers";
import { registerSchema } from "@/schemas";

// import
export async function POST(req: Request, res: NextResponse) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const body = await req.json();
    const { email, password, name } = body;

    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      throw new Error("User does not exists");
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password as string);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }
    

    // const hashedPassword = await bcrypt.hash(password, 10);
    // const user = await createUser(email, hashedPassword, name);

    const token = jwt.sign(
      { userId: existingUser.id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    // Set the cookie with appropriate security options
    //   res.setHeader('Set-Cookie', cookie.serialize('token', token, {
    //     httpOnly: true, // Prevent client-side JavaScript access
    //     secure: process.env.NODE_ENV === 'production', // Only use secure flag in production (HTTPS)
    //     sameSite: 'lax', // Mitigate CSRF risks (consider 'strict' with additional precautions)
    //     maxAge: 60 * 60 * 24, // 1 day in seconds (adjust expiration as needed)
    //     path: '/', // Cookie accessible across all paths on the domain
    //   }));

    // res.cookies.set("token", token, {
    //   httpOnly: true, // Prevent client-side JavaScript access
    //   secure: process.env.NODE_ENV === "production", // Only use secure flag in production (HTTPS)
    //   sameSite: "strict", // Mitigate CSRF risks (consider 'strict' with additional precautions)
    //   maxAge: 60 * 60 * 24, // 1 day in seconds (adjust expiration as needed)
    //   path: "/", // Cookie accessible across all paths on the domain
    //   priority: "high",
    // });
    const oneDay = 24 * 60 * 60 * 1000;


    return NextResponse.json({
        message: "User logged in successfully!",
        headers:{
            "Set-Cookie": cookie.serialize('token', token, {
                httpOnly: true, // Prevent client-side JavaScript access
                secure: process.env.NODE_ENV === 'production', // Only use secure flag in production (HTTPS)
                sameSite: 'lax', // Mitigate CSRF risks (consider 'strict' with additional precautions)
                maxAge: Date.now() - oneDay
        })
    },
    cookie: cookies().set("token", token, { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production", path: "/", priority: "high"})
    }, { status: 200});
  } catch (error: any | undefined) {
    console.error(error); // Log the error for debugging
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { message: "Validation error", error },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }
  }
}