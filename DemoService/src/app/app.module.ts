import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageUpdateComponent } from './messageupdate/message-update.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageUpdateComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [//attribute present in decorator NgModule decorator
    BrowserModule,
    FormsModule//this is MUST from ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
