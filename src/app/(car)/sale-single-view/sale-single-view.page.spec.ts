import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../(services)/user.service';
import { ModalController } from '@ionic/angular';
@Component({
    selector: 'app-sale-single-view',
    templateUrl: './sale-single-view.page.html',
    styleUrls: ['./sale-single-view.page.scss'],
    standalone: false
})
export class SaleSingleViewPage implements OnInit {
  isReadMore = true;
  imageUrls: string[] = [];
  selectedImage = '';
  slideOpts = {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true
  };
  saleID = '';
  carSaleData: any[] = [];
  filterData: any[] = [];
  filterUserData: any[] = [];
  carFeaturesArray: string[] = [];
  saleUser = '';
isZoomedOut = false;
isModalOpen = false;
  currentIndex = 0;

  constructor(public router: Router,  private userService: UserService, private modalController: ModalController,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.saleID = params['saleid'];
        console.log('sale id : ', this.saleID);
     });
    }

  ngOnInit() {

    this.fetchCarSale();
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
  showText() {
    this.isReadMore = !this.isReadMore;
 }

  back(){
    window.history.back();
  }
  fetchCarSale() {
    // Fetch car sale data from the backend
    this.userService.getCarSale().subscribe({
      next: (data: any[]) => {
        console.log('Fetched car data:', data);
        this.carSaleData = data; // Store fetched data in carData property
        this.filterCarData();
      },
      error: (error: any) => {
        console.error('Error fetching car data:', error);
      }
    });
  }
  filterCarData() {
    // Ensure selected conditions arrays exist and are arrays
    const saleid = this.saleID;
    this.filterData = this.carSaleData.filter(car =>
      (saleid.length === 0 || saleid.includes(car.car_ad_sale_id))
    );
    console.log(this.filterData);
    this.filterData.forEach((data, index) => {
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
      this.carFeaturesArray = data.car_features
  .replace('[', '') // Remove opening bracket
  .replace(']', '') // Remove closing bracket
  .split(',') // Split the string into an array using commas as the delimiter
  .map((feature: string) => feature.trim().replace(/"/g, ''));

  this.saleUser=data.user_id;
  });

  this.selectedImage = this.imageUrls[0];
  this.fetchUserSale();
  console.log('urls  :   ' , this.imageUrls);
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

  toggleZoom(): void {
    this.isZoomedOut = !this.isZoomedOut;
  }


}
