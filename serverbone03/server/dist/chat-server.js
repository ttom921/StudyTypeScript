"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express = require("express");
const socketIo = require("socket.io");
class ChatServer {
    constructor() {
        //this.createApp();
        //this.config();
        //this.createServer();
        //this.sockets();
        //this.listen();
        this.app = express();
        this.port = process.env.PORT || ChatServer.PORT;
        this.server = http_1.createServer(this.app);
        this.io = socketIo(this.server);
        this.listen();
    }
    createApp() {
        this.app = express();
    }
    createServer() {
        this.server = http_1.createServer(this.app);
    }
    config() {
        this.port = process.env.PORT || ChatServer.PORT;
    }
    sockets() {
        this.io = socketIo(this.server);
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log("Running server on port %s", this.port);
        });
        // 連線處理
        this.io.on("connect", (socket) => {
            console.log("[server]<connect> client on port %s", this.port);
            socket.on("chatmessage", (m) => {
                console.log("[server]<message>:%s", m);
                this.io.emit("chatmessage", m);
            });
            // 斷線處理
            socket.on("disconnect", () => {
                console.log("[server]<disconnect> Client disconnected");
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