import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  private apiUrl = 'http://localhost/plant/';
   constructor(private http: HttpClient) { }
    getPlantSale(): Observable<any[]> {
         return this.http.get<any[]>(this.apiUrl + 'get_plant_sale.php');
       }
       getPlantHire(): Observable<any[]> {
         return this.http.get<any[]>(this.apiUrl + 'get_plant_hire.php');
       }
}