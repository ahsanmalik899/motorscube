import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  saveUser(value: any) {
    throw new Error('Method not implemented.');
  }


  private apiUrl = 'http://localhost/user-app/'; // Change this to your PHP scripts location

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create(); }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'ionic/get_user.php');
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`https://www.motorscube.com/user-app/delete_user_account.php?id=${id}`);
  }
  saveUserWithPhone(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data

    return this.http.post<any>(this.apiUrl + 'save_user_pvt_with_phone.php', userData);
  }
  saveUserWithEmail(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data

    return this.http.post<any>(this.apiUrl + 'save_user_pvt_with_email.php', userData);
  }
  updateUserPvt(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data

    return this.http.post<any>(this.apiUrl + 'update_user_pvt.php', userData);
  }
  updateUserBsn(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data

    return this.http.post<any>(this.apiUrl + 'update_user_bsn.php', userData);
  }
  async setSession(userId: string) {
    await this.storage.set('user_id', userId);
  }

  async getSession() {
    return await this.storage.get('user_id');
  }

  async clearSession() {
    await this.storage.remove('user_id');
  }
  authenticateUser(credentials: any): Observable<any> {
    // Assuming you have an API endpoint for user authentication
    return this.http.post<any>(this.apiUrl + 'login_user.php', credentials);
  }
  
  saveUserBsnWithPhone(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_user_bsn_with_phone.php', userData);
  }
  saveUserBsnWithEmail(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_user_bsn_with_email.php', userData);
  }
  getCities(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_city_name.php');
  }
  getMakes(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_make_name.php');
  }
  getModels(makeData: FormData): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch models based on the selected make
    return this.http.post<string[]>(this.apiUrl + 'get_model_name.php', makeData);
}
getVersions(versionData: FormData): Observable<string[]> {
  // Make a POST request to the API endpoint to fetch models based on the selected make
  return this.http.post<string[]>(this.apiUrl + 'get_version_name.php', versionData);
}

 getUserSale(userData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'get_user_data.php', userData);
  }
  getYears(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_year_name.php');
  }
  getFeatures(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_feature_name.php');
  }
  getCountrties(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_country_name.php');
  }
  getCountryCode(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_country_code.php');
  }
  getCategories(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_category_name.php');
  }
  getAmount(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_amount.php');
  }
  getWallet(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_wallet.php');
  }
  getBundleOffer(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bundle_offer.php');
  }
  getBundle(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bundle.php');
  }
  updateBundle(formData: FormData): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
  return this.http.post<any>(this.apiUrl + 'update_bundle.php', formData);
  }
  getBundleMaxID(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_bundle_max_id.php');
  }
  getupgradepost(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_upgrade_post.php');
  }
  getCarSale(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'get_car_sale.php');
  }

  getCarHire(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'get_car_hire.php').pipe(
      catchError((error) => {
        // Log the error message and response body for debugging
        console.error('Error fetching car data:', error);
        if (error.error instanceof ErrorEvent) {
          console.error('Client-side error:', error.error.message);
        } else {
          console.error('Server-side error:', error);
        }
        return throwError(() => new Error('Error fetching car data'));
      })
    );
  }
  
  
  getinsuranceData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_car_insurance.php');
  }
  getdealershipData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_car_dealership.php');
  }
  getexporterData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_car_exporter.php');
  }
   getimporterData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_car_importer.php');
  }
  getworkshopData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_car_workshop.php');
  }
  getschoolData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_car_school.php');
  }
  getleasingData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_car_leasing.php');
  }
  getshowroomData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
    return this.http.get<string[]>(this.apiUrl + 'get_car_showroom.php');
  }
  getUserBsnData(): Observable<string[]> {
    // Make a POST request to the API endpoint to fetch city names
  return this.http.get<string[]>(this.apiUrl + 'get_user_bsn.php');
  }

  carSalePost(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_car_sale_post.php', userData);
  }
  carSaleUpdate(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_car_sale_update.php', userData);
  }
  carHireUpdate(userData: any): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_car_hire_update.php', userData);
  }
  carHirePost(formData: FormData): Observable<any> {
    // Assuming you have an API endpoint to save user data
    return this.http.post<any>(this.apiUrl + 'save_car_hire_post.php', formData);
}
savetransaction(userData: any): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_transaction.php', userData);
}

postBundle(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_bundle.php', formData);
}
carUpgradeAds(userData: any): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_car_ads.php', userData);
}
carDeleteAds(userData: any): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'delete_car_ads.php', userData);
}
carDeletePostBusines(userData: any): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'delete_car_post_busines.php', userData);
}
carUpgradeAdsSup(userData: any): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_car_ads_sup.php', userData);
}
postDealerBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_post_dealer_business.php', formData);
}
updateDealerBusiness(adsId: string, formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_post_dealer_business.php', formData);
}
postInsuranceBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_post_insurance_business.php', formData);
}
updateInsuranceBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_post_insurance_business.php', formData);
}
postLeasingBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_post_leasing_business.php', formData);
}
updateLeasingBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_post_leasing_business.php', formData);
}
postShowroomBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_post_showroom_business.php', formData);
}
updateShowroomBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_post_showroom_business.php', formData);
}
postImporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_post_importer_business.php', formData);
}
updateImporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_post_importer_business.php', formData);
}
postExporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_post_exporter_business.php', formData);
}
updateExporterBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_post_exporter_business.php', formData);
}
postDrivingSchool(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'save_post_driving_school.php', formData);
}
updateDrivingSchool(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_post_driving_school.php', formData);
}
postWorkshopBusiness(formData: FormData): Observable<any> {
  // Replace `this.apiUrl` with your actual API URL
  return this.http.post<any>(this.apiUrl + 'save_post_workshop_business.php', formData);
}

updateWorkshopBusiness(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_post_workshop_business.php', formData);
}
updatePass(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'update_user_password.php', formData);
}
deleteAccount(formData: FormData): Observable<any> {
  // Assuming you have an API endpoint to save user data
  return this.http.post<any>(this.apiUrl + 'delete_user_account.php', formData);
}
forgotPassword(mobile: string, country: string): Observable<any> {
  const body = new FormData();
  body.append('mobile', mobile);
  body.append('country', country);  // Send the country code along with the mobile number

  return this.http.post<any>(this.apiUrl+'send-password.php', body);
}
sendPasswordByEmail(mobile: string, country: string): Observable<any> {
  const body = new FormData();
  body.append('mobile', mobile);
  body.append('country', country);
  return this.http.post<any>(this.apiUrl+'send-password -by-email.php', body);
}
getSingleCarSale(saleID: string): Observable<any> {
  const url = `${this.apiUrl}get_single_car_sale.php/?saleID=${saleID}`;  // Correct the API endpoint and append saleID query
  return this.http.get<any>(url);  // Return the Observable of the response
}
getSingleCarhire(saleID: string): Observable<any> {
  const url = `${this.apiUrl}get_single_car_hire.php/?saleID=${saleID}`;  // Correct the API endpoint and append saleID query
  return this.http.get<any>(url);  // Return the Observable of the response
}


// Fetch User Sale data
getsingleUserSale(formData: FormData): Observable<any[]> {
  return this.http.post<any[]>('/api/userSale', formData);
}



submitBikePayment(formData: FormData): Observable<any> {
  return this.http.post(`${this.apiUrl}/bike/submit-payment`, formData);
}
}
