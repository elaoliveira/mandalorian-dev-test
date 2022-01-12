import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../model/tarefa';
import { Task } from '../model/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[]

  constructor(
    private http: HttpClient
  ) { }

  getAll():Observable <Task[]> {
    return this.http.get<Task[]>('http://localhost:8080/tarefas')
  }

  getByTitulo(titulo: String): Observable<Tarefa>{
    return this.http.get<Tarefa>(`http://localhost:8080/tarefas/${titulo}`)
  }

  post(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.post<Tarefa>('http://localhost:8080/tarefas', tarefa)
  }

  getById(id: string) {
    /*const task = this.tasks.find((value) => value.id == id);
    return task;*/
  }

  save(task: Task) {
    /*if (task.id) {
    const taskArr = this.getById(task.id);
     taskArr.description = task.description;
     taskArr.completed = task.completed;
    } else {
      const lastId = this.tasks[this.tasks.length-1].id;
      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task);  
    }*/
  } 

  delete(titulo: String) {
    return this.http.delete(`http://localhost:8080/tarefas/${titulo}`)
  }
}
