import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-driving-school-single-view',
  templateUrl: './machinery-driving-school-single-view.page.html',
  styleUrls: ['./machinery-driving-school-single-view.page.scss'],
  standalone:false,
})
export class MachineryDrivingSchoolSingleViewPage implements OnInit {

  isReadMore = true;

  schoolData: any[] = [];
  filterData: any[] = [];
  schoolId = '';

  saleUser='';
  filterUserData: any[] = [];
  isModalOpen = false;
  currentIndex = 0;
  imageUrls: string[] = [];
  selectedImage = '';
  constructor(public router: Router,private machineryservice:MachineryService, private popoverController: PopoverController, private userService: UserService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.schoolId = params['schoolId'];
     });
    }

  ngOnInit() {
    this.fetchschoolData();
  }
  showText() {
    this.isReadMore = !this.isReadMore;
 }

  back(){
    window.history.back();
  }
  fetchschoolData() {
    // Fetch car sale data from the backend
    this.machineryservice.getschoolData().subscribe({
      next: (data) => {
        this.schoolData = data; // Store fetched data in carData property
        //this.filterData = data;
        //console.log(this.filterData);
        this.filterCarData();
      },
      error: (error) => {
        console.error('Error fetching school data:', error);
      }
    });
  }
  filterCarData() {
    const schoolId = this.schoolId;
  
    // Ensure schoolId is a string for comparison
    if (typeof schoolId === 'string' ) {
      // Filter the school data based on matching schoolId
      this.filterData = this.schoolData.filter(school =>
        school.commercial_school_ad_sale_id === schoolId // Direct comparison
      );
    } else {
      console.error('School ID is not a valid string');
      this.filterData = [];
    }
  
    console.log(this.filterData);
  
    this.filterData.forEach((data, index) => {
      if (data.image_url1 && !data.image_url1.endsWith('NULL')) {
        this.imageUrls[index] = data.image_url1;
      }
      if (data.image_url2 && !data.image_url2.endsWith('NULL')) {
        this.imageUrls[index + 1] = data.image_url2;
      }
      if (data.image_url3 && !data.image_url3.endsWith('NULL')) {
        this.imageUrls[index + 2] = data.image_url3;
      }
      if (data.image_url4 && !data.image_url4.endsWith('NULL')) {
        this.imageUrls[index + 3] = data.image_url4;
      }
      if (data.image_url5 && !data.image_url5.endsWith('NULL')) {
        this.imageUrls[index + 4] = data.image_url5;
      }
      if (data.image_url6 && !data.image_url6.endsWith('NULL')) {
        this.imageUrls[index + 5] = data.image_url6;
      }
      if (data.image_url7 && !data.image_url7.endsWith('NULL')) {
        this.imageUrls[index + 6] = data.image_url7;
      }
      if (data.image_url8 && !data.image_url8.endsWith('NULL')) {
        this.imageUrls[index + 7] = data.image_url8;
      }
      this.saleUser = data.user_id;
    });
  
    // Default to the first image
    this.selectedImage = this.imageUrls[0];
  
    // Fetch user sale data
    this.fetchUserSale();
  
    console.log('Filtered URLs:', this.imageUrls);
  }
  

  fetchUserSale() {
    const formData = new FormData();
    formData.append('userid', this.saleUser); // Assuming this.saleUser contains the user ID
  
    this.userService.getUserSale(formData).subscribe({
      next: (data) => {
        // Log the type and content of the response to check its structure
        console.log('Response received from backend:', data);
        console.log('Type of data:', typeof data);
        
        // Check if the data is an array
        if (Array.isArray(data)) {
          this.filterUserData = data;
          console.log('Fetched car data:', this.filterUserData);
        } else if (typeof data === 'object' && data !== null) {
          // Handle the case where data is an object (e.g., error message or no results)
          if (data.error) {
            console.error('Error:', data.error);
            // Handle specific errors like "No results found"
          } else {
            console.error('Received non-array data:', data);
          }
        } else {
          // If the data is neither an array nor an object, log an error
          console.error('Unexpected data type:', data);
        }
      },
      error: (error) => {
        console.error('Error fetching car data:', error); // Logging any errors
      }
    });
  }
  
  openModal(): void {
    this.isModalOpen = true;
    this.selectedImage = this.imageUrls[this.currentIndex];
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get totalImages(): number {
    return this.imageUrls.length;
  }
  previousImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.imageUrls.length - 1; // Loop to last image
    }
    this.selectedImage = this.imageUrls[this.currentIndex];
  }

  nextImage(): void {
    if (this.currentIndex < this.imageUrls.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop to first image
    }
    this.selectedImage = this.imageUrls[this.currentIndex];
  }
  showImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }
}
