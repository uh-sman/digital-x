// components/Modal.tsx
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import { ProjectModal } from "@/hooks/modal";
import db from "@/lib/db"
import { organization } from "@/actions/get-org";
import { ChatModal } from "@/hooks/chat-modal";
interface ModalProps {
  children?: React.ReactNode;
  user?: string;
  userId?: any;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void

}
const Modal = ({ children, user, userId, title,isOpen, onClose, onOpen }: ModalProps) => {
  const [close, setClose] = useState(false)
  const { push } = useRouter()
  // Close the modal when the Escape key is pressed
  // const { isOpen, onClose, onOpen } = ProjectModal();
  // const { isOpen, onClose, onOpen } = ChatModal();
  // useEffect(() =>{
  //  organization(userId).then((data) => {
  //    if (data?.error) {
  //     onOpen()
  //     setClose(false)
  //    }
  //    if (data?.success) {
  //      setClose(true)
  //     onClose()
  //     // push("/dashboard")
  //    }
  //  }).catch((err) => {
  //    console.log(err)
  //  })
  // },[])
  useEffect(() => {
    const handleEscapeKey = (event: any) => {
      if (event.key === "Escape") {
        // if (close === true) {
          onClose();
        // }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose()
    // if (close === true) {
    //   onClose()
    // }
    // else{
    //   onOpen()
    // }
  }

  // Close the modal when clicking outside of it
  const handleClickOutside = (event: any) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div
            className="bg-white p-4 rounded-lg shadow-md max-w-lg w-full space-y-6"
            onClick={handleClickOutside}
          >
            <div className="flex items-center justify-end gap-x-[200px]">
            <h1 className="font-semibold font-sans text-2xl">
              {title}
            </h1>
            <p className="" onClick={handleClose}><CloseButton/></p>
            </div>
            {
              children
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

function CloseButton(props: any) {
  return (
    <svg
    {...props}
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
