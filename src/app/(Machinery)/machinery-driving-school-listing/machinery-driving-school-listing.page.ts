import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-driving-school-listing',
  templateUrl: './machinery-driving-school-listing.page.html',
  styleUrls: ['./machinery-driving-school-listing.page.scss'],
  standalone:false,
})
export class MachineryDrivingSchoolListingPage implements OnInit {

  schoolData: any[] = [];
  filterData: any[] = [];
  selectedcon: any[] = [];
  selectedcity: any[] = [];
  selecteddealin: any[] = [];
  constructor(public router: Router, private popoverController: PopoverController, private userService: UserService,private machineryservice:MachineryService,
    private route: ActivatedRoute,private cdr: ChangeDetectorRef,) {
    this.route.queryParams.subscribe(params => {
       this.selectedcon = params['selectedcon'];
       this.selectedcity = params['selectedcity'];
       this.selecteddealin = params['selectedmake'];
       console.log('condition : ',this.selectedcon);
    console.log('city' , this.selectedcity);
    this.fetchSchoolData();
    });

   }


  ngOnInit() {
    //this.fetchschoolData();
  }
  back() {
    this.router.navigate(['machinery-home']);
    localStorage.removeItem('selectedcon');
    localStorage.removeItem('selectedcity');
    localStorage.removeItem('selectedCity');
  }
  truncateText(text: string, wordLimit: number): string {
    const words = text.split(/\s+/); // Split by one or more spaces
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'; // Add dots if limit is exceeded
    }
    return text;
  }

 
  filter(){
    this.router.navigate(['machinery-driving-school-filter']);
  }
  fetchSchoolData() {
   
  
    // Otherwise, fetch data from the backend
    this.machineryservice.getschoolData().subscribe({
      next: (data: string[]) => {
        this.schoolData = data; // Store fetched school data
        console.log('Fetched school data:', this.schoolData);
        this.filterCarData(); // Apply filters after data is fetched
      },
      error: (error: any) => {
        console.error('Error fetching school data:', error);
        // Optionally, show an error message to the user
      }
    });
    
  }
  

  async sortCars(sortType?: string) {
    if (sortType === 'oldestToNewest') {
      this.schoolData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return dateA - dateB; // Sort from oldest to newest
      });
    } else if (sortType === 'latestToOldest') {
      this.schoolData.sort((a, b) => {
        const dateA = new Date(a.post_created_date).getTime();
        const dateB = new Date(b.post_created_date).getTime();
        return dateB - dateA; // Sort from latest to oldest
      });
    }
  
    // Update filterData to reflect the sorted dealershipData
    this.filterData = [...this.schoolData];  // Create a shallow copy of the sorted array
  
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
    this.filterData = this.schoolData.filter(car =>
      car.post_status === 'Active' &&
      (city.length === 0 || city.includes(car.school_city)) &&
      (conditions.length === 0 || conditions.includes(car.school_featured_type))&&
      (selectedDealin.length === 0 || selectedDealin.includes(car.school_vehicle_type))
    );
  }
  navigateToschoolSingle(id: string) {
    this.router.navigate(['/machinery-driving-school-single-view'], {
      queryParams: {
        schoolId: id,
      }
    });
    console.log(id);
  }

}
