import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicySearchComponent, PolicyDetailsComponent } from './';

import { AuthenticationGuard } from '@core/index';

const routes: Routes = [
    { path: '', component: PolicySearchComponent, pathMatch: 'full', canActivate: [AuthenticationGuard] },
    { path: ':id', component: PolicyDetailsComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PolicyRoutingModule { }
