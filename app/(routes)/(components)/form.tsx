"use client"
import { createOrganization } from '@/actions/get-org';
import { OrganizationSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import * as z from "zod"
import { useForm } from 'react-hook-form';
import { FormSuccess } from './notifications/form-success';
import { FormError } from './notifications/form-error';
import { ProjectModal } from '@/hooks/modal';
interface FormProps {
    user?:any ;
}
const Form = ({ user }: FormProps) => {
const [success,setSuccess] = useState("")
const [error,setError] = useState("")
const { push } = useRouter()
const { onClose } = ProjectModal()
const form = useForm<z.infer<typeof OrganizationSchema>>({
    resolver: zodResolver(OrganizationSchema),
    defaultValues: {
        name: ""
    },
  });

  const onSubmit = (values: z.infer<typeof OrganizationSchema>) => {
    createOrganization(values).then((data: any) => {
        if (data?.success) {
            setSuccess(data?.success)
            onClose()
            push("/dashboard")
        }
        if (data?.error) {
            setError(data?.error)
        }
    }).catch((error) => {
        console.log(error)
    })
  }
    return (
      <form className="w-full max-w-sm" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Project Owner
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              disabled
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={user}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Project Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
            {...form.register("name")}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text" // changed type from "password" to "text"
              placeholder=""
            />
          </div>
        </div>
        <FormSuccess message={success}/>
        <FormError message={error}/>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-[#5840B9] hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit" // changed type from "button" to "submit"
            >
              Create Project
            </button>
          </div>
        </div>
      </form>
    );
  };
  

export default Form


    // const { register, handleSubmit, formState: { errors },reset } = useForm({
    //     resolver: zodResolver(OrganizationSchema),
    //     defaultValues: {
    //         name: ""
    //     }
    // });




        // const onSubmit = (data: any) => {
    //     createOrganization(data) // Handle form submission here
    // };
  