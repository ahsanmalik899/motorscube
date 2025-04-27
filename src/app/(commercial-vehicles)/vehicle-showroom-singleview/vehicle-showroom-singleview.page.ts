import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-vehicle-showroom-singleview',
  templateUrl: './vehicle-showroom-singleview.page.html',
  styleUrls: ['./vehicle-showroom-singleview.page.scss'],
  standalone:false,
})
export class VehicleShowroomSingleviewPage implements OnInit {

  isReadMore = true;

  showroomData: any[] = [];
  filterData: any[] = [];
  showroomId = '';

  saleUser='';
  filterUserData: any[] = [];
  isModalOpen = false;
  currentIndex = 0;
  imageUrls: string[] = [];
  selectedImage = '';

  constructor(public router: Router,private commercialservice:CommercialService, private popoverController: PopoverController, private userService: UserService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.showroomId = params['showroomId'];
     });
    }

  ngOnInit() {
    this.fetchshowroomData();
  }
  showText() {
    this.isReadMore = !this.isReadMore;
 }

  back(){
    window.history.back();
  }
  fetchshowroomData() {
    // Fetch car sale data from the backend
    this.commercialservice.getshowroomData().subscribe({
      next: (data: any[]) => {
        this.showroomData = data; // Store fetched data in carData property
        //this.filterData = data;
        //console.log(this.filterData);
        this.filterCarData();
      },
      error: (error: any) => {
        console.error('Error fetching showroom data:', error);
      }
    });
  }


  fetchUserSale() {
    const formData = new FormData();
    formData.append('userid', this.saleUser); // Assuming this.saleUser contains the user ID
  
    this.userService.getUserSale(formData).subscribe({
      next: (data) => {
        // Log the response to see its structure
        console.log('Response from backend:', data);
  
        // Check if the response is an array
        if (Array.isArray(data)) {
          // Data is an array, proceed with storing it
          if (data.length > 0) {
            this.filterUserData = data;
            console.log('Fetched user sale data:', this.filterUserData);
          } else {
            console.log('No data found for the user');
           
          }
        } else {
          // Handle the case when the response is not an array (could be an error message or object)
          if (data && data.error) {
            console.error('Error from server:', data.error);
            
          } else {
            console.error('Unexpected response format:', data);
            
          }
        }
      },
      error: (error) => {
        console.error('Error fetching user sale data:', error);
       
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

// Function to replace invalid image URLs with a placeholder or default URL
replaceInvalidImageUrls(data: any): void {
  const defaultImageUrl = 'assets/default-image.jpg'; // Replace with your default image URL
  const imageKeys = [
    'image_url1', 'image_url2', 'image_url3', 'image_url4',
    'image_url5', 'image_url6', 'image_url7', 'image_url8'
  ];

  imageKeys.forEach((key) => {
    const imageUrl = data[key];

    // Replace invalid URLs ending with 'NULL' with the default image URL
    if (imageUrl && imageUrl.endsWith('NULL')) {
      data[key] = defaultImageUrl;
    }
  });
}
filterCarData() {
  const showroomId = this.showroomId;
  this.filterData = this.showroomData.filter((car) => {
    return showroomId.length === 0 || car.commercial_vehicle_showroom_ad_sale_id === showroomId;
  });

  console.log('Filtered Data:', this.filterData); // Log filtered data for debugging

  this.imageUrls = []; // Clear previous image URLs
  this.filterData.forEach((data) => {
    // Replace invalid image URLs with default ones
    this.replaceInvalidImageUrls(data); 

    // Add valid images to imageUrls
    this.addValidImagesToUrls(data);

    this.saleUser = data.user_id; // Set user ID for sale
  });

  if (this.imageUrls.length > 0) {
    this.selectedImage = this.imageUrls[0]; // Set the selected image
  }

  this.fetchUserSale(); // Fetch user sale data
  console.log('URLs:', this.imageUrls); // Log the image URLs for debugging
}
// Function to replace specific fields in the data
replaceFields(data: any): void {
  // Replace dealership name if it matches certain criteria
  if (data.dealership_name === 'Old Dealership Name') {
    data.dealership_name = 'New Dealership Name';
  }

  // Replace showroom ad sale ID if necessary
  if (data.car_showroom_ad_sale_id === '15') {
    data.car_showroom_ad_sale_id = 'New ID';
  }

  // Add more field replacements as needed
}


addValidImagesToUrls(data: any) {
  const imageKeys = [
    'image_url1', 'image_url2', 'image_url3', 'image_url4',
    'image_url5', 'image_url6', 'image_url7', 'image_url8'
  ];

  imageKeys.forEach((key) => {
    const imageUrl = data[key];

    // Only add valid image URLs (those that don't end with 'NULL')
    if (imageUrl && !imageUrl.endsWith('NULL')) {
      this.imageUrls.push(imageUrl); // Add valid image to the imageUrls array
    }
  });
}

}

