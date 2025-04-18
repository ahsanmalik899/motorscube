import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-vehicle-hire-single-view',
  templateUrl: './vehicle-hire-single-view.page.html',
  styleUrls: ['./vehicle-hire-single-view.page.scss'],
  standalone:false,
})
export class VehicleHireSingleViewPage implements OnInit {

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
  filteredCities: any;
  cities: any;
  divVisible: boolean | undefined;
  selectedCity: any;
  popoverController: any;
  showcar: boolean | undefined;

  constructor(public router: Router,  private userService: UserService, private modalController: ModalController,
    private commercialservice:CommercialService,
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
  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter((city: string) => city.toLowerCase().includes(searchTerm));
  }
  async selectCity(city: string) {
    this.divVisible = true;
    if (!this.selectedCity.includes(city)) {
      this.selectedCity.push(city);
            await this.popoverController.dismiss(city);
      this.filterCities({ target: { value: '' } });
    }  }
  hideDiv(city: string) {
      this.showcar = true;
    const index = this.selectedCity.indexOf(city); 
    if (index !== -1) {
      this.selectedCity.splice(index, 1); 
    }
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
    this.commercialservice.getSinglevehiclehire(this.saleID).subscribe({
      next: (data: any[]) => {
       
        this.carSaleData = data; // Store fetched data in carData property
        this.filterCarData();
      },
      error: (error: any) => {
       
      }
    });
  }

  filterCarData() {
    // Use the filtered data directly instead of filtering client-side
    this.filterData = this.carSaleData;

    

    // Clear previous image URLs
    this.imageUrls = [];

    // Loop through filtered data to push valid image URLs
    this.filterData.forEach((data) => {
      // Collect all valid image URLs (excluding those ending with 'NULL')
      if (data.image_url1 && !data.image_url1.endsWith('NULL')) {
        this.imageUrls.push(data.image_url1);
      }
      if (data.image_url2 && !data.image_url2.endsWith('NULL')) {
        this.imageUrls.push(data.image_url2);
      }
      if (data.image_url3 && !data.image_url3.endsWith('NULL')) {
        this.imageUrls.push(data.image_url3);
      }
      if (data.image_url4 && !data.image_url4.endsWith('NULL')) {
        this.imageUrls.push(data.image_url4);
      }
      if (data.image_url5 && !data.image_url5.endsWith('NULL')) {
        this.imageUrls.push(data.image_url5);
      }
      if (data.image_url6 && !data.image_url6.endsWith('NULL')) {
        this.imageUrls.push(data.image_url6);
      }
      if (data.image_url7 && !data.image_url7.endsWith('NULL')) {
        this.imageUrls.push(data.image_url7);
      }
      if (data.image_url8 && !data.image_url8.endsWith('NULL')) {
        this.imageUrls.push(data.image_url8);
      }

      // Process car features (optional)
      this.carFeaturesArray = data.car_features
        .replace('[', '') // Remove opening bracket
        .replace(']', '') // Remove closing bracket
        .split(',') // Split the string into an array using commas
        .map((feature: string) => feature.trim().replace(/"/g, '')); // Clean each feature

      // Store the user ID for the sale
      this.saleUser = data.user_id;
    });
    this.fetchUserSale();
    // Set the selected image to the first valid image URL (if available)
    this.selectedImage = this.imageUrls.length > 0 ? this.imageUrls[0] : '';
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
