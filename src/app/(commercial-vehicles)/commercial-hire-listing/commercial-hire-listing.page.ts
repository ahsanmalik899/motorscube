import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { debounceTime, Subject } from 'rxjs';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { UserService } from 'src/app/(services)/user.service';
interface Car {
  commercial_vehicle_ad_sale_id: string;
  vehicle_reg_city: any;
  vehicle_city: any;
  vehicle_feature_type: any;
  image_url1: any;
  image_url2: any;
  image_url3: any;
  vehicle_transmission: any;
  vehicle_fuel_type: string;
  vehicle_condition: string;
  vehicle_power_transmission: string;
  vehicle_doors: string;
  vehicle_location: string;
  vehicle_type: string;
  vehicle_sub_type: string;
  vehicle_make: string;
  vehicle_price: string;
  vehicle_year: string;
  vehicle_mileage: string;
  vehicle_engine_size: string;
  vehicle_body_type: string;
  vehicle_color: string;
  vehicle_private_trader: string;
    post_created_date: string;
    post_status: string;
    vehicle_charges:string;
    vehicle_about_charges:string;
    vehicle_about_drive:string
  }
@Component({
  selector: 'app-commercial-hire-listing',
  templateUrl: './commercial-hire-listing.page.html',
  styleUrls: ['./commercial-hire-listing.page.scss'],
  standalone:false,
})
export class CommercialHireListingPage implements OnInit {
  filteredCarData: any[] = [];
  carHireData: any[] = [];

  selectedcon: string[] = [];
  selectedcity: string[] = [];
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

  constructor(
    private router: Router,
    private popoverController: PopoverController,
    private userService: UserService,
    private route: ActivatedRoute,
    private commercialservice:CommercialService
  ) {
    this.route.queryParams.subscribe(params => {
      this.selectedcon = this.parseQueryParam(params['selectedcon']);
      this.selectedcity = params['selectedcity'] ? params['selectedcity'].split(',') : [];
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
    const makes = new Set(this.selectedmake);
    const selectedCharges = new Set(this.selectedcharges);
    const selectedDrive = this.selecteddrive.trim().toLowerCase();

    this.filteredCarData = this.carHireData.filter((car: Car) => {
      const carCondition = car.vehicle_condition?.toLowerCase();
      const carTransmission = car.vehicle_power_transmission?.toLowerCase();
      const carDoorNumber = car.vehicle_doors?.trim().toLowerCase();
      const carDriverAvailability = car.vehicle_about_drive?.trim().toLowerCase();

      if (car.post_status !== 'Active') return false;
      if (fuelTypes.size > 0 && !fuelTypes.has(car.vehicle_fuel_type)) return false;
      if (conditions.size > 0 && !conditions.has(carCondition)) return false;
      if (transmissions.size > 0 && !transmissions.has(carTransmission)) return false;
      if (doorNumbers.size > 0 && !doorNumbers.has(carDoorNumber)) return false;
      if (cities.size > 0 && !cities.has(car.vehicle_city)) return false;
      if (makes.size > 0 && !makes.has(car.vehicle_make)) return false;
      if (selectedCharges.size > 0 && !selectedCharges.has(car.vehicle_about_charges)) return false;
      if (selectedDrive && carDriverAvailability !== selectedDrive) return false;
      if (this.selectedlowprice && parseInt(car.vehicle_charges, 10) < parseInt(this.selectedlowprice, 10)) return false;
      if (this.selectedhighprice && parseInt(car.vehicle_charges, 10) > parseInt(this.selectedhighprice, 10)) return false;
      if (this.selectedlowyear && parseInt(car.vehicle_year, 10) < parseInt(this.selectedlowyear, 10)) return false;
      if (this.selectedhighyear && parseInt(car.vehicle_year, 10) > parseInt(this.selectedhighyear, 10)) return false;
      if (this.selectedlowmilage && parseInt(car.vehicle_about_charges, 10) < parseInt(this.selectedlowmilage, 10)) return false;
      if (this.selectedhighmilage && parseInt(car.vehicle_mileage, 10) > parseInt(this.selectedhighmilage, 10)) return false;
      if (this.selectedlowengine && parseInt(car.vehicle_engine_size, 10) < parseInt(this.selectedlowengine, 10)) return false;
      if (this.selectedhighengine && parseInt(car.vehicle_engine_size, 10) > parseInt(this.selectedhighengine, 10)) return false;
      if (this.selectedCategory && car.vehicle_body_type !== this.selectedCategory) return false;
      if (this.selectedcolor && car.vehicle_color !== this.selectedcolor) return false;
      if (this.selectedSellerType && car.vehicle_private_trader !== this.selectedSellerType) return false;
      if (this.selectedModelVersion && `${car.vehicle_type} ${car.vehicle_sub_type}` !== this.selectedModelVersion) return false;

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
    this.commercialservice.getCommercialHire().subscribe({
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
    this.router.navigate(['commercial-vehicles-home']);
    localStorage.clear();
  }

  filter() {
    this.router.navigate(['/vehical-hire-filter']);
  }

  async dismissPopover() {
    await this.popoverController.dismiss();
  }

  navigateToCarDetail(carId: string): void {
    this.router.navigate(['/vehicle-hire-single-view'], {
      queryParams: {
        saleid: carId,
      }
    });
  }

  navigateToCarHireDetail(carId: string): void {
    this.router.navigate(['/vehicle-hire-single-view'], {
      queryParams: {
        saleid: carId,
      }
    });
  }
}
