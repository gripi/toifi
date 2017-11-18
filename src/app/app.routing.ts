import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home/:id', component: HomeComponent },
    { path: 'edit-task/:id', component: EditTaskComponent },
    { path: 'list-task/:id', component: ListTaskComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);