import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-bike-showroom-filter',
  templateUrl: './bike-showroom-filter.page.html',
  styleUrls: ['./bike-showroom-filter.page.scss'],
  standalone:false,
})
export class BikeShowroomFilterPage implements OnInit {

getcitylist() {
throw new Error('Method not implemented.');
}
getStoredArray(key: string): string[] {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : [];
}
resetAll() {
  localStorage.removeItem('selectedCity');
  localStorage.removeItem('selectedcon');
  localStorage.removeItem('selectedcity');
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
  divVisible = false; // Can be removed if not used in the popover logic
  showcar = true; // Can be removed if not needed in the UI

  constructor(
    public router: Router,
    private popoverController: PopoverController,
    private userService: UserService,
    private alertController: AlertController // For showing error alerts
  ) {  this.selectedCity = this.getStoredArray('selectedCity');
    this.divVisible = !!this.selectedCity.length;
    this.selectedcon = JSON.parse(localStorage.getItem('selectedcon') || '[]');}

  ngOnInit() {
    this.fetchCities();
    this.initializeItems();
  }

  // Navigate to the previous page
  back() {
     window.history.back()
  }

  // Initialize available items (cities or other options)
  initializeItems() {
    this.items = ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar', 'Multan', 'Nowshera', 'Islamabad', 'Taxila', 'Mardan', 'Quetta'];
  }

  // Filter the items based on the search input
  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => item.toLowerCase().includes(val.toLowerCase()));
    } else {
      this.isItemAvailable = false;
      this.initializeItems(); // Reset items when search is cleared
    }
  }

  // Fetch the cities from the service (backend)
  fetchCities() {
    this.userService.getCities().subscribe({
      next: (data) => {
        this.cities = data;
        this.filteredCities = [...this.cities]; // Initialize the filtered cities
      },
      error: () => {
        this.showErrorAlert('Failed to load cities. Please try again later.');
      }
    });
  }

  // Filter cities based on the search term
  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter((city) => city.toLowerCase().includes(searchTerm));
  }

  // Select a city and add it to the selectedCity list
  async selectCity(city: string) {
    this.divVisible = true;
    if (!this.selectedCity.includes(city)) {
      this.selectedCity.push(city); // Add city to the selection
      await this.popoverController.dismiss(); // Close the popover (if using)
      this.filterCities({ target: { value: '' } }); // Reset the filter
    }
  }

  // Remove a city from the selected list
  hideDiv(city: string) {
    this.showcar = true;
    const index = this.selectedCity.indexOf(city);
    if (index !== -1) {
      this.selectedCity.splice(index, 1); // Remove the city from the selected list
    }
  }

  // Add or remove condition types
  selectedcondition(conditionType: string) {
    const index = this.selectedcon.indexOf(conditionType);
    if (index === -1) {
      this.selectedcon.push(conditionType); // Add the condition type
    } else {
      this.selectedcon.splice(index, 1); // Remove the condition type
    }
  }

  // Perform search and pass the selected filters to the search page
  search() {
    localStorage.setItem('selectedCity', JSON.stringify(this.selectedCity));
    localStorage.setItem('selectedcon', JSON.stringify(this.selectedcon));
    this.router.navigate(['/listing-bike-showroom'], {
      queryParams: {
        selectedcon: this.selectedcon,
        selectedcity: this.selectedCity
      }
    });
  }

  // Show error alert if cities fetch fails
  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
