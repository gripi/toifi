import { Component } from '@angular/core';

@Component({
    selector: 'newheader',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    public title: string;

    constructor(){
        this.title = 'Header';
    }
}