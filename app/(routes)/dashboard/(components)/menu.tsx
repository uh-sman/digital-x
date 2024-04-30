import React from "react";
import { SearchIcon, BellIcon, UserIcon } from "@/app/icons";
// import { currentUser } from "@clerk/nextjs";
const Menu = async () => {
    // const user =  await currentUser();
    const user = {
      firstName: "John",
      lastname: "Doe",
    }
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
                <BellIcon />
                Notifications
            </button>
            <button className="flex items-center text-gray-500 gap-2 border-none bg-transparent">
                <UserIcon />
                {
                    user?.firstName
                }
            </button>
        </div>
      </main>
    </div>
  );
};

export default Menu;

