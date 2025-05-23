import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { BikeService } from 'src/app/(services)/bike.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-listing-bike-leasing',
  templateUrl: './listing-bike-leasing.page.html',
  styleUrls: ['./listing-bike-leasing.page.scss'],
  standalone:false,
})
export class ListingBikeLeasingPage implements OnInit {
 leasingData: any[] = [];
  filterData: any[] = [];
  selectedcon: any[] = [];
  selectedcity: any[] = [];
  constructor(public router: Router, private popoverController: PopoverController, private userService: UserService, private cdr: ChangeDetectorRef,
    private bikeservice:BikeService,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
       this.selectedcon = params['selectedcon'];
       this.selectedcity = params['selectedcity'];
       console.log('condition : ',this.selectedcon);
    console.log('city' , this.selectedcity);
    this.fetchleasingData();
    });

   }


  ngOnInit() {
    //this.fetchleasingData();
  }
  truncateText(text: string, wordLimit: number): string {
    const words = text.split(/\s+/); // Split by one or more spaces
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'; // Add dots if limit is exceeded
    }
    return text;
  }

  back() {
    this.router.navigate(['bike-home']);
    localStorage.removeItem('selectedcon');
    localStorage.removeItem('selectedcity');
    localStorage.removeItem('selectedCity');
  }
  filter(){
    this.router.navigate(['bike-leasing-filter']);
  }
  fetchleasingData() {
    // Check if leasing data is already cached
    const cachedLeasingData = localStorage.getItem('bikeleasingData');
    if (cachedLeasingData) {
      // If data is available in cache, use it directly
      this.leasingData = JSON.parse(cachedLeasingData);
      console.log('Using cached leasing data:', this.leasingData);
      this.filterCarData(); // Apply filtering after fetching data
      return;
    }
  
    // Otherwise, fetch data from the backend
    this.bikeservice.getleasingData().subscribe({
      next: (data: String[]) => {
        this.leasingData = data; // Store fetched leasing data
        // Cache the fetched data in localStorage for future use
        localStorage.setItem('bikeleasingData', JSON.stringify(data));
        console.log('Fetched leasing data:', this.leasingData);
        this.filterCarData(); // Apply filtering after data is fetched
      },
      error: (error: any) => {
        console.error('Error fetching leasing data:', error);
        // You can show an error message to the user if needed
      }
    });
  }
  

  async sortCars(sortType?: string) {
    if (sortType === 'oldestToNewest') {
      this.leasingData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return dateA - dateB; // Sort from oldest to newest
      });
    } else if (sortType === 'latestToOldest') {
      this.leasingData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return dateB - dateA; // Sort from latest to oldest
      });
    }
  
    // Update filterData to reflect the sorted dealershipData
    this.filterData = [...this.leasingData];  // Create a shallow copy of the sorted array
  
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
    this.filterData = this.leasingData.filter(car =>
      car.post_status === 'Active' &&
      (city.length === 0 || city.includes(car.leasing_city)) &&
      (conditions.length === 0 || conditions.includes(car.leasing_featured_type))
    );
  }
  navigateToleasingSingle(id: string) {
    this.router.navigate(['/leasing-single-view'], {
      queryParams: {
        leasingId: id,
      }
    });
    console.log(id);
  }
}

