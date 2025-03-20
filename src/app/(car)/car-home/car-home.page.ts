import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/(services)/user.service';
import { shuffle } from 'lodash';
import { AuthService } from 'src/app/(services)/auth.service';
import { IonicSlides } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { forkJoin, tap } from 'rxjs';
interface Car {
car_ad_sale_id: string;
car_ad_hire_id: string;
car_ad_normal_feature: any;
image_url2: any;
car_make: any;
car_model: any;
car_version: any;
car_price: any;
  id: any;
  make: any;
  model: any;
  price: any;
  image_url: any;  // Replace with actual field names returned by your API
}

@Component({
    selector: 'app-car-home',
    templateUrl: './car-home.page.html',
    styleUrls: ['./car-home.page.scss'],
    standalone: false
})
export class CarHomePage implements OnInit {
back() {
this.router.navigate(['/home']);
}
  
  slideOpts = {
    initialSlide: 0,  
    speed: 400,       
    pager: true,      
    loop: true,       
    autoplay: true    
  };
  categories = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
  };
  swiperModules = [IonicSlides];
  carSaleData: Car[] = [];
  carHireData: Car[] = [];
  displayedAds = 0;
  selectID: string | null = null; // Ensure this is properly initialized or assigned

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    
  ) {}

  ngOnInit() {
    // Fetch data only if it is not available in cache
    this.preloadCarData();
    
    // Fetch user ID for routing decisions
    this.authService.userID$.subscribe(userID => {
      this.selectID = userID; // Update the userID in the component
    });
    this.selectID = localStorage.getItem('userId');
  }
  
  async preloadCarData() {
    const cachedCarSaleData = localStorage.getItem('carSaleData');
    const cachedCarHireData = localStorage.getItem('carHireData');
  
    if (cachedCarSaleData && cachedCarHireData) {
      // Use cached data for faster access
      this.carSaleData = JSON.parse(cachedCarSaleData);
      this.carHireData = JSON.parse(cachedCarHireData);
  
    } else {
      // Make API requests if no cached data exists
      forkJoin([
        this.userService.getCarSale(),
        this.userService.getCarHire()
      ])
        .pipe(
          // When the response comes in, store it in localStorage
          tap(([carSaleData, carHireData]) => {
            
  
            // Store data in localStorage for faster access next time
            localStorage.setItem('carSaleData', JSON.stringify(carSaleData));
            localStorage.setItem('carHireData', JSON.stringify(carHireData));
  
            // Update component state
            this.carSaleData = carSaleData;
            this.carHireData = carHireData;  
          })
        )
        .subscribe({
          error: (error) => {
            console.error('Error fetching car data:', error);
          }
        });
    }
  }
  

  

  // Separate method to check userId and navigate
 

  navigateToMainMenu(): void {
    if (this.selectID) {
      this.router.navigate(['/main-menu-after-login']);
      // Redirect to main-menu if userID is not available
    
    }
    else{
      this.router.navigate(['/main-menu']);
    }
  }

  carSaleListing(): void {
    this.router.navigate(['/for-sale']);
  }

  carHireListing(): void {
    this.router.navigate(['/for-hire']);
  }

  carHirePosting(): void {
  
    if (this.selectID) {
      this.router.navigate(['/car-hire']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  carSalePosting(): void {

    if (this.selectID) {
      this.router.navigate(['/car-sale-post']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  carLeasing(): void {
    this.router.navigate(['/listing-leasing']);
  }

  carDealer(): void {
    this.router.navigate(['/listing-dealer']);
  }

  carImporter(): void {
    this.router.navigate(['/listing-importer']);
  }

  carExporter(): void {
    this.router.navigate(['/listing-exporter']);
  }

  carShowroom(): void {
    this.router.navigate(['/listing-showroom']);
  }

  carWorkshop(): void {
    this.router.navigate(['/listing-workshop']);
  }

  carSchool(): void {
    this.router.navigate(['/listing-drv-school']);
  }

  carInsurance(): void {
    this.router.navigate(['/listing-insurance']);
  }

  navigateToCarDetail(carId: string): void {
    this.router.navigate(['/sale-single-view'], {
      queryParams: {
        saleid: carId,
      }
    });
  }

  navigateToCarHireDetail(carId: string): void {
    this.router.navigate(['/hire-single-view'], {
      queryParams: {
        saleid: carId,
      }
    });
  }

  selectedIcon: string = 'home'; // Set 'home' as the default selected icon

  // Method to handle icon selection
  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }
}
