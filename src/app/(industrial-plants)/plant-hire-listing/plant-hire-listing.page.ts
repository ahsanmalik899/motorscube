import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Subject, debounceTime } from 'rxjs';
import { PlantsService } from 'src/app/(services)/plants.service';
import { UserService } from 'src/app/(services)/user.service';
interface Car {
  hire_period: string;
  parameter_type: string;
  parameter_typ: string;
  installation_service: string;
  maintenance_repair: string;
  regular_maintenance: string;
  plant_ad_sale_id: string;
  plant_reg_city: any;
  city: any;
  country:any;
  feature_type: any;
  image_url1: any;
  image_url2: any;
  image_url3: any;
  vehicle_transmission: any;
  fueltype: string;
  plant_condition: string;
  vehicle_doors: string;
  sector: string;
  sub_sector: string;
  make: string;
  price: string;
  year: string;
  hour_used: string;
  gross_weight: string;
  vehicle_body_type: string;
  vehicle_color: string;
  seller_type: string;
    post_created_date: string;
    post_status: string;
    charges:string;
    about_charges:string;
    about_drive:string
  }
@Component({
  selector: 'app-plant-hire-listing',
  templateUrl: './plant-hire-listing.page.html',
  styleUrls: ['./plant-hire-listing.page.scss'],
  standalone:false,
})
export class PlantHireListingPage implements OnInit {

  
    filteredCarData: any[] = [];
    carHireData: any[] = [];
  
    selectedcon: string[] = [];
    selectedcity: string[] = [];
    selectedcountry: string[] = [];
    selectedmake: string[] = [];
    selectedmodel: string[] = [];
    selectedversion: string[] = [];
    selectedlowprice: string = '';
    selectedhighprice: string = '';
    selectedlowyear: string = '';
    selectedhighyear: string = '';
    selectedlowmilage: string = '';
    selectedhighmilage: string = '';
    selectedFuel: string[] = [];
    selectedCategory: string = '';
    selectedTransmission: string[] = [];
    selectedcolor: string = '';
    selecteddoor: string[] = [];
    selectedSellerType: string = '';
    selectedlowengine: string = '';
    selectedhighengine: string = '';
    selecteddrive: string = '';
    selectedcharges: string[] = [];
    selectedModelVersion: string = '';
    sortingSubject: Subject<any> = new Subject();
  instalationservice: string='';
  mantaineneceandrepair: string='';
  regularmantance: string='';
  selectedparameter: string='';
  selectedperiod: string='';
  
    constructor(
      private router: Router,
      private popoverController: PopoverController,
      private userService: UserService,
      private route: ActivatedRoute,
      private plantservice:PlantsService,
    ) {
      this.route.queryParams.subscribe(params => {
        this.selectedcon = this.parseQueryParam(params['selectedcon']);
        this.selectedcity = params['selectedcity'] ? params['selectedcity'].split(',') : [];
        this.selectedcountry = params['selectedcountry'] ? params['selectedcountry'].split(',') : [];
        this.selectedmake = this.parseQueryParam(params['selectedmake']);
        this.selectedmodel = this.parseQueryParam(params['selectedmodel']);
        this.selectedversion = this.parseQueryParam(params['selectedversion']);
        this.selectedFuel = params['selectedFuel'] ? params['selectedFuel'].split(',') : [];
        this.selectedTransmission = this.parseQueryParam(params['selectedTransmission']);
        this.selecteddoor = this.parseQueryParam(params['selectedDoor']);
        this.selectedcharges = params['selectedCharges'] ? params['selectedCharges'].split(',') : [];
        this.selectedModelVersion = params['selectedmodelversion'] || '';
        this.selectedlowprice = params['lowprice'] || '';
        this.selectedhighprice = params['highprice'] || '';
        this.selectedlowyear = params['lowyear'] || '';
        this.selectedhighyear = params['highyear'] || '';
        this.selectedlowmilage = params['lowmilage'] || '';
        this.selectedhighmilage = params['highmilage'] || '';
        this.selectedCategory = params['selectedCategory'] || '';
        this.selectedcolor = params['selectedColor'] || '';
        this.selectedSellerType = params['selectedSellerType'] || '';
        this.selectedhighengine = params['highengine'] || '';
        this.selectedlowengine = params['lowengine'] || '';
        this.selecteddrive = params['selectedDrive'] || '';
   this.instalationservice= params['instalationservice'] || '';
this.mantaineneceandrepair= params['mantaineneceandrepair'] || '';
this.regularmantance= params['regularmantance'] || '';
 this.selectedparameter= params['selectedparameter'] || '';
  this.selectedperiod= params['period'] || '';
 console.log('period',this.selectedperiod)
        this.fetchCarSale();
      });
    }
  
    ngOnInit() {
      this.sortingSubject.pipe(debounceTime(300)).subscribe((sortType: string) => {
        this.sortCarData(sortType);
      });
    }
  
