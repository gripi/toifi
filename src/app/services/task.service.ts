import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task';

@Injectable()
export class TaskService {
public task: Task;

    constructor(private _afDB: AngularFireDatabase){

    }

    saveTask(task: Task){
        var t = this._afDB.list('project/task/').push(task);
        var i = t.key;

        var newI = {
            id: i,
            name: task.name,
            comment: task.comment,
            state: task.state
        }

        t.set(newI);
        return t;
    }

    getTask(id){
        return this._afDB.list('task/'+id).valueChanges();
    }

    getTasks(){
        return this._afDB.list('task/').valueChanges();
    }

    updateStateTask(id, task){
        return this._afDB.list('task/').update(id, task);
    }

    updateTask(task){
        return this._afDB.list('task/').update(task.id, task);
    }
}