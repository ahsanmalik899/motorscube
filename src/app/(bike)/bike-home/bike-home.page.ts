import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/(services)/bike.service';
import { elementAt, forkJoin, tap } from 'rxjs';
import { AuthService } from 'src/app/(services)/auth.service';
interface bike {
  bike_ad_sale_id: string;
  bike_ad_normal_feature: any;
  bike_image2: any;
  bike_ad_make: any;
  bike_ad_model: any;
  bike_version: any;
  bike_ad_price: any;
    image_url2: any;  // Replace with actual field names returned by your API
  };
@Component({
  selector: 'app-bike-home',
  templateUrl: './bike-home.page.html',
  styleUrls: ['./bike-home.page.scss'],
  standalone:false,
})


export class BikeHomePage implements OnInit {
  bikeSaleData: bike[] = [];
  selectID: string | null = null;
  constructor(
    private router: Router,
       private bikeService: BikeService,
           private authService: AuthService,
  ) { }
back() {
  this.router.navigate(['/home']);
}
ngOnInit() {
  this.preloadCarData()
  this.authService.userID$.subscribe(userID => {
    this.selectID = userID; // Update the userID in the component
  });
  this.selectID = localStorage.getItem('userId');
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
async preloadCarData() {
  const cachedBikeSaleData = localStorage.getItem('bikerSaleData');

  if (cachedBikeSaleData ) {
    // Use cached data for faster access
    this.bikeSaleData = JSON.parse(cachedBikeSaleData);

  } else {
    // Make API requests if no cached data exists
    forkJoin([
      this.bikeService.getBikeSale(),
    ])
      .pipe(
        // When the response comes in, store it in localStorage
        tap(([bikeSaleData]) => {
          

          // Store data in localStorage for faster access next time
          localStorage.setItem('bikeSaleData', JSON.stringify(bikeSaleData));
          
          // Update component state
          this.bikeSaleData = bikeSaleData;  
        })
      )
      .subscribe({
        error: (error) => {
          console.error('Error fetching car data:', error);
        }
      });
  }
}

bikeSaleListing() {
this.router.navigate(['/bike-sale-listing'])
}
 
navigateTobikeDetail(carId: string): void {
  this.router.navigate(['/bike-single-view'], {
    queryParams: {
      saleid: carId,
    }
  });
}
carSalePosting() {
  if(this.selectID){
  this.router.navigate(['/bike-post-sale'])
  }
  else{
    this.router.navigate(['/login'])
  }
}
carHirePosting() {
throw new Error('Method not implemented.');
}
carHireListing() {
throw new Error('Method not implemented.');
}
navigateToCarHireDetail(arg0: any) {
throw new Error('Method not implemented.');
}
carInsurance() {
this.router.navigate(['listing-bike-insurance'])
}
carLeasing() {
  this.router.navigate(['listing-bike-leasing']);
}
carDealer() {
  this.router.navigate(['listing-bike-dealer']);
}
carShowroom() {
  this.router.navigate(['listing-bike-showroom']);
}
carImporter() {
  this.router.navigate(['listing-bike-importer']);
}
carExporter() {
  this.router.navigate(['listing-bike-exporter']);
}
carSchool() {
throw new Error('Method not implemented');
}
carWorkshop() {
  this.router.navigate(['listing-bike-workshop']);
}
selectedIcon: any;
selectIcon(arg0: string) {
throw new Error('Method not implemented.');
}



  

}
