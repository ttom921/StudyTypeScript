"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express = require("express");
const socketIo = require("socket.io");
class ChatServer {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || ChatServer.PORT;
        this.server = http_1.createServer(this.app);
        this.io = socketIo(this.server);
        this.listen();
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log("Running server on port %s", this.port);
        });
        this.io.on("connect", (socket) => {
            console.log("connected client on port %s", this.port);
            socket.on("disconnect", () => {
                console.log("Client disconnected");
            });
        });
    }
    getApp() {
        return this.app;
    }
}
ChatServer.PORT = 3000;
exports.ChatServer = ChatServer;
//# sourceMappingURL=chat-server.js.map