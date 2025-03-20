import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../(services)/user.service';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-listing-insurance',
    templateUrl: './listing-insurance.page.html',
    styleUrls: ['./listing-insurance.page.scss'],
    standalone: false
})
export class ListingInsurancePage implements OnInit {
  insuranceData: any[] = [];
  selectedcon: string[] = [];
  selectedcity: string[] = [];

  constructor(
    public router: Router,
    private popoverController: PopoverController,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      // Ensure selectedcon and selectedcity are treated as arrays
      this.selectedcon = Array.isArray(params['selectedcon']) ? params['selectedcon'] : (params['selectedcon'] ? params['selectedcon'].split(',') : []);
      this.selectedcity = Array.isArray(params['selectedcity']) ? params['selectedcity'] : (params['selectedcity'] ? params['selectedcity'].split(',') : []);

      console.log('Condition:', this.selectedcon);
      console.log('City:', this.selectedcity);

      this.fetchinsuranceData(); // Fetch insurance data after handling params
    });
  }

  ngOnInit() {
    if (this.insuranceData.length === 0) {
      this.fetchinsuranceData();
    }
  }

  // Truncate text for display purposes
  truncateText(text: string, wordLimit: number): string {
    const words = text.split(/\s+/); // Split by one or more spaces
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'; // Add ellipsis if word limit is exceeded
    }
    return text;
  }

  // Navigate back to the previous page
  back() {
    localStorage.removeItem('selectedcon');
    localStorage.removeItem('selectedcity');
    this.router.navigate(['car-home']);
    localStorage.removeItem('selectedCity');
   
  }
  // Filter button to go to another page (e.g., filter options)
  filter() {
    this.router.navigate(['listing-insurance-filter']);
  }

// Fetch the insurance data from the backend with caching
fetchinsuranceData() {
  // Check if data is already fetched or cached in localStorage
  const cachedData = localStorage.getItem('insuranceData');
  if (cachedData) {
    // If data is available in cache, use it directly
    this.insuranceData = JSON.parse(cachedData);
    console.log('Using cached insurance data:', this.insuranceData);
    this.filterInsuranceData(); // Filter data after it's fetched
    return;
  }

  // If no cached data, fetch data from API
  this.userService.getinsuranceData().subscribe({
    next: (data: any[]) => {
      this.insuranceData = data;
      // Cache the fetched data in localStorage for future use
      localStorage.setItem('insuranceData', JSON.stringify(data));
      console.log('Fetched insurance data:', this.insuranceData);
      this.filterInsuranceData(); // Filter data after it's fetched
    },
    error: (error: any) => {
      console.error('Error fetching insurance data:', error);
      // Handle error appropriately (e.g., show a message)
    }
  });
}


  // Sort cars by a specific type (oldest, newest, etc.)
  async sortCars(sortType?: string) {
    const sortOrder = (sortType === 'oldestToNewest') ? 1 : (sortType === 'latestToOldest') ? -1 : 0;

    if (sortOrder !== 0) {
      this.insuranceData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return (dateA - dateB) * sortOrder;
      });
    }

    await this.popoverController.dismiss();
    console.log('Sorted Insurance Data:', this.insuranceData);
  }

  // Filter the insurance data based on selected filters (cities and conditions)
  filterInsuranceData() {
    const cities = this.selectedcity || [];
    const conditions = this.selectedcon || [];

    this.insuranceData = this.insuranceData.filter(insurance => 
      insurance.post_status === 'Active' &&
      (cities.length === 0 || cities.includes(insurance.insurance_city)) &&
      (conditions.length === 0 || conditions.includes(insurance.insurance_featured_type))
    );

    console.log('Filtered Insurance Data:', this.insuranceData);
  }

  // Navigate to the single insurance view page
  navigateToinsuranceSingle(id: string) {
    this.router.navigate(['/insurance-single-view'], {
      queryParams: {
        insuranceId: id,
      }
    });
    console.log('Navigating to insurance single view with ID:', id);
  }
}
