import { Pipe, PipeTransform } from '@angular/core';

import { isObservable, of } from 'rxjs';
import { startWith, catchError, map } from 'rxjs/operators';

@Pipe({
    name: 'observalbeWithStatus'
})
export class ObservableWithStatus implements PipeTransform {
    transform(val: any) {
        return isObservable(val) ?
            val.pipe(
                map(value => ({ loading: false, value })),
                startWith({ loading: true }),
                catchError(error => of({ loading: false, error }))) : val;
    }
}
