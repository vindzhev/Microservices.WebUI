import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    HomePage,
    NotFoundPage
} from '.';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomePage,
        NotFoundPage
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    providers: [],
    exports: []
})
export class HomeModule { }
