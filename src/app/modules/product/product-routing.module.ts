import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    ProductsPage,
    ProductDetailsPage
} from './';

import { AuthenticationGuard } from '@core/guards';

const routes: Routes = [
    // { path: '', component: ProductsPage, pathMatch: 'full' },
    { path: ':category', component: ProductsPage },
    { path: ':category/offers', component: ProductDetailsPage, canActivate: [AuthenticationGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
