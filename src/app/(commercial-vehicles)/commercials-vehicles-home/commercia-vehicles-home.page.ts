import { CommercialService } from './../../(services)/commercial.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, tap } from 'rxjs';
import { finalize } from 'rxjs/operators';
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
  constructor( private router: Router,private commercialService:CommercialService) { 
    
  }
  ngOnInit() {

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


navigateToMainMenu() {
  console.log('Fetched data:', this.CommercialHireData);
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
carSalePosting() {
throw new Error('Method not implemented.');
}
carHirePosting() {
throw new Error('Method not implemented.');
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
throw new Error('Method not implemented.');
}
carLeasing() {
throw new Error('Method not implemented.');
}
carDealer() {
throw new Error('Method not implemented.');
}
carShowroom() {
throw new Error('Method not implemented.');
}
carImporter() {
throw new Error('Method not implemented.');
}
carExporter() {
throw new Error('Method not implemented.');
}
carSchool() {
throw new Error('Method not implemented.');
}
carWorkshop() {
throw new Error('Method not implemented.');
}
selectedIcon: any;
selectIcon(arg0: string) {
throw new Error('Method not implemented.');
}



 

}
