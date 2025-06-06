import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-vehicle-driving-school-filter',
  templateUrl: './vehicle-driving-school-filter.page.html',
  styleUrls: ['./vehicle-driving-school-filter.page.scss'],
  standalone:false,
})
export class VehicleDrivingSchoolFilterPage implements OnInit {

getcitylist() {
throw new Error('Method not implemented.');
}
back() {
  window.history.back();
}
resetAll() {
  localStorage.removeItem('selectedcon');
  localStorage.removeItem('selectedcity');
  localStorage.removeItem('selectedCity');
  // Reset the selected cities and conditions
  this.selectedCity = [];
  this.selectedcon = [];

  // Reset filtered cities to show all cities
  this.filteredCities = [...this.cities];

  // Optionally, hide the divs or reset visibility if needed
  this.divVisible = false;
  this.showcar = true;

  // Reset any other relevant state or data if necessary
  this.isItemAvailable = false;
}


  isItemAvailable = false;
  items: string[] = []; // Explicitly typed as string array
  selected_looking_for: any; // Unused in the current code, consider removing or using it

  cities: string[] = []; // Explicitly typed as string array
  filteredCities: string[] = []; // Explicitly typed as string array
  selectedCity: string[] = []; // Explicitly typed as string array
  selectedcon: string[] = []; // Explicitly typed as string array
  divVisible = false;
  showcar = true;

  constructor(
    public router: Router,
    private popoverController: PopoverController,
    private userService: UserService
  ) {  this.selectedCity = this.getStoredArray('selectedCity');
    this.divVisible = !!this.selectedCity.length;
    this.selectedcon = JSON.parse(localStorage.getItem('selectedcon') || '[]');}

  ngOnInit() {
    this.fetchCities();
  }
  getStoredArray(key: string): string[] {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  }
  initializeItems() {
    this.items = ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar', 'Multan', 'Nowshera', 'Islamabad', 'Taxila', 'Mardan', 'Quetta'];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // Set val to the value of the search bar
    const val = ev.target.value;

    // If the value is an empty string, don't filter the items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item: string) => item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    } else {
      this.isItemAvailable = false;
    }
  }

  fetchCities() {
    // Fetch city names from the backend
    this.userService.getCities().subscribe({
      next: (data: string[]) => {
        this.cities = data;
        this.filteredCities = [...this.cities]; // Initialize filteredCities with all cities
      },
      error: (error: any) => {
        console.error('Error fetching cities:', error);
      }
    });
  }

  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter((city: string) => city.toLowerCase().includes(searchTerm));
  }

  async selectCity(city: string) {
    this.divVisible = true;
    if (!this.selectedCity.includes(city)) {
      this.selectedCity.push(city); // Add city to selectedCity array
      await this.popoverController.dismiss(city); // Dismiss the popover
      this.filterCities({ target: { value: '' } }); // Reset the filter to show all cities
    }
  }

  hideDiv(city: string) {
    this.showcar = true;
    const index = this.selectedCity.indexOf(city);
    if (index !== -1) {
      this.selectedCity.splice(index, 1); // Remove city from the selectedCity array
    }
  }

  selectedcondition(conditionType: string) {
    const index = this.selectedcon.indexOf(conditionType);
    if (index === -1) {
      this.selectedcon.push(conditionType); // Add condition if not already selected
    } else {
      this.selectedcon.splice(index, 1); // Remove condition if already selected
    }
  }

  search() {
    localStorage.setItem('selectedCity', JSON.stringify(this.selectedCity));
    localStorage.setItem('selectedcon', JSON.stringify(this.selectedcon));
    // Navigate to the listing page and pass the selected parameters as query params
    this.router.navigate(['/vehicle-driving-school-listing'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity
      }
    });
  }
}
