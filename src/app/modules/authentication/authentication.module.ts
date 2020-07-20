import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    SigninOidcPage,
    RedirectSilentPage
} from '.';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
    declarations: [
        SigninOidcPage,
        RedirectSilentPage
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule
    ],
    providers: [],
    exports: []
})
export class AuthenticationModule { }

