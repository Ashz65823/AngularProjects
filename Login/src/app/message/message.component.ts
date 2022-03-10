import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {//make this class accessable we use export

  message = "Welcome to Angular World"
  constructor() { }

  ngOnInit(): void {
  }
  sayHello(): string {
    return "Hello Message from say Hello";
  }
}
