import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-workshop-filter',
  templateUrl: './machinery-workshop-filter.page.html',
  styleUrls: ['./machinery-workshop-filter.page.scss'],
  standalone:false,
})
export class MachineryWorkshopFilterPage implements OnInit {
  filteredMakes: string[] | undefined;
  searchTerm: any;
  mergecararray: string[] = [];

  showmodel: boolean | undefined;
  selectedModelVersion: string | undefined;
  showmodel2: boolean | undefined;
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
  this.selectedmakearray = [];
  this.makedivVisible = false;
  this.selectedMake='';
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

selectedMake: string = '';
makes: string[] = []; 
  isItemAvailable = false;
  items: string[] = [];  // Declare as string array
  makedivVisible: boolean = false;
  showmake: boolean = false;
  selectedmakearray: string[] = [];
  selectedMakesModels: any[] = []; 
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
    private userService: UserService,
    private machineryservice:MachineryService,
  ) {  this.selectedCity = this.getStoredArray('selectedCity');
    this.divVisible = !!this.selectedCity.length;
    this.selectedcon = JSON.parse(localStorage.getItem('selectedcon') || '[]');
    this.selectedConditions = JSON.parse(localStorage.getItem('selectedconditions') || '[]');
    this.selectedMake = localStorage.getItem('selectedmake') || '';
    this.makedivVisible = !!this.selectedMake;}
  ngOnInit() {
    this.fetchCities();  // Fetch cities when the component is initialized
    this.initializeItems();  // Initialize items
     this.fetchMakes();
     const storedMake = this.getStoredValue('selectedmake');
     if (storedMake) {
       this.selectedMake = storedMake;
       this.mergecararray = [storedMake];  // ✅ Add this line
       this.showmake = true;
       this.makedivVisible = true;
       this.showmodel = true;
     }
  }
  getStoredValue(key: string, defaultValue: string = ''): string {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
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

  fetchMakes() {
    this.machineryservice.getModels().subscribe({
      next: (makesData: string[]) => {
        this.makes = makesData; // Store makes data
        this.filteredMakes = makesData; // Initialize filtered makes with all makes data
      },
      error: (error: any) => {
        console.error('Error fetching makes:', error);
      }
    });
  }
  filterMakes(event: any) {
    this.searchTerm = event.target.value.trim().toLowerCase();  // Update search term
    if (!this.searchTerm) {
      this.filteredMakes = this.makes;  // If search term is empty, show all makes
    } else {
      // Filter makes based on search term
      this.filteredMakes = this.makes.filter(make => make.toLowerCase().includes(this.searchTerm)); 
    }
  }selectMake(make: string) {
    if (!this.mergecararray.includes(make)) {
      this.mergecararray.push(make);  // Add selected make to the list
  this.selectedMake=make;
      this.showmake = true;  // Show selected makes
      this.makedivVisible = true;  // Show div with selected makes
    }

    this.showmodel=true;
    this.searchTerm = '';  // Clear the search term after selection
    // Save selected makes to localStorage
    this.popoverController.dismiss();
  }
  makeDiv(item: string) {
    const index = this.mergecararray.indexOf(item);
    if (index !== -1) {
      this.mergecararray.splice(index, 1);  // Remove item from the list
      this.showmake = this.mergecararray.length > 0;  // Hide div if no makes are selected
      this.makedivVisible = this.mergecararray.length > 0;
      this.selectedMake='';
      localStorage.removeItem('selectedmake');
      this.showmodel=false;
      this.selectedModelVersion = '';
      this.showmodel2=false;
  
    }
  }
  // Perform search and pass selected filters to the next page
  search() {
    localStorage.setItem('selectedCity', JSON.stringify(this.selectedCity));
    localStorage.setItem('selectedcon', JSON.stringify(this.selectedcon));
    localStorage.setItem('selectedconditions', JSON.stringify(this.selectedConditions));
    localStorage.setItem('selectedmake', this.selectedMake);
    this.router.navigate(['/machinery-workshop-listing'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity,
        selectedConditions: this.selectedConditions,
        selectedmake: this.selectedMake,
      }
    });
  }
}
