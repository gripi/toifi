import {Project} from './project';

export class Task{
    constructor(
        public id: string,
        public name: string,
        public comment: string,
        public state: string
    ){}
}