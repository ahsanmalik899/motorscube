import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineryService {


  private apiUrl = 'http://localhost/machinery/';
  constructor(private http: HttpClient) { }
    getMachinerySale(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl + 'get_machinery_sale.php');
    }
    getMachineryHire(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl + 'get_machinery_hire.php');
    }
}
