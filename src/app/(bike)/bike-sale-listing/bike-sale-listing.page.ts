import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { BikeService } from 'src/app/(services)/bike.service';
import { UserService } from 'src/app/(services)/user.service';
interface bike {
  bike_ad_sale_id: string;
  bike_condition: string;
  bike_ad_make: string;
  bike_ad_model: string;
  bike_version: string;
  bike_ad_year: string;
  bike_ad_reg_city: string;
  bike_ad_location: string;
  bike_ad_mileage: string;
  bike_ad_price: string;
  bike_ad_bodytype: string;
  bike_ad_colour: string;
  bike_ad_ignition: string;
  bike_ad_engine_type: string;
  bike_ad_fuel_type: string;
  bike_features: string;
  bike_ad_description: string;
  bike_ad_privateortrade: string;
  bike_image1: string;
  bike_image2: string;
  bike_image3: string;
  user_id: string;
  post_status: string;
  ad_for: string;
  bike_ad_normal_feature: string;
  post_created_date: string;
  post_updated_date: string;
  image_url1:String;
  image_url2:String;
  image_url3:String;
  image_url4:String;
  image_url5:String;
  image_url6:String;
  image_url7:String;
  image_url8:String;
}

@Component({
  selector: 'app-bike-sale-listing',
  templateUrl: './bike-sale-listing.page.html',
  styleUrls: ['./bike-sale-listing.page.scss'],
  standalone:false,
})
export class BikeSaleListingPage implements OnInit {
 filteredbikeData: bike[] = [];
   bikeData: bike[] = [];
   selectedcon: string[] = []; // Ensure these are typed as arrays of strings
   selectedcity: string[] = [];
   selectedadid: string[] = [];
   selectedlocation: string[]=[];
   selectedmake: string[] = [];
   selectedmodel: string[] = [];
   selectedversion: string[] = [];
   selectedlowprice: string = '';
   selectedhighprice: string = '';
   selectedlowyear: string = '';
   selectedhighyear: string = '';
   selectedlowmilage: string = '';
   selectedModel:string= '';
   selectedhighmilage: string = '';
   selectedFuel: string[] = [];
   selectedCategory: string = '';
   selectedTransmission: string[] = [];
   selectedcolor: string = '';
   selecteddoor: string[] = [];
   selectedSellerType: string = '';
   selectedengineType: string = '';
   
 
 
   constructor(
     public router: Router,
     private popoverController: PopoverController,
     private userService: UserService,
     private route: ActivatedRoute,
     private bikeserrvice:BikeService,
   ) {
     this.route.queryParams.subscribe((params) => {
       // Check if selectedmodel is a string before calling split
       this.selectedmodel = params['selectedmodel'] && typeof params['selectedmodel'] === 'string'
         ? params['selectedmodel'].split(',')
         : [];
     
       // Similarly check other parameters like selectedmake, selectedcity, etc.
       this.selectedcon = params['selectedcon'] ? params['selectedcon'].split(',') : [];
       this.selectedcity = params['selectedcity'] && typeof params['selectedcity'] === 'string' ? params['selectedcity'].split(',') : [];
       this.selectedadid = params['selectedadid'] ? params['selectedadid'].split(',') : [];
       this.selectedlocation = params['selectedlocation'] ? params['selectedlocation'].split(',') : [];
       this.selectedmake = params['selectedmake'] && typeof params['selectedmake'] === 'string' ? params['selectedmake'].split(',') : [];
       this.selectedversion = params['selectedversion'] ? params['selectedversion'].split(',') : [];
       
       // Handle numeric or default values for price, year, mileage, etc.
       this.selectedlowprice = params['lowprice'] || '';
       this.selectedhighprice = params['highprice'] || '';
       this.selectedlowyear = params['lowyear'] || '';
       this.selectedhighyear = params['highyear'] || '';
       this.selectedlowmilage = params['lowmilage'] || '';
       this.selectedhighmilage = params['highmilage'] || '';
       this.selectedModel= params['selectedmodel'] || '';
       
       // Ensure selectedFuel is a string before splitting
       this.selectedFuel = params['selectedFuel'] && typeof params['selectedFuel'] === 'string' ? params['selectedFuel'].split(',') : [];
       
       this.selectedCategory = params['selectedCategory'] || '';
       this.selectedTransmission = params['selectedTransmission'] && typeof params['selectedTransmission'] === 'string' ? params['selectedTransmission'].split(',') : [];
       this.selectedcolor = params['selectedColor'] || '';
       
       // Ensure selectedDoor is a string before splitting
       this.selecteddoor = params['selectedDoor'] && typeof params['selectedDoor'] === 'string' ? params['selectedDoor'].split(',') : [];
       
       this.selectedSellerType = params['selectedSellerType'] || '';
       this.selectedengineType = params['selectedengineType'] || '';
      
       // After processing all params, fetch the car sale data
       this.fetchCarSale();
     });
     
     
   }
 
