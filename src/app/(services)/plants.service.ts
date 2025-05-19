import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  private apiUrl = 'https://motorscube.com/plants/plant/';
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
        return this.http.post<any>(this.apiUrl + 'delete_plant_ads.php', userData);
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
       getdealershipData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_plant_dealership.php');
  }
   getinsuranceData(): Observable<string[]> {
      // Make a POST request to the API endpoint to fetch city names
      return this.http.get<string[]>(this.apiUrl + 'get_plant_insurance.php');
    }
  getexporterData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_plant_exporter.php');
  }
   getimporterData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_plant_importer.php');
  }
  getworkshopData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_plant_workshop.php');
  }
  getschoolData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_plant_school.php');
  }
  getleasingData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_plant_leasing.php');
  }
  getshowroomData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_plant_showroom.php');
  }
  plantDeletePostBusines(userData: any): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'delete_plant_post_busines.php', userData);
}

postDealerBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_plant_dealer_business.php', formData);
}
postExporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_plant_exporter_business.php', formData);
}
postImporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_plant_importer_business.php', formData);
}
postInsuranceBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_plant_insurance_business.php', formData);
}
postLeasingBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_plant_leasing_business.php', formData);
} 
postShowroomBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_plant_showroom_business.php', formData);
} 
postWorkshopBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_plant_workshop_business.php', formData);
} 
postDrivingSchool(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_plant_driving_school.php', formData);
}

updateDealerBusiness(adsId: string, formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_plant_dealer_business.php', formData);
}
updateInsuranceBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_plant_insurance_business.php', formData);
}

updateLeasingBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_plant_leasing_business.php', formData);
}

updateShowroomBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_plant_showroom_business.php', formData);
}

updateImporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_plant_importer_business.php', formData);
}

updateExporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_plant_exporter_business.php', formData);
}

updateDrivingSchool(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_plant_driving_school.php', formData);
}

updateWorkshopBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_plant_workshop_business.php', formData);
}
}