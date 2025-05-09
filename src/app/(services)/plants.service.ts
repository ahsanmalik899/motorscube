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
       getSingleplantSale(saleID: string): Observable<any> {
        const url = `${this.apiUrl}get_single_plant_sale.php/?saleID=${saleID}`;  // Correct the API endpoint and append saleID query
        return this.http.get<any>(url);  // Return the Observable of the response
      }
      getSingleplanthire(saleID: string): Observable<any> {
        const url = `${this.apiUrl}get_single_plant_hire.php/?saleID=${saleID}`;  // Correct the API endpoint and append saleID query
        return this.http.get<any>(url);  // Return the Observable of the response
      }
      plantDeleteAds(userData: any): Observable<any> {
        // Assuming you have an API endpoint to save user data
        return this.http.post<any>(this.apiUrl + 'delete_vehicle_ads.php', userData);
      }
      getMakes(): Observable<string[]> {
        // Make a POST request to the API endpoint to fetch city names
        return this.http.get<string[]>(this.apiUrl + 'get_plant_make_name.php');
      }
      getModels() : Observable<string[]> {
        return this.http.get<string[]>(this.apiUrl + 'get_plant_type_name.php');
      }
      getVersions(versionData: FormData): Observable<string[]> {
        // Make a POST request to the API endpoint to fetch models based on the selected make
        return this.http.post<string[]>(this.apiUrl + 'get_plant_subtype_name.php', versionData);
      }
      plantsalePost(userData: any): Observable<any> {
        // Assuming you have an API endpoint to save user data
        return this.http.post<any>(this.apiUrl + 'save_plant_sale_post.php', userData);
      }
      plantHirePost(formData: FormData): Observable<any> {
        // Assuming you have an API endpoint to save user data
        return this.http.post<any>(this.apiUrl + 'save_plant_hire_post.php', formData);
      }
      plantHireUpdate(userData: any): Observable<any> {
        // Assuming you have an API endpoint to save user data
        return this.http.post<any>(this.apiUrl + 'save_plant_hire_update.php', userData);
      }
      plantSaleUpdate(userData: any): Observable<any> {
        // Assuming you have an API endpoint to save user data
        return this.http.post<any>(this.apiUrl + 'save_plant_sale_update.php', userData);
      }
}