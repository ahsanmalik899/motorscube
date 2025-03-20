import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class CommercialService {
  private apiUrl = 'http://localhost/Commercial/';
  constructor(private http: HttpClient, private storage: Storage) { }
  getCommercialSale(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'get_commercial_sale-data.php');
  }
  getCommercialHire(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'get_commercial_hire.php');
  }
}
