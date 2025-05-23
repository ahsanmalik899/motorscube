import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../(services)/user.service';
import { PopoverController } from '@ionic/angular';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

interface Car {
car_ad_sale_id: string;
car_reg_city: any;
car_ad_normal_feature: any;
image_url1: any;
image_url2: any;
image_url3: any;
car_transmission: any;
  car_fuel_type: string;
  car_condition: string;
  car_power_transmission: string;
  car_no_of_doors: string;
  car_location: string;
  car_model: string;
  car_version: string;
  car_make: string;
  car_price: string;
  car_year: string;
  car_mileage: string;
  car_engine_size: string;
  car_body_type: string;
  car_body_colour: string;
  car_ad_privateortrade: string;
  post_created_date: string;
  post_status: string;
}

@Component({
    selector: 'app-for-sale',
    templateUrl: './for-sale.page.html',
    styleUrls: ['./for-sale.page.scss'],
      animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerFadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ],
    standalone: false
})
export class ForSalePage implements OnInit {
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
    private route: ActivatedRoute
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
fetchCarSale() {
  const cachedData = localStorage.getItem('carData');
  
  if (cachedData) {
    this.carData = JSON.parse(cachedData); // Use cached data
    this.filterCarData(); // Filter based on the current criteria
  } else {
    // If no cached data, fetch from the backend
    this.userService.getCarSale().subscribe({
      next: (data: Car[]) => {
        this.carData = data;
        localStorage.setItem('carData', JSON.stringify(data)); // Cache the fetched data
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

  this.filteredCarData = this.carData.filter((car: Car) => {
    return (
      car.post_status === 'Active' &&
      this.isFieldMatch(car.car_fuel_type, filterConditions.fuelTypes) &&
      this.isFieldMatch(car.car_condition, filterConditions.conditions) &&
      this.isFieldMatch(car.car_power_transmission, filterConditions.transmissions) &&
      this.isFieldMatch(car.car_no_of_doors, filterConditions.doorNumbers) &&
      this.isFieldMatch(car.car_make, filterConditions.makes) &&
      this.isFieldMatch(car.car_location, filterConditions.cities) &&
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
    (!this.selectedlowprice || parseInt(car.car_price, 10) >= parseInt(this.selectedlowprice, 10)) &&
    (!this.selectedhighprice || parseInt(car.car_price, 10) <= parseInt(this.selectedhighprice, 10))
  );
}

isYearInRange(car: Car): boolean {
  return (
    (!this.selectedlowyear || parseInt(car.car_year, 10) >= parseInt(this.selectedlowyear, 10)) &&
    (!this.selectedhighyear || parseInt(car.car_year, 10) <= parseInt(this.selectedhighyear, 10))
  );
}

isMileageInRange(car: Car): boolean {
  return (
    (!this.selectedlowmilage || parseInt(car.car_mileage, 10) >= parseInt(this.selectedlowmilage, 10)) &&
    (!this.selectedhighmilage || parseInt(car.car_mileage, 10) <= parseInt(this.selectedhighmilage, 10))
  );
}

isEngineSizeInRange(car: Car): boolean {
  return (
    (!this.selectedlowengine || parseInt(car.car_engine_size, 10) >= parseInt(this.selectedlowengine, 10)) &&
    (!this.selectedhighengine || parseInt(car.car_engine_size, 10) <= parseInt(this.selectedhighengine, 10))
  );
}

isCategoryMatch(car: Car): boolean {
  return !this.selectedCategory || car.car_body_type === this.selectedCategory;
}

isColorMatch(car: Car): boolean {
  return !this.selectedcolor || car.car_body_colour === this.selectedcolor;
}

isSellerTypeMatch(car: Car): boolean {
  return !this.selectedSellerType || car.car_ad_privateortrade === this.selectedSellerType;
}

isModelVersionMatch(car: Car): boolean {
  return !this.selectedModelVersion || `${car.car_model} ${car.car_version}` === this.selectedModelVersion;
}



  back() {
    this.router.navigate(['car-home']);
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
      this.filteredCarData.sort((a, b) => parseFloat(a.car_price) - parseFloat(b.car_price));
    } else if (sortType === 'highToLow') {
      this.filteredCarData.sort((a, b) => parseFloat(b.car_price) - parseFloat(a.car_price));
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
