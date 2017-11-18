import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {
    private projectList;

    constructor(private _db: AngularFireDatabase){
        this.projectList = this._db.list<Project>('project/');
    }

    addProject(project: Project){
        return this.projectList.push(project);
    }

    getProjects(){
        return this.projectList;
    }

    getProject(id){
        return this._db.list('project/'+id).valueChanges();
    }
    
}