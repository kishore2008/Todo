import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username='kishore'
   password=''
   errorMessage='invalid credentials'
   invalidLogin=false

   constructor(private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService){//injected router here in the constructor

   }

   ngOnInit(){

   }
   handleLogin(){
    //console.log(this.username);
    //if(this.username==="kishore" && this.password==="kishore"){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['/welcome',this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
   }
  

}
