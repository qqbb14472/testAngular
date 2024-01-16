import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  // 必须为public，Angular 只会绑定到组件的公共属性
  constructor(public messageService: MessageService){
  
  }

}
