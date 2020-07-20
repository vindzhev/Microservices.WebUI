import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

const routes: Routes = [
  { path: 'policies', loadChildren: () => import('./modules/policy/policy.module').then(m => m.PolicyModule) },
  { path: 'products', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  { path: 'authentication', loadChildren: () => import('./modules/authentication').then(m => m.AuthenticationModule) },
  { path: '', pathMatch: 'full', loadChildren: () => import('./modules/home').then(x => x.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
