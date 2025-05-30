import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
export interface Category {
  category_id: string;
  category_name: string;
}
@Injectable({
  providedIn: 'root'
})
export class PartsAndAccesoriesService {
  submitAccessory(formData: FormData) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost/parts-and-accesories/';
   constructor(private http: HttpClient) { }
  createstore(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'create_store.php', formData);
  }
  
  getStore(user_id: string): Observable<any> {
    const formData = new FormData();
    formData.append('user_id', user_id);
    return this.http.post<any>(this.apiUrl + 'get-store.php', formData);
  }
   updateStore(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}update_store.php`, formData);
  }
  getstorebyid(user_id: string): Observable<any> {
    const formData = new FormData();
    formData.append('store_id', user_id);
    return this.http.post<any>(this.apiUrl + 'get-store-by-id.php', formData);
  }
  getSubCategories(categoryId: number) {
    return this.http.get<{ subcategories: { subcategory_id: number; subcategory_name: string }[] }>(
      `${this.apiUrl}/get-car-parts-sub-catagory.php?category_id=${categoryId}`
    );
  }
getCategories(): Observable<Category[]> {
  return this.http.get<{ categories: Category[] }>(this.apiUrl + 'get-car-parts-catagory.php').pipe(
    map((response: { categories: Category[] }) => response.categories)
  );
}
    }