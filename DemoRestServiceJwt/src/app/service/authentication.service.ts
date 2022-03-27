import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  //This method is responsible for checkinh if token is sessionStorage or not
  isLoggedIn(): boolean {
    let token = sessionStorage.getItem('token')
    return token != null;
  }

  //This method is responsible for returning value of token from  sessionStorage
  getToken() {
    return sessionStorage.getItem('token');
  }
  logout() {
    sessionStorage.removeItem('token')
  }
  //This method is responsible for storing Token on sessionStorage
  login(token: string) {
    sessionStorage.setItem('token', token);//key and value
  }
}
