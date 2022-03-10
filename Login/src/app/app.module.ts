import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { RegisterComponent } from './register/register.component';

@NgModule({//declaring class as module -->
  declarations: [//array of components
    AppComponent,
    MessageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]//this will run first
})
export class AppModule { }//this call is also decorated @NgModule
//one angular can consist one or more component and one component can have one or more module
