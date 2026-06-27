import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const allowOrigin = process.env.FRONTEND_URL;
const io = new Server(server, {
    cors: {
        origin: [allowOrigin],
        credentials: true,
    }
});

// online users map = { userId : socketId }
const userSocketMap = {};

function getReceiveSocketId(userId) {
    return userSocketMap[userId];
}


io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId) userSocketMap[userId] = socket.id;

    console.log("========== SOCKET CONNECTED ==========");
    console.log("Socket ID:", socket.id);
    console.log("Query:", socket.handshake.query);

    // io.emit send event to everyone - broadcast
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        if (userId) delete userSocketMap[userId];

        io.emit("getOnlineUsers", Object.keys(userSocketMap));
        console.log("Socket disconnected:", socket.id);

    });

});

export { app, server, io, getReceiveSocketId };