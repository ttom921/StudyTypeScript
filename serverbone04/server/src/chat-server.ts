
import { createServer, Server } from "http";
import * as express from "express";
import * as socketIo from "socket.io";

export class ChatServer {
    public static readonly PORT: number = 3000;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;
    constructor() {
        this.app = express();
        this.port = process.env.PORT || ChatServer.PORT;
        this.server = createServer(this.app);
        this.io = socketIo(this.server);
        this.listen();
    }
    private listen(): void {
        this.server.listen(this.port, () => {
            console.log("Running server on port %s", this.port);
        });
        //連線處理
        this.io.on("connect", (socket: any) => {
            console.log("[server]<connect> client on port %s", this.port);

            socket.on("chatmessage", (m: string) => {
                console.log("[server]<chatmessage>:%s", m);
                this.io.emit("chatmessage", m);
            });
            //斷線處理
            socket.on("disconnect", () => {
                console.log("[server]<disconnect> Client disconnected");
            });
        });
    }
    public getApp(): express.Application {
        return this.app;
    }
}