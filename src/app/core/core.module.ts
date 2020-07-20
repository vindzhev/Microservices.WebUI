import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {
    AuthenticationGuard,

    HeaderComponent,
    FooterComponent,

    HttpErrorInterceptor,
    AcceptHeaderInterceptor,
    AuthorizationHeaderInterceptor,
} from './';

import { AngularMaterialModule } from '@shared/index';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AngularMaterialModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthorizationHeaderInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AcceptHeaderInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
        AuthenticationGuard
    ],
    exports: [
        AngularMaterialModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule { }
