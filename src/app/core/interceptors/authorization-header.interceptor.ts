import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpEvent, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '@core/authentication';

@Injectable()
export class AuthorizationHeaderInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authenticationService.userAvailable) {
            request = request.clone({
                // tslint:disable-next-line: max-line-length
                setHeaders: { Authorization: `${this.authenticationService.user.token_type} ${this.authenticationService.user.access_token}` }
            });
        }

        return next.handle(request);
    }
}
