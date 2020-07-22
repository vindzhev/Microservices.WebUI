import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninOidcPage } from './pages/signin-oidc/signin-oidc.page';
import { RedirectSilentPage } from './pages/redirect-silent/redirect-silent.page';

const routes: Routes = [
    { path: 'signin-oidc', component: SigninOidcPage },
    { path: 'redirect-silent', component: RedirectSilentPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
