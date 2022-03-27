import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './service/authentication.service';

@Injectable({
  providedIn: 'root'
})
//
export class AuthguardService implements CanActivate {
  //Router injection
  constructor(private router: Router,private authentication:AuthenticationService) { }
  //calling method can be used to check if any specific router allows to access or not
  //if can activate methos true it allows to access the route
  //if return false not allowed to access the route
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //True or false is sent to app.model where we have specifyied can activate if true on sucessfull login in message page will be displayed
    console.log("In Auth Guard-------------------------")
    console.log("In Can Activate");
    //let token = sessionStorage.getItem('token');
    let result=this.authentication.isLoggedIn();
    //to do
    //Check if user login is successful if yes->we should get true else false result
    //This result variable should be cheked in of block and accordingly navigation of application can be decided
    //if it is true allow user to access message router
    if (result) {
      return true;
    }
    //If it is false means user has not logged in so shows login page
    else {
      this.router.navigate(['login'])//Navigate to login details 
      return false;//tell angular that the function is returning false and stop the access to message
    }
  }
}
