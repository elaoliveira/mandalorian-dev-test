import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import {Task} from '../model/task';
import { Tarefa } from '../model/tarefa';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input()
  tarefa: Tarefa = new Tarefa();
  tarefaArray: Tarefa[] = [];
  task: Task = new Task();
  listaTask: Task [];

  constructor(private taskService: TaskService) { }

  ngOnInit(){
    this.getAllTask()
  }

  // remove(task: Task){
  //   this.taskService.delete(task.titulo);
  // }

  onCompletedCheckChange(task: Task){
    this.taskService.save(task);
  }

  getAllTask(){
    this.taskService.getAll().subscribe((resp: Task[])=>{
      for(var i = 0; i < resp.length; i++ ){
        this.getTarefa(resp[i].toString())
      }
    });
  }

  getTarefa(titulo: String){
    this.taskService.getByTitulo(titulo).subscribe((resp: Tarefa)=>{
      this.tarefaArray.push(resp);
    })
  }

  delete(titulo: String){
    this.taskService.delete(titulo).subscribe(()=>{
      alert("Tarefa deletada!")
      location.reload(), 1000
    })
  }

}
