import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { environment } from '@environments/environment';

@Injectable()
export class CategoryService {
    constructor(private httpClient: HttpClient) { }

    getCategories(): Observable<string[]> {
        return this.httpClient.get<string[]>(`${environment.apiUrl}/categories`);
    }
}
