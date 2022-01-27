import { Component, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent  {

  constructor(public messageService: MessageService) { }


}
