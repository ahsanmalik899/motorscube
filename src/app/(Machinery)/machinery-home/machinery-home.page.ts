import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, tap, finalize } from 'rxjs';
import { AuthService } from 'src/app/(services)/auth.service';
import { MachineryService } from 'src/app/(services)/machinery.service';
interface Machinery {
  
  machinery_ad_sale_id: string;
  machinery_ad_hire_id:string;
  feature_type:string;
  image_url1: any;
  type: any;
  subtype: any;
  vehicle_version: any;
  vehicle_price: any;
  vehicle_charges:any;
      id: any;
      make: any;
      model: any;
      version:any;
      price: any;
      image_url: any; 
  }
@Component({
  selector: 'app-machinery-home',
  templateUrl: './machinery-home.page.html',
  styleUrls: ['./machinery-home.page.scss'],
  standalone:false,
})

export class MachineryHomePage implements OnInit {
  CommercialSaleData: Machinery[] = [];
  CommercialHireData:Machinery[] = [];
  isLoading: boolean | undefined;
  selectID: string | null | undefined;
  services = [
    {
      icon: '../../assets/machinery-section/machinery.png',
      title: 'Insurance',
      action: () => this.carInsurance()
    },
    {
      icon: '../../../assets/Menu-items/After login/All other section menu/laeasing.png',
      title: 'Leasing',
      action: () => this.carLeasing()
    },
    {
      icon: '../../../assets/Menu-items/After login/All other section menu/dealer.png',
      title: 'Dealers',
      action: () => this.carDealer()
    },
    {
      icon: '../../assets/machinery-section/man.png',
      title: 'Showrooms',
      action: () => this.carShowroom()
    },
    {
      icon: '../../../assets/Menu-items/After login/All other section menu/importer.png',
      title: 'Importers',
      action: () => this.carImporter()
    },
    {
      icon: '../../../assets/Menu-items/After login/All other section menu/exporter.png',
      title: 'Exporters',
      action: () => this.carExporter()
    },
    {
      icon: '../../../assets/Menu-items/After login/All other section menu/driving-school.png',
      title: 'Driving School',
      action: () => this.carSchool()
    },
    {
      icon: '../../assets/machinery-section/factory.png',
      title: 'Workshops',
      action: () => this.carWorkshop()
    }
  ];
  activeTab: string | undefined;
   unreadMessages = 3;
  constructor( private router: Router,private machinearyservice:MachineryService, private authService:AuthService) { 
    
  }
  ngOnInit() {
    this.authService.userID$.subscribe(userID => {
      this.selectID = userID; // Update the userID in the component
    });
    this.selectID = localStorage.getItem('userId');

    this.preloadCommercialData()
  }
back() {
  this.router.navigate(['/home']);
}


async preloadCommercialData(): Promise<void> {
  this.isLoading = true; // Optional: Show loader in UI

  forkJoin({
    sale: this.machinearyservice.getMachinerySale(),
    hire: this.machinearyservice.getMachineryHire()
  })
    .pipe(
      tap(({ sale, hire }) => {
        this.CommercialSaleData = sale;
        this.CommercialHireData = hire;
        console.log('✅ Commercial Sale Data:', sale);
        console.log('✅ Commercial Hire Data:', hire);
      }),
      finalize(() => {
        this.isLoading = false; // Optional: Hide loader
      })
    )
    .subscribe({
      error: (error) => {
        console.error('❌ Error loading commercial data:', error);
        // Optionally show a toast/snackbar here
      }
    });
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

navigateToMainMenu(): void {
  if (this.selectID) {
    this.router.navigate(['/main-menu-after-login']);
    // Redirect to main-menu if userID is not available
  
  }
  else{
    this.router.navigate(['/main-menu']);
  }
}
commercialSaleListing() {
this.router.navigate(['/machinery-sale-listing'])
}
carSaleData: any;
  
navigateToCarDetail(carId: string): void {
  this.router.navigate(['/machinery-sale-singleview'], {
    queryParams: {
      saleid: carId,
    }
  });
}
carHirePosting(): void {
  
  if (this.selectID) {
    this.router.navigate(['/post-machinery-hire']);
  } else {
    this.router.navigate(['/login']);
  }
}

carSalePosting(): void {

  if (this.selectID) {
    this.router.navigate(['/post-machinery-sale']);
  } else {
    this.router.navigate(['/login']);
  }
}
carHireListing() {
  this.router.navigate(['machinery-hire-listing']);
}
carHireData: any;
navigateToCarHireDetail(carId: string) {
  this.router.navigate(['/machinery-hire-singleview'], {
    queryParams: {
      saleid: carId,
    }
    
  });
}
carInsurance() {
  this.router.navigate(['machinery-insurance-listing']);
}
carLeasing() {
  this.router.navigate(['machinery-leasing-listing']);
}
carDealer() {
  this.router.navigate(['machinery-dealer-listing']);
}
carShowroom() {
  this.router.navigate(['machinery-showroom-listing']);
}
carImporter() {
  this.router.navigate(['machinery-importer-listing']);
}
carExporter() {
  this.router.navigate(['machinery-exporter-listing']);
}
carSchool() {
  this.router.navigate(['machinery-driving-school-listing']);
}
carWorkshop() {
  this.router.navigate(['machinery-workshop-listing']);
}
selectedIcon: any;
selectIcon(arg0: string) {
throw new Error('Method not implemented.');
}



 

}
