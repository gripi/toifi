import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';


@Component({
    selector: 'edit-task',
    providers: [TaskService],
    templateUrl: './edit-task.component.html'
})
export class EditTaskComponent implements OnInit{
    public title: string;
    public task: Task;
    public tasks;

    constructor(private _taskService: TaskService, private _router: Router, private _route: ActivatedRoute){
        this.title = 'Edit Task';
        this.task = new Task('','','','todo');
        this.tasks = [];
    }

    ngOnInit(){
        this.getTask();
    }


    getTask(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            
            this._taskService.getTask(id).subscribe(
                res => {
                    if(!res){
                        console.log('error save task client');
                    }else{
                        this.tasks = res;

                        this.task.comment = this.tasks[0];
                        this.task.id = this.tasks[1];
                        this.task.name = this.tasks[2];
                        this.task.state = this.tasks[3];
                    }
                    
                },
                err => {
                    console.log('error firebase list');
                }
            );

        });
    }

    updateTask(){
        this._taskService.updateTask(this.task);
        this._router.navigate(['/home']);
    }
}