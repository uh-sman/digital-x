import db from "@/lib/db"
import { registerSchema } from "@/schemas"
import * as z from "zod"
export const getUserByEmail = async (email: string) => {
    const user = await db.user.findUnique({
        where: {
            email: email
        }
    }
    )
    return user;
}


export const createUser = async (email:string, password:string, name:string) => {
    return await db.user.create({
        data: {
            email,
            password,
            name
        }
        }
    )
}


export const getUserById = async (id: string) => {
    return await db.user.findUnique({
        where: {
            id: id
        }
    })
}

export const getAllUser = async () => {
    return await db.user.findMany()
}

export const getUserByName = async (name: string, currentUserId: string) => {
    return await db.user.findMany({
      where: {
        AND: [
          { name: { contains: name, mode: "insensitive" } }, // Partial, case-insensitive search
          { id: { not: currentUserId } } // Exclude current user
        ]
      }
    });
  };

  export const getFriendRequests = async (userId: string,) => {
    // return await db.friendRequest.findMany();
      return await db.friendRequest.findMany({
        where: {
          OR: [
            { senderId: userId },
            { receiverId: userId }
          ]
        }
      });
  }
  


//   const checkFriendRequest = async (senderId: string, receiverId: string) => {
//     return await db.friendRequest.findFirst({
//       where: {
//         senderId_receiverId: {
//           senderId: senderId,
//           receiverId: receiverId
//         }
//       }
//     });
//   }

export const checkFriendRequest = async (senderId: string, receiverId: string) => {
    return await db.friendRequest.findUnique({
        where: {
            senderId
        }
    })
}

export const createFriendRequest = async (senderId: string, receiverId: string) => {
    return await db.friendRequest.create({
        data: {
            senderId,
            receiverId
        }
    })
}

export const getFriendRequest = async (senderId: string) => {
    return await db.friendRequest.findMany({
        where: {
            senderId
        }
    })
}
  
export const getAllFriendsList = async () => {
    return await db.friendRequest.findMany({
      include: {
        sender: true, // Include sender user data
        receiver: true, // Include receiver user data
      }
    });
  };
  



interface createUserProps {
    email: string;
    password: string;
    name: string;
}

// { email, password, name }: z.infer<typeof registerSchema>