import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Category {
  category_id: string;
  category_name: string;
}

export interface CarAccessoryResponse {
  success: boolean;
  message: string;
  accessory_id?: number;
}

export interface BikeAccessoryResponse {
  success: boolean;
  message: string;
  accessory_id?: number;
  uploaded_files?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PartsAndAccesoriesService {
  private apiUrl = environment.apiUrl;
  
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
  getbikeSubCategories(categoryId: number) {
    return this.http.get<{ subcategories: { subcategory_id: number; subcategory_name: string }[] }>(
      `${this.apiUrl}/get-bike-parts-sub-catagory.php?category_id=${categoryId}`
    );
  }
  getbikeCategories(): Observable<Category[]> {
    return this.http.get<{ categories: Category[] }>(this.apiUrl + 'get-bike-parts-catagory.php').pipe(
      map((response: { categories: Category[] }) => response.categories)
    );
  }
  addCarAccessory(formData: FormData): Observable<CarAccessoryResponse> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.post<CarAccessoryResponse>(
      this.apiUrl + 'add_car_accessory.php', 
      formData,
      { 
        headers,
        withCredentials: false
      }
    );
  }

  addBikeAccessory(formData: FormData): Observable<BikeAccessoryResponse> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.post<BikeAccessoryResponse>(
      this.apiUrl + 'add_bike_accessory.php', 
      formData,
      { 
        headers,
        withCredentials: false
      }
    );
  }

  addCommercialVehicle(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}add_commercial_vehicle.php`, formData);
  }
  addPlant(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}plant-access-ad-sale.php`, formData);
  }
  getcommercialSubCategories(categoryId: number) {
    return this.http.get<{ subcategories: { sub_category_id: number; sub_category_name: string }[] }>(
      `${this.apiUrl}/get-commercial-parts-sub-catagory.php?category_id=${categoryId}`
    );
  }
  getcommercialCategories(): Observable<Category[]> {
    return this.http.get<{ categories: Category[] }>(this.apiUrl + 'get-commercial-parts-catagory.php').pipe(
      map((response: { categories: Category[] }) => response.categories)
    );
  }

  addMachinery(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}add_machinery.php`, formData);
  }
  getmachineryCategories(): Observable<Category[]> {
    return this.http.get<{ categories: Category[] }>(this.apiUrl + 'get-machinery-parts-catagory.php').pipe(
      map((response: { categories: Category[] }) => response.categories)
    );
  }
  getmyproducts(storeId: string) {
    const formData = new FormData();
    formData.append('store_id', storeId);
  
    return this.http.post<{
      success: boolean;
      products: any[];
      message: string;
    }>(`${this.apiUrl}get-store-products.php`, formData);
  }
  getallproducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}get-all-products.php`);
  }

  getProductDetails(id: string, type: string): Observable<any> {
    return this.http.get(`${this.apiUrl}get-product-details.php`, {
      params: {
        id: id,
        type: type
      }
    });
  }
}