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

  outputMessage: string = "";
  messages: Message[] = [];//array of Messages user defind type
  //constructor is accepting argument-->we have passed default value in message.ts
  msg: Message = new Message();//accept default value
  msg2: Message = new Message(104, "Divya");//message is the reference of Message component ->this values a passed a values while calling at message-update.html
  //Use DI to make object of service available in component
  //it is done by simply declaring an argument of service type in constructor

  updateBtnClick: boolean = false;
  constructor(private service: DataService) {
    this.loadMessage();
    //this is how we subscribe-->then o/p will be shown in springboot console
    //here Subscriber function defind how to ,what to do with result
    //here success contains result(Name can be of anything)

    //this.messages=service.getMessages();
    //data
    //responsibility of component?- Basic ui buliding block
    //this.messages=service.getMessages();
    //to execute Observable we have to subscribe to it
    //It is done using subscribe()method
    //here Subscriber function defind how to ,what to do with result
    //here success contains result(Name can be of anything)
    //service.getMessageWithObservales().subscribe(success=>this.messages=success)
    //Success is array of messages
  }
  loadMessage() {
    //in subscribe()first section is success- we get expected result
    //Proceed with o/p

    //Secound section is error-When we don't get expected result
    //Show error message to user
    //It is important for application to show appropriate error msg
    this.service.getMessages().subscribe(success => this.messages = success,
      error => this.outputMessage = "Server is down please try again!!"
    );

  }
  getMessages() {
    return this.messages;
  }
  //this is custom method accepting id from use
  delete(idToBeDeleted: number) {
    let result = confirm("Are you sure to delete the data ");
    if (result) {
      console.log("deleteMessage" + idToBeDeleted);
      this.service.deleteMessageById(idToBeDeleted)
        .subscribe(success => { this.outputMessage = "Message Deleted Successfully", this.loadMessage() });
    }
    else {
      this.outputMessage = "You clicked cancel";
    }
  }

  update(idTobeUpdated: number) {
    //for of loop
    this.updateBtnClick = true;
    for (const f of this.messages) {//for of gives element value-- for in gives index value
      if (f.id == idTobeUpdated) {
        //this.msg=f;
        this.msg = new Message(f.id, f.name);
        break;

      }
    }
  }
  //this method is called from child component
  //Responsible for updating in parent class
  doUpdate(messageTobeUpdated: Message) {
    console.log("In doUpdate() of MessageComponent(Parent)")
    console.log(messageTobeUpdated.id);
    console.log(messageTobeUpdated.name);
    this.service.updateMessage(messageTobeUpdated).subscribe
      (success => {
        this.outputMessage = "Message Updated", this.loadMessage();
      })

  }
  add(id: number, name: string) {

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