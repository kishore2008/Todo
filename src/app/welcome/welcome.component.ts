import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  message='ToDoList Application'
  welcomeMessageFromService !:string
  name=''
  
  //ActivatedRoute -> what is the route that is currently active(using this to get the parameter being passed in with Url like name,id etc)
  constructor(private route:ActivatedRoute,private service:WelcomeDataService){}

  ngOnInit(){
    //console.log(this.message)
    this.name = this.route.snapshot.params['name'] //helps to put user name in the welcome component.here we are picking up the username through a method in route and assigning it to name
 }
 getWelcomeMessage(){
  //console.log(this.service.executeHelloWorldBeanService());
  this.service.executeHelloWorldBeanService().subscribe(
    response=>this.handleSuccessfullResponse(response)
  );
  //console.log('last line of getWelcomeMessage')
  //console.log("get welcome message")
 }
 handleSuccessfullResponse(response: HelloWorldBean){
  this.welcomeMessageFromService=response.message
  //console.log(response);
  //console.log(response.message)
 }

 getWelcomeMessageWithParameter(){
  //console.log(this.service.executeHelloWorldBeanService());
  this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
    response=>this.handleSuccessfullResponse(response)
  );
  //console.log('last line of getWelcomeMessage')
  //console.log("get welcome message")

}
}
