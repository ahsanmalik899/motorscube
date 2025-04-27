import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../(services)/user.service';
import { NgIfContext } from '@angular/common';
import { AlertController } from '@ionic/angular';
interface City {
  name: string;
  code: string;
}
interface Country {
  name: string;
  code: string;
}
@Component({
    selector: 'app-ads-upgrade-supreme',
    templateUrl: './ads-upgrade-supreme.page.html',
    styleUrls: ['./ads-upgrade-supreme.page.scss'],
    standalone: false
})
export class AdsUpgradeSupremePage implements OnInit {
  addBundleButton!: TemplateRef<NgIfContext<boolean>> | null;
addBundle() {
throw new Error('Method not implemented.');
}
  selectedValue!: string;
  carHireData: any[] = [];
  carSaleData: any[] = [];
  filterData: any[] = [];
  filteredCarSaleData: any[] = [];
  filteredCarHireData: any[] = [];
  businesData: any[] = [];
  adsId='';
  saleType='';
  adsAmount: any[] = [];
  userID='';
  userType='';
  userWallet: any[] = [];

  constructor(public route: Router, private alertcontroler:AlertController,   private userService: UserService, private router: ActivatedRoute) {
    this.router.queryParams.subscribe(params => {
      this.adsId = params['adsId'];
      this.saleType = params['saleType'];
      console.log('Ads id : ', this.adsId,  this.saleType);

      if (this.saleType === 'Car Sale' || this.saleType === 'Car Hire'){
        this.fetchCarSale();
      }
      else if (this.saleType === 'Car Dealer') {
        this.fetchdealershipData();
      }
      else if (this.saleType === 'Car Showroom') {
        this.fetchshowroomData();
      }
      else if (this.saleType === 'Car Insurance') {
        this.fetchinsuranceData();
      }
      else if (this.saleType === 'Car Leasing') {
        this.fetchleasingData();
      }
      else if (this.saleType === 'Car Importer') {
        this.fetchimporterData();
      }
      else if (this.saleType === 'Car Exporter') {
        this.fetchexporterData();
      }
      else if (this.saleType === 'Car Workshop') {
        this.fetchworkshopData();
      }
      else if (this.saleType === 'Car School') {
        this.fetchschoolData();
      }
   });
  }

  ngOnInit() {
    this.fetchAmount();
    this.fetchWallet();
  }

  back(){
    window.history.back();
  }
  toggleDiv() {
    const hiddenDiv = document.getElementById('hiddenDiv');
    if (hiddenDiv) {
      // Toggle the 'show' class to hide/show the div
      hiddenDiv.style.display = hiddenDiv.style.display === 'none' ? 'block' : 'none';
    }
  }

