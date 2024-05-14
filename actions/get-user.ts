"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getUserById, getUserByName, getUserByEmail, checkFriendRequest, createFriendRequest, getAllFriendsList, getFriendRequests } from "@/lib";
export const getUser = async () => {
  const token = cookies()?.get("token")?.value;
  try {
    const decoded = token
      ? jwt.verify(token, process.env.JWT_SECRET as string)
      : null;
    const { userId } = decoded as { userId: string };
    const user = await getUserById(userId);
    const { password, ...userWithoutPassword } = user as { password: string };
    return userWithoutPassword;
  } catch (error) {
    console.log(error);
  }

  // return user
};

export const searchUserByEmail = async (emailAddress: string) => {
  try {
    const user = await getUserByEmail(emailAddress);
    const { email, name, id } = user as { email: string; name: string, id: string };
    return { email, name, id };
  } catch (error) {
    console.log(error);
  }
};


export const searchUserByName = async (fullName: string, currentUserId: string) => {
  try {
    const users = await getUserByName(fullName,currentUserId ); // Now retrieves all matching users
    if (!users || users.length === 0) return null; // Return null if no users found
    return   users.map(user => ({ email: user.email, name: user.name, id: user.id }));
  } catch (error) {
    console.log(error);
    return null; // Return null on errors
  }
};



export const addFriendRequest = async ( senderId: string, receiverId: string) => {
  try {
    const existingFriendRequest = await checkFriendRequest(senderId, receiverId);
    if(existingFriendRequest) return { error: "Friend request already sent" };
    const newFriendRequest = await createFriendRequest(senderId, receiverId);
    console.log(senderId)
    return { success: "Request sent successfully" }
  } catch (error) {
    console.log(error)
    return { error: "Failed to send friend request" };
  }
}


export const getAllFriendList = async () => {
  try {
    // Choose either eager loading or separate queries approach here
    const friends = await getAllFriendsList()/* Implement your chosen approach here */
    return friends || []; // Return empty array if no friends found
  } catch (error) {
    console.error("Error fetching user friends:", error);
    // Handle errors gracefully (e.g., display error message to user)
  }
};


export const getFriendRequestList = async (userId: string) => {
  try {
    const friendRequests = await getFriendRequests(userId);
    return friendRequests || []; // Return empty array if no friend requests found
  } catch (error) {
    console.error("Error fetching friend requests:", error);
}
}