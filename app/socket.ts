import { io } from "socket.io-client";

const isBrowser = typeof window !== "undefined";

// @ts-ignore
export const socket: SocketIOClient.Socket | {} = isBrowser ? io() : {};
