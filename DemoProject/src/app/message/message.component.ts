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
  msg: Message = new Message(104, "Divya");//message is the reference of Message component ->this values a passed a values while calling at message-update.html

  constructor() {
    //todo :these data has to be fetched from backend using Springboot rest

    //data: 
    //Responsiblity of component? - Basic UI building block


    //What if same is needed by other component
    //we can use one service in multiple component
    let m1 = new Message(101, "Swetha");//Message type
    let m2 = new Message(102, "Deepa"); //Message type
    let m3 = new Message(103, "Rama");
    let m4 = new Message(104, "Priya");

    //let m3="Good Night";//string
    //let m4="Good Night";//string

//this was of doing is not recommended
    this.messages.push(m1);//adding data into array of Message type
    this.messages.push(m2);//adding data into array of Message type
    this.messages.push(m3);
    this.messages.push(m4);
//this was of doing is not recommended


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

  update(idTobeUpdated: number) {
    //for of loop
    for (const f of this.messages) {//for of gives element value-- for in gives index value
      if(f.id==idTobeUpdated)
      {
        //this.msg=f;
        this.msg=new Message(f.id,f.name);
        break;
      }
    }
  }
  //this method is called from child component
  //Responsible for updating in parent class
  doUpdate(messageTobeUpdated:Message)
  {
    console.log("In doUpdate() of MessageComponent(Parent)")
    console.log(messageTobeUpdated.id);
    console.log(messageTobeUpdated.name);
    for (const msg in this.messages) {//for in loop
      if (messageTobeUpdated.id==this.messages[msg].id) {
        this.messages[msg]=new Message(messageTobeUpdated.id,messageTobeUpdated.name);//this is used to update message
      }
    }
  }
  ngOnInit(): void {
  }

}
/* Sercice- This is responsible for dealing with data,backend,business logic
-Services don't have any view css and html only has spec and ts 
-returns result to component(basic bulidin part fr ui)
-Then component takes responsiblity of showing that in ui

component uses service for business logic i.e
component i dependent on service
service is dependency of component
DI(Dependency Injection)- In angular DI is used for component to use service
*/