import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  condition: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  color: string;
  location: string;
  description: string;
  images: string[];
  seller: {
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
    activeListings: number;
    completedSales: number;
    responseRate: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  async getProductDetails(productId: number): Promise<Product> {
    const response = await firstValueFrom(
      this.http.get<{ success: boolean; product: Product }>(
        `${this.apiUrl}/products/${productId}`
      )
    );

    if (!response.success || !response.product) {
      throw new Error('Failed to load product details');
    }

    return response.product;
  }

  async getRelatedProducts(productId: number, category: string): Promise<Product[]> {
    const response = await firstValueFrom(
      this.http.get<{ success: boolean; products: Product[] }>(
        `${this.apiUrl}/products/related`,
        {
          params: {
            productId: productId.toString(),
            category
          }
        }
      )
    );

    if (!response.success || !response.products) {
      throw new Error('Failed to load related products');
    }

    return response.products;
  }

  searchProducts(query: string, filters?: any): Observable<Product[]> {
    return this.http.get<{ success: boolean; products: Product[] }>(
      `${this.apiUrl}/products/search`,
      {
        params: {
          query,
          ...filters
        }
      }
    ).pipe(
      map(response => {
        if (!response.success || !response.products) {
          throw new Error('Failed to search products');
        }
        return response.products;
      })
    );
  }
} 