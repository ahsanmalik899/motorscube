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
  
  getMakes(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get__machinery_make_name.php');
  }
getVersions(versionData: FormData): Observable<string[]> {
  // Make a POST request to the API endpoint to fetch models based on the selected make
  return this.http.post<string[]>(this.apiUrl + 'get_machinery_subtype_name.php', versionData);
}
machineryDeletePostBusines(userData: any): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'delete_machinery_post_busines.php', userData);
}

postDealerBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_machinery_dealer_business.php', formData);
}
postExporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_machinery_exporter_business.php', formData);
}
postImporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_machinery_importer_business.php', formData);
}
postInsuranceBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_machinery_insurance_business.php', formData);
}
postLeasingBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_machinery_leasing_business.php', formData);
} 
postShowroomBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_machinery_showroom_business.php', formData);
} 
postWorkshopBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_machinery_workshop_business.php', formData);
} 
getModels() : Observable<string[]> {
  return this.http.get<string[]>(this.apiUrl + 'get_machinery_type_name.php');
}
postDrivingSchool(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_machinery_driving_school.php', formData);
}
machineryDeleteAds(userData: any): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'delete_machinery_ads.php', userData);
}
updateDealerBusiness(adsId: string, formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_machinery_dealer_business.php', formData);
}
updateInsuranceBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_machinery_insurance_business.php', formData);
}

updateLeasingBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_machinery_leasing_business.php', formData);
}

updateShowroomBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_machinery_showroom_business.php', formData);
}

updateImporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_machinery_importer_business.php', formData);
}

updateExporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_machinery_exporter_business.php', formData);
}

updateDrivingSchool(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_machinery_driving_school.php', formData);
}

updateWorkshopBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_machinery_workshop_business.php', formData);
}
machinerysalePost(userData: any): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_machinery_sale_post.php', userData);
}
machineryHirePost(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_machinery_hire_post.php', formData);
}
}
