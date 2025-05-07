import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-insurance-filter',
  templateUrl: './machinery-insurance-filter.page.html',
  styleUrls: ['./machinery-insurance-filter.page.scss'],
  standalone:false,
})
export class MachineryInsuranceFilterPage implements OnInit {
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
  localStorage.removeItem('selecteddealin');
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
selectedMake: string = '';
  isItemAvailable = false;
  items: string[] = []; // Array for city list
  selectedDealIn: string[]=[];
  cities: string[] = []; // Array to store cities fetched from backend
  filteredCities: string[] = []; // Array to store filtered cities based on search
  selectedCity: string[] = []; // Array to store selected cities
  selectedcon: string[] = []; // Array to store selected conditions
  makes: string[] = []; 
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
    private machineryservice:MachineryService,
  ) {  this.selectedCity = this.getStoredArray('selectedCity');
    this.divVisible = !!this.selectedCity.length;
    this.selectedcon = JSON.parse(localStorage.getItem('selectedcon') || '[]');
    this.selectedDealIn = JSON.parse(localStorage.getItem('selecteddealin') || '[]');
    this.selectedMake = localStorage.getItem('selectedmake') || '';
    this.makedivVisible = !!this.selectedMake;

  }
    

  ngOnInit() {
    this.fetchCities();
    this.fetchMakes();
    this.selectedMake = this.getStoredValue('selectedmake');
    const storedMake = this.getStoredValue('selectedmake');
    if (storedMake) {
      this.selectedMake = storedMake;
      this.mergecararray = [storedMake];  // ✅ Add this line
      this.showmake = true;
      this.makedivVisible = true;
      this.showmodel = true;
    }
  }
  getStoredArray(key: string): string[] {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  }
  initializeItems() {
    // Initialize with a predefined list of cities (could be dynamic later)
    this.items = ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar', 'Multan', 'Nowshera', 'Islamabad', 'Taxila', 'Mardan', 'Quetta'];
  }
  getStoredValue(key: string, defaultValue: string = ''): string {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
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
  selecteddealin(dealin: string) {
    const index = this.selectedDealIn.indexOf(dealin);
    if (index === -1) {
      this.selectedDealIn.push(dealin); // Add condition type if not already selected
    } else {
      this.selectedDealIn.splice(index, 1); // Remove condition type if already selected
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
  fetchMakes() {
    this,this.machineryservice.getModels().subscribe({
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
      // Save to localStorage after removal
  }
  search() {
    localStorage.setItem('selectedCity', JSON.stringify(this.selectedCity));
    localStorage.setItem('selectedcon', JSON.stringify(this.selectedcon));
    localStorage.setItem('selecteddealin', JSON.stringify(this.selectedDealIn));
    localStorage.setItem('selectedmake', this.selectedMake);
    // Navigate to the listing page with selected filters
    this.router.navigate(['/machinery-insurance-listing'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity,
        selecteddealin:this.selectedDealIn,
        selectedmake: this.selectedMake,
      }
    });
  }
}
