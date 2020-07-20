import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    ProductsPage,
    ProductDetailsPage
} from './';

import { AuthenticationGuard } from '@core/guards';

const routes: Routes = [
    { path: '', component: ProductsPage, pathMatch: 'full' },
    { path: ':id', component: ProductDetailsPage, canActivate: [AuthenticationGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
