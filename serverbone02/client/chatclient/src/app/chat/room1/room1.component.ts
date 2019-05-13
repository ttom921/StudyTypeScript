import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { Event } from "../model/Event";
@Component({
  selector: 'app-room1',
  templateUrl: './room1.component.html',
  styleUrls: ['./room1.component.scss']
})
export class Room1Component implements OnInit {
  ioConnection: any;
  messages: string[] = [];
  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.initIoConnection();
  }
  private initIoConnection(): void {
    this.socketService.initSocket();
    this.ioConnection = this.socketService.OnChatmessage().subscribe((message: string) => {
      this.messages.push(message);
    });

    this.socketService.onEvent(Event.CONNECT).subscribe(() => {
      console.log("connedted");
    });
    this.socketService.onEvent(Event.DISCONNECT).subscribe(() => {
      console.log("disconnedted");
    });
  }
}
