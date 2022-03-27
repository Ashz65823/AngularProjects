import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  //here we are injecting AuthenticationService
  constructor(private authentication: AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("In JWT Interceptor");
    let basicRequest = req.clone({
      setHeaders: { Authorization: 'Bearer ' + this.authentication.getToken() }
    })
    return next.handle(basicRequest);
  }
}
