

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { ChangeDetectorRef } from '@angular/core';   
import { AlertController, PopoverController } from '@ionic/angular';@Component({
    selector: 'app-listing-drv-school',
    templateUrl: './listing-drv-school.page.html',
    styleUrls: ['./listing-drv-school.page.scss'],
    standalone: false
})
export class ListingDrvSchoolPage implements OnInit {
  schoolData: any[] = [];
  filterData: any[] = [];
  selectedcon: any[] = [];
  selectedcity: any[] = [];
  constructor(public router: Router, private popoverController: PopoverController, private userService: UserService,
    private route: ActivatedRoute,private cdr: ChangeDetectorRef,) {
    this.route.queryParams.subscribe(params => {
       this.selectedcon = params['selectedcon'];
       this.selectedcity = params['selectedcity'];
       console.log('condition : ',this.selectedcon);
    console.log('city' , this.selectedcity);
    this.fetchSchoolData();
    });

   }


  ngOnInit() {
    //this.fetchschoolData();
  }
  back() {
    this.router.navigate(['car-home']);
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
    this.router.navigate(['listing-drv-school-filter']);
  }
  fetchSchoolData() {
    // Check if school data is already cached
    const cachedSchoolData = localStorage.getItem('schoolData');
    if (cachedSchoolData) {
      // If cached data exists, use it directly
      this.schoolData = JSON.parse(cachedSchoolData);
      console.log('Using cached school data:', this.schoolData);
      this.filterCarData(); // Apply filters after fetching data
      return;
    }
  
    // Otherwise, fetch data from the backend
    this.userService.getschoolData().subscribe({
      next: (data: string[]) => {
        this.schoolData = data; // Store fetched school data
        // Cache the fetched data in localStorage for future use
        localStorage.setItem('schoolData', JSON.stringify(data));
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
    console.log('city1  :  ', city);
    console.log('condition1  :  ', conditions);
    this.filterData = this.schoolData.filter(car =>
      car.post_status === 'Active' &&
      (city.length === 0 || city.includes(car.school_city)) &&
      (conditions.length === 0 || conditions.includes(car.school_featured_type))
    );
  }
  navigateToschoolSingle(id: string) {
    this.router.navigate(['/drv-school-single-view'], {
      queryParams: {
        schoolId: id,
      }
    });
    console.log(id);
  }

}
