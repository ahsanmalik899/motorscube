import { CommercialService } from './../../(services)/commercial.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, tap } from 'rxjs';
interface Commercial {
  
commercial_vehicle_ad_sale_id: string;
  commercial_ad_hire_id: string;
vehicle_feature_type:string;
image_url1: any;
vehicle_make: any;
vehicle_model: any;
vehicle_version: any;
vehicle_price: any;
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
  constructor( private router: Router,private commercialService:CommercialService) { 
    
  }
  ngOnInit() {

    this.preloadcommercialData()
  }
back() {
  this.router.navigate(['/home']);
}
async preloadcommercialData() {
  const cachedCommercialSaleData = localStorage.getItem('CommercialSaleData');
  const cachedCommercialHireData = localStorage.getItem('CommercialHireData');
  if (cachedCommercialSaleData && cachedCommercialHireData) {
    // Use cached data for faster access
    this. CommercialSaleData = JSON.parse(cachedCommercialSaleData);
    this. CommercialHireData = JSON.parse(cachedCommercialHireData);
  } else {
    // Make API requests if no cached data exists
    forkJoin([
      this.commercialService.getCommercialSale() ,
      this.commercialService.getCommercialHire()
    ])
      .pipe(
        // When the response comes in, store it in localStorage
        tap(([ CommercialSaleData,CommercialHireData]) => {
          

          // Store data in localStorage for faster access next time
          localStorage.setItem('CommercialSaleData', JSON.stringify( CommercialSaleData));
          localStorage.setItem('CommercialHireData', JSON.stringify( CommercialHireData));
          // Update component state
          this.CommercialSaleData =  CommercialSaleData;  
          this.CommercialHireData =  CommercialHireData; 
        })
      )
      .subscribe({
        error: (error) => {
          console.error('Error fetching car data:', error);
        }
      });
  }
}

navigateToMainMenu() {
  console.log('Fetched data:', this.CommercialHireData);
}
commercialSaleListing() {
this.router.navigate(['/commercial-sale-listing'])
}
carSaleData: any;
navigateToCarDetail(arg0: any) {
throw new Error('Method not implemented.');
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
navigateToCarHireDetail(arg0: any) {
throw new Error('Method not implemented.');
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
