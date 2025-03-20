import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { BikeService } from 'src/app/(services)/bike.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-listing-bike-exporter',
  templateUrl: './listing-bike-exporter.page.html',
  styleUrls: ['./listing-bike-exporter.page.scss'],
  standalone:false,
})
export class ListingBikeExporterPage implements OnInit {
exporterData: any[] = [];
  filterData: any[] = [];
  selectedcon: any[] = [];
  selectedcity: any[] = [];
  constructor(public router: Router, private popoverController: PopoverController, private userService: UserService,
    private route: ActivatedRoute,private cdr: ChangeDetectorRef,private bikeservice:BikeService) {
    this.route.queryParams.subscribe(params => {
       this.selectedcon = params['selectedcon'];
       this.selectedcity = params['selectedcity'];
       console.log('condition : ',this.selectedcon);
    console.log('city' , this.selectedcity);
    this.fetchExporterData();
    });

   }


  ngOnInit() {
    //this.fetchexporterData();
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
    this.router.navigate(['bike-exporter-filter']);
  }
  fetchExporterData() {
    // Check if exporter data is already cached
    const cachedExporterData = localStorage.getItem('bikeexporterData');
    if (cachedExporterData) {
      // If data is available in cache, use it directly
      this.exporterData = JSON.parse(cachedExporterData);
      console.log('Using cached exporter data:', this.exporterData);
      this.filterCarData(); // Apply filtering after fetching data
      return;
    }
  
    // Otherwise, fetch data from the backend
    this.bikeservice.getexporterData().subscribe({
      next: (data: String[]) => {
        this.exporterData = data; // Store fetched exporter data
        // Cache the fetched data in localStorage for future use
        localStorage.setItem('bikeexporterData', JSON.stringify(data));
        console.log('Fetched exporter data:', this.exporterData);
        this.filterCarData(); // Apply filtering after data is fetched
      },
      error: (error: any) => {
        console.error('Error fetching exporter data:', error);
        // Optionally, show an error message to the user
      }
    });
  }
  

  
  async sortCars(sortType?: string) {
    if (sortType === 'oldestToNewest') {
      this.exporterData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return dateA - dateB; // Sort from oldest to newest
      });
    } else if (sortType === 'latestToOldest') {
      this.exporterData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return dateB - dateA; // Sort from latest to oldest
      });
    }
  
    // Update filterData to reflect the sorted dealershipData
    this.filterData = [...this.exporterData];  // Create a shallow copy of the sorted array
  
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
    this.filterData = this.exporterData.filter(car =>
      car.post_status === 'Active' &&
      (city.length === 0 || city.includes(car.exporter_country)) &&
      (conditions.length === 0 || conditions.includes(car.exporter_featured_type))
    );
  }

  navigateToexporterSingle(id: string) {
    this.router.navigate(['/exporter-single-view'], {
      queryParams: {
        exporterId: id,
      }
    });
    console.log(id);
  }

}
