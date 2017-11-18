import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';


@Component({
    selector: 'add-task',
    providers: [TaskService],
    templateUrl: './add-task.component.html'
})
export class AddTaskComponent{
    public title: string;
    public task: Task;

    constructor(private _taskService: TaskService, private _router: Router){
        this.title = 'New Task';
        this.task = new Task('','','','todo');
    }

    saveTask(){
        this._taskService.saveTask(this.task);
        this.task.name = '';
        this.task.comment = '';
    }
}