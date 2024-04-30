// import { currentUser } from "@clerk/nextjs"
import Image from "next/image"
export const UserProfiles = async () => {
    const user = {
      username: "John Doe"
    }
  return (
    <div>
        <Image src={"/"} alt="user-image" width={50} height={50} className="rounded-full" />
        <ul>
            <p>{user?.username}</p>
        </ul>
    </div>
  )
}