    filterCarData() {
      const fuelTypes = new Set(this.selectedFuel);
      const conditions = new Set(this.selectedcon[0]?.split(',').map(c => c.trim().toLowerCase()));
      const transmissions = new Set(this.selectedTransmission[0]?.split(',').map(t => t.trim().toLowerCase()));
      const doorNumbers = new Set(this.selecteddoor[0]?.split(',').map(d => d.trim().toLowerCase()));
      const cities = new Set(this.selectedcity);
      const countryes = new Set(this.selectedcountry);
      const makes = new Set(this.selectedmake);
      const selectedCharges = new Set(this.selectedcharges);
      const selectedDrive = this.selecteddrive.trim().toLowerCase();
  
      this.filteredCarData = this.carHireData.filter((car: Car) => {
        const carCondition = car.plant_condition?.toLowerCase();
     
        const carDoorNumber = car.vehicle_doors?.trim().toLowerCase();
        const carDriverAvailability = car.about_drive?.trim().toLowerCase();
  
        if (car.post_status !== 'Active') return false;
        if (fuelTypes.size > 0 && !fuelTypes.has(car.fueltype)) return false;
        if (conditions.size > 0 && !conditions.has(carCondition)) return false;
        if (doorNumbers.size > 0 && !doorNumbers.has(carDoorNumber)) return false;
        if (cities.size > 0 && !cities.has(car.city)) return false;
        if (countryes.size > 0 && !countryes.has(car.country)) return false;
        if (makes.size > 0 && !makes.has(car.make)) return false;
        if (selectedCharges.size > 0 && !selectedCharges.has(car.about_charges)) return false;
        if (selectedDrive && carDriverAvailability !== selectedDrive) return false;
        if (this.selectedlowprice && parseInt(car.charges, 10) < parseInt(this.selectedlowprice, 10)) return false;
        if (this.selectedhighprice && parseInt(car.charges, 10) > parseInt(this.selectedhighprice, 10)) return false;
        if (this.selectedlowyear && parseInt(car.year, 10) < parseInt(this.selectedlowyear, 10)) return false;
        if (this.selectedhighyear && parseInt(car.year, 10) > parseInt(this.selectedhighyear, 10)) return false;
        if (this.selectedlowmilage && parseInt(car.about_charges, 10) < parseInt(this.selectedlowmilage, 10)) return false;
        if (this.selectedhighmilage && parseInt(car.hour_used, 10) > parseInt(this.selectedhighmilage, 10)) return false;
        if (this.selectedlowengine && parseInt(car.gross_weight, 10) < parseInt(this.selectedlowengine, 10)) return false;
        if (this.selectedhighengine && parseInt(car.gross_weight, 10) > parseInt(this.selectedhighengine, 10)) return false;
        if (this.selectedCategory && car.vehicle_body_type !== this.selectedCategory) return false;
        if (this.selectedcolor && car.vehicle_color !== this.selectedcolor) return false;
         if (this.selectedparameter && car.parameter_type !== this.selectedparameter) return false;
          if (this.selectedperiod && car.hire_period !== this.selectedperiod) return false;
        if (this.selectedSellerType && car.seller_type !== this.selectedSellerType) return false;
        if (this.selectedModelVersion && `${car.sector} ${car.sub_sector}` !== this.selectedModelVersion) return false;
  const requiresService =
  this.instalationservice || this.mantaineneceandrepair || this.regularmantance;

if (requiresService) {
  const matchesAnyService =
    (this.instalationservice && car.installation_service === this.instalationservice) ||
    (this.mantaineneceandrepair && car.maintenance_repair === this.mantaineneceandrepair) ||
    (this.regularmantance && car.regular_maintenance === this.regularmantance);

  if (!matchesAnyService) return false;
}

        return true;
      });
  
      localStorage.setItem('carHireData', JSON.stringify(this.filteredCarData));
    }
  
    sortCarData(sortType: string) {
      if (sortType === 'lowToHigh') {
        this.filteredCarData.sort((a, b) => parseFloat(a.car_charges) - parseFloat(b.car_charges));
      } else if (sortType === 'highToLow') {
        this.filteredCarData.sort((a, b) => parseFloat(b.car_charges) - parseFloat(a.car_charges));
      }
    }
  
    loadMoreCars(event: any) {
      this.userService.getCarHire().subscribe({
        next: (data: any[]) => {
          const newCars = data.slice(this.carHireData.length, this.carHireData.length + 20);
          this.carHireData.push(...newCars);
          this.filterCarData();
          event.target.complete();
        },
        error: (error: any) => {
          console.error('Error fetching more car data:', error);
          event.target.complete();
        }
      });
    }
  
    fetchCarSale() {
      this.plantservice.getPlantHire().subscribe({
        next: (data: any[]) => {
          this.carHireData = data;
          this.filterCarData();
        },
        error: (error: any) => {
          console.error('Error fetching car data:', error);
        }
      });
    }
    
  
    private parseQueryParam(param: any): string[] {
      if (param) {
        try {
          return Array.isArray(JSON.parse(param)) ? JSON.parse(param) : [param];
        } catch (e) {
          return [param];
        }
      }
      return [];
    }
  
    async sortCars(sortType?: string) {
      this.sortingSubject.next(sortType);
      await this.popoverController.dismiss();
    }
  
    back() {
      this.router.navigate(['/industrial-plant-home']);
     
  
    localStorage.removeItem('selectedcon');
    localStorage.removeItem('selectedcity');
    localStorage.removeItem('selectedmake');
    localStorage.removeItem('selectedcountry');
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
  
    filter() {
      this.router.navigate(['/plant-hire-filter']);
    }
  
    async dismissPopover() {
      await this.popoverController.dismiss();
    }
  
    navigateToCarDetail(carId: string): void {
      this.router.navigate(['/hire-single-view'], {
        queryParams: {
          saleid: carId,
        }
      });
    }
  
    navigateToCarHireDetail(carId: string): void {
      this.router.navigate(['/plant-hire-single-view'], {
        queryParams: {
          saleid: carId,
        }
      });
    }
  }
  