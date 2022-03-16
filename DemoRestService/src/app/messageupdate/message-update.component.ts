import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/model/Message';
import { DataService } from '../data.service';


@Component({
  selector: 'app-message-update',
  templateUrl: './message-update.component.html',
  styleUrls: ['./message-update.component.css']
})
export class MessageUpdateComponent implements OnInit {

  //@Input decorator tells that child accepting i/p from parent conponent
  @Input()
  message: Message = new Message(0, "");

  //@Output() is a decorator to pass data from child to parent component
  //EventEmitter is used to emit events so that data of specific type
  //can be passed 
  //Type of data is specified using generics syntax in EventEmitter
  //EventEmitter is imported from @angular/core-- be very careful
  @Output()
  updateMessage:EventEmitter<Message>=new EventEmitter<Message>();
  constructor(private service: DataService) { }
  performUpdate()
  {
    console.log("Message after updating is")
    console.log("Perform update of MeassageUpdateComponent")
    console.log(this.message.id);
    console.log(this.message.name);

    //Events are emmited using emit()method of EventEmitter
    //While emitting events we can pass data(in emit()method)
    //emit is publishing and passing data
    this.updateMessage.emit(this.message);
    
    //To do
    //Pass data from child to parent
    //Parent needs to be bound to this event
  }
  ngOnInit(): void {
  }

}
