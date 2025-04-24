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
    return this.http.get<any[]>(this.apiUrl + 'get_commercial_sale.php');
  }
  getCommercialHire(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'get_commercial_hire.php');
  }
  getSinglevehicleSale(saleID: string): Observable<any> {
    const url = `${this.apiUrl}get_single_vehicle_sale.php/?saleID=${saleID}`;  // Correct the API endpoint and append saleID query
    return this.http.get<any>(url);  // Return the Observable of the response
  }
  getSinglevehiclehire(saleID: string): Observable<any> {
    const url = `${this.apiUrl}get_single_vehicle_hire.php/?saleID=${saleID}`;  // Correct the API endpoint and append saleID query
    return this.http.get<any>(url);  // Return the Observable of the response
  }
  
  getinsuranceData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_vehicle_insurance.php');
  }
  getdealershipData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_vehicle_dealership.php');
  }
  getexporterData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_vehicle_exporter.php');
  }
   getimporterData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_vehicle_importer.php');
  }
  getworkshopData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_vehicle_workshop.php');
  }
  getschoolData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_vehicle_school.php');
  }
  getleasingData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_vehicle_leasing.php');
  }
  getshowroomData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_vehicle_showroom.php');
  }
   getMakes(): Observable<string[]> {
      // Make a POST request to the API endpoint to fetch city names
      return this.http.get<string[]>(this.apiUrl + 'get_vehicle_make_name.php');
    }
    commercialDeleteAds(userData: any): Observable<any> {
      // Assuming you have an API endpoint to save user data
      return this.http.post<any>(this.apiUrl + 'delete_vehicle_ads.php', userData);
    }
    getModels() : Observable<string[]> {
      return this.http.get<string[]>(this.apiUrl + 'get_vehicle_type_name.php');
    }
    getVersions(versionData: FormData): Observable<string[]> {
      // Make a POST request to the API endpoint to fetch models based on the selected make
      return this.http.post<string[]>(this.apiUrl + 'get_vehicle_subtype_name.php', versionData);
    }
    carSalePost(userData: any): Observable<any> {
      // Assuming you have an API endpoint to save user data
      return this.http.post<any>(this.apiUrl + 'save_vehicle_sale_post.php', userData);
    }
    carHirePost(formData: FormData): Observable<any> {
      // Assuming you have an API endpoint to save user data
      return this.http.post<any>(this.apiUrl + 'save_vehicle_hire_post.php', formData);
  }
}
