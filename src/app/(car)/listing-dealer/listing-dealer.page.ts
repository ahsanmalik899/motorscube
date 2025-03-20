
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController, PopoverController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-listing-dealer',
    templateUrl: './listing-dealer.page.html',
    styleUrls: ['./listing-dealer.page.scss'],
    standalone: false
})
export class ListingDealerPage implements OnInit {
  dealershipData: any[] = [];
  filterData: any[] = [];
  selectedcon: any[] = [];
  selectedcity: any[] = [];
  constructor(public router: Router, private popoverController: PopoverController, private userService: UserService,
    private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.route.queryParams.subscribe(params => {
       this.selectedcon = params['selectedcon'];
       this.selectedcity = params['selectedcity'];
       console.log('condition : ',this.selectedcon);
    console.log('city' , this.selectedcity);
    this.fetchdealershipData();
    });

   }


  ngOnInit() {
    //this.fetchdealershipData();
  }
  truncateText(text: string, wordLimit: number): string {
    const words = text.split(/\s+/); // Split by one or more spaces
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'; // Add dots if limit is exceeded
    }
    return text;
  }

  back() {
    this.router.navigate(['car-home']);
    localStorage.removeItem('selectedcon');
    localStorage.removeItem('selectedcity');
    localStorage.removeItem('selectedCity');
  }
  filter(){
    this.router.navigate(['listing-dealer-filter']);
  }
  fetchdealershipData() {
    // Check if dealership data is already cached
    const cachedDealershipData = localStorage.getItem('dealershipData');
    if (cachedDealershipData) {
      // If data is available in cache, use it directly
      this.dealershipData = JSON.parse(cachedDealershipData);
      console.log('Using cached dealership data:', this.dealershipData);
      this.filterCarData(); // Apply filtering after fetching data
      return;
    }
  
    // Otherwise, fetch data from the backend
    this.userService.getdealershipData().subscribe({
      next: (data: String[]) => {
        this.dealershipData = data; // Store fetched dealership data
        // Cache the fetched data in localStorage for future use
        localStorage.setItem('dealershipData', JSON.stringify(data));
        console.log('Fetched dealership data:', this.dealershipData);
        this.filterCarData(); // Apply filtering after data is fetched
      },
      error: (error: any) => {
        console.error('Error fetching dealership data:', error);
        // You can show an error message to the user if needed
      }
    });
  }
  
  async sortCars(sortType?: string) {
    if (sortType === 'oldestToNewest') {
      this.dealershipData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return dateA - dateB; // Sort from oldest to newest
      });
    } else if (sortType === 'latestToOldest') {
      this.dealershipData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return dateB - dateA; // Sort from latest to oldest
      });
    }
  
    // Update filterData to reflect the sorted dealershipData
    this.filterData = [...this.dealershipData];  // Create a shallow copy of the sorted array
  
    // Manually trigger change detection
    this.cdr.detectChanges();
  
    // Dismiss the popover
    await this.popoverController.dismiss();
  
    // Log filterData to verify sorting
    console.log(this.filterData);
  }
  
  

  filterCarData() {
    // Ensure selected conditions arrays exist and are arrays
    const city = this.selectedcity || [];
    const conditions = this.selectedcon || [];
    console.log('city1  :  ', city);
    console.log('condition1  :  ', conditions);
    this.filterData = this.dealershipData.filter(car =>
      car.post_status === 'Active' &&
      (city.length === 0 || city.includes(car.dealership_city)) &&
      (conditions.length === 0 || conditions.includes(car.dealership_featured_type))
    );
  }

  navigateToDealerSingle(id: string) {
    this.router.navigate(['/dealer-single-view'], {
      queryParams: {
        dealerId: id,
      }
    });
    console.log("id ="+id);
  }

}
