import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//HttpIntercepto interface gives you a method which automatically execute for all out going Http request
//This give you an oppertunity to carry out commom functionaly for all http outgoing request
//For eg., passing credentials through headers while accessing secured rest end points 
//It is mandatory to make entry of this class in app.module.ts class
export class BasicInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("In basic Interceptor");
    let basicRequest = req.clone({
      setHeaders: { Authorization: 'Basic ' + btoa('zensar:zensar123') }
    })
    return next.handle(basicRequest);
  }
}
