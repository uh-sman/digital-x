"use client";
import Image from "next/image";
import * as z from "zod";
import { registerSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useContext,
  useTransition,
} from "react";
import { UserContext } from "@/hooks/user";
import { signUp } from "@/actions/credentials";
import { FormSuccess } from "../../../(routes)/(components)/notifications/form-success";
import { FormError } from "../../../(routes)/(components)/notifications/form-error";
import { LinkedIn } from "@/app/icons";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const SignUp = () => {
  const { setUser, user } = useContext(UserContext);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useTransition();
  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      setError("");
      setSuccess("");
      console.log("Form data:", data);
      setLoading(() => {
        axios
          .post("/api/auth/register", data)
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        // signUp(data).then((data) => {
        //   if (data?.error) {
        //     setError(data?.error)
        //   }
        //   if (data?.success) {
        //     setSuccess(data?.success)
        //     console.log(data?.token)
        //     // setUser(data?.user)
        //   }
        // });
      });
      // Add any further logic, such as submitting the form data to a server
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };
  // console.log("user",{user})
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
        <h1 className="text-5xl font-bold text-center mt-20">Sign Up</h1>
        <form
          className="mt-10 flex-col flex space-y-6 px-3 xl:px-0"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <input
            title="Name"
            placeholder="Name"
            type="text"
            {...form.register("name")}
            className="border-2 border-gray-300 w-96 h-10 py-2 px-4 rounded-md"
          />
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
          <FormSuccess message={success} />
          <FormError message={error} />
          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-600 text-white w-96 h-10 py-2 px-4 mt-10 rounded-md"
          >
            Sign Up
          </button>
        </form>
        <div>
          <Link href="/api/auth/login" className="flex justify-center my-5">
            already have an account?
          </Link>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="bg-cyan-600 flex gap-2 items-center justify-center text-white w-96 h-10 py-2 px-4 rounded-md"
            >
              <FaGoogle size={20} /> Sign in with google
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

export default SignUp;

// axios.post("/api/auth/register", data).then((data) => {
//   console.log(data)
// }).catch((err) => {
//   console.log(err)
// })
