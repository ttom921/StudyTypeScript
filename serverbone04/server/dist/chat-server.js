"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express = require("express");
const socketIo = require("socket.io");
const nsModel_1 = require("./model/nsModel");
class ChatServer {
    //-----------------------
    constructor() {
        this.app = express();
        this.port = process.env.PORT || ChatServer.PORT;
        this.server = http_1.createServer(this.app);
        this.io = socketIo(this.server);
        this.listen();
        ChatServer.createNamespace({ name: 'primer' });
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log("Running server on port %s", this.port);
        });
        // this.io.of((name, query, next) => {
        //     next(null, checkToken(query.token));
        //   }).on('connect', (socket) => { /* ... */ });
        // 
        //連線處理
        // this.io.on("connect", (socket: any) => {
        //     console.log("[server]<connect> client on port %s", this.port);
        //     socket.on("chatmessage", (m: string) => {
        //         console.log("[server]<chatmessage>:%s", m);
        //         this.io.emit("chatmessage", m);
        //     });
        //     //斷線處理
        //     socket.on("disconnect", () => {
        //         console.log("[server]<disconnect> Client disconnected");
        //     });
        // });
        //-----------------------------------
        // middleware
        // this.io.use((socket, next) => {
        //     let token = socket.handshake.query.token;
        //     console.log("[server use] token=%s", token);
        //     //if (isValid(token)) {
        //     return next();
        //     //}
        //     //return next(new Error('authentication error'));
        // });
        //連線處理
        this.io.of('').on('connection', (socket) => {
            console.log("[server]<connect> socket.id=%s", socket.id);
            socket.emit('Welcome', { SocketId: socket.id });
            socket.on("chatmessage", (m) => {
                console.log("[server]<chatmessage>:%s", m);
                this.io.emit("chatmessage", m);
            });
            socket.on('createNamespace', function (data) {
                console.log("[server]<createNamespace> socket.id=%s", socket.id);
                let nsmodel = ChatServer.createNamespace(data);
                let fmt = `Namespace created ${nsmodel.id}`;
                let sendmsg = { Message: fmt };
                console.log("[server]" + sendmsg.Message);
                socket.emit('Message', sendmsg);
            });
            // 取得namespace列表
            socket.on("GetNamespaceList", () => {
                //console.log("[server]<GetNamespaceList> socket.id=%s", socket.id);
                let sendmsg = { result: ChatServer.getNamespacelist() };
                console.log("[server]<GetNamespaceList> socket.id=%s result=" + sendmsg);
                socket.emit('GetNamespaceList', sendmsg);
            });
            //加入namspace
            socket.on("JoinToApp", (data) => {
                let namespaceToConnect = this.searchObjectOnArray(data.namespace);
                if (namespaceToConnect != null) {
                    let sendmsg = { namespace: namespaceToConnect.id };
                    socket.emit('JoinToApp', sendmsg);
                }
                let dynamicNamespace = this.io.of('/' + namespaceToConnect.id);
                dynamicNamespace.on("connection", (ns_socket) => {
                    console.log("[server %s ]<connection> connected to ns_socket.id=%s", namespaceToConnect.id, ns_socket.id);
                    ns_socket.on("chatmessage", (m) => {
                        console.log("[server %s]<chatmessage>:%s", dynamicNamespace.name, m);
                        dynamicNamespace.emit("chatmessage", m);
                    });
                });
            });
        });
    }
    getApp() {
        return this.app;
    }
    //--------------------------------------
    searchObjectOnArray(nameKey) {
        // for (let i = 0; i < this.namespace_queue.length; i++) {
        //     if()
        // }
        for (let index = 0; index < ChatServer.namespace_queue.length; index++) {
            const element = ChatServer.namespace_queue[index];
            if (element.id == nameKey)
                return element;
        }
        return null;
    }
    static createNamespace(data) {
        let ns = new nsModel_1.nsModel(data.name);
        ChatServer.namespace_queue.push(ns);
        return ns;
    }
    static getNamespacelist() {
        let ns_lst = [];
        ChatServer.namespace_queue.forEach((item) => {
            ns_lst.push(item.id);
        });
        return ns_lst;
    }
}
ChatServer.PORT = 3000;
//-----------------------
ChatServer.namespace_queue = [];
exports.ChatServer = ChatServer;
//# sourceMappingURL=chat-server.js.map