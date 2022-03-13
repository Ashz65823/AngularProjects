import { Injectable } from '@angular/core';
import { Message } from 'src/model/Message';
//@Injectable is a decorator used on top of service classes
//so tht it allows Angular to injuct server into components
//Benefit of Service- Share the data to multiple compoment and use it when ever needed
@Injectable({
  providedIn: 'root'
})//without this all the component inside message will be deleted
export class DataService {

  private messages: Message[] = [];
  constructor() {
    //Todo - this data should be festch from backend
    //Using springBoot Rest
    let m1 = new Message(101, "Swetha");//Message type
    let m2 = new Message(102, "Deepa"); //Message type
    let m3 = new Message(103, "Rama");
    let m4 = new Message(104, "Priya");

    this.messages.push(m1);//adding data into array of Message type
    this.messages.push(m2);//adding data into array of Message type
    this.messages.push(m3);
    this.messages.push(m4);
  }
  getMessages() {
  
    return this.messages;
  }
  createNewMessages(m:Message)
  {
    return this.messages;
  }
  
}
