import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Offer, Price } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:9999';
  private productsUrl = `${this.baseUrl}/products`;
  private offerCalculation = `${this.baseUrl}/offers`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
  }

  calculateOffer(offer: Offer): Promise<Price> {
    return this.http.post<Price>(this.offerCalculation, offer).toPromise();
  }
}
