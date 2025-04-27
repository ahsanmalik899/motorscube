import { CommercialService } from 'src/app/(services)/commercial.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-vehicle-dealer-singleview',
  templateUrl: './vehicle-dealer-singleview.page.html',
  styleUrls: ['./vehicle-dealer-singleview.page.scss'],
  standalone:false,
})
export class VehicleDealerSingleviewPage implements OnInit {
  
    isReadMore = true;
  
    dealershipData: any[] = [];
    filterData: any[] = [];
    dealerId = '';
  
    saleUser='';
    filterUserData: any[] = [];
    isModalOpen = false;
    currentIndex = 0;
    imageUrls: string[] = [];
    selectedImage = '';
  
    constructor(public router: Router,private commercialservice:CommercialService, private popoverController: PopoverController, private userService: UserService,
      private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
          this.dealerId = params['dealerId'];
       });
      }
  
    ngOnInit() {
      this.fetchdealershipData();
    }
    showText() {
      this.isReadMore = !this.isReadMore;
   }
  
    back(){
      window.history.back();
    }
    fetchdealershipData() {
      // Fetch car sale data from the backend
      this.commercialservice.getdealershipData().subscribe({
        next: (data) => {
          this.dealershipData = data; // Store fetched data in carData property
          //this.filterData = data;
          //console.log(this.filterData);
          this.filterCarData();
        },
        error: (error) => {
          console.error('Error fetching dealership data:', error);
        }
      });
    }
    filterCarData() {
      const dealerId = this.dealerId; // Get the dealerId from the component
      
      // Ensure dealerId is compared directly with car_dealership_ad_sale_id as a string
      this.filterData = this.dealershipData.filter(car => {
        // Check if dealerId is empty or if the car's dealership id matches the dealerId
        return (dealerId.length === 0 || car.commercial_vehicle_dealership_ad_sale_id === dealerId);
      });
    
      console.log('Filtered Data:', this.filterData); // Log filtered data for debugging
    
      // Initialize the imageUrls array to hold all valid image URLs
      this.imageUrls = [];
    
      // Iterate through each car and add images if they're valid
      this.filterData.forEach((data) => {
        this.addValidImagesToUrls(data); // Add valid image URLs
        this.saleUser = data.user_id; // Assign the user ID for sale
      });
    
      // Set the selected image to the first valid image URL
      if (this.imageUrls.length > 0) {
        this.selectedImage = this.imageUrls[0];
      }
    
      // Fetch user sale data if necessary
      this.fetchUserSale();
    
      console.log('URLs:', this.imageUrls); // Log the image URLs for debugging
    }
    
  
    fetchUserSale() {
      // Fetch car sale data from the backend
      const formData = new FormData();
      formData.append('userid', this.saleUser); // Assuming this.saleUser contains the user ID
  
      this.userService.getUserSale(formData).subscribe({
          next: (data) => {
            console.log('Type of data:', typeof data);
            if (Array.isArray(data)) {
              this.filterUserData = data;
              console.log('Fetched car data:', this.filterUserData);
          } else {
              console.error('Error: Data is not an array');
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
    addValidImagesToUrls(data: any) {
      // Define the image keys for the URLs
      const imageKeys = [
        'image_url1', 'image_url2', 'image_url3', 'image_url4',
        'image_url5', 'image_url6', 'image_url7', 'image_url8'
      ];
    
      // Loop through the keys and add valid images to the imageUrls array
      imageKeys.forEach((key) => {
        const imageUrl = data[key]; // Get the image URL from the car data
        if (imageUrl && !imageUrl.endsWith('NULL') && !this.imageUrls.includes(imageUrl)) {
          this.imageUrls.push(imageUrl); // Add only unique and valid URLs
        }
      });
    }
    
  
  }
  