import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string,password: string){
    if(username==="kishore" && password==='kishore'){
      sessionStorage.setItem('authenticatedUser',username)//we are using sessionstorage object here to check if user is logged in or not
      return true;
}else{
  return false;
}

 }
 isUserLoggedin(){
  let user = sessionStorage.getItem('authenticatedUser')
  return !(user===null);
 }
 logout(){//here we are removing the authenticated user from session storage
  sessionStorage.removeItem('authenticatedUser')

 }
}
