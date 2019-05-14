import { Injectable } from '@angular/core';

import * as socketIo from "socket.io-client";

import { Event } from "../model/event";
import { Observable } from 'rxjs';

const SERVER_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: socketIo;

  constructor() { }

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }
  public send(msg: string): void {
    this.socket.emit("chatmessage", msg);
  }
  public OnChatmessage(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on("chatmessage", (data: string) => observer.next(data));
    });
  }
  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
