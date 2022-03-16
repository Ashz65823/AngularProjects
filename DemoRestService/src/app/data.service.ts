import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from 'src/model/Message';
//@Injectable is a decorator used on top of service classes
//so tht it allows Angular to injuct server into components
//Benefit of Service- Share the data to multiple compoment and use it when ever needed
@Injectable({
  providedIn: 'root'
})//without this all the component inside message will be deleted
export class DataService {

  private messages: Message[] = [];
  //This is DI for HttpsClient
  constructor(private http: HttpClient) {
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
    //return this.messages;
    //This is job of service
    //This return observable
    //This Obsevable needs to subscribed to get result otherwise nothing happens

    //Following wnd point is secured hence to access it we must pass credentials
    //Passing credentials is done using http header
    //There is a standad hedder called as 'Autorization' used to this purpose
    //btoa- is used to conver credentails into base64 encoded format

    // let h = new HttpHeaders().append("Authorization", "Basic " + btoa("zensar:zensar123"))//btoa-->binary to ascii (username:password)
    return this.http.get<Message[]>(environment.url + '/api/message')//return observable-->we have to subscribe to access observable-->http call from client to server

  }
  deleteMessageById(id: number) {
    return this.http.delete(environment.url + '/api/message/' + id);//delete message by id-->http call from client to server
  }
  updateMessage(m: Message) {
    return this.http.put<Message>(environment.url + '/api/message', m);//http call from client to server
  }
  createNewMessages(m: Message) {
    this.messages.push(m);
  }

}
