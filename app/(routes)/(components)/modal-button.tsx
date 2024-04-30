"use client"
import { ProjectModal } from '@/hooks/modal'
import React from 'react'

const ModalButton = () => {
  const { isOpen, onClose , onOpen } = ProjectModal()
  const modalControl = () => {
    if (isOpen) {
        onClose()
    }
    onOpen()
  }
  return (
    <button onClick={modalControl} className="hidden lg:block border-2 border-gray py-3 px-4 rounded-md hover:bg-gray-200">
        Start a Project
      </button>
  )
}

export default ModalButton
