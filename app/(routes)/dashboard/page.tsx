"use client"
import { useEffect, useState, useContext } from "react";
import { getUser } from "@/actions/get-user";
import { UserContext } from "@/hooks/user";
interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean,
  image: string | null;
  role: string;
  createdAt: Date;
  // other properties
}
const Dashboard = () => {
  const { user } = useContext(UserContext)

  const currentDate = new Date().toDateString()
  const stats = [
    {
        title: "Team",
        value: "15"
    },
    {
        title: "Completed Task",
        value: "2"
    },
    {
        title: "Pending Task",
        value: "2"
    },
  ]
  return (
    <div className="py-14 px-8 space-y-8">
      <header>
        <h1 className="font-bold text-2xl pb-4 pr-2">Welcome back, 
        {/* put User name */}
        <span> { user ? user?.name : ""}</span>
        !</h1>
        <p className="text-gray-500">Here are your stats for Today {currentDate}</p>
      </header>
      {/* Your dashboard content goes here */}
      <section>
        <main className="flex">
          {
            stats.map((stat, index) => (
              <div key={index} className=" h-28 w-64 border-r flex items-center justify-between p-4 mb-4 bg-white shadow-md rounded-e-md">
                <div>
                  <h3 className="font-semibold text-xl pb-2">{stat.title}</h3>
                  <p className="text-gray-500 font-semibold text-2xl pl-2">{stat.value}</p>
                </div>
                </div>
            ))}
        </main>
      </section>
    </div>
  );
};

export default Dashboard;