   ngOnInit() {
   
       // Read query parameters
       this.route.queryParams.subscribe(params => {
           if (params) {
               this.selectedcon = params['bikeselectedcon'] ? params['bikeselectedcon'].split(',') : [];
               this.selectedmake = params['bikeselectedmake'] ? params['bikeselectedmake'].split(',') : [];
               this.selectedcity = params['bikeselectedcity'] ? params['bikeselectedcity'].split(',') : [];
               this.selectedhighprice = params['bikehighprice'] || '';
               this.selectedlowprice = params['bikelowprice'] || '';
               this.selectedhighyear = params['bikehighyear'] || '';
               this.selectedlowyear = params['bikelowyear'] || '';
               this.selectedhighmilage = params['bikehighmilage'] || '';
               this.selectedlowmilage = params['bikelowmilage'] || '';
               this.selectedFuel = params['bikeselectedFuel'] ? params['bikeselectedFuel'].split(',') : [];
               this.selectedCategory = params['bikeselectedCategory'] || '';
               this.selectedTransmission = params['bikeselectedTransmission'] ? params['bikeselectedTransmission'].split(',') : [];
               this.selectedcolor = params['bikeselectedColor'] || '';
               this.selecteddoor = params['bikeselectedDoor'] ? params['bikeselectedDoor'].split(',') : [];
               this.selectedSellerType = params['bikeselectedSellerType'] || '';
              this.selectedengineType=params['selectedengineType'] || '';
           
           }
       });
   
       
   
   
   }
 // Fetch car sale data and store it in localStorage for future use
 fetchCarSale() {
  this.bikeserrvice.getBikeSale().subscribe({
    next: (data: bike[]) => {
      this.bikeData = data;
      this.filterCarData(); // Apply filtering logic
      console.log(this.bikeData)
    },
    error: (error: any) => {
      console.error('Error fetching bike data:', error);
    },
  });
}

 
 // Optimized filter function
 filterCarData() {
   const filterConditions = {
     fuelTypes: new Set(this.selectedFuel),
     conditions: new Set(this.selectedcon),
     transmissions: new Set(this.selectedTransmission),
     doorNumbers: new Set(this.selecteddoor),
     cities: new Set(this.selectedcity),
     makes: new Set(this.selectedmake),
     engineTypes: new Set(this.selectedengineType),
   };
   
   this.filteredbikeData = this.bikeData.filter((bike: bike) => {
     return (
       bike.post_status === 'Active' &&
       this.isFieldMatch(bike.bike_ad_fuel_type, filterConditions.fuelTypes) &&
       this.isFieldMatch(bike.bike_condition, filterConditions.conditions) &&
       this.isFieldMatch(bike.bike_ad_ignition, filterConditions.transmissions) &&
       this.isFieldMatch(bike.bike_ad_make, filterConditions.makes) &&
       this.isFieldMatch(bike.bike_ad_location, filterConditions.cities) &&
       this.isEngentypematch(bike) &&
       this.isPriceInRange(bike) &&
       this.isYearInRange(bike) &&
       this.isMileageInRange(bike) &&
       this.isCategoryMatch(bike) &&
       this.isColorMatch(bike) &&
       this.isSellerTypeMatch(bike) &&
       this.isModelVersionMatch(bike)
     );
   });
 }
 
 // Helper function to check if the field matches the selected values
 isFieldMatch(fieldValue: string, selectedSet: Set<string>): boolean {
   return selectedSet.size === 0 || selectedSet.has(fieldValue);
 }
 
