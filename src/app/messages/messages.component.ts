import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  // injects MessageService Singleton into the property
  // 'public' because Angular binds to such properties
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
