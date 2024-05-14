"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
// import { SignOutButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { FolderIcon } from "@heroicons/react/20/solid";
import {
  BarIcon,
  BellIcon,
  CardIcon,
  ChatIcon,
  FolderOpen,
  LogOutIcon,
  PaymentIcon,
  PlusIcon,
  SettingsIcon,
  TaskIcon,
  UsersIcon,
} from "@/app/icons";
import { UserProfiles } from "./user-profile-small";
import { UserContext } from "@/hooks/user";

interface AdminSideBarProps {
  name: string;
}
const AdminSideBar = ({ name }: AdminSideBarProps) => {
  const pathname = usePathname();
  const { notification } = useContext(UserContext)
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const navigation = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: CardIcon,
      pathname: pathname === "/dashboard",
    },
    {
      title: "Team",
      href: "/dashboard/team",
      icon: UsersIcon,
      pathname: pathname === "/dashboard/team",
      subNav: [
        {
          title: "Tasks",
          href: "/dashboard/team/tasks",
          icon: TaskIcon,
          pathname: pathname === "/dashboard/team/tasks",
        },
      ],
    },
    {
      title: "Tasks",
      href: "/dashboard/tasks",
      icon: TaskIcon,
      pathname: pathname === "/dashboard/tasks",
    },
    {
      title: "Projects",
      href: "/dashboard/Projects",
      icon: FolderOpen,
      pathname: pathname === "/dashboard/projects",
    },
    {
      title: "Chat",
      href: "/dashboard/chat",
      icon: ChatIcon,
      pathname: pathname === "/dashboard/chat",
    },
    {
      title: "Notifications",
      href: "/dashboard/notifications",
      icon: BellIcon,
      pathname: pathname === "/dashboard/notifications",
    },
    {
      title: "Payment",
      href: "/admin/payment",
      icon: PaymentIcon,
      pathname: pathname === "/admin/payment",
    },
    {
      title: "Settings",
      href: "/admins/settings",
      icon: SettingsIcon,
      pathname: pathname === "/admin/settings",
    },
  ];
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`text-white h-screen ${
        isOpen ? "w-auto lg:w-[300px]" : "w-auto"
      } border border-r`}
    >
      <div className="flex justify-between h-full max-h-screen flex-col gap-2 py-4">
        <div className="hidden lg:flex  items-center  gap-4 font-bold text-2xl text-gray-900 text-start px-8 pb-4 border-b">
          <p onClick={handleClick}>
            <BarIcon />
          </p>
          {isOpen && <h1 className="">Digital X</h1>}
          <div></div>
        </div>
        <nav className="px-4 text-sm font-medium space-y-8">
          {navigation.map(
            ({ title, icon: Icon, href, subNav, pathname }, index) => (
              <div key={index}>
                <Link
                // key={index}
                  className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2  text-xl transition-all dark:text-gray-400 dark:hover:text-gray-50 ${
                    pathname
                      ? "bg-neutral-900 text-gray-200"
                      : "bg-white text-gray-900"
                  }`}
                  href={href}
                >
                  <span className="flex gap-3">
                    <Icon />
                    {isOpen && <span className="hidden lg:block">{title}
                    </span>}
                  </span>
                  {isOpen && title === "Tasks" && (
                    <PlusIcon className="hidden lg:block" />
                  )}
                 {title === "Notifications" && notification ? notification.length ? <a className="h-6 w-6 rounded-full bg-white text-black text-center">{notification ? notification.length : null}</a> : null : null}
                </Link>
              </div>
            )
          )}
        </nav>
        {/* <SignOutButton signOutCallback={() => push("/")}> */}
          <button
            className={`border-none gap-2 flex font-semibold text-lg items-center ${
              isOpen ? "px-6" : " items-center justify-center"
            } text-gray-900`}
          >
            <LogOutIcon /> {isOpen && <a className="hidden lg:block">Log out</a>}
          </button>
        {/* </SignOutButton> */}
      </div>
    </div>
  );
};

export default AdminSideBar;
