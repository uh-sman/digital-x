"use client"
import React, { createContext, useState, useEffect } from 'react';
import { User } from "@prisma/client";
import { getAllFriendList, getUser, getFriendRequestList } from "@/actions/get-user";

// UserContext Interface
interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
  chat: any; // Replace with the actual type for the chat object
  setChat: (chat: any | null) => void,
  notification: any; // Replace with the actual type for the notification object
  setNotification: (notification: any | null ) => void
}

interface UserProviderProps {
  children: React.ReactNode;
}

// UserContext creation
export const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
  chat: null,
  setChat: () => {},
  notification: null,
  setNotification: () => {},
});

// UserProvider component
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [chat, setChat] = useState<any>(null); // Replace with the actual type for chat
  const [notification, setNotification] = useState<any>(null); // Replace with the actual type for chat

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user: User | any = await getUser(); // Assuming getUser returns a User object
        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []); // Empty dependency array for fetching on mount

  // Fetch friend list data (optional: adjust dependency array if needed)
  useEffect(() => {
    const fetchFriendList = async () => {
      try {
        const friendList: any = await getAllFriendList(); // Replace 'any' with the appropriate type
        setChat(friendList); // Replace with appropriate chat data update logic
      } catch (error) {
        console.error("Error fetching friend list:", error);
      }
    };

    fetchFriendList();
  }, []); // Adjust dependency array if needed
  // Fetch friend list data (optional: adjust dependency array if needed)
  useEffect(() => {
    const fetchFriendList = async () => {
      try {
        const friendList: any = await getFriendRequestList(); // Replace 'any' with the appropriate type
        setNotification(friendList); // Replace with appropriate chat data update logic
      } catch (error) {
        console.error("Error fetching friend list:", error);
      }
    };

    fetchFriendList();
  }, []); // Adjust dependency array if needed

  return (
    <UserContext.Provider value={{ user, setUser, chat, setChat, notification, setNotification }}>
      {children}
    </UserContext.Provider>
  );
};
