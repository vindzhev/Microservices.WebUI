import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './products/services/product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';


import { ProductListItemComponent } from './products/product-list/product-list-item.component';
import { CoverListComponent } from './products/cover-list/cover-list.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OpenIdConnectService } from './shared/open-id-connect.service';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';

import { AddAuthorizationHeaderInterceptor } from './shared/http-interceptors/add-authorization-header-interceptor';
import { EnsureAcceptHeaderInterceptor } from './shared/http-interceptors/ensure-accept-header-interceptor';
import { WriteOutJsonInterceptor } from './shared/http-interceptors/write-out-json-interceptor';
import { HandleHttpErrorInterceptor } from './shared/http-interceptors/handle-http-error-interceptor';

import { RequireAuthenticatedUserRouteGuardService } from './shared/guards/require-authenticated-user-route-guard.service';
import { RedirectSilentRenewComponent } from './redirect-silent-renew/redirect-silent-renew.component';
import { CustomMaterialModuleModule } from './shared/material/custom-material-module.module';
import { GlobalErrorHandler } from './shared/global-error-handler';
import { ErrorLoggerService } from './shared/error-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductComponent,
    NavigationComponent,
    FooterComponent,
    ProductListItemComponent,
    CoverListComponent,
    SigninOidcComponent,
    RedirectSilentRenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,

    CustomMaterialModuleModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddAuthorizationHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EnsureAcceptHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WriteOutJsonInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleHttpErrorInterceptor,
      multi: true,
    },
    ProductService,
    OpenIdConnectService,
    GlobalErrorHandler,
    ErrorLoggerService,
    RequireAuthenticatedUserRouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
