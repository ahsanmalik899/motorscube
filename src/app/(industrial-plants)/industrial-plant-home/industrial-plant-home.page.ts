import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, tap, finalize } from 'rxjs';
import { AuthService } from 'src/app/(services)/auth.service';
import { PlantsService } from 'src/app/(services)/plants.service';
interface Machinery {
  
  plant_ad_sale_id: string;
  plant_ad_hire_id:string;
  ad_type:string;
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
  selector: 'app-industrial-plant-home',
  templateUrl: './industrial-plant-home.page.html',
  styleUrls: ['./industrial-plant-home.page.scss'],
  standalone:false,
})
export class IndustrialPlantHomePage implements OnInit {
  CommercialSaleData: Machinery[] = [];
  CommercialHireData:Machinery[] = [];
  isLoading: boolean = false;
  selectID: string | null | undefined;
  services = [
    {
      icon: '../../assets/plant/home/factory-insurance.png',
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
      title: 'Plants School',
      action: () => this.carSchool()
    },
    {
      icon: '../../assets/machinery-section/factory.png',
      title: 'Workshops',
      action: () => this.carWorkshop()
    }
  ];
  constructor( private router: Router,private plantsservice:PlantsService, private authService:AuthService) { 
    
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
  this.isLoading = true;

  try {
    const result = await forkJoin({
      sale: this.plantsservice.getPlantSale(),
      hire: this.plantsservice.getPlantHire()
    }).toPromise();

    if (result) {
      this.CommercialSaleData = result.sale || [];
      this.CommercialHireData = result.hire || [];
      console.log('✅ Commercial Sale Data:', this.CommercialSaleData);
      console.log('✅ Commercial Hire Data:', this.CommercialHireData);
    }
  } catch (error) {
    console.error('❌ Error loading commercial data:', error);
    this.CommercialSaleData = [];
    this.CommercialHireData = [];
  } finally {
    this.isLoading = false;
  }
}

isDataEmpty(data: Machinery[]): boolean {
  return !data || data.length === 0;
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
this.router.navigate(['/plant-sale-listing'])
}
carSaleData: any;
  
navigateToCarDetail(carId: string): void {
  this.router.navigate(['/plant-sale-single-view'], {
    queryParams: {
      saleid: carId,
    }
  });
}
carHirePosting(): void {
  
  if (this.selectID) {
    this.router.navigate(['/post-plant-hire']);
  } else {
    this.router.navigate(['/login']);
  }
}

carSalePosting(): void {

  if (this.selectID) {
    this.router.navigate(['/post-plant-sale']);
  } else {
    this.router.navigate(['/login']);
  }
}
carHireListing() {
  this.router.navigate(['plant-hire-listing']);
}
carHireData: any;
navigateToCarHireDetail(carId: string) {
  this.router.navigate(['/plant-hire-single-view'], {
    queryParams: {
      saleid: carId,
    }
    
  });
}
carInsurance() {
  this.router.navigate(['plant-insurance-listing']);
}
carLeasing() {
  this.router.navigate(['plant-leasing-listing']);
}
carDealer() {
  this.router.navigate(['plant-dealer-listing']);
}
carShowroom() {
  this.router.navigate(['plant-showroom-listing']);
}
carImporter() {
  this.router.navigate(['plant-importer-listing']);
}
carExporter() {
  this.router.navigate(['plant-exporter-listing']);
}
carSchool() {
  this.router.navigate(['plant-school-listing']);
}
carWorkshop() {
  this.router.navigate(['plant-workshop-listing']);
}
selectedIcon: any;
selectIcon(arg0: string) {
throw new Error('Method not implemented.');
}



 

}
