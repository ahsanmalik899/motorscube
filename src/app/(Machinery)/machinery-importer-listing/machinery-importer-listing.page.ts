import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-importer-listing',
  templateUrl: './machinery-importer-listing.page.html',
  styleUrls: ['./machinery-importer-listing.page.scss'],
  standalone:false,
})
export class MachineryImporterListingPage implements OnInit {

  importerData: any[] = [];
  filterData: any[] = [];
  selecteddealin: any[] = [];
  selectedcon: any[] = [];
  selectedcity: any[] = [];
  constructor(public router: Router, private popoverController: PopoverController, private userService: UserService,private cdr: ChangeDetectorRef,private machinery:MachineryService,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
       this.selectedcon = params['selectedcon'];
       this.selectedcity = params['selectedcity'];
       this.selecteddealin = params['selectedmake'];
       console.log('condition : ',this.selectedcon);
       console.log('condition : ',this.selecteddealin);
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
    this.router.navigate(['machinery-home']);
    localStorage.removeItem('selectedcon');
    localStorage.removeItem('selectedcity');
    localStorage.removeItem('selectedCity');
  }
  filter(){
    this.router.navigate(['machinery-importer-filter']);
  }
  fetchimporterData() {
  
  
    // Otherwise, fetch data from the backend
    this.machinery.getimporterData().subscribe({
      next: (data: String[]) => {
        this.importerData = data; // Store fetched importer data
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
    const selectedDealin = this.selecteddealin || [];
    console.log('city1  :  ', city);
    console.log('condition1  :  ', conditions);
    this.filterData = this.importerData.filter(car =>
      car.post_status === 'Active' &&
      (city.length === 0 || city.includes(car.importer_city)) &&
      (conditions.length === 0 || conditions.includes(car.importer_featured_type))&&
      (selectedDealin.length === 0 || selectedDealin.includes(car.importer_deals_in))
    );
  }
  navigateToimporterSingle(id: string) {
    this.router.navigate(['/machinery-importer-singleview'], {
      queryParams: {
        importerId: id,
      }
    });
    console.log(id);
  }

}
