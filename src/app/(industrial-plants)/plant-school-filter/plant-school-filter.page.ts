import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { PlantsService } from 'src/app/(services)/plants.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-plant-school-filter',
  templateUrl: './plant-school-filter.page.html',
  styleUrls: ['./plant-school-filter.page.scss'],
  standalone:false,
})
export class PlantSchoolFilterPage implements OnInit {

  selectedMake: string;

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
}
resetAll() {
  localStorage.removeItem('selectedcon');
  localStorage.removeItem('selectedcity');
  localStorage.removeItem('selectedCity');
  localStorage.removeItem('selectedmake');
  // Reset the selected cities and conditions
  this.selectedCity = [];
  this.selectedcon = [];
  this.selectedmakearray = [];
  this.makedivVisible = false;
  this.selectedMake='';
  // Reset filtered cities to show all cities
  this.filteredCities = [...this.cities];

  // Optionally, hide the divs or reset visibility if needed
  this.divVisible = false;
  this.showcar = true;
  // Reset any other relevant state or data if necessary
  this.isItemAvailable = false;
}

makes: string[] = []; 
  isItemAvailable = false;
  items: string[] = []; // Explicitly typed as string array
  selected_looking_for: any; // Unused in the current code, consider removing or using it

  cities: string[] = []; // Explicitly typed as string array
  filteredCities: string[] = []; // Explicitly typed as string array
  selectedCity: string[] = []; // Explicitly typed as string array
  selectedcon: string[] = []; // Explicitly typed as string array
  divVisible = false;
  showcar = true;
  makedivVisible: boolean = false;
  showmake: boolean = false;
  selectedmakearray: string[] = [];
  selectedMakesModels: any[] = []; 
  constructor(
    public router: Router,
    private popoverController: PopoverController,
    private userService: UserService,
    private plantservice:PlantsService,
  ) {  this.selectedCity = this.getStoredArray('selectedCity');
    this.divVisible = !!this.selectedCity.length;
    this.selectedcon = JSON.parse(localStorage.getItem('selectedcon') || '[]');
    this.selectedMake = localStorage.getItem('selectedmake') || '';
    this.makedivVisible = !!this.selectedMake;}

  ngOnInit() {
    this.fetchCities();
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
  getStoredArray(key: string): string[] {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  }
  initializeItems() {
    this.items = ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar', 'Multan', 'Nowshera', 'Islamabad', 'Taxila', 'Mardan', 'Quetta'];
  }

  fetchMakes() {
    this,this.plantservice.getModels().subscribe({
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
    localStorage.setItem('selectedmake', this.selectedMake);
    // Navigate to the listing page and pass the selected parameters as query params
    this.router.navigate(['/plant-school-listing'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity,
        selectedmake: this.selectedMake,
      }
    });
  }
}
