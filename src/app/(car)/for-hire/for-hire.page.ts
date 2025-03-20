import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../(services)/user.service';
import { PopoverController } from '@ionic/angular';
import { debounceTime } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-for-hire',
  templateUrl: './for-hire.page.html',
  styleUrls: ['./for-hire.page.scss'],
  standalone: false
})
export class ForHirePage implements OnInit {
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
    private route: ActivatedRoute
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

    this.filteredCarData = this.carHireData.filter((car: any) => {
      const carCondition = car.car_condition?.toLowerCase();
      const carTransmission = car.car_power_transmission?.toLowerCase();
      const carDoorNumber = car.car_no_of_doors?.trim().toLowerCase();
      const carDriverAvailability = car.car_driver?.trim().toLowerCase();

      if (car.post_status !== 'Active') return false;
      if (fuelTypes.size > 0 && !fuelTypes.has(car.car_fuel_type)) return false;
      if (conditions.size > 0 && !conditions.has(carCondition)) return false;
      if (transmissions.size > 0 && !transmissions.has(carTransmission)) return false;
      if (doorNumbers.size > 0 && !doorNumbers.has(carDoorNumber)) return false;
      if (cities.size > 0 && !cities.has(car.car_location)) return false;
      if (makes.size > 0 && !makes.has(car.car_make)) return false;
      if (selectedCharges.size > 0 && !selectedCharges.has(car.car_charges_type)) return false;
      if (selectedDrive && carDriverAvailability !== selectedDrive) return false;
      if (this.selectedlowprice && parseInt(car.car_charges, 10) < parseInt(this.selectedlowprice, 10)) return false;
      if (this.selectedhighprice && parseInt(car.car_charges, 10) > parseInt(this.selectedhighprice, 10)) return false;
      if (this.selectedlowyear && parseInt(car.car_year, 10) < parseInt(this.selectedlowyear, 10)) return false;
      if (this.selectedhighyear && parseInt(car.car_year, 10) > parseInt(this.selectedhighyear, 10)) return false;
      if (this.selectedlowmilage && parseInt(car.car_mileage, 10) < parseInt(this.selectedlowmilage, 10)) return false;
      if (this.selectedhighmilage && parseInt(car.car_mileage, 10) > parseInt(this.selectedhighmilage, 10)) return false;
      if (this.selectedlowengine && parseInt(car.car_engine_size, 10) < parseInt(this.selectedlowengine, 10)) return false;
      if (this.selectedhighengine && parseInt(car.car_engine_size, 10) > parseInt(this.selectedhighengine, 10)) return false;
      if (this.selectedCategory && car.car_body_type !== this.selectedCategory) return false;
      if (this.selectedcolor && car.car_body_colour !== this.selectedcolor) return false;
      if (this.selectedSellerType && car.car_ad_privateortrade !== this.selectedSellerType) return false;
      if (this.selectedModelVersion && `${car.car_model} ${car.car_version}` !== this.selectedModelVersion) return false;

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
    const cachedData = localStorage.getItem('carHireData');
    if (cachedData) {
      this.carHireData = JSON.parse(cachedData);
      this.filterCarData();
    } else {
      if (this.userService.getCarHire()) {
        this.userService.getCarHire().subscribe({
          next: (data: any[]) => {
            this.carHireData = data;
            localStorage.setItem('carHireData', JSON.stringify(data));
            this.filterCarData();
          },
          error: (error: any) => {
            console.error('Error fetching car data:', error);
          }
        });
      } else {
        console.error('getCarHire() returned undefined.');
      }
    }
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
    this.router.navigate(['car-home']);
    localStorage.clear();
  }

  filter() {
    this.router.navigate(['hire-filters']);
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
    this.router.navigate(['/hire-single-view'], {
      queryParams: {
        saleid: carId,
      }
    });
  }
}
