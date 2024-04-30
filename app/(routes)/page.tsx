"use client"
import React, { useEffect, useState } from "react"
import { socket } from "@/app/socket"
import Components from "@/app/(routes)/(components)/index";
interface SocketTransport {
  name: string;
}

  function Home() {
    const [isConnected, setIsConnected] = useState(false);
    const [transport, setTransport] = useState<string | null>("N/A");
    useEffect(() => {
      if (socket.connected) {
        onConnect();
      }
  
      function onConnect() {
        setIsConnected(true);
        setTransport(socket.io.engine.transport.name);
  
        socket?.io.engine.on("upgrade", (transport: any) => {
          setTransport(transport.name);
        });
      }
  
      function onDisconnect() {
        setIsConnected(false);
        setTransport("N/A");
      }
  
      socket.on("connect", onConnect);
      socket.on("disconnect", onDisconnect);
  
      return () => {
        socket.off("connect", onConnect);
        socket.off("disconnect", onDisconnect);
      };
    }, []);
  return (
    <div>
      <Components />
    </div>
  );
}

export default Home;
