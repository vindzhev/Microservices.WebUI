import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { InsuranceProduct } from '@shared/models';
import { environment } from '@environments/environment';

@Injectable()
export class ProductsService {
    constructor(private httpClient: HttpClient) { }

    getProducts(): Observable<InsuranceProduct[]> {
        return this.httpClient.get<InsuranceProduct[]>(`${environment.apiUrl}/products`);
    }
}
