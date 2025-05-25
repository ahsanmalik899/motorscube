import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  private apiUrl = 'http://localhost/commercial/';
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
  commercialSaleUpdate(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_vehicle_sale_update.php', userData);
  }
  commercoalHireUpdate(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_vehicle_hire_update.php', userData);
  }
  commercialDeletePostBusines(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'delete_vehicle_post_busines.php', userData);
  }


  
postDealerBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_vehicle_dealer_business.php', formData);
}
updateDealerBusiness(adsId: string, formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_vehicle_dealer_business.php', formData);
}
postInsuranceBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_vehicle_insurance_business.php', formData);
}
updateInsuranceBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_vehicle_insurance_business.php', formData);
}
postLeasingBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_vehicle_leasing_business.php', formData);
}
updateLeasingBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_vehicle_leasing_business.php', formData);
}
postShowroomBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_vehicle_showroom_business.php', formData);
}
updateShowroomBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_vehicle_showroom_business.php', formData);
}
postImporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_vehicle_importer_business.php', formData);
}
updateImporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_vehicle_importer_business.php', formData);
}
postExporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_vehicle_exporter_business.php', formData);
}
updateExporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_vehicle_exporter_business.php', formData);
}
postDrivingSchool(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_vehicle_driving_school.php', formData);
}
updateDrivingSchool(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_vehicle_driving_school.php', formData);
}
postWorkshopBusiness(formData: FormData): Observable<any> {
  // Replace `this.apiUrl` with your actual API URL
  return this.http.post<any>(this.apiUrl + 'save_vehicle_workshop_business.php', formData);
}

updateWorkshopBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_vehicle_workshop_business.php', formData);
}

}
