import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ServerResponse {
  success: boolean;
  message: string;
  accessory_id?: number;
  uploaded_files?: string[];
  upladed_files?: string[]; // For backward compatibility
}

@Injectable({
  providedIn: 'root'
})
export class PartsAndAccesoriesService {
  private apiUrl = environment.apiUrl + '/parts-and-accesories';

  constructor(private http: HttpClient) { }

  // Add car accessory
  addCarAccessory(formData: FormData): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(`${this.apiUrl}/add_car_accessory.php`, formData);
  }

  // Get categories
  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_categories.php`);
  }

  // Get subcategories
  getSubCategories(categoryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_subcategories.php?category_id=${categoryId}`);
  }

  // Get makes
  getMakes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_makes.php`);
  }

  // Get models
  getModels(makeId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_models.php?make_id=${makeId}`);
  }

  // Get versions
  getVersions(modelId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_versions.php?model_id=${modelId}`);
  }

  // Get cities
  getCities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_cities.php`);
  }
} 