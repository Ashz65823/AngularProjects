import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/model/Message';//to make this avaiale here we writting export in model.ts file
import { DataService } from '../data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 

  messages: Message[] = [];//array of Messages user defind type
  //constructor is accepting argument-->we have passed default value in message.ts
  msg:Message=new Message();//accept default value
  msg2: Message = new Message(104, "Divya");//message is the reference of Message component ->this values a passed a values while calling at message-update.html
//Use DI to make object of service available in component
//it is done by simply declaring an argument of service type in constructor

  updateBtnClick:boolean=false;
  constructor(private service:DataService) {
    this.messages=service.getMessages();
    //data
    //responsibility of component?- Basic ui buliding block
    //this.messages=service.getMessages();
    //to execute Observable we have to subscribe to it
    //It is done using subscribe()method
    //here Subscriber function defind how to ,what to do with result
    //here success contains result(Name can be of anything)
    this.service.getMessageWithObservales().subscribe(success=>this.messages=success)
  //Success is array of messages
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
    this.updateBtnClick=true;
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
        this.updateBtnClick=false;
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