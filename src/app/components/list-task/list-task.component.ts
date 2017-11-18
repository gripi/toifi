import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from '../../models/task';
import { Project } from '../../models/project';
import { TaskService } from '../../services/task.service';
import { ProjectService } from '../../services/project.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'list-task',
    providers: [TaskService, ProjectService],
    templateUrl: './list-task.component.html'
})
export class ListTaskComponent implements OnInit{
    public title: string;
    public tasks: any;
    public statusToDo: string;
    public projects: any;

    constructor(private _taskService: TaskService ,private _projectService: ProjectService, private _afDB: AngularFireDatabase, private _router: Router, private _route: ActivatedRoute){
        this.title = 'New Task';
        this.tasks = [];
        this.projects = [];
        this.statusToDo = 'empty';
    }

    ngOnInit(){
        this.getTasks();
    }

    getTasks(){
        this._taskService.getTasks().subscribe(
            res => {
                if(!res){
                    console.log('error save task client');
                }else{
                    this.tasks = res;
                }
                
            },
            err => {
                console.log('error firebase list');
            }
        );
    }

    changeToInProgress(task){
        task.state = 'inprogress';
        this._taskService.updateStateTask(task.id,task);
    }

    changeToFinished(task){
        task.state = 'finished';
        this._taskService.updateStateTask(task.id,task);
    }

}