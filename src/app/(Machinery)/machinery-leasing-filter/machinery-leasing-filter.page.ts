import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, AlertController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-leasing-filter',
  templateUrl: './machinery-leasing-filter.page.html',
  styleUrls: ['./machinery-leasing-filter.page.scss'],
  standalone:false,
})
export class MachineryLeasingFilterPage implements OnInit {
  filteredMakes: string[] | undefined;
  searchTerm: any;
  mergecararray: string[] = [];

  showmodel: boolean | undefined;
  selectedModelVersion: string | undefined;
  showmodel2: boolean | undefined;
back() {
  window.history.back();
}
getcitylist() {
throw new Error('Method not implemented.');
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
  this.selectedDealIn = [];
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
selectedDealIn: string[]=[];
  isItemAvailable = false;
  items: string[] = [];
  cities: string[] = [];
  filteredCities: string[] = [];
  selectedCity: string[] = [];
  selectedcon: string[] = [];
  divVisible = false;
  showcar = true;
  selectedMake: string = '';
  makes: string[] = []; 
  makedivVisible: boolean = false;
  showmake: boolean = false;
  selectedmakearray: string[] = [];
  selectedMakesModels: any[] = []; 
  constructor(
    public router: Router,
    private popoverController: PopoverController,
    private userService: UserService,
    private machineryservice:MachineryService,
    private alertController: AlertController // Inject the AlertController
  ) {

    this.selectedCity = this.getStoredArray('selectedCity');
    this.divVisible = !!this.selectedCity.length;
    this.selectedcon = JSON.parse(localStorage.getItem('selectedcon') || '[]');
     this.selectedDealIn = JSON.parse(localStorage.getItem('selecteddealin') || '[]');
     this.selectedDealIn = JSON.parse(localStorage.getItem('selecteddealin') || '[]');
     this.selectedMake = localStorage.getItem('selectedmake') || '';
     this.makedivVisible = !!this.selectedMake;
  }

  ngOnInit() {
    this.fetchCities(); // Load cities when component initializes
    this.initializeItems(); // Initialize the items list
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
  // Initialize the available items
  initializeItems() {
    this.items = [
      'Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar', 
      'Multan', 'Nowshera', 'Islamabad', 'Taxila', 'Mardan', 'Quetta'
    ];
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
  }
  getStoredArray(key: string): string[] {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  }
  // Filter items based on the search input
  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter(item =>
        item.toLowerCase().includes(val.toLowerCase())
      );
    } else {
      this.isItemAvailable = false;
      this.initializeItems(); // Reset items when the search is cleared
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
  // Fetch cities from the backend
  fetchCities() {
    this.userService.getCities().subscribe({
      next: (data: string[]) => {
        this.cities = data; // Store fetched cities
        this.filteredCities = [...this.cities]; // Initialize filteredCities with all cities
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
        // Optionally, display an alert for the user
        this.showErrorAlert('Failed to load cities. Please try again later.');
      },
    });
  }

  // Filter cities based on the search input
  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter(city =>
      city.toLowerCase().includes(searchTerm)
    );
  }

  // Select a city and add it to the selected cities list
  async selectCity(city: string) {
    this.divVisible = true;
    if (!this.selectedCity.includes(city)) {
      this.selectedCity.push(city); // Add city to selected list
      await this.popoverController.dismiss(city); // Close the popover
      this.filterCities({ target: { value: '' } }); // Clear the search filter
    }
  }

  // Remove a city from the selected list
  hideDiv(city: string) {
    this.showcar = true;
    const index = this.selectedCity.indexOf(city);
    if (index !== -1) {
      this.selectedCity.splice(index, 1); // Remove city from the selected list
    }
  }

  // Toggle condition type in the selected conditions list
  selectedcondition(conditionType: string) {
    const index = this.selectedcon.indexOf(conditionType);
    if (index === -1) {
      this.selectedcon.push(conditionType); // Add condition
    } else {
      this.selectedcon.splice(index, 1); // Remove condition
    }
  }

  // Navigate to the listing page with selected filters
  search() {
    localStorage.setItem('selectedCity', JSON.stringify(this.selectedCity));
    localStorage.setItem('selectedcon', JSON.stringify(this.selectedcon));
    localStorage.setItem('selecteddealin', JSON.stringify(this.selectedDealIn));
    localStorage.setItem('selectedmake', this.selectedMake);
    this.router.navigate(['/machinery-leasing-listing'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity,
        selecteddealin:this.selectedDealIn,
        selectedmake: this.selectedMake,
      },
    });
  }

  // Helper function to show error alert using AlertController
  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error', // Title for the alert
      message: message, // The error message
      buttons: ['OK'], // Button to close the alert
    });
    await alert.present();
  }
}
