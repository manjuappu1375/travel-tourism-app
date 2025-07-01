"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSocket = void 0;
const socket_io_1 = require("socket.io");
const setupSocket = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: { origin: '*' },
    });
    io.on('connection', (socket) => {
        console.log(`🟢 Socket connected: ${socket.id}`);
        socket.on('disconnect', () => {
            console.log(`🔴 Socket disconnected: ${socket.id}`);
        });
    });
};
exports.setupSocket = setupSocket;
