import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-importer-singleview',
  templateUrl: './machinery-importer-singleview.page.html',
  styleUrls: ['./machinery-importer-singleview.page.scss'],
  standalone:false,
})
export class MachineryImporterSingleviewPage implements OnInit {

  isReadMore = true;

  importerData: any[] = [];
  filterData: any[] = [];
  importerId = '';

  saleUser='';
  filterUserData: any[] = [];
  isModalOpen = false;
  currentIndex = 0;
  imageUrls: string[] = [];
  selectedImage = '';

  constructor(public router: Router,private machineryservice:MachineryService, private popoverController: PopoverController, private userService: UserService,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.importerId = params['importerId'];
     });
    }

  ngOnInit() {
    this.fetchimporterData();
  }
  showText() {
    this.isReadMore = !this.isReadMore;
 }

  back(){
    window.history.back();
  }
  fetchimporterData() {
    // Fetch car sale data from the backend
    this.machineryservice.getimporterData().subscribe({
      next: (data) => {
        this.importerData = data; // Store fetched data in carData property
        //this.filterData = data;
        //console.log(this.filterData);
        this.filterCarData();
      },
      error: (error) => {
        console.error('Error fetching importer data:', error);
      }
    });
  }
  filterCarData() {
    const importerId = this.importerId;
  
    // Ensure exact match for importerId and car.car_importer_ad_sale_id
    this.filterData = this.importerData.filter(car =>
      (importerId.length === 0 || importerId === car.commercial_vehicle_importer_ad_sale_id) // Exact match check
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


}


