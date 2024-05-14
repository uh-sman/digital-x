import { create } from "zustand";


interface ChatModalStore {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}


export const ChatModal = create<ChatModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))
