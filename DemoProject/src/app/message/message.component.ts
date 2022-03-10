import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/model/Message';//to make this avaiale here we writting export in model.ts file

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  //messages: string[] = [];//array of string

  messages: Message[] = [];//array of Messages user defind type
  constructor() {
    let m1 = new Message(101, "Swetha");//Message type
    let m2 = new Message(102, "Deepa"); //Message type
    let m3 = new Message(103, "Rama");
    //let m3="Good Night";//string
    //let m4="Good Night";//string

    this.messages.push(m1);//adding data into array of Message type
    this.messages.push(m2);//adding data into array of Message type
    this.messages.push(m3);

    // this.messages.push(m3);//adding string into array-> push is a method to add into array
    // this.messages.push(m4);//adding string into array-> push is a method to add into array

  }
  getMessages() {
    return this.messages;
  }
  //this is custom method accepting id from use
  delete(idToBeDeleted: number) {
    console.log("Data Deleted" + idToBeDeleted)
  }
  update(idTobeUpdated: string) {
    console.log("Updated " + idTobeUpdated)
  }
  ngOnInit(): void {
  }

}
