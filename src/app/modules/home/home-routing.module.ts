import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    HomePage,
    NotFoundPage
} from './';

const routes: Routes = [
    { path: '', component: HomePage, pathMatch: 'full' },
    { path: '**', component: NotFoundPage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
