import { Component, OnInit } from '@angular/core';
import { SocketService } from "../services/socket.service";
import { Event } from "../model/event";
@Component({
  selector: 'app-room1',
  templateUrl: './room1.component.html',
  styleUrls: ['./room1.component.scss']
})
export class Room1Component implements OnInit {
  SERVER_URL = "http://localhost:3000";
  ioConnection: any;
  textValue = "";
  messages: string[] = [];

  // nampscace相關
  textNamespace = "";
  namespacelst: string[] = [];
  seltextNamespace = "";
  curnamespace = "";
  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.initIoConnection(this.SERVER_URL);
  }
  private initIoConnection(nspace: string): void {
    this.socketService.initSocket(nspace);
    this.curnamespace = this.socketService.getNameSpace();
    this.socketService.OnChatmessage().subscribe((message: string) => {
      this.messages.push(message);
    });

    this.socketService.onEvent(Event.CONNECT).subscribe(() => {
      console.log("connedted");
      //取得列表
      this.socketService.getNamespaceList();
    });

    this.socketService.onEvent(Event.DISCONNECT).subscribe(() => {
      console.log("disconnedted");
    });
    //
    this.socketService.OnWelcome().subscribe((data) => {
      let fmtmsg = `[client ns:${this.curnamespace} ]<Welcome> SocketId=${data.SocketId}`;
      console.log(fmtmsg);
      this.messages.push(fmtmsg);
    });
    this.socketService.onMessage().subscribe((data) => {
      let fmtmsg = `[client  ns:${this.curnamespace}]<Message> Message=${data.Message}`;
    });
    this.socketService.OnGetNamespaceList().subscribe((data) => {
      let fmtmsg = `[client  ns:${this.curnamespace}]<OnGetNamespaceList> namespacelst=${data.result}`;
      console.log(fmtmsg);
      this.namespacelst = data.result;
    });
    // 加入新的namespace
    this.socketService.OnJoinToApp().subscribe((data) => {
      let connecturl = this.SERVER_URL + "/" + data.namespace;
      let fmtmsg = `[client  ns:${this.curnamespace}]<JoinToApp> namespace=${connecturl}`;
      this.messages.push(fmtmsg);
      console.log(fmtmsg);
      this.socketService.disconnect();
      this.initIoConnection(connecturl);

    });
  }
  public sendchatmessage(): void {
    let fmtmsg = `[client  ns:${this.curnamespace}]<chatmessage>=${this.textValue}`
    console.log(fmtmsg);
    this.socketService.send(this.textValue);
    this.textValue = "";
  }
  //--------------------
  public createNamespace(): void {
    let fmtmsg = `[client  ns:${this.curnamespace}]<createNamespace>=${this.textNamespace}`
    console.log(fmtmsg);
    this.socketService.createNamespace(this.textNamespace);
    //取得列表
    this.socketService.getNamespaceList();
  }
  public joinToNamespace(): void {
    let fmtmsg = `[client  ns:${this.curnamespace}]<JoinToApp>=${this.seltextNamespace}`
    console.log(fmtmsg);
    this.socketService.joinToNamespace(this.seltextNamespace);

  }
}
