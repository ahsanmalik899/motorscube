import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-vehicle-leasing-filter',
  templateUrl: './vehicle-leasing-filter.page.html',
  styleUrls: ['./vehicle-leasing-filter.page.scss'],
  standalone:false,
})
export class VehicleLeasingFilterPage implements OnInit {

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
  items: string[] = [];
  cities: string[] = [];
  filteredCities: string[] = [];
  selectedCity: string[] = [];
  selectedcon: string[] = [];
  divVisible = false;
  showcar = true;

  constructor(
    public router: Router,
    private popoverController: PopoverController,
    private userService: UserService,
    private alertController: AlertController // Inject the AlertController
  ) {

    this.selectedCity = this.getStoredArray('selectedCity');
    this.divVisible = !!this.selectedCity.length;
    this.selectedcon = JSON.parse(localStorage.getItem('selectedcon') || '[]');
  }

  ngOnInit() {
    this.fetchCities(); // Load cities when component initializes
    this.initializeItems(); // Initialize the items list
  }

  // Initialize the available items
  initializeItems() {
    this.items = [
      'Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar', 
      'Multan', 'Nowshera', 'Islamabad', 'Taxila', 'Mardan', 'Quetta'
    ];
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
    this.router.navigate(['/vehicle-leasing-listing'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity,
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
