import { Server } from "socket.io";

import http from "http";
import express from "express";

const app = express();

//connecting express server
const server = http.createServer(app);

//connecting socket server along with express server to listen

const io = new Server(server, {
  cors: ["http://localhost:5173"],
});

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

//used to store online users
const userSocketMap = {}; //{userId:socketId}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  //handshake (when client side is connect with socket , in query from client we will send userId which is authenticated)
  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  //io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //disconnect event
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
