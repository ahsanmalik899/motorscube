import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'https://motorscube.com/user-app/';

  constructor(private http: HttpClient) { }

  searchVehicles(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search.php?query=${encodeURIComponent(query)}`);
  }

  searchByCategory(category: string, query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}search.php?category=${encodeURIComponent(category)}&query=${encodeURIComponent(query)}`);
  }
} 