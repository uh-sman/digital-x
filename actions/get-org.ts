"use server"

import { getOrganizationById, getOrganizationByName } from "@/lib/query-func"
import { OrganizationSchema }from "@/schemas/index"
// import { auth } from "@clerk/nextjs"
import * as z from "zod"
import db from "@/lib/db"
export const organization = async (userId: string) => {
    // if(!userId) return { error: "User not found" }
    try {
        const org = await getOrganizationById(userId)
        if (!org) return { error: "Organization not found" }
        return { success: org }
    } catch  {
        return null
    }
}


export const createOrganization = async (values: z.infer<typeof OrganizationSchema>) => {
    const validatedFields = OrganizationSchema.safeParse(values)
    if (!validatedFields.success) return { error: "Invalid fields" }
    // const { userId } = auth()
    const userId = "1234567890"
    try {
        const { name } = validatedFields.data
        const existingOrg = await getOrganizationByName(name)
        if (existingOrg) return { error: "Organization already exists" }

        await db.organization.create({
            data:{
                userId: userId || "",
                name
            }
        })
        return { success: "Organization created" }
    } catch  {
        return null
    }
}