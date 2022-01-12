import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../model/tarefa';
import { Task } from '../model/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  tarefa: Tarefa = new Tarefa();
  title: string = 'Nova tarefa';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      /*this.task = this.taskService.getById(parseInt(id));
      this.title = 'Alterando tarefa';*/
    }
  }

  onSubmit(){
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }

  post(tarefa: Tarefa){
    this.taskService.post(tarefa).subscribe(()=>{
      alert("Tarefa adicionada!")
      this.router.navigate(['/task-list']);
    })
  }
  


}
