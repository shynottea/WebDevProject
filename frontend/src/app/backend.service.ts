import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
     return this.http.get<Category[]>(
      `${this.BASE_URL}/category/categories/`
     )
  }

  getCategoryProducts(id: number): Observable<Product[]> {
    return this.http.get<Product[]>
    (`${this.BASE_URL}/category/categories/${id}/products`);
  }


}
