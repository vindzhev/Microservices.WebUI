import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    PolicySearchComponent,
    PolicyDetailsComponent
} from '.';
import { PolicyRoutingModule } from './policy-routing.module';

@NgModule({
    declarations: [
        PolicySearchComponent,
        PolicyDetailsComponent
    ],
    imports: [
        CommonModule,
        PolicyRoutingModule
    ],
    exports: []
})
export class PolicyModule { }
