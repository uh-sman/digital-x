import { ChatPLusIcon, EllipsisVerticalIcon, SearchIcon } from "@/app/icons"
import { BiMessageSquareAdd, BiSolidMessageSquareAdd } from "react-icons/bi";
export const ChatSideBar = () => {
    return (
        <div className="border-r h-screen w-96 py-3 px-2 space-y-3">
            <header className="flex items-center justify-between">
               <h1 className="font-bold text-lg">Messages</h1>
               <div className="flex gap-5">
                <button className=" border py-3 px-4 rounded-md">
                    <EllipsisVerticalIcon className=""/>
                </button>
                <button className=" border py-3 px-4 rounded-md">
                    <BiMessageSquareAdd size={24}/>
                </button>
               </div>
            </header>
            <div className="flex items-center border rounded-md border-slate-200">
            <input placeholder="Search" className="rounded-md border-none w-80"/>
            <SearchIcon className="text-slate-400"/>
            </div>
            {/* Chats come here */}
        </div>
    )
}