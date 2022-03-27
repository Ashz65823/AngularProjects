import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { AuthenticationService } from '../service/authentication.service';
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
  constructor(private service: UserService, private router: Router,private authenticate:AuthenticationService) {
  }
  PerformLogin() {//to see if user name and password match
    //to check if userName and password is correct
    //by calling service method
    this.service.checkUser(this.user).subscribe(response => {
      let token = response.jwt;
      console.log(token);
      //Following statement stores token in sessionStorage of browser
      this.authenticate.login(token);
      this.router.navigate(['message']);
    });

    //if result is true show message
    //i.e we want to navigate to other component

    //this.router.navigate(['message'])//injecting message component
  }

  ngOnInit(): void {
  }

}
