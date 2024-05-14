"use client";
import React, { useContext } from "react";
import { SearchIcon, BellIcon, UserIcon, SettingsIcon } from "@/app/icons";
import { UserContext } from "@/hooks/user";
// import { currentUser } from "@clerk/nextjs";
const Menu = () => {
  const { user, notification } = useContext(UserContext);
  // const user = {
  //   firstName: "John",
  //   lastname: "Doe",
  // }
  return (
    <div className="py-3 px-8 border-b w-full">
      <main className="flex justify-between">
        <form>
          <div className="flex gap-1 items-center">
            <SearchIcon />
            <input
              className="border-none outline-none appearance-none focus:border-none focus:outline-none"
              placeholder="Search..."
            />
          </div>
        </form>
        <div className="flex items-center gap-4">
          <button className="flex items-center text-gray-500 gap-2 border-none bg-transparent">
            {/* <UserIcon /> */}
            {user?.name}
          </button>
          <button className="flex items-center text-gray-500 gap-2 border-none bg-transparent">
            <BellIcon />
            {notification && notification.length > 0 && (
              <small className="bg-black h-1.5 w-1.5 rounded-full absolute ml-4 mt-4"></small>
            )}
            Notifications
          </button>
          <button className="flex items-center text-gray-500 gap-2 border-none bg-transparent">
            <SettingsIcon />
            {/* Notifications */}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Menu;
