import { create } from "zustand";


interface ProjectModalStore {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}


export const ProjectModal = create<ProjectModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))
