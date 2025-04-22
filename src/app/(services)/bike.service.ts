import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

export interface Make {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private apiUrl = 'https://motorscube.com/bike.motorscube.com/bike/';
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
    return this.http.get<string[]>(this.apiUrl + 'get_make_name.php');
  }
  getModels(makeData: FormData): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch models based on the selected make
    return this.http.post<string[]>(this.apiUrl + 'get_model_name.php', makeData);
  }
  bikeSalePost(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_bike_sale_post.php', userData);
  }
  bikeDeleteAds(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl+ 'delete-ads.php', formData);
  }
  bikeSaleUpdate(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_bike_sale_update.php', userData);
  }
  postDealerBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_post_dealer_business.php', formData);
  }
  postExporterBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_post_exporter_business.php', formData);
  }
  postImporterBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_post_importer_business.php', formData);
  }
  postInsuranceBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_post_insurance_business.php', formData);
  }
  postLeasingBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_post_leasing_business.php', formData);
  } 
  postShowroomBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_post_showroom_business.php', formData);
  } 
  postWorkshopBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_post_workshop_business.php', formData);
  } 
  carDeletePostBusines(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'delete_car_post_busines.php', userData);
  }
  updateDealerBusiness(adsId: string, formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'update_post_dealer_business.php', formData);
  }
  updateShowroomBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'update_post_showroom_business.php', formData);
  }
  updateInsuranceBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'update_post_insurance_business.php', formData);
  }
  updateLeasingBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'update_post_leasing_business.php', formData);
  }
  updateImporterBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'update_post_importer_business.php', formData);
  }
  updateExporterBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'update_post_exporter_business.php', formData);
  }
  updateWorkshopBusiness(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'update_post_workshop_business.php', formData);
  }
}
