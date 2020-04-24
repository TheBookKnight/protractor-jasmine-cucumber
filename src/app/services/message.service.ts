import { Injectable } from '@angular/core';

// 'Injectable' marks the class that participates
// in the dependency injection system
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
