import { CommercialService } from './../../(services)/commercial.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';
interface Commercial {
  commercial_vehicle_ad_sale_id: string;
  vehicle_type: string;
  vehicle_sub_type: string;
  vehicle_condition: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_version: string;
  vehicle_year: string;
  vehicle_city: string;
  vehicle_reg_city: string;
  vehicle_price: string;
  vehicle_transmission: string;
  vehicle_power_transmission: string;
  vehicle_fuel_type: string;
  vehicle_engine_size: string;
  vehicle_mileage: string;
  vehicle_color: string;
  vehicle_doors: string;
  vehicle_description: string;
  vehicle_img1: string;
  vehicle_img2: string;
  vehicle_img3: string;
  vehicle_img4: string;
  vehicle_img5: string;
  vehicle_img6: string;
  vehicle_img7: string;
  vehicle_img8: string;
  vehicle_private_trader: string;
  vehicle_feature_type: string;
  user_id: string;
  post_status: string;
  ad_for: string;
  post_created_date: string;
  post_updated_date: string;
}

@Component({
  selector: 'app-commercial-sale-listing',
  templateUrl: './commercial-sale-listing.page.html',
  styleUrls: ['./commercial-sale-listing.page.scss'],
  standalone:false
})
export class CommercialSaleListingPage implements OnInit {

