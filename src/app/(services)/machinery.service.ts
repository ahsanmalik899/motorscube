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
    getSinglemachinerySale (saleID: string): Observable<any> {
      const url = `${this.apiUrl}get_single_machinery_sale.php/?saleID=${saleID}`;  // Correct the API endpoint and append saleID query
      return this.http.get<any>(url);  // Return the Observable of the response
    }
    getSinglemachineryhire(saleID: string): Observable<any> {
      const url = `${this.apiUrl}get_single_machinery_hire.php/?saleID=${saleID}`;  // Correct the API endpoint and append saleID query
      return this.http.get<any>(url);  // Return the Observable of the response
    }
    getinsuranceData(): Observable<string[]> {
      // Make a POST request to the API endpoint to fetch city names
      return this.http.get<string[]>(this.apiUrl + 'get_machinery_insurance.php');
    }
    
  getdealershipData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_machinery_dealership.php');
  }
  getexporterData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_machinery_exporter.php');
  }
   getimporterData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_machinery_importer.php');
  }
  getworkshopData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_machinery_workshop.php');
  }
  getschoolData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_machinery_school.php');
  }
  getleasingData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_machinery_leasing.php');
  }
  getshowroomData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_machinery_showroom.php');
  }
}
