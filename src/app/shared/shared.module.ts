import { NgModule } from '@angular/core';

import {
    AngularMaterialModule,
    ErrorLoggerService,
    GlobalErrorHandler
} from './';

@NgModule({
    declarations: [],
    imports: [
        AngularMaterialModule
    ],
    providers: [
        ErrorLoggerService,
        GlobalErrorHandler
    ],
    exports: []
})
export class SharedModule { }