 // Helper functions for price, year, mileage, engine size, etc.
 isPriceInRange(bike: bike): boolean {
   return (
     (!this.selectedlowprice || parseInt(bike.bike_ad_price, 10) >= parseInt(this.selectedlowprice, 10)) &&
     (!this.selectedhighprice || parseInt(bike.bike_ad_price, 10) <= parseInt(this.selectedhighprice, 10))
   );
 }
 
 isYearInRange(bike: bike): boolean {
   return (
     (!this.selectedlowyear || parseInt(bike.bike_ad_year, 10) >= parseInt(this.selectedlowyear, 10)) &&
     (!this.selectedhighyear || parseInt(bike.bike_ad_year, 10) <= parseInt(this.selectedhighyear, 10))
   );
 }
 
 isMileageInRange(bike: bike): boolean {
   return (
     (!this.selectedlowmilage || parseInt(bike.bike_ad_mileage, 10) >= parseInt(this.selectedlowmilage, 10)) &&
     (!this.selectedhighmilage || parseInt(bike.bike_ad_mileage, 10) <= parseInt(this.selectedhighmilage, 10))
   );
 }
 

 
 isCategoryMatch(bike: bike): boolean {
   return !this.selectedCategory || bike.bike_ad_bodytype === this.selectedCategory;
 }
 
 isColorMatch(bike: bike): boolean {
   return !this.selectedcolor || bike.bike_ad_colour === this.selectedcolor;
 }
 isEngentypematch(bike: bike): boolean {
  return !this.selectedengineType || bike.bike_ad_engine_type === this.selectedengineType;
}
 isSellerTypeMatch(bike: bike): boolean {
   return !this.selectedSellerType || bike.bike_ad_privateortrade === this.selectedSellerType;
 }
 
 isModelVersionMatch(bike: bike): boolean {
   return !this.selectedModel || bike.bike_ad_model === this.selectedModel;
 }
 
 
 
   back() {
     this.router.navigate(['bike-home']);
     localStorage.removeItem('selectedcon');
     localStorage.removeItem('selectedcity');
     localStorage.removeItem('selectedmake');
     localStorage.removeItem('selectedmodel');
     localStorage.removeItem('selectedversion');
     localStorage.removeItem('lowprice');
     localStorage.removeItem('highprice');
     localStorage.removeItem('lowyear');
     localStorage.removeItem('highyear');
     localStorage.removeItem('lowmilage');
     localStorage.removeItem('highmilage');
     localStorage.removeItem('selectedCategory');
     localStorage.removeItem('selectedColor');
     localStorage.removeItem('selectedSellerType');
     localStorage.removeItem('highengine');
     localStorage.removeItem('lowengine');
     localStorage.removeItem('engentype');
     localStorage.removeItem('selectedmodelversion');
   }
   
 
   
   
   navigateTobikeDetail(carId: string): void {
     this.router.navigate(['/bike-single-view'], {
       queryParams: {
         saleid: carId,
       }
     });
   }
 
   filter() {
     this.router.navigate(['bike-sale-filter']);
   }
 
   async dismissPopover() {
     await this.popoverController.dismiss();
   }
 
   async sortCars(sortType?: string) {
     if (sortType === 'lowToHigh') {
       this.filteredbikeData.sort((a, b) => parseFloat(a.bike_ad_price) - parseFloat(b.bike_ad_price));
     } else if (sortType === 'highToLow') {
       this.filteredbikeData.sort((a, b) => parseFloat(b.bike_ad_price) - parseFloat(a.bike_ad_price));
     } else if (sortType === 'oldestToNewest') {
       this.filteredbikeData.sort((a, b) => {
         const dateA = new Date(a.post_created_date).getTime();
         const dateB = new Date(b.post_created_date).getTime();
         return dateA - dateB; // Sort from oldest to newest
       });
     } else if (sortType === 'latestToOldest') {
       this.filteredbikeData.sort((a, b) => {
         const dateA = new Date(a.post_created_date).getTime();
         const dateB = new Date(b.post_created_date).getTime();
         return dateB - dateA; // Sort from latest to oldest
       });
     }
     await this.popoverController.dismiss();
     
   }
 }
 