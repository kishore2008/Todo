import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
   // private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    //in this interceptor we are adding basic authentication headers on top of original requests
     let username = 'kishore'
     let password = 'kishore'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
   // let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    //let username = this.basicAuthenticationService.getAuthenticatedUser()

    //if(basicAuthHeaderString && username) { 
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        }) 
    //}
    return next.handle(request);
  }

}
