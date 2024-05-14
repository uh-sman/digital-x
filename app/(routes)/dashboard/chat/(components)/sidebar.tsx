"use client"
import { ChatPLusIcon, EllipsisVerticalIcon, SearchIcon } from "@/app/icons";
import { BiMessageSquareAdd, BiSolidMessageSquareAdd } from "react-icons/bi";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { ChatModal } from "@/hooks/chat-modal";
import Modal from "@/components/modal";
import { UserSearchForm } from "./user-search-form";
import { UserContext } from "@/hooks/user";
import { useContext } from "react";
import { Chats } from "./chats";
export const ChatSideBar = () => {
  const { user } = useContext(UserContext);
    const style = {
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: '16px',
        padding: '10px',
        borderRadius: '5px',
        top: '50%',
    }
    const { isOpen, onOpen, onClose } = ChatModal()
    const onClick = () => {
      if (isOpen) {
        onClose()
      }
      onOpen()
    }
  return (
    <div className="border-r h-screen w-96 py-3 px-2 space-y-3">
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-lg">Messages</h1>
        <div className="flex gap-5">
          <button className=" border py-3 px-4 rounded-md">
            <EllipsisVerticalIcon className="" />
          </button>
          <button
          onClick={onClick}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Start a Chat"
            className=" border py-3 px-4 rounded-md"
          >
            <Tooltip id="my-tooltip" style={style}/>
            <BiMessageSquareAdd size={24} />
          </button>
        </div>
      </header>
      <div className="flex items-center border rounded-md border-slate-200">
        <input placeholder="Search" className="rounded-md border-none w-80" />
        <SearchIcon className="text-slate-400" />
      </div>
      <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
        <UserSearchForm id={user?.id}/>
      </Modal>
      {/* Chats come here */}
      <Chats />
    </div>
  );
};
