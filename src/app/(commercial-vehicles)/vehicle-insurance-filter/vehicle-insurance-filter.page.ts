import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-vehicle-insurance-filter',
  templateUrl: './vehicle-insurance-filter.page.html',
  styleUrls: ['./vehicle-insurance-filter.page.scss'],
  standalone:false,
})
export class VehicleInsuranceFilterPage implements OnInit {
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
  items: string[] = []; // Array for city list

  cities: string[] = []; // Array to store cities fetched from backend
  filteredCities: string[] = []; // Array to store filtered cities based on search
  selectedCity: string[] = []; // Array to store selected cities
  selectedcon: string[] = []; // Array to store selected conditions

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
    // Initialize with a predefined list of cities (could be dynamic later)
    this.items = ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar', 'Multan', 'Nowshera', 'Islamabad', 'Taxila', 'Mardan', 'Quetta'];
  }

  getItems(ev: any) {
    // Reset items to the original list
    this.initializeItems();

    // Get the value of the search input field
    const val = ev.target.value;

    // Filter items if the value is non-empty
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => item.toLowerCase().includes(val.toLowerCase()));
    } else {
      this.isItemAvailable = false; // Reset filter
    }
  }

  fetchCities() {
    // Fetch cities from the backend via the service
    this.userService.getCities().subscribe({
      next: (data: string[]) => {
        this.cities = data;
        this.filteredCities = [...this.cities]; // Create a copy for filtering
      },
      error: (error: any) => {
        console.error('Error fetching cities:', error);
        // You could show an error message to the user here
      }
    });
  }

  filterCities(event: any) {
    // Filter cities based on search term
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter((city) =>
      city.toLowerCase().includes(searchTerm)
    );
  }

  async selectCity(city: string) {
    this.divVisible = true;
    
    // Only add city to selected list if it's not already there
    if (!this.selectedCity.includes(city)) {
      this.selectedCity.push(city);
      await this.popoverController.dismiss(); // Dismiss popover after selection
      this.filterCities({ target: { value: '' } }); // Reset city filter
    }
  }

  hideDiv(city: string) {
    this.showcar = true;
    
    // Remove city from the selected list
    const index = this.selectedCity.indexOf(city);
    if (index !== -1) {
      this.selectedCity.splice(index, 1);
    }
  }

  selectedcondition(conditionType: string) {
    const index = this.selectedcon.indexOf(conditionType);
    
    // Add or remove condition from the selected list
    if (index === -1) {
      this.selectedcon.push(conditionType);
    } else {
      this.selectedcon.splice(index, 1);
    }
  }

  search() {
    localStorage.setItem('selectedCity', JSON.stringify(this.selectedCity));
    localStorage.setItem('selectedcon', JSON.stringify(this.selectedcon));
    // Navigate to the listing page with selected filters
    this.router.navigate(['/vehicle-insurance-listing'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity
      }
    });
  }
}