  fetchschoolData() {
    // Fetch car sale data from the backend
    this.userService.getschoolData().subscribe({
      next: (data) => {
        this.businesData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.businesData);
        //this.filterCarData();
        this.filteredCarSaleData = this.businesData.filter(item =>  item.car_school_ad_sale_id === this.adsId);
        console.log('filter data : ', this.filteredCarSaleData);
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }

  fetchworkshopData() {
    // Fetch car sale data from the backend
    this.userService.getworkshopData().subscribe({
      next: (data) => {
        this.businesData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.businesData);
        //this.filterCarData();
        this.filteredCarSaleData = this.businesData.filter(item =>  item.car_workshop_ad_sale_id === this.adsId);
        console.log('filter data : ', this.filteredCarSaleData);
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }

  fetchexporterData() {
    // Fetch car sale data from the backend
    this.userService.getexporterData().subscribe({
      next: (data) => {
        this.businesData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.businesData);
        //this.filterCarData();
        this.filteredCarSaleData = this.businesData.filter(item =>  item.car_exporter_ad_sale_id === this.adsId);
        console.log('filter data : ', this.filteredCarSaleData);
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }

  fetchimporterData() {
    // Fetch car sale data from the backend
    this.userService.getimporterData().subscribe({
      next: (data) => {
        this.businesData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.businesData);
        //this.filterCarData();
        this.filteredCarSaleData = this.businesData.filter(item =>  item.car_importer_ad_sale_id === this.adsId);
        console.log('filter data : ', this.filteredCarSaleData);
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }

  fetchleasingData() {
    // Fetch car sale data from the backend
    this.userService.getleasingData().subscribe({
      next: (data) => {
        this.businesData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.businesData);
        //this.filterCarData();
        this.filteredCarSaleData = this.businesData.filter(item =>  item.car_leasing_ad_sale_id === this.adsId);
        console.log('filter data : ', this.filteredCarSaleData);
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }
  fetchinsuranceData() {
    // Fetch car sale data from the backend
    this.userService.getinsuranceData().subscribe({
      next: (data) => {
        this.businesData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.businesData);
        //this.filterCarData();
        this.filteredCarSaleData = this.businesData.filter(item =>  item.car_insurance_ad_sale_id === this.adsId);
        console.log('filter data : ', this.filteredCarSaleData);
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }
  fetchshowroomData() {
    // Fetch car sale data from the backend
    this.userService.getshowroomData().subscribe({
      next: (data) => {
        this.businesData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.businesData);
        //this.filterCarData();
        this.filteredCarSaleData = this.businesData.filter(item =>  item.car_showroom_ad_sale_id === this.adsId);
        console.log('filter data : ', this.filteredCarSaleData);
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }
  fetchdealershipData() {
    // Fetch car sale data from the backend
    this.userService.getdealershipData().subscribe({
      next: (data) => {
        this.businesData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.businesData);
        //this.filterCarData();
        this.filteredCarSaleData = this.businesData.filter(item =>  item.car_dealership_ad_sale_id === this.adsId);
        console.log('filter data : ', this.filteredCarSaleData);
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }

  fetchCarSale() {
    // Fetch car sale data from the backend
    this.userService.getCarSale().subscribe({
      next: (data) => {
        console.log('Fetched car data:', data);
        this.carSaleData = data; // Store fetched data in carData property
        if (this.saleType === ' Car Sale') {
        this.filteredCarSaleData = this.carSaleData.filter(item => item.car_ad_sale_id === this.adsId);
        }
        else
        {
          this.fetchCarHire();
        }
        console.log('filter sale data : ', this.filteredCarSaleData);

      },
      error: (error) => {
        console.error('Error fetching car data:', error);
      }
    });
  }
  fetchCarHire() {
    // Fetch car sale data from the backend
    this.userService.getCarHire().subscribe({
      next: (data) => {
        console.log('Fetched car data:', data);
        this.carHireData = data; // Store fetched data in carData property
        if (this.saleType === 'Car Hire') {
        this.filteredCarSaleData = this.carHireData.filter(item => item.car_ad_hire_id === this.adsId);
        }
        console.log('filter hire data : ', this.filteredCarSaleData);

      },
      error: (error) => {
        console.error('Error fetching car data:', error);
      }
    });
  }

  fetchAmount() {
    // Fetch car sale data from the backend
    this.userService.getAmount().subscribe({
      next: (data) => {
        this.adsAmount = data;
        this.adsAmount = this.adsAmount.filter(item => item.ad_type === 'Supreme');
        console.log('filter amount : ', this.adsAmount);
      },
      error: (error) => {
        console.error('Error fetching car data:', error);
      }
    });
  }

  fetchWallet() {
    // Fetch car sale data from the backend
    this.userService.getWallet().subscribe({
      next: (data) => {
        this.userWallet = data;
        this.userID = sessionStorage.getItem('userId') || ''; // Default to empty string if null
        this.userType = sessionStorage.getItem('userType') || ''; // Default to empty string if null
        
        this.userWallet = this.userWallet.filter(item => item.user_id === this.userID);
        console.log('filter wallet : ', this.userWallet);
      },
      error: (error) => {
        console.error('Error fetching car data:', error);
      }
    });
  }
   // Method to check if the "Add Bundle" button should be shown
   shouldShowAddBundleButton(): boolean {
    const condition = this.userWallet.every(wallet => parseFloat(wallet.remaining_amount) === 0);
    return condition;
    return this.selectedValue !== null;
  }
  onSubmit() {
    console.log('Selected value:', this.selectedValue);

const adsAmount = this.adsAmount;
const firstAmount = adsAmount[0].price;
console.log(firstAmount);

    const formData = new FormData();

    // Append properties from userData to formData
    formData.append('paymentmethod', this.selectedValue);
    formData.append('user_id', this.userID);
    formData.append('post_id', this.adsId);
    formData.append('post_type', this.saleType);
    formData.append('user_type', this.userType);
    formData.append('amount', firstAmount.toString());
    formData.append('upgrade_to', 'Supreme');
    if (this.selectedValue === 'Bundle'){
    formData.append('post_status', 'Active');
    formData.append('parment_status', 'OK');
    }
    else{
    formData.append('post_status', 'Pending');
    formData.append('parment_status', 'Pending');
    }

    const formDataObject: { [key: string]: any } = {};
formData.forEach((value, key) => {
  formDataObject[key] = value;
});

      console.log('FormData contents:', formDataObject);
    //console.log(formData);
    this.userService.carUpgradeAdsSup(formData).subscribe(
      (response) => {
          console.log('Data saved successfully:', response);
          this.presentSuccessAlert();
      },
      (error) => {
          console.error('Error saving data:', error);
          // Handle error if needed
      }
 );

  }


  async presentSuccessAlert(): Promise<void> {
    const alert = await this.alertcontroler.create({
      header: 'Success',
      message: 'Your request for Supreme has been submitted.',
      cssClass: 'success-alert', // Optional, if you want custom styling for the alert
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Navigate back to the previous page
            if(this.saleType=='Car Sale'||this.saleType=='Car Hire'){
              this.route.navigateByUrl('/my-car-ads', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
            }
            else if(this.saleType=='Car Insurance'||this.saleType=='Car Leasing'||this.saleType=='Car Dealer'||this.saleType=='Car Showroom'
              ||this.saleType=='Car Importer'||this.saleType=='Car Exporter'||this.saleType=='Car School'||this.saleType=='Car Workshop'
            ){
            this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
              this.route.navigate([this.router.url]);
            });
          }
          else if(this.saleType=='Bike Sale'||this.saleType=='Bike Hire'){
            this.route.navigateByUrl('/bike-you-posted', { skipLocationChange: true }).then(() => {
              this.route.navigate([this.router.url]);
            });
          } else if(this.saleType=='Bike Insurance'||this.saleType=='Bike Leasing'||this.saleType=='Bike Dealer'||this.saleType=='Bike Showroom'
            ||this.saleType=='Bike Importer'||this.saleType=='Bike Exporter'||this.saleType=='Bike School'||this.saleType=='Bike Workshop'
          ){
          this.route.navigateByUrl('/bike-busenesses', { skipLocationChange: true }).then(() => {
            this.route.navigate([this.router.url]);
          });
        }
        else if(this.saleType=='Commercial Sale'||this.saleType=='Commercial Hire'){
          this.route.navigateByUrl('/my-vehicles', { skipLocationChange: true }).then(() => {
            this.route.navigate([this.router.url]);
          });
        } else if(this.saleType=='Commercial Insurance'||this.saleType=='Commercial Leasing'||this.saleType=='Commercial Dealer'||this.saleType=='Commercial Showroom'
          ||this.saleType=='Commercial Importer'||this.saleType=='Commercial Exporter'||this.saleType=='Commercial School'||this.saleType=='Commercial Workshop'
        ){
        this.route.navigateByUrl('/commercial-vehicle-buseness', { skipLocationChange: true }).then(() => {
          this.route.navigate([this.router.url]);
        });
      }
          }
        }
      ]
    });
  
    await alert.present();
  }



}
