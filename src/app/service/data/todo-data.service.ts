import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-to-do/list-to-do.component';
//import { TODO_JPA_API_URL } from './../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }


  retreiveAllTodos(username: string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    //console.log("Execute Hello World Bean Service")
  }

   deleteTodo(username: string,id: number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
   }
   retreiveTodo(username: string,id: number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
   }
   updateTodo(username: string, id: number, todo: Todo){
    return this.http.put(
          //`${TODO_JPA_API_URL}/users/${username}/todos/${id}`//
          `http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: Todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
             
  }


}
