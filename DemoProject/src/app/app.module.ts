import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageUpdateComponent } from './messageupdate/message-update.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageUpdateComponent
  ],
  imports: [//attribute present in decorator NgModule decorator
    BrowserModule,
    FormsModule//this is MUST from ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
