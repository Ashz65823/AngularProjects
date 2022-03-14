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
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
//url -Some component should be shown
//message -
// login
//declare an array for the components
//Routes:- It is to manage navigation in angular app
//to use this we need to follow couple of step
/*
1) Declare an array which tells angular which URL is mapped with which component
2) Import RouterModule
3)In app.component.html write following tag
  <router-outlet></router-outlet>
*/
const routes:Routes=[//routes variable name--Routes type of variable
  {path:"login",component:LoginComponent},
  {path:"message",component:MessageComponent},
  {path:"",component:HomeComponent},
  {path:"home",redirectTo:""},//this is added to show home as default output
  //clicking on home in url will not get /home in url path
  {path:"**",component:NotfoundComponent}//this is mapped when any url is not found in above path
  //It is done so that we can show appropriate error message

  /*http://localhost:4200/home 
  Above url is redirected to following URL and that is mapped to home component
  Hence HomeComponent is shown
  http://localhost:4200*/ 
];
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageUpdateComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [//attribute present in decorator NgModule decorator
    BrowserModule,
    FormsModule,//this is MUST from ngModel
    RouterModule.forRoot(routes)//This model is responsible for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
