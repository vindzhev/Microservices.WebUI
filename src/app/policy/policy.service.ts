import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from './policy';
import { Observable } from 'rxjs';

@Injectable()
export class PolicyService {
    private baseUrl = 'http://localhost:5001';
    private getPolicyByIdUrl = `${this.baseUrl}\\policies`;

    constructor(private http: HttpClient) { }

    getPolicyById(id: string): Observable<Policy> {
        return this.http.get<Policy>(`${this.getPolicyByIdUrl}\\${id}`);
    }
}
