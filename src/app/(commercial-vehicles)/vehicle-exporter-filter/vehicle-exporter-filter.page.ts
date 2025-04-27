import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-vehicle-exporter-filter',
  templateUrl: './vehicle-exporter-filter.page.html',
  styleUrls: ['./vehicle-exporter-filter.page.scss'],
  standalone:false,
})
export class VehicleExporterFilterPage implements OnInit {
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
  items: string[] = []; // Explicitly typed as string[]
  selected_looking_for: any; // Unused, consider removing or using it

  cities: string[] = []; // Explicitly typed as string[]
  filteredCities: string[] = []; // Explicitly typed as string[]
  selectedCity: string[] = []; // Explicitly typed as string[]
  selectedcon: string[] = []; // Explicitly typed as string[]
  divVisible = false;
  showcar = true;

  constructor(
    public router: Router,
    private popoverController: PopoverController,
    private userService: UserService
  ) {  this.selectedCity = this.getStoredArray('selectedCity');
    this.divVisible = !!this.selectedCity.length;
    this.selectedcon = JSON.parse(localStorage.getItem('selectedcon') || '[]');}
    getStoredArray(key: string): string[] {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : [];
    }
  ngOnInit() {
    this.fetchCities();
  }

  // Initialize the city list for the filter
  initializeItems() {
    this.items = ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar', 'Multan', 'Nowshera', 'Islamabad', 'Taxila', 'Mardan', 'Quetta'];
  }

  // Filter the cities list based on search input
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

  // Fetch the cities (or countries) from the backend service
  fetchCities() {
    // Assuming the method name is getCountries, not getCountrties (fix typo)
    this.userService.getCountrties().subscribe({
      next: (data: string[]) => {
        this.cities = data;
        this.filteredCities = [...this.cities]; // Initialize filteredCities with all cities
      },
      error: (error: any) => {
        console.error('Error fetching cities:', error);
      }
    });
  }

  // Filter cities based on search input
  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter((city: string) => city.toLowerCase().includes(searchTerm));
  }

  // Select a city to add it to the selected cities list
  async selectCity(city: string) {
    this.divVisible = true;
    if (!this.selectedCity.includes(city)) {
      this.selectedCity.push(city); // Add city to selectedCity array
      await this.popoverController.dismiss(city); // Dismiss the popover
      this.filterCities({ target: { value: '' } }); // Reset the filter to show all cities
    }
  }

  // Remove a city from the selected cities list
  hideDiv(city: string) {
    this.showcar = true;
    const index = this.selectedCity.indexOf(city);
    if (index !== -1) {
      this.selectedCity.splice(index, 1); // Remove city from selectedCity array
    }
  }

  // Toggle condition (add/remove) from selected conditions list
  selectedcondition(conditionType: string) {
    const index = this.selectedcon.indexOf(conditionType);
    if (index === -1) {
      this.selectedcon.push(conditionType); // Add condition if not already selected
    } else {
      this.selectedcon.splice(index, 1); // Remove condition if already selected
    }
  }

  // Perform search and navigate to the listing page with selected filters
  search() {
    localStorage.setItem('selectedCity', JSON.stringify(this.selectedCity));
    localStorage.setItem('selectedcon', JSON.stringify(this.selectedcon));
    this.router.navigate(['/vehicle-exporters-listing'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity
      }
    });
  }
}
