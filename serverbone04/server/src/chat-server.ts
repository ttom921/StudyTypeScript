
import { createServer, Server } from "http";
import * as express from "express";
import * as socketIo from "socket.io";
import { nsModel } from "./model/nsModel";
import { isObject } from "util";


export class ChatServer {
    public static readonly PORT: number = 3000;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;
    //-----------------------
    public static namespace_queue: nsModel[] = [];

    //-----------------------
    constructor() {
        this.app = express();
        this.port = process.env.PORT || ChatServer.PORT;
        this.server = createServer(this.app);
        this.io = socketIo(this.server);
        this.listen();

        ChatServer.createNamespace({ name: 'primer' });
    }
    private listen(): void {
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
        //連線處理
        this.io.of('').on('connection', (socket) => {
            console.log("[server]<connect> socket.id=%s", socket.id);
            socket.emit('Welcome', { SocketId: socket.id });

            socket.on("chatmessage", (m: string) => {
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
                    ns_socket.on("chatmessage", (m: string) => {
                        console.log("[server %s]<chatmessage>:%s", dynamicNamespace.name, m);
                        dynamicNamespace.emit("chatmessage", m);
                    });
                });
            });
        });
    }
    public getApp(): express.Application {
        return this.app;
    }
    //--------------------------------------
    private searchObjectOnArray(nameKey: string): nsModel | any {
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
    public static createNamespace(data: any): nsModel {
        let ns = new nsModel(data.name);
        ChatServer.namespace_queue.push(ns);
        return ns;
    }
    public static getNamespacelist(): string[] {
        let ns_lst: string[] = [];
        ChatServer.namespace_queue.forEach((item) => {
            ns_lst.push(item.id);
        });
        return ns_lst;
    }
    //---------------------------------------
}