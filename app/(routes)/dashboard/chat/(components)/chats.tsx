import { UserContext } from '@/hooks/user'
import React, { useContext } from 'react'

export const Chats = () => {
    const { chat } = useContext(UserContext)
    console.log("chat:", chat)
  return (
    <div>
        {/* {
            chat?.map((item: any, index: any) => <li>{item.name}</li>)
        } */}
    </div>
  )
}
