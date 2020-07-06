import { Injectable } from '@angular/core';

@Injectable()
export class ErrorLoggerService {
    logError(error: any) {
        console.log('An error occured', 'An error occured', error);
    }
}
