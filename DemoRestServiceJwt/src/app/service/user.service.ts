import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/model/User';
import { UserResponse } from 'src/model/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  checkUser(user:User)
{
  //
  return this.http.post<UserResponse>('http://localhost:8083/api/user/authenticate',user);
}

}
