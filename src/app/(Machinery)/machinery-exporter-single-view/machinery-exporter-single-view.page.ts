import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-exporter-single-view',
  templateUrl: './machinery-exporter-single-view.page.html',
  styleUrls: ['./machinery-exporter-single-view.page.scss'],
  standalone:false,
})
export class MachineryExporterSingleViewPage implements OnInit {

  isReadMore = true;
  saleUser='';
  exporterData: any[] = [];
  filterUserData: any[] = [];
  filterData: any[] = [];
  exporterId = '';
  isModalOpen = false;
  currentIndex = 0;
  imageUrls: string[] = [];
  selectedImage = '';

  constructor(public router: Router,private machineryservice:MachineryService, private popoverController: PopoverController, private userService: UserService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.exporterId = params['exporterId'];
     });
    }

  ngOnInit() {
    this.fetchexporterData();
  }
  showText() {
    this.isReadMore = !this.isReadMore;
 }

  back(){
    window.history.back();
  }
  fetchexporterData() {
    // Fetch car sale data from the backend
    this.machineryservice.getexporterData().subscribe({
      next: (data) => {
        this.exporterData = data; // Store fetched data in carData property
        //this.filterData = data;
        //console.log(this.filterData);
        this.filterCarData();
      },
      error: (error) => {
        console.error('Error fetching exporter data:', error);
      }
    });
  }
  filterCarData() {
    const exporterId = this.exporterId;
  
    // Ensure exact match for exporterId and car.car_exporter_ad_sale_id
    this.filterData = this.exporterData.filter(car =>
      (exporterId.length === 0 || exporterId === car.machinery_exporter_ad_sale_id) // Exact match check
    );
  
    console.log(this.filterData);
  
    this.filterData.forEach((data, index) => {
      // Check image URLs and add them to imageUrls if they are not "NULL"
      if (!data.image_url1.endsWith('NULL')) {
        this.imageUrls[index] = data.image_url1;
      }
      if (!data.image_url2.endsWith('NULL')) {
        this.imageUrls[index + 1] = data.image_url2;
      }
      if (!data.image_url3.endsWith('NULL')) {
        this.imageUrls[index + 2] = data.image_url3;
      }
      if (!data.image_url4.endsWith('NULL')) {
        this.imageUrls[index + 3] = data.image_url4;
      }
      if (!data.image_url5.endsWith('NULL')) {
        this.imageUrls[index + 4] = data.image_url5;
      }
      if (!data.image_url6.endsWith('NULL')) {
        this.imageUrls[index + 5] = data.image_url6;
      }
      if (!data.image_url7.endsWith('NULL')) {
        this.imageUrls[index + 6] = data.image_url7;
      }
      if (!data.image_url8.endsWith('NULL')) {
        this.imageUrls[index + 7] = data.image_url8;
      }
      this.saleUser = data.user_id;
    });
  
    this.selectedImage = this.imageUrls[0];
    this.fetchUserSale();
    console.log('urls:', this.imageUrls);
  }
  

  fetchUserSale() {
    const formData = new FormData();
    formData.append('userid', this.saleUser); // Assuming this.saleUser contains the user ID
  
    this.userService.getUserSale(formData).subscribe({
      next: (data) => {
        console.log('Full response from backend:', data); // Log the full response to check its structure
  
        // Check if the response is an array
        if (Array.isArray(data)) {
          // Handle array data
          if (data.length > 0) {
            this.filterUserData = data; // Store the fetched data
            console.log('Fetched user sale data:', this.filterUserData);
          } else {
            // If the array is empty, show a message
            console.log('No user sale data found.');
       
          }
        } else {
          // If the data is not an array, check if it contains an error message
          if (data && data.error) {
            console.error('Error from server:', data.error); // Log the error message
 
          } else {
            // Handle unexpected responses (e.g., objects, strings, etc.)
            console.error('Unexpected response format:', data);
        
          }
        }
      },
      error: (error) => {
        console.error('Error fetching user sale data:', error); // Log any HTTP error
  
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

