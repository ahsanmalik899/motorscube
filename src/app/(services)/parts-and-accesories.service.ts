import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartsAndAccesoriesService {
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
    }