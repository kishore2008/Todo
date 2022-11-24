import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-to-do/list-to-do.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  id !:number
  todo !:Todo
  constructor(
    private todoService:TodoDataService,
    private router: Router,
    private route:ActivatedRoute
  ){}


ngOnInit(){
  this.id=this.route.snapshot.params['id'];
  this.todo = new Todo(this.id,'','false',new Date());

  if(this.id!=-1){
  this.todoService.retreiveTodo('kishore',this.id)
    .subscribe(
      data=>this.todo=data
    )   
  } 
}
saveTodo() {
  if(this.id === -1) { 
    this.todoService.createTodo('kishore', this.todo)
        .subscribe (
          (          data: any) => {
            console.log(data)
            this.router.navigate(['todo'])
          }
        )
  } else {
    this.todoService.updateTodo('kishore', this.id, this.todo)
        .subscribe (
          (          data: any) => {
            console.log(data)
            this.router.navigate(['todo'])
          }
        )
  }
}
}

