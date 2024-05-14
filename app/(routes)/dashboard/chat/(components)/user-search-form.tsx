"use client";
// Import statements
import React, { useEffect, useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { addFriendRequest, searchUserByEmail, searchUserByName } from "@/actions/get-user";
import { AddUser } from "@/app/icons";
 
interface SearchFormProps  {
  id: string | null | any;
}

// Interface for User data
interface User {
  email: string;
  name: string;
  id: string;
  // Add other user properties as needed
}

// Interface for UserSearchResult
interface UserSearchResult {
  data?: User[] | null | any;
  error?: any;
}


export const UserSearchForm: React.FC<SearchFormProps> = ({ id: userId }) => {
  const [search, setSearch] = useState<string | null>(null);
  const [success,setSuccess] = useState<string>("");
  const [error,setError] = useState<string>("");
  const [searchResult, setSearchResult] = useState<UserSearchResult | null>(
    null
  );
  console.log("user from context: ", userId)
  useEffect(() => {
    if (search) {
      searchUserByName(search, userId )
        .then((res) => setSearchResult({ data: res }))
        .catch((error) => console.log(error));
    } else {
      setSearchResult(null); // Clear search result when search term is empty
    }
  }, [search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleAddFriendRequest = (receiverId : string) => {
    addFriendRequest(userId, receiverId).then((res) => {
      if (res?.success) {
        console.log(res)
        setSuccess(res.success)
      }else{
        
      }
    }).catch((error) => console.log(error));
  }

  return (
    <div className="space-y-10">
      <input
        className="rounded-md border-gray-400 w-full"
        value={search || ""}
        onChange={handleChange}
      />
      <main className={searchResult?.data ? "pt-4" : "pt-0"}>
        <ul className="space-y-8">
          {searchResult?.data &&
            searchResult.data.map((user: User) => (
              <li
                key={user.id}
                onClick={() => handleAddFriendRequest(user.id)}
                className="text-lg font-semibold flex justify-between px-2 items-center"
              >
                {user.name}
                <button className=" rounded-md">
                  <AddUser />
                </button>
              </li>
            ))}
        </ul>
      </main>
    </div>
  );
};

{
  /* <li>{user?.name}</li>
          {user && (
            <button className=" rounded-md">
              <FaUserCheck size={18} />
            </button>
          )} */
}

{
  /* <button className=" rounded-md"><AddUser /></button> */
}
{
  /* {user?.data && user?.data.map((item: any) => console.log("item:", item))} */
}
