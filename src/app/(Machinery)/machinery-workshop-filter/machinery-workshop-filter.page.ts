import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-workshop-filter',
  templateUrl: './machinery-workshop-filter.page.html',
  styleUrls: ['./machinery-workshop-filter.page.scss'],
  standalone:false,
})
export class MachineryWorkshopFilterPage implements OnInit {

getcitylist() {
throw new Error('Method not implemented.');
}
back() {
  window.history.back();
  console.log("back");
}
getStoredArray(key: string): string[] {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : [];
}
resetAll() {
  localStorage.removeItem('selectedconditions');
  localStorage.removeItem('selectedCity');
  localStorage.removeItem('selectedcon');
  localStorage.removeItem('selectedcity');
  // Reset the selected cities and conditions
  this.selectedCity = [];
  this.selectedcon = [];
  this.selectedConditions = [];  // Clear selected conditions for the filter toggle

  // Reset filtered cities to show all cities
  this.filteredCities = [...this.cities];

  // Optionally, hide the divs or reset visibility if needed
  this.divVisible = false;  // Hide div showing selected cities
  this.showcar = true;  // Show the car selection part

  // Reset any other relevant state or data if necessary
  this.isItemAvailable = false;  // Reset the item availability flag

  // Optionally, reset other specific variables or search states
  this.initializeItems();  // Reset cities/items back to initial state
}



  isItemAvailable = false;
  items: string[] = [];  // Declare as string array

  cities: string[] = [];  // Declare cities as string array
  filteredCities: string[] = [];  // Declare filtered cities as string array
  selectedCity: string[] = [];  // Declare selectedCity as string array
  selectedcon: string[] = [];  // Declare selected conditions as string array
  selectedConditions: string[] = [];  // Declare selected conditions for toggling

  divVisible = false;
  showcar = true;

  constructor(
    public router: Router,
    private popoverController: PopoverController,
    private userService: UserService
  ) {  this.selectedCity = this.getStoredArray('selectedCity');
    this.divVisible = !!this.selectedCity.length;
    this.selectedcon = JSON.parse(localStorage.getItem('selectedcon') || '[]');
    this.selectedConditions = JSON.parse(localStorage.getItem('selectedconditions') || '[]');}
  ngOnInit() {
    this.fetchCities();  // Fetch cities when the component is initialized
    this.initializeItems();  // Initialize items
  }

  // Initialize items with predefined cities
  initializeItems() {
    this.items = ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar', 'Multan', 'Nowshera', 'Islamabad', 'Taxila', 'Mardan', 'Quetta'];
  }

  // Filter items based on the search input
  getItems(ev: any) {
    const val = ev.target.value;

    // Reset the items if the input is empty
    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => item.toLowerCase().includes(val.toLowerCase()));
    } else {
      this.isItemAvailable = false;
      this.initializeItems();  // Reset to all items when search is cleared
    }
  }

  // Fetch cities from the backend
  fetchCities() {
    this.userService.getCities().subscribe({
      next: (data: string[]) => {
        this.cities = data;
        this.filteredCities = [...this.cities];  // Copy cities to filteredCities
      },
      error: (error: any) => {
        console.error('Error fetching cities:', error);
      }
    });
  }

  // Filter cities based on search term
  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter(city => city.toLowerCase().includes(searchTerm));
  }

  // Select a city
  async selectCity(city: string) {
    this.divVisible = true;  // Show the div for selected city
    if (!this.selectedCity.includes(city)) {
      this.selectedCity.push(city);  // Add city to selected list
      await this.popoverController.dismiss();  // Dismiss popover after selecting city
      this.filterCities({ target: { value: '' } });  // Reset the filter
    }
  }

  // Hide selected city
  hideDiv(city: string) {
    this.showcar = true;
    const index = this.selectedCity.indexOf(city);
    if (index !== -1) {
      this.selectedCity.splice(index, 1);  // Remove the city from the selected list
    }
  }

  // Toggle condition selection
  selectedcondition(conditionType: string) {
    const index = this.selectedcon.indexOf(conditionType);
    if (index === -1) {
      this.selectedcon.push(conditionType);  // Add condition to the selected list
    } else {
      this.selectedcon.splice(index, 1);  // Remove condition if already selected
    }
  }

  // Toggle condition for condition filter
  toggleCondition(condition: string) {
    const index = this.selectedConditions.indexOf(condition);
    if (index >= 0) {
      this.selectedConditions.splice(index, 1);  // Remove condition if selected
    } else {
      this.selectedConditions.push(condition);  // Add condition to the selected list
    }
  }

  // Perform search and pass selected filters to the next page
  search() {
    localStorage.setItem('selectedCity', JSON.stringify(this.selectedCity));
    localStorage.setItem('selectedcon', JSON.stringify(this.selectedcon));
    localStorage.setItem('selectedconditions', JSON.stringify(this.selectedConditions));
    this.router.navigate(['/machinery-workshop-listing'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity,
        selectedConditions: this.selectedConditions
      }
    });
  }
}
