import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';
interface Car {
  machinery_ad_sale_id: string;
  vehicle_reg_city: any;
  city: any;
  feature_type: any;
  image_url1: any;
  image_url2: any;
  image_url3: any;
  transmission: any;
  fuel_type: string;
  condition: string;
  vehicle_power_transmission: string;
  vehicle_doors: string;
  vehicle_location: string;
 model: string;
 version: string;
 make: string;
 type: string;
 subtype: string;
  price: string;
  year: string;
  mileage: string;
  engine_size: string;
  body_type: string;
  color: string;
  vehicle_private_trader: string;
    post_created_date: string;
    post_status: string;
  }
@Component({
  selector: 'app-machinery-sale-listing',
  templateUrl: './machinery-sale-listing.page.html',
  styleUrls: ['./machinery-sale-listing.page.scss'],
  standalone:false,
})
export class MachinerySaleListingPage implements OnInit {

 filteredCarData: Car[] = [];
  carData: Car[] = [];
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
    private machineryservice:MachineryService,
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
      this.fetchCarSale();
    });
    
    
  }

  ngOnInit() {
      // Read query parameters
      this.route.queryParams.subscribe(params => {
          if (params) {
              this.selectedcon = params['selectedcon'] ? params['selectedcon'].split(',') : [];
              this.selectedmake = params['selectedmake'] && typeof params['selectedmake'] === 'string' ? params['selectedmake'].split(',') : [];            
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
fetchCarSale(): void {
  this.machineryservice.getMachinerySale().subscribe({
    next: (data: Car[]) => {
      this.carData = data;
      this.filterCarData(); // Apply filtering logic after fetching
    },
    error: (error: any) => {
      console.error('❌ Failed to fetch car sale data:', error);
      // Optionally show an error toast or fallback message
    }
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
  };

  this.filteredCarData = this.carData.filter((car: Car) => {
    return (
      car.post_status === 'Active' &&
      this.isFieldMatch(car.fuel_type, filterConditions.fuelTypes) &&
      this.isFieldMatch(car.condition, filterConditions.conditions) &&
      this.isFieldMatch(car.transmission, filterConditions.transmissions) &&
      this.isFieldMatch(car.vehicle_doors, filterConditions.doorNumbers) &&
      this.isFieldMatch(car.make, filterConditions.makes) &&
      this.isFieldMatch(car.city, filterConditions.cities) &&
      this.isPriceInRange(car) &&
      this.isYearInRange(car) &&
      this.isMileageInRange(car) &&
      this.isEngineSizeInRange(car) &&
      this.isCategoryMatch(car) &&
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
isPriceInRange(car: Car): boolean {
  return (
    (!this.selectedlowprice || parseInt(car.price, 10) >= parseInt(this.selectedlowprice, 10)) &&
    (!this.selectedhighprice || parseInt(car.price, 10) <= parseInt(this.selectedhighprice, 10))
  );
}

isYearInRange(car: Car): boolean {
  return (
    (!this.selectedlowyear || parseInt(car.year, 10) >= parseInt(this.selectedlowyear, 10)) &&
    (!this.selectedhighyear || parseInt(car.year, 10) <= parseInt(this.selectedhighyear, 10))
  );
}

isMileageInRange(car: Car): boolean {
  return (
    (!this.selectedlowmilage || parseInt(car.mileage, 10) >= parseInt(this.selectedlowmilage, 10)) &&
    (!this.selectedhighmilage || parseInt(car.mileage, 10) <= parseInt(this.selectedhighmilage, 10))
  );
}

isEngineSizeInRange(car: Car): boolean {
  return (
    (!this.selectedlowengine || parseInt(car.engine_size, 10) >= parseInt(this.selectedlowengine, 10)) &&
    (!this.selectedhighengine || parseInt(car.engine_size, 10) <= parseInt(this.selectedhighengine, 10))
  );
}

isCategoryMatch(car: Car): boolean {
  return !this.selectedCategory || car.body_type === this.selectedCategory;
}

isColorMatch(car: Car): boolean {
  return !this.selectedcolor || car.color === this.selectedcolor;
}

isSellerTypeMatch(car: Car): boolean {
  return !this.selectedSellerType || car.vehicle_private_trader === this.selectedSellerType;
}

isModelVersionMatch(car: Car): boolean {
  return !this.selectedModelVersion || `${car.type} ${car.subtype}` === this.selectedModelVersion;
}



  back() {
    this.router.navigate(['commercial-vehicles-home']);
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
    this.router.navigate(['/machinery-sale-singleview'], {
      queryParams: {
        saleid: carId,
      }
    });
  }

  filter() {
    this.router.navigate(['/vehicle-sale-filter']);
  }

  async dismissPopover() {
    await this.popoverController.dismiss();
  }

  async sortCars(sortType?: string) {
    if (sortType === 'lowToHigh') {
      this.filteredCarData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortType === 'highToLow') {
      this.filteredCarData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
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
