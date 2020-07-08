import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OpenIdConnectService } from '../open-id-connect.service';

@Injectable()
export class AddAuthorizationHeaderInterceptor implements HttpInterceptor {

    constructor(private openIdConnectservice: OpenIdConnectService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: { Authorization: `${this.openIdConnectservice.user.token_type} ${this.openIdConnectservice.user.access_token}` }
        });

        return next.handle(request);
    }
}
