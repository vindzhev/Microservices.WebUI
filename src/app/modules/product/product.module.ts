import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    ProductsPage,
    ProductDetailsPage,
} from '.';
import { ProductRoutingModule } from './product-routing.module';

import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';

@NgModule({
    declarations: [
        ProductsPage,
        ProductDetailsPage
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,

        AngularMaterialModule
    ],
    providers: [],
    exports: [
        AngularMaterialModule
    ]
})
export class ProductModule { }
