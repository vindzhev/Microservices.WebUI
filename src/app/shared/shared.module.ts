import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    AngularMaterialModule,
    ErrorLoggerService,
    GlobalErrorHandler,
    LoaderComponent
} from './';
import { ObservableWithStatus } from './pipes';

@NgModule({
    declarations: [
        LoaderComponent,
        ObservableWithStatus
    ],
    imports: [
        CommonModule,
        AngularMaterialModule
    ],
    providers: [
        ErrorLoggerService,
        GlobalErrorHandler
    ],
    exports: [
        LoaderComponent,
        ObservableWithStatus
    ]
})
export class SharedModule { }
