import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//
export class AuthguardService implements CanActivate {
  //Router injection
  constructor(private router: Router) { }
  //calling method can be used to check if any specific router allows to access or not
  //if can activate methos true it allows to access the route
  //if return false not allowed to access the route
  canActivate(): boolean {
    console.log("In Can Activate");
    //to do
    //Check if user login is successful if yes->we should get true else false result
    //This result variable should be cheked in of block and accordingly navigation of application can be decided
    if (false) {
      this.router.navigate(['login'])//Navigate to login details 
      return false;//tell angular that the function is returning false and stop the access to message
    }
    return true;
  }
}
