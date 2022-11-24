import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{//we are creating a class for ToDo list
  constructor(
    public id:number,
    public description:string,
    public done:string,
    public targetDate:Date
  ){}
}

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  todos !: Todo[] ;
  message!: string;
 
  
    //= [
    // new Todo(1,'Learn Java', 'Not Yet done' ,new Date()),
    //new Todo(2,'Learn Angular', 'Not Yet done',new Date()),
    //new Todo(3,'Learn SpringBoot', 'Not Yet done',new Date())
    //]
    
  //= [
   // new Todo(1,'Learn Java', 'Not Yet done' ,new Date()),

    //new Todo(2,'Learn Angular', 'Not Yet done',new Date()),

    //new Todo(3,'Learn SpringBoot', 'Not Yet done',new Date())
    
      
    
  //]
 

  constructor(
    private todoService:TodoDataService,
    private router:Router
  ){}

  ngOnInit() {
    this.refreshTodos();
      }

      refreshTodos(){
        this.todoService.retreiveAllTodos('kishore').subscribe(
          ( response: any) =>{
            console.log(response);
            this.todos=response;
          }
        )
      }


deleteTodo(id: any) {
  console.log(`delete todo ${id}` )
  this.todoService.deleteTodo('kishore', id).subscribe (
    response => {
      console.log(response);
      this.message = `Delete Successful!`;
      this.refreshTodos();
    }
  )
}
updateTodo(id:number) {
  console.log(`update ${id}`)
  this.router.navigate(['todos',id])
}

addTodo() {
  this.router.navigate(['todos',-1])
}
 }

