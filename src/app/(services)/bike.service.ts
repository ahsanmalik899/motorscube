import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private apiUrl = 'http://localhost/bike/';
  constructor(private http: HttpClient, private storage: Storage) { }
  getBikeSale(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'get_bike_sale_data.php');
  }
  getSingleBikeSale(saleID: string): Observable<any> {
    const url = `${this.apiUrl}get_single_bike_sale.php/?saleID=${saleID}`;  // Correct the API endpoint and append saleID query
    return this.http.get<any>(url);  // Return the Observable of the response
  }
  getdealershipData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bike_dealership.php');
  }
  getinsuranceData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bike_insurance.php');
  }
  getleasingData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bike_leasing.php');
  }
  getshowroomData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bike_showroom.php');
  }
  getimporterData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bike_importer.php');
  }
  getexporterData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bike_exporter.php');
  }
  getworkshopData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bike_workshop.php');
  }
  getMakes(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bike_make_name.php');
  }
  bikeSalePost(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_bike_sale_post.php', userData);
  }
  
}
