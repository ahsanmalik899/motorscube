import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { BikeService } from 'src/app/(services)/bike.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-listing-bike-importer',
  templateUrl: './listing-bike-importer.page.html',
  styleUrls: ['./listing-bike-importer.page.scss'],
  standalone:false,
})
export class ListingBikeImporterPage implements OnInit {
importerData: any[] = [];
  filterData: any[] = [];
  selectedcon: any[] = [];
  selectedcity: any[] = [];
  constructor(public router: Router, private popoverController: PopoverController, private userService: UserService,private cdr: ChangeDetectorRef,
    private route: ActivatedRoute, private bikeservice:BikeService) {
    this.route.queryParams.subscribe(params => {
       this.selectedcon = params['selectedcon'];
       this.selectedcity = params['selectedcity'];
       console.log('condition : ',this.selectedcon);
    console.log('city' , this.selectedcity);
    this.fetchimporterData();
    });

   }


  ngOnInit() {
    //this.fetchimporterData();
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
    this.router.navigate(['bike-importer-filter']);
  }
  fetchimporterData() {
    // Check if importer data is already cached
    const cachedImporterData = localStorage.getItem('bikeimporterData');
    if (cachedImporterData) {
      // If data is available in cache, use it directly
      this.importerData = JSON.parse(cachedImporterData);
      console.log('Using cached importer data:', this.importerData);
      this.filterCarData(); // Apply filtering after fetching data
      return;
    }
  
    // Otherwise, fetch data from the backend
    this.bikeservice.getimporterData().subscribe({
      next: (data: String[]) => {
        this.importerData = data; // Store fetched importer data
        // Cache the fetched data in localStorage for future use
        localStorage.setItem('bikeimporterData', JSON.stringify(data));
        console.log('Fetched importer data:', this.importerData);
        this.filterCarData(); // Apply filtering after data is fetched
      },
      error: (error: any) => {
        console.error('Error fetching importer data:', error);
        // Optionally, show an error message to the user
      }
    });
  }
  
  async sortCars(sortType?: string) {
    if (sortType === 'oldestToNewest') {
      this.importerData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return dateA - dateB; // Sort from oldest to newest
      });
    } else if (sortType === 'latestToOldest') {
      this.importerData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return dateB - dateA; // Sort from latest to oldest
      });
    }
  
    // Update filterData to reflect the sorted dealershipData
    this.filterData = [...this.importerData];  // Create a shallow copy of the sorted array
  
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
    this.filterData = this.importerData.filter(car =>
      car.post_status === 'Active' &&
      (city.length === 0 || city.includes(car.importer_city)) &&
      (conditions.length === 0 || conditions.includes(car.importer_featured_type))
    );
  }
  navigateToimporterSingle(id: string) {
    this.router.navigate(['/importer-single-view'], {
      queryParams: {
        importerId: id,
      }
    });
    console.log(id);
  }

}
