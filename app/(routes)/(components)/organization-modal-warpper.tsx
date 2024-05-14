"use client"
import Modal from '@/components/modal'
import React from 'react'

import * as z from "zod";
import { useForm } from "react-hook-form"
import { OrganizationSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
// import { authUser } from '@/lib/current-uer';
import Form from './form';
import { ProjectModal } from '@/hooks/modal';
// import { currentUser, auth } from '@clerk/nextjs';
// interface OrganizationProps {
  //     userId: string;
  //     user: any;
  // }
  const OrganizationModalWrapper = () => {
    const { isOpen, onClose, onOpen } = ProjectModal()
    const user = {
      emailAddress: "uumar7000@gmail.com"
    }
    // const { userId } = auth()
    // const user = await currentUser()
    // const auth = authUser()
    
    console.log()
  return (
    <Modal title="Create an Organization" isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
        <Form  user={user?.emailAddress} />
    </Modal>
  )
}

export default OrganizationModalWrapper