   filteredCarData: Commercial[] = [];
    commercialData: Commercial[] = [];
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
    selectedModelVersion:string= '';
    selectedhighmilage: string = '';
    selectedFuel: string[] = [];
    selectedCategory: string = '';
    selectedTransmission: string[] = [];
    selectedcolor: string = '';
    selecteddoor: string[] = [];
    selectedSellerType: string = '';
    selectedlowengine: string = '';
    selectedhighengine: string = '';
    selectedEngineLowSize: any;
  
  
    constructor(
      public router: Router,
      private popoverController: PopoverController,
      private userService: UserService,
      private route: ActivatedRoute,
      private commercialservice: CommercialService,
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
        this.selectedModelVersion= params['selectedmodelversion'] || '';
        
        // Ensure selectedFuel is a string before splitting
        this.selectedFuel = params['selectedFuel'] && typeof params['selectedFuel'] === 'string' ? params['selectedFuel'].split(',') : [];
        
        this.selectedCategory = params['selectedCategory'] || '';
        this.selectedTransmission = params['selectedTransmission'] && typeof params['selectedTransmission'] === 'string' ? params['selectedTransmission'].split(',') : [];
        this.selectedcolor = params['selectedColor'] || '';
        
        // Ensure selectedDoor is a string before splitting
        this.selecteddoor = params['selectedDoor'] && typeof params['selectedDoor'] === 'string' ? params['selectedDoor'].split(',') : [];
        
        this.selectedSellerType = params['selectedSellerType'] || '';
        this.selectedhighengine = params['highengine'] || '';
        this.selectedlowengine = params['lowengine'] || '';
        
        // After processing all params, fetch the car sale data
        this.fetchCommercialSale();
      });
      
      
    }
  
    ngOnInit() {
        // Read query parameters
        this.route.queryParams.subscribe(params => {
            if (params) {
                this.selectedcon = params['selectedcon'] ? params['selectedcon'].split(',') : [];
                this.selectedmake = params['selectedmake'] ? params['selectedmake'].split(',') : [];
                this.selectedcity = params['selectedcity'] ? params['selectedcity'].split(',') : [];
                this.selectedhighprice = params['highprice'] || '';
                this.selectedlowprice = params['lowprice'] || '';
                this.selectedhighyear = params['highyear'] || '';
                this.selectedlowyear = params['lowyear'] || '';
                this.selectedhighmilage = params['highmilage'] || '';
                this.selectedlowmilage = params['lowmilage'] || '';
                this.selectedFuel = params['selectedFuel'] ? params['selectedFuel'].split(',') : [];
                this.selectedCategory = params['selectedCategory'] || '';
                this.selectedTransmission = params['selectedTransmission'] ? params['selectedTransmission'].split(',') : [];
                this.selectedcolor = params['selectedColor'] || '';
                this.selecteddoor = params['selectedDoor'] ? params['selectedDoor'].split(',') : [];
                this.selectedSellerType = params['selectedSellerType'] || '';
                this.selectedEngineLowSize = params['highengine'] || '';
                this.selectedEngineLowSize = params['lowengine'] || '';
            }
        });
    
        
    
    
    }
  // Fetch car sale data and store it in localStorage for future use
  fetchCommercialSale() {
    const cachedData = localStorage.getItem('commercialData');
    
    if (cachedData) {
      this.commercialData = JSON.parse(cachedData); // Use cached data
      this.filterCarData(); // Filter based on the current criteria
    } else {
      // If no cached data, fetch from the backend
      this.commercialservice.getCommercialSale().subscribe({
        next: (data: Commercial[]) => {
          this.commercialData = data;
          localStorage.setItem('commercialData', JSON.stringify(data)); // Cache the fetched data
          this.filterCarData(); // Filter the data
        },
        error: (error: any) => {
          
        },
      });
    }
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
    };
  
    this.filteredCarData = this.commercialData.filter((car: Commercial) => {
      return (
        car.post_status === 'Active' &&
        this.isFieldMatch(car.vehicle_feature_type, filterConditions.fuelTypes) &&
        this.isFieldMatch(car.vehicle_condition, filterConditions.conditions) &&
        this.isFieldMatch(car.vehicle_transmission, filterConditions.transmissions) &&
        this.isFieldMatch(car.vehicle_doors, filterConditions.doorNumbers) &&
        this.isFieldMatch(car.vehicle_make, filterConditions.makes) &&
        this.isFieldMatch(car.vehicle_city, filterConditions.cities) &&
        this.isPriceInRange(car) &&
        this.isYearInRange(car) &&
        this.isMileageInRange(car) &&
        this.isEngineSizeInRange(car) &&
        this.isColorMatch(car) &&
        this.isSellerTypeMatch(car) &&
        this.isModelVersionMatch(car)
      );
    });
  }
  
  // Helper function to check if the field matches the selected values
  isFieldMatch(fieldValue: string, selectedSet: Set<string>): boolean {
    return selectedSet.size === 0 || selectedSet.has(fieldValue);
  }
  
  // Helper functions for price, year, mileage, engine size, etc.
  isPriceInRange(car: Commercial): boolean {
    return (
      (!this.selectedlowprice || parseInt(car.vehicle_price, 10) >= parseInt(this.selectedlowprice, 10)) &&
      (!this.selectedhighprice || parseInt(car.vehicle_price, 10) <= parseInt(this.selectedhighprice, 10))
    );
  }
  
  isYearInRange(car: Commercial): boolean {
    return (
      (!this.selectedlowyear || parseInt(car.vehicle_year, 10) >= parseInt(this.selectedlowyear, 10)) &&
      (!this.selectedhighyear || parseInt(car.vehicle_year, 10) <= parseInt(this.selectedhighyear, 10))
    );
  }
  
  isMileageInRange(car: Commercial): boolean {
    return (
      (!this.selectedlowmilage || parseInt(car.vehicle_mileage, 10) >= parseInt(this.selectedlowmilage, 10)) &&
      (!this.selectedhighmilage || parseInt(car.vehicle_mileage, 10) <= parseInt(this.selectedhighmilage, 10))
    );
  }
  
  isEngineSizeInRange(car: Commercial): boolean {
    return (
      (!this.selectedlowengine || parseInt(car.vehicle_engine_size, 10) >= parseInt(this.selectedlowengine, 10)) &&
      (!this.selectedhighengine || parseInt(car.vehicle_engine_size, 10) <= parseInt(this.selectedhighengine, 10))
    );
  }
  

  
  isColorMatch(car: Commercial): boolean {
    return !this.selectedcolor || car.vehicle_color === this.selectedcolor;
  }
  
  isSellerTypeMatch(car: Commercial): boolean {
    return !this.selectedSellerType || car.vehicle_private_trader === this.selectedSellerType;
  }
  
  isModelVersionMatch(car: Commercial): boolean {
    return !this.selectedModelVersion || `${car.vehicle_model} ${car.vehicle_model}` === this.selectedModelVersion;
  }
  
  
  
    back() {
      this.router.navigate(['commercial-home']);
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
      localStorage.removeItem('selectedCategory');
      localStorage.removeItem('selectedFuel');
      localStorage.removeItem('selectedTransmission');
      localStorage.removeItem('selectedDoors');
      localStorage.removeItem('selectedDrive');
      localStorage.removeItem('selectedCharges');
      localStorage.removeItem('selectedCity');
      localStorage.removeItem('selectedmodelversion');
    }
    
  
    
    
    navigateToCarDetail(carId: string): void {
      this.router.navigate(['/sale-single-view'], {
        queryParams: {
          saleid: carId,
        }
      });
    }
  
    filter() {
      this.router.navigate(['sale-filters']);
    }
  
    async dismissPopover() {
      await this.popoverController.dismiss();
    }
  
    async sortCars(sortType?: string) {
      if (sortType === 'lowToHigh') {
        this.filteredCarData.sort((a, b) => parseFloat(a.vehicle_price) - parseFloat(b.vehicle_price));
      } else if (sortType === 'highToLow') {
        this.filteredCarData.sort((a, b) => parseFloat(b.vehicle_price) - parseFloat(a.vehicle_price));
      } else if (sortType === 'oldestToNewest') {
        this.filteredCarData.sort((a, b) => {
          const dateA = new Date(a.post_created_date).getTime();
          const dateB = new Date(b.post_created_date).getTime();
          return dateA - dateB; // Sort from oldest to newest
        });
      } else if (sortType === 'latestToOldest') {
        this.filteredCarData.sort((a, b) => {
          const dateA = new Date(a.post_created_date).getTime();
          const dateB = new Date(b.post_created_date).getTime();
          return dateB - dateA; // Sort from latest to oldest
        });
      }
      await this.popoverController.dismiss();
      
    }
  }
  