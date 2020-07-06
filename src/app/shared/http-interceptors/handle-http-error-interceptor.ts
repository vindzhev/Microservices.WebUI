import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GlobalErrorHandler } from '../global-error-handler';

@Injectable()
export class HandleHttpErrorInterceptor implements HttpInterceptor {

    constructor(private globalErrorHandler: GlobalErrorHandler) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    const errorToLog = (error.error instanceof Error) ?
                        `Http errpr (client|network). ${error.message}` :
                        `Http error (unsuccessful reponse). Message: ${error.message}, status code: ${(error).status}, body: ${JSON.stringify(error.error)}`;

                    this.globalErrorHandler.handleError(errorToLog);

                    if (error.status === 422) {
                        return throwError(error.error);
                    } else {
                        return of(new HttpResponse());
                    }
                })
            );
    }
}
