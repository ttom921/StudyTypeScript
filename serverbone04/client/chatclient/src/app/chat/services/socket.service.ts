import { Injectable } from '@angular/core';

import * as socketIo from "socket.io-client";

import { Event } from "../model/event";
import { Observable } from 'rxjs';

//const SERVER_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: socketIo;

  constructor() { }

  public initSocket(ns_url: string): void {
    this.socket = socketIo(ns_url);
  }
  public disconnect(): void {
    this.socket.disconnect();
  }
  public getNameSpace(): string {
    return this.socket.nsp;
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
  //----------------------------------------
  public OnWelcome(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on("Welcome", (data: any) => observer.next(data));
    });
  }
  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on("Message", (data: any) => observer.next(data));
    });
  }
  public getNamespaceList() {
    this.socket.emit("GetNamespaceList");
  }
  public OnGetNamespaceList(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on("GetNamespaceList", (data: any) => observer.next(data));
    });
  }
  public createNamespace(nsname: string) {
    this.socket.emit("createNamespace", { name: nsname });
  }
  public joinToNamespace(nsname: string): void {
    this.socket.emit("JoinToApp", { namespace: nsname });
  }
  public OnJoinToApp(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on("JoinToApp", (data: any) => observer.next(data));
    });
  }
}
