import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-sale-singleview',
  templateUrl: './machinery-sale-singleview.page.html',
  styleUrls: ['./machinery-sale-singleview.page.scss'],
  standalone:false,
})
export class MachinerySaleSingleviewPage implements OnInit {

  isReadMore = true;
  imageUrls: string[] = [];
  selectedImage = '';
  saleID = '';
  carSaleData: any[] = [];
  filterData: any[] = [];
  filterUserData: any[] = [];
  carFeaturesArray: string[] = [];
  saleUser = '';
  isZoomedOut = false;
  isModalOpen = false;
  currentIndex = 0;

  constructor(
    private router: Router,
    private userService: UserService,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private machineryservice:MachineryService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.saleID = params['saleid'];
 
    });
  }

  ngOnInit() {
    // Fetch car sale data directly with saleID filter
    this.fetchCarSale();
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
  showText() {
    this.isReadMore = !this.isReadMore;
 }

  back(){
    window.history.back();
  } openModal(): void {
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

  


  fetchCarSale() {
    this.machineryservice.getSinglemachinerySale(this.saleID).subscribe({
      next: (data: any[]) => {
       
        this.carSaleData = data; // Store fetched data in carData property
        this.filterCarData();
      },
      error: (error: any) => {
       
      }
    });
  }

  filterCarData() {
    this.filterData = this.carSaleData || [];
    this.imageUrls = [];
  
    this.filterData.forEach((data) => {
      // Collect all image URLs from image_url1 to image_url8
      for (let i = 1; i <= 8; i++) {
        const imageUrl = data[`image_url${i}`];
        if (imageUrl && !imageUrl.endsWith('NULL')) {
          this.imageUrls.push(imageUrl);
        }
      }
  
      // Process car features safely
      if (data.car_features) {
        this.carFeaturesArray = data.car_features
          .replace(/[\[\]"]/g, '') // Remove brackets and double quotes
          .split(',')
          .map((feature: string) => feature.trim());
      }
  
      // Save sale user ID
      this.saleUser = data.user_id;
    });
  
    // Fetch the sale user’s full details
    this.fetchUserSale();
  
    // Set the first image as default if available
    this.selectedImage = this.imageUrls.length > 0 ? this.imageUrls[0] : '';
  
    console.log('Filtered image URLs:', this.imageUrls);
  }
  
  toggleZoom(): void {
    this.isZoomedOut = !this.isZoomedOut;
  }
  fetchUserSale() {
    // Fetch car sale data from the backend
    const formData = new FormData();
    formData.append('userid', this.saleUser); // Assuming this.saleUser contains the user ID
    console.log(this.selectedImage)
    this.userService.getUserSale(formData).subscribe({
        next: (data:string[]) => {
          console.log('Type of data:', typeof data);
          if (Array.isArray(data)) {
            this.filterUserData = data;
            console.log('Fetched car data:', this.filterUserData);
        } else {
            console.error('Error: Data is not an array');
        }
        },
        error: (error: any) => {
            console.error('Error fetching car data:', error); // Logging any errors
        }
    });
}
  // Other existing methods remain unchanged...
}
