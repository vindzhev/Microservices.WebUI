import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PolicyCollectionComponent, PolicyDetailsComponent, PolicyCreateComponent } from './';
import { RequireAuthenticatedUserRouteGuardService } from '../shared/guards/require-authenticated-user-route-guard.service';

const routes: Routes = [
  { path: '', component: PolicyCollectionComponent, pathMatch: 'full', canActivate: [RequireAuthenticatedUserRouteGuardService] },
  { path: 'buy/:id', component: PolicyCreateComponent, pathMatch: 'full', canActivate: [RequireAuthenticatedUserRouteGuardService] },
  { path: ':id', component: PolicyDetailsComponent, canActivate: [RequireAuthenticatedUserRouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
