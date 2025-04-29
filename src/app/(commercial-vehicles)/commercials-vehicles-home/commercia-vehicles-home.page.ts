import { CommercialService } from './../../(services)/commercial.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, tap } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/(services)/auth.service';
interface Commercial {
  
commercial_vehicle_ad_sale_id: string;
commercial_vehicle_ad_hire_id:string;
vehicle_feature_type:string;
image_url1: any;
vehicle_make: any;
vehicle_model: any;
vehicle_version: any;
vehicle_price: any;
vehicle_charges:any;
    id: any;
    make: any;
    model: any;
    price: any;
    image_url: any; 
}

@Component({
  selector: 'app-commercia-vehicles-home',
  templateUrl: './commercia-vehicles-home.page.html',
  styleUrls: ['./commercia-vehicles-home.page.scss'],
  standalone:false,
})
export class CommerciaVehiclesHomePage implements OnInit {
  CommercialSaleData: Commercial[] = [];
  CommercialHireData: Commercial[] = [];
  isLoading: boolean | undefined;
  selectID: string | null | undefined;
  constructor( private router: Router,private commercialService:CommercialService, private authService:AuthService) { 
    
  }
  ngOnInit() {
    this.authService.userID$.subscribe(userID => {
      this.selectID = userID; // Update the userID in the component
    });
    this.selectID = localStorage.getItem('userId');

    this.preloadCommercialData()
  }
back() {
  this.router.navigate(['/home']);
}


async preloadCommercialData(): Promise<void> {
  this.isLoading = true; // Optional: Show loader in UI

  forkJoin({
    sale: this.commercialService.getCommercialSale(),
    hire: this.commercialService.getCommercialHire()
  })
    .pipe(
      tap(({ sale, hire }) => {
        this.CommercialSaleData = sale;
        this.CommercialHireData = hire;
        console.log('✅ Commercial Sale Data:', sale);
        console.log('✅ Commercial Hire Data:', hire);
      }),
      finalize(() => {
        this.isLoading = false; // Optional: Hide loader
      })
    )
    .subscribe({
      error: (error) => {
        console.error('❌ Error loading commercial data:', error);
        // Optionally show a toast/snackbar here
      }
    });
}


navigateToMainMenu(): void {
  if (this.selectID) {
    this.router.navigate(['/main-menu-after-login']);
    // Redirect to main-menu if userID is not available
  
  }
  else{
    this.router.navigate(['/main-menu']);
  }
}
commercialSaleListing() {
this.router.navigate(['/commercial-sale-listing'])
}
carSaleData: any;
  
navigateToCarDetail(carId: string): void {
  this.router.navigate(['/vehicle-sale-single-view'], {
    queryParams: {
      saleid: carId,
    }
  });
}
carHirePosting(): void {
  
  if (this.selectID) {
    this.router.navigate(['/post-vehicle-hire']);
  } else {
    this.router.navigate(['/login']);
  }
}

carSalePosting(): void {

  if (this.selectID) {
    this.router.navigate(['/post-vehicle-sale-ad']);
  } else {
    this.router.navigate(['/login']);
  }
}
carHireListing() {
  this.router.navigate(['commercial-hire-listing']);
}
carHireData: any;
navigateToCarHireDetail(carId: string) {
  this.router.navigate(['/vehicle-hire-single-view'], {
    queryParams: {
      saleid: carId,
    }
    
  });
}
carInsurance() {
  this.router.navigate(['vehicle-insurance-listing']);
}
carLeasing() {
  this.router.navigate(['vehicle-leasing-listing']);
}
carDealer() {
  this.router.navigate(['vehicle-dealers-listing']);
}
carShowroom() {
  this.router.navigate(['vehicle-showrooms-listing']);
}
carImporter() {
  this.router.navigate(['vehicle-importers-listing']);
}
carExporter() {
  this.router.navigate(['vehicle-exporters-listing']);
}
carSchool() {
  this.router.navigate(['vehicle-driving-school-listing']);
}
carWorkshop() {
  this.router.navigate(['vehicle-workshop-listing']);
}
selectedIcon: any;
selectIcon(arg0: string) {
throw new Error('Method not implemented.');
}



 

}
