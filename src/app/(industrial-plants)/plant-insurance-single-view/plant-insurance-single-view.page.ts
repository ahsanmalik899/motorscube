import { PlantsService } from 'src/app/(services)/plants.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-plant-insurance-single-view',
  templateUrl: './plant-insurance-single-view.page.html',
  styleUrls: ['./plant-insurance-single-view.page.scss'],
  standalone:false,
})
export class PlantInsuranceSingleViewPage implements OnInit {


  isReadMore = true;

  insuranceData: any[] = [];
  filterData: any[] = [];
  insuranceId = '';
  saleUser='';
  filterUserData: any[] = [];
  isModalOpen = false;
  currentIndex = 0;
  imageUrls: string[] = [];
  selectedImage = '';
  constructor(public router: Router,private plantservice:PlantsService, private popoverController: PopoverController, private userService: UserService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.insuranceId = params['insuranceId'];
     });
    }

  ngOnInit() {
    this.fetchinsuranceData();
  }
  showText() {
    this.isReadMore = !this.isReadMore;
 }

  back(){
    window.history.back();
  }
  fetchinsuranceData() {
    // Fetch car sale data from the backend
    this.plantservice.getinsuranceData().subscribe({
      next: (data: any[]) => {
        this.insuranceData = data; // Store fetched data in carData property
        //this.filterData = data;
        //console.log(this.filterData);
        this.filterCarData();
      },
      error: (error: any) => {
        console.error('Error fetching insurance data:', error);
      }
    });
  }
  filterCarData() {
    const insuranceId = this.insuranceId;
    
    // Ensure an exact match by using strict equality (===)
    this.filterData = this.insuranceData.filter(car =>
      (insuranceId.length === 0 || insuranceId === car.plant_insurance_ad_sale_id)
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
    // Fetch car sale data from the backend
    const formData = new FormData();
    formData.append('userid', this.saleUser); // Assuming this.saleUser contains the user ID

    this.userService.getUserSale(formData).subscribe({
        next: (data: any[]) => {
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


