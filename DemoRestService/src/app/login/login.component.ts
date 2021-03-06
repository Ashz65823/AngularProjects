import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();//-->calling class-->class defind in model folder under user.ts -->user class can have default variable defind

  //DI (Dependance injecting)
  //Here we are doing DI for userService and router
  constructor(private service: UserService, private router: Router) {
  }
  PerformLogin() {//to see if user name and password match
    // console.log("User Name is =", this.user.userName);
    // console.log("Password is =", this.user.password)
    //to check if userName and password is correct
    //by calling service method
    let result = this.service.checkUser(this.user)

    //if result is true show message
    //i.e we want to navigate to other component
    if (result) {
      //navigate from here to other component becoz result is true
      //Hence we need to injuect router in our paths
      this.router.navigate(['message'])//injecting message component
    }
    else {
      alert("Invalid User name or Password")
      this.user.userName = '';
      this.user.password = '';

    }
  }
  ngOnInit(): void {
  }

}
