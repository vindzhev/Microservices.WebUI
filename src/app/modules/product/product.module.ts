import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    ProductsPage,
    ProductDetailsPage,
    ProductQuestionsComponent,
    ProductsCollectionComponent,
    HolderInformationComponent,
    ProductsService
} from '.';
import { ProductRoutingModule } from './product-routing.module';

import {
    SharedModule,
    AngularMaterialModule
} from '@shared/.';

@NgModule({
    declarations: [
        ProductsPage,
        ProductDetailsPage,

        ProductQuestionsComponent,
        ProductsCollectionComponent,
        HolderInformationComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductRoutingModule,

        SharedModule,
        AngularMaterialModule
    ],
    providers: [ProductsService],
    exports: [
        SharedModule,
        AngularMaterialModule
    ]
})
export class ProductModule { }
