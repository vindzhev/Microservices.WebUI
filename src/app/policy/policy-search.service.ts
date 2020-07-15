import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PolicySearchResultList } from './policy';

@Injectable()
export class PolicySearchService {
    private baseUrl = 'http://localhost:9999';
    private getPolicies = `${this.baseUrl}\\policysearch`;

    constructor(private http: HttpClient) { }

    search(query: string): Promise<PolicySearchResultList> {
        return this.http.get<PolicySearchResultList>(`${this.getPolicies}?query=${query}`).toPromise();
    }
}
