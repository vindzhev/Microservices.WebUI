import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { RequireAuthenticatedUserRouteGuardService } from './shared/guards/require-authenticated-user-route-guard.service';
import { RedirectSilentRenewComponent } from './redirect-silent-renew/redirect-silent-renew.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'account', component: HomeComponent },
  {
    path: 'products', children: [
      { path: '', component: ProductListComponent, pathMatch: 'full', canActivate: [RequireAuthenticatedUserRouteGuardService] },
      { path: ':id', component: ProductComponent, canActivate: [RequireAuthenticatedUserRouteGuardService] }
    ]
  },
  { path: 'policies', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signin-oidc', component: SigninOidcComponent },
  { path: 'redirect-silentrenew', component: RedirectSilentRenewComponent },
  { path: '**', component: HomeComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
