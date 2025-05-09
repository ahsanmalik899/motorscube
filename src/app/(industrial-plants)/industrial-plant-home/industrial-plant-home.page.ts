import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, tap, finalize } from 'rxjs';
import { AuthService } from 'src/app/(services)/auth.service';
import { PlantsService } from 'src/app/(services)/plants.service';
interface Machinery {
  
  plant_ad_sale_id: string;
  plant_ad_hire_id:string;
  ad_type:string;
  image_url1: any;
  type: any;
  subtype: any;
  vehicle_version: any;
  vehicle_price: any;
  vehicle_charges:any;
      id: any;
      make: any;
      model: any;
      version:any;
      price: any;
      image_url: any; 
  }
@Component({
  selector: 'app-industrial-plant-home',
  templateUrl: './industrial-plant-home.page.html',
  styleUrls: ['./industrial-plant-home.page.scss'],
  standalone:false,
})
export class IndustrialPlantHomePage implements OnInit {
  CommercialSaleData: Machinery[] = [];
  CommercialHireData:Machinery[] = [];
  isLoading: boolean | undefined;
  selectID: string | null | undefined;
  constructor( private router: Router,private plantsservice:PlantsService, private authService:AuthService) { 
    
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
    sale: this.plantsservice.getPlantSale(),
    hire: this.plantsservice.getPlantHire()
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
this.router.navigate(['/plant-sale-listing'])
}
carSaleData: any;
  
navigateToCarDetail(carId: string): void {
  this.router.navigate(['/plant-sale-single-view'], {
    queryParams: {
      saleid: carId,
    }
  });
}
carHirePosting(): void {
  
  if (this.selectID) {
    this.router.navigate(['/post-machinery-hire']);
  } else {
    this.router.navigate(['/login']);
  }
}

carSalePosting(): void {

  if (this.selectID) {
    this.router.navigate(['/post-machinery-sale']);
  } else {
    this.router.navigate(['/login']);
  }
}
carHireListing() {
  this.router.navigate(['plant-hire-listing']);
}
carHireData: any;
navigateToCarHireDetail(carId: string) {
  this.router.navigate(['/plant-hire-single-view'], {
    queryParams: {
      saleid: carId,
    }
    
  });
}
carInsurance() {
  this.router.navigate(['machinery-insurance-listing']);
}
carLeasing() {
  this.router.navigate(['machinery-leasing-listing']);
}
carDealer() {
  this.router.navigate(['machinery-dealer-listing']);
}
carShowroom() {
  this.router.navigate(['machinery-showroom-listing']);
}
carImporter() {
  this.router.navigate(['machinery-importer-listing']);
}
carExporter() {
  this.router.navigate(['machinery-exporter-listing']);
}
carSchool() {
  this.router.navigate(['machinery-driving-school-listing']);
}
carWorkshop() {
  this.router.navigate(['machinery-workshop-listing']);
}
selectedIcon: any;
selectIcon(arg0: string) {
throw new Error('Method not implemented.');
}



 

}
