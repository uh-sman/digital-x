"use client"
import { User } from "@prisma/client"
// authContext.js

interface UserProviderProps {
    children: React.ReactNode;
}
import { createContext, useState } from 'react';

export const UserContext = createContext({
  user: null,
  setUser: (user: any) => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState(null);
  
    const updateUser = (newUser: any) => setUser(newUser);
  
    return (
      <UserContext.Provider value={{ user, setUser: updateUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  