"use client"
import React, { useEffect } from 'react'
import { getFriendRequestList } from '@/actions/get-user'
 const Notification = () => {
    useEffect(() => {
        getFriendRequestList().then((res) => console.log(res)).catch((err) => console.log(err))
    },[])
  return (
    <div>Notification</div>
  )
}


export default Notification