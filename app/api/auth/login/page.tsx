"use client";
import Image from "next/image";
import * as z from "zod";
import { loginSchema, registerSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios"
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, ChangeEvent, FormEvent, useContext, useTransition } from "react";
import { UserContext } from "@/hooks/user";
import { FaGoogle } from "react-icons/fa";
import { login, signUp } from "@/actions/credentials";
import { FormSuccess } from "../../../(routes)/(components)/notifications/form-success";
import { FormError } from "../../../(routes)/(components)/notifications/form-error";
import { LinkedIn } from "@/app/icons";
import Link from "next/link";
// import {}

const Login = () => {
  const { setUser } = useContext(UserContext)
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useTransition()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setSuccess("")
    setError("")
    try {
      console.log("Form data:", data);
      setLoading(() => {
        axios.post("/api/auth/signin", data).then((data) => {
          console.log(data?.data?.message)
          setSuccess(data?.data?.message)
        }).catch((err) => {
          setError("Something went wrong")
          console.log(err)
          return new  AxiosError
        })
        // login(data).then((data) => {
        //   if (data?.error) {
        //     setError(data?.error);
        //   }
        //   if (data?.success) {
        //     setSuccess(data?.success);
        //     // setUser(data?.user)
        //   }
        // });
      })
      // Add any further logic, such as submitting the form data to a server
    } catch (error) {
      console.error("Error occurred during registration:", error);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="grid xl:grid-cols-2">
      <Image
        src="/Frame 7.png"
        alt="signup-image"
        width={500}
        height={500}
        className="w-full h-screen hidden xl:block"
      />
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-5xl font-bold text-center mt-20">Log In</h1>
        <form
          className="mt-10 flex-col flex space-y-6 px-3 xl:px-0"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <input
            title="Email"
            placeholder="Email"
            type="email"
            {...form.register("email")}
            className="border-2 border-gray-300 w-96 h-10 py-2 px-4 rounded-md"
          />
          <input
            title="Password"
            placeholder="Password"
            type="password"
            {...form.register("password")}
            className="border-2 border-gray-300 w-96 h-10 py-2 px-4 rounded-md"
          />
          <Link href="/forgot-password" className="text-cyan-600 text-end">Forgot Password?</Link>
          <FormSuccess message={success} />
          <FormError message={error} />
          <button
            type="submit"
            className="bg-cyan-600 text-white w-96 h-10 py-2 px-4 mt-10 rounded-md"
          >
            Log in
          </button>
        </form>
        <div>
          <Link href="/api/auth/signup" className="flex justify-center my-5">Don't have an account?</Link>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="bg-cyan-600 flex gap-2 items-center justify-center text-white w-96 h-10 py-2 px-4 rounded-md"
            >
              <FaGoogle size={20}/> Sign in with google
            </button>
            <button
              type="submit"
              className="bg-cyan-600 flex gap-2 items-center justify-center text-white w-96 h-10 py-2 px-4 rounded-md"
            >
              <LinkedIn /> Sign in with LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
