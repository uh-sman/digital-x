import db from "@/lib/db"
import { registerSchema } from "@/schemas"
import * as z from "zod"
export const getUserByEmail = async (email: string) => {
    const user = await db.user.findUnique({
        where: {
            email: email
        }
    }
    )
    return user;
}


export const createUser = async (email:string, password:string, name:string) => {
    return await db.user.create({
        data: {
            email,
            password,
            name
        }
        }
    )
}


interface createUserProps {
    email: string;
    password: string;
    name: string;
}

// { email, password, name }: z.infer<typeof registerSchema>