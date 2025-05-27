import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/(services)/bike.service';
import { elementAt, forkJoin, tap } from 'rxjs';
import { AuthService } from 'src/app/(services)/auth.service';

interface bike {
  bike_ad_sale_id: string;
  bike_ad_normal_feature: any;
  bike_image2: any;
  bike_ad_make: any;
  bike_ad_model: any;
  bike_version: any;
  bike_ad_price: any;
  image_url1: any;
}

@Component({
  selector: 'app-bike-home',
  templateUrl: './bike-home.page.html',
  styleUrls: ['./bike-home.page.scss'],
  standalone: false,
})
export class BikeHomePage implements OnInit {
  bikeSaleData: bike[] = [];
  selectID: string | null = null;
  selectedIcon: any;
 unreadMessages = 3;
  services = [
    { icon: '../../assets/Menu-items/After login/Bike menu/insurnace.png', title: 'Insurance', action: () => this.carInsurance() },
    { icon: '../../../assets/Menu-items/After login/Car menu/leasing.png', title: 'Leasing', action: () => this.carLeasing() },
    { icon: '../../assets/Menu-items/After login/Bike menu/dealer.png', title: 'Dealers', action: () => this.carDealer() },
    { icon: '../../assets/Bikesection/bike-side-menue/showroom-bike.png', title: 'Showrooms', action: () => this.carShowroom() },
    { icon: '../../../assets/Menu-items/After login/Car menu/importer.png', title: 'Importers', action: () => this.carImporter() },
    { icon: '../../../assets/Menu-items/After login/Car menu/exporter.png', title: 'Exporters', action: () => this.carExporter() },
    { icon: '../../assets/Menu-items/After login/Bike menu/workshops.png', title: 'Workshops', action: () => this.carWorkshop() }
  ];
  activeTab: string | undefined;

  constructor(
    private router: Router,
    private bikeService: BikeService,
    private authService: AuthService,
  ) {}

  back() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.preloadCarData();
    this.authService.userID$.subscribe(userID => {
      this.selectID = userID;
    });
    this.selectID = localStorage.getItem('userId');
  }

  navigateToMainMenu(): void {
    if (this.selectID) {
      this.router.navigate(['/main-menu-after-login']);
    } else {
      this.router.navigate(['/main-menu']);
    }
  }

  navigateToHome() {
    this.activeTab = 'home';
    this.router.navigate(['/home']); // Update with your home route
  }

  navigateToChat() {
    this.activeTab = 'chat';
    this.router.navigate(['/chat']); // Update with your chat route
  }

  navigateToProfile() {
    this.activeTab = 'profile';
    this.router.navigate(['/profile']); // Update with your profile route
  }
  async preloadCarData() {
    this.bikeService.getBikeSale()
      .subscribe({
        next: (bikeSaleData) => {
          this.bikeSaleData = bikeSaleData;
        },
        error: (error) => {
          console.error('Error fetching car data:', error);
        }
      });
  }

  bikeSaleListing() {
    this.router.navigate(['/bike-sale-listing']);
  }

  navigateTobikeDetail(carId: string): void {
    this.router.navigate(['/bike-single-view'], {
      queryParams: {
        saleid: carId,
      }
    });
  }

  carSalePosting() {
    if (this.selectID) {
      this.router.navigate(['/bike-post-sale']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  carInsurance() {
    this.router.navigate(['/listing-bike-insurance']);
  }

  carLeasing() {
    this.router.navigate(['/listing-bike-leasing']);
  }

  carDealer() {
    this.router.navigate(['/listing-bike-dealer']);
  }

  carShowroom() {
    this.router.navigate(['/listing-bike-showroom']);
  }

  carImporter() {
    this.router.navigate(['/listing-bike-importer']);
  }

  carExporter() {
    this.router.navigate(['/listing-bike-exporter']);
  }

  carWorkshop() {
    this.router.navigate(['/listing-bike-workshop']);
  }

  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }
}
