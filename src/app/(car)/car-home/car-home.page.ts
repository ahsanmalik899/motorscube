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
  image_url1: string;
  image_url2: string;
  car_make: string;
  car_model: string;
  car_version: string;
  car_price: number;
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
  selectID: string | null = null;
  selectedIcon: string = 'home';

  services = [
    { icon: '../../assets/Menu-items/After login/Car menu/insurance.png', title: 'Insurance', action: () => this.carInsurance() },
    { icon: '../../../assets/Menu-items/After login/Car menu/leasing.png', title: 'Leasing', action: () => this.carLeasing() },
    { icon: '../../../assets/Menu-items/After login/Bike menu/dealer.png', title: 'Dealers', action: () => this.carDealer() },
    { icon: '../../../assets/Menu-items/After login/Bike menu/showroom.png', title: 'Showrooms', action: () => this.carShowroom() },
    { icon: '../../../assets/Menu-items/After login/Car menu/importer.png', title: 'Importers', action: () => this.carImporter() },
    { icon: '../../../assets/Menu-items/After login/Car menu/exporter.png', title: 'Exporters', action: () => this.carExporter() },
    { icon: '../../../assets/Menu-items/After login/Bike menu/workshops.png', title: 'Workshops', action: () => this.carWorkshop() }
  ];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.preloadCarData();
    this.authService.userID$.subscribe(userID => {
      this.selectID = userID;
    });
    this.selectID = localStorage.getItem('userId');
  }
  
  async preloadCarData() {
    const cachedCarSaleData = localStorage.getItem('carSaleData');
    const cachedCarHireData = localStorage.getItem('carHireData');
  
    if (cachedCarSaleData && cachedCarHireData) {
      this.carSaleData = JSON.parse(cachedCarSaleData);
      this.carHireData = JSON.parse(cachedCarHireData);
    } else {
      forkJoin([
        this.userService.getCarSale(),
        this.userService.getCarHire()
      ])
        .pipe(
          tap(([carSaleData, carHireData]) => {
            localStorage.setItem('carSaleData', JSON.stringify(carSaleData));
            localStorage.setItem('carHireData', JSON.stringify(carHireData));
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
  
  navigateToMainMenu(): void {
    if (this.selectID) {
      this.router.navigate(['/main-menu-after-login']);
    } else {
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

  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    if (imgElement) {
      imgElement.src = '../../assets/Carsection/default-car.jpg';
    }
  }
}
