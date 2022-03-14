import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    //Todo - this data should be fetched from backend
    //Using springBoot Rest(back end)

    //Whenever our application talks to rest end points
    //-It is network call, hence it is time consuming, blocking
    //If it block the ui it is bad (As it is no more intercative)
    //Do this using Asynchronously->don't have to untill server finish it task this is one in Observable
    //To avoid this it is recommended to use Observable
    
  }
  //doesn't use Observable it is syncronized call
  getMessages() {
  
    return this.messages;
  }
  //observable are Asyncronized call
  getMessageWithObservales():Observable<Message[]>
  {
    return of(this.messages)
    //build in method conver array into observable
  }
  createNewMessages(m:Message)
  {
     this.messages.push(m);
  }
  
}
