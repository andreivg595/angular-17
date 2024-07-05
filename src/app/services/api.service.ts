import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _http = inject(HttpClient);
  private baseURL: string = 'https://fakestoreapi.com/products';

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this.baseURL}`);
  }

  getProductsById(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`${this.baseURL}/${id}`);
  }
}
