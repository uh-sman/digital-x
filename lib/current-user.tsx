"use client"


import React, { useContext } from "react"; // Import React
import { UserContext } from "@/hooks/user";

export const AuthUser = () => { // Assuming you're exporting a component, I renamed it to AuthUser for clarity
    // const { user } = useContext(UserContext || null);
    const user = {
        username:"Usman Umar",
        name:"Umar",
        email:"uumar7000@gmail.com",
        password:"123456789",
        role:"admin"
    }
    return user
};
