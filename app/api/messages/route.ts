// import { Server } from "socket.io";
// import { createServer } from "node:http"
// import { PrismaClient } from "@prisma/client";
// import { NextRequest, NextResponse } from "next/server";

// const prisma = new PrismaClient();

// export const config = {
 
// }
// export async function POST(request: Request, response: NextResponse) {
//   if (request.method !== "POST") {
//     throw new Error("Method not allowed");
//   }

//   try {
//     const body = await request.json()
//     const { id } = body
//     if (!response?.socket.server.io) {
//       console.log("* First use, starting Socket.IO server");
//       const io = new Server(response?.);
//       // const io = new Server(response.socket.server);

//       io.on("connection", (socket) => {
//         console.log("User connected");

//         socket.on("join-room", (roomId) => {
//           socket.join(roomId);
//         });

//         socket.on("send-message", async (message) => {
//           const newMessage = await prisma.chat.create({
//             data: {
//                 content: message.content,
//                 roomId: message.roomId,
//                 userId: id, // Replace with authenticated user ID
//             },
//           });
//           socket.broadcast.to(message.roomId).emit("receive-message", newMessage);
//         });
//       });
//     }
//   } catch (error) {
//     console.error("Error starting Socket.IO server:", error);
//   }

//   return NextResponse.next();
// }
