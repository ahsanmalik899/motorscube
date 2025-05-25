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
  filteredCarData: bike[] = [];
  carData: bike[] = [];
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
    private bikeservice:BikeService,
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
    this.bikeservice.getBikeSale().subscribe({
      next: (data: bike[]) => {
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

  this.filteredCarData = this.carData.filter((car: bike) => {
    return (
      car.post_status === 'Active' &&
      this.isFieldMatch(car.bike_ad_fuel_type, filterConditions.fuelTypes) &&
      this.isFieldMatch(car.bike_condition, filterConditions.conditions) &&
      this.isFieldMatch(car.bike_ad_ignition, filterConditions.transmissions) &&
      this.isFieldMatch(car.bike_ad_make, filterConditions.makes) &&
      this.isFieldMatch(car.bike_ad_location, filterConditions.cities) &&
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
isPriceInRange(car: bike): boolean {
  return (
    (!this.selectedlowprice || parseInt(car.bike_ad_price, 10) >= parseInt(this.selectedlowprice, 10)) &&
    (!this.selectedhighprice || parseInt(car.bike_ad_price, 10) <= parseInt(this.selectedhighprice, 10))
  );
}

isYearInRange(car: bike): boolean {
  return (
    (!this.selectedlowyear || parseInt(car.bike_ad_year, 10) >= parseInt(this.selectedlowyear, 10)) &&
    (!this.selectedhighyear || parseInt(car.bike_ad_year, 10) <= parseInt(this.selectedhighyear, 10))
  );
}

isMileageInRange(car: bike): boolean {
  return (
    (!this.selectedlowmilage || parseInt(car.bike_ad_mileage, 10) >= parseInt(this.selectedlowmilage, 10)) &&
    (!this.selectedhighmilage || parseInt(car.bike_ad_mileage, 10) <= parseInt(this.selectedhighmilage, 10))
  );
}

isEngineSizeInRange(car: bike): boolean {
  return (
    (!this.selectedlowengine || parseInt(car.bike_ad_engine_type, 10) >= parseInt(this.selectedlowengine, 10)) &&
    (!this.selectedhighengine || parseInt(car.bike_ad_engine_type, 10) <= parseInt(this.selectedhighengine, 10))
  );
}

isCategoryMatch(car: bike): boolean {
  return !this.selectedCategory || car.bike_ad_bodytype === this.selectedCategory;
}

isColorMatch(car: bike): boolean {
  return !this.selectedcolor || car.bike_ad_colour === this.selectedcolor;
}

isSellerTypeMatch(car: bike): boolean {
  return !this.selectedSellerType || car.bike_ad_privateortrade === this.selectedSellerType;
}

isModelVersionMatch(car: bike): boolean {
  return !this.selectedModelVersion || `${car.bike_ad_model} ${car.bike_version}` === this.selectedModelVersion;
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
      this.filteredCarData.sort((a, b) => parseFloat(a.bike_ad_price) - parseFloat(b.bike_ad_price));
    } else if (sortType === 'highToLow') {
      this.filteredCarData.sort((a, b) => parseFloat(b.bike_ad_price) - parseFloat(a.bike_ad_price));
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
