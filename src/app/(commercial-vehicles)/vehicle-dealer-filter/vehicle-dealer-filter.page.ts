import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-vehicle-dealer-filter',
  templateUrl: './vehicle-dealer-filter.page.html',
  styleUrls: ['./vehicle-dealer-filter.page.scss'],
  standalone:false,
})
export class VehicleDealerFilterPage implements OnInit {
back() {
  window.history.back();
}
getcitylist() {
throw new Error('Method not implemented.');
}


  isItemAvailable = false;
  items: string[] = [];
  selected_looking_for: any; // It appears unused, consider removing or utilizing this

  cities: string[] = []; // List of cities fetched from the backend
  filteredCities: string[] = []; // Filtered cities based on search term
  selectedCity: string[] = []; // Selected cities to be used in the search
  selectedDealIn: string[]=[];
  selectedcon: string[] = []; // Selected conditions
  divVisible = false;
  showcar = true;

  constructor(
    public router: Router,
    private popoverController: PopoverController,
    private userService: UserService
  ) {


    this.selectedCity = this.getStoredArray('selectedCity');
    this.divVisible = !!this.selectedCity.length;
    this.selectedcon = JSON.parse(localStorage.getItem('selectedcon') || '[]');
    this.selectedDealIn = JSON.parse(localStorage.getItem('selecteddealin') || '[]');
  }

  ngOnInit() {
    this.fetchCities();
  }
  getStoredArray(key: string): string[] {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  }
  // Initialize items with a hardcoded list of cities (this can be dynamic based on your needs)
  initializeItems() {
    this.items = ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar', 'Multan', 'Nowshera', 'Islamabad', 'Taxila', 'Mardan', 'Quetta'];
  }

  // Filter items based on user input
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // Get the value of the search input
    const val = ev.target.value;

    // If the value is not empty, filter items
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item: string) => item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    } else {
      this.isItemAvailable = false;
    }
  }

  // Fetch cities from the backend using the user service
  fetchCities() {
    this.userService.getCities().subscribe({
      next: (data: string[]) => {
        this.cities = data;
        this.filteredCities = [...this.cities]; // Initially populate filteredCities with all cities
      },
      error: (error: any) => {
        console.error('Error fetching cities:', error);
      }
    });
  }

  // Filter cities based on user input
  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter((city: string) => city.toLowerCase().includes(searchTerm));
  }

  // Select a city and add it to the selectedCity list
  async selectCity(city: string) {
    this.divVisible = true; // Make the div visible when a city is selected
    if (!this.selectedCity.includes(city)) {
      this.selectedCity.push(city);
      await this.popoverController.dismiss(city); // Close the popover after selection
      this.filterCities({ target: { value: '' } }); // Reset the filter to show all cities again
    }
  }

  // Hide selected city and remove it from the list
  hideDiv(city: string) {
    this.showcar = true;
    const index = this.selectedCity.indexOf(city);
    if (index !== -1) {
      this.selectedCity.splice(index, 1); // Remove city from selectedCity array
    }
  }

  // Select or deselect a condition type
  selectedcondition(conditionType: string) {
    const index = this.selectedcon.indexOf(conditionType);
    if (index === -1) {
      this.selectedcon.push(conditionType); // Add condition type if not already selected
    } else {
      this.selectedcon.splice(index, 1); // Remove condition type if already selected
    }
  }
  selecteddealin(dealin: string) {
    const index = this.selectedDealIn.indexOf(dealin);
    if (index === -1) {
      this.selectedDealIn.push(dealin); // Add condition type if not already selected
    } else {
      this.selectedDealIn.splice(index, 1); // Remove condition type if already selected
    }
  }
  // Perform search and navigate to the listing page with selected parameters
  search() {
    localStorage.setItem('selectedCity', JSON.stringify(this.selectedCity));
    localStorage.setItem('selectedcon', JSON.stringify(this.selectedcon));
    localStorage.setItem('selecteddealin', JSON.stringify(this.selectedDealIn));
    this.router.navigate(['/vehicle-dealers-listing'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity,
        selecteddealin:this.selectedDealIn
      }
    });
  }
  resetAll() {
    localStorage.removeItem('selectedcon');
    localStorage.removeItem('selectedcity');
    localStorage.removeItem('selectedCity');
    localStorage.removeItem('selecteddealin');
    // Reset the selected cities and conditions
    this.selectedCity = [];
    this.selectedcon = [];
    this.selectedDealIn = [];
    // Reset filtered cities to show all cities
    this.filteredCities = [...this.cities];
  
    // Optionally, hide the divs or reset visibility if needed
    this.divVisible = false;
    this.showcar = true;
  
    // Reset any other relevant state or data if necessary
    this.isItemAvailable = false;
  }
  
}
