import { ChangeDetectorRef, Component, ElementRef, Input, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { UserService } from '../../(services)/user.service';
import { MyCarAdsPaymentComponent } from '../my-car-ads-payment/my-car-ads-payment.component'; // Import your component
@Component({
    selector: 'app-your-business',
    templateUrl: './your-business.page.html',
    styleUrls: ['./your-business.page.scss'],
    standalone: false
})

export class YourBusinessPage implements OnInit {
  schoolupgrade: any[] = [];
  
  workshopupgrade: any[] = [];
  exporterupgrade: any[] = [];
  importerupgrade: any[] = [];
  leasingupgrade: any[] = [];
  insuranceupgrade: any[] = [];
  showroomupgrade: any[] = [];
  dealerupgrade: any[] = [];

onclick() {
throw new Error('Method not implemented.');
}
offer = false;
show = true;
dealer = true;
showroom = true;
insurance = true;
leasing = true;
importer = true;
exporter = true;
workshop = true;
school = true;
userID = '';
upgradeID='';
upgradeType='';
userType = '';
deleteID = '';
deleteType = '';
dealershipData: any = [];
filterdealershipData: any = [];
showroomData: any = [];
filterShowroomData: any = [];
insuranceData: any = [];
filterInsuranceData: any = [];
leasingData: any = [];
filterLeasingData: any = [];
importerData: any = [];
filterImporterData: any = [];
exporterData: any = [];
filterExporterData: any = [];
workshopData: any = [];
filterWorkshopData: any = [];
schoolData: any = [];
filterSchoolData: any = [];
isPopupVisible = false;
isPopupVisibleDiv = false;
carpostData: any[] = [];
filteredCarPostData: any[] = [];

constructor(public route: Router, private popoverController: PopoverController, private userService: UserService,
  private router: ActivatedRoute, private renderer: Renderer2, private el: ElementRef, private loadingController: LoadingController, private alertController: AlertController,
   private modalController: ModalController,  private ngZone: NgZone,
   private cdr: ChangeDetectorRef) {
    this.userID = sessionStorage.getItem('userId') || ''; 
    this.userType = sessionStorage.getItem('userType') || '';
    if(this.userID=='' || this.userType==''){
      this.userID=localStorage.getItem('userId')?? '';
      this.userType= localStorage.removeItem('userType')??'';
      }
   }
// onclick(){
//   this.offer = true;
//   this.show= false;
// }

  ngOnInit() {
    
    this.fetchdealershipData();
    this.fetchshowroomData();
    this.fetchinsuranceData();
    this.fetchexporterData();
    this.fetchimporterData();
    this.fetchleasingData();
    this.fetchworkshopData();
    this.fetchschoolData();
    this.fetchUpgradePost();
  }
  initializePostData() {
    this.schoolupgrade = [];
    this.workshopupgrade = [];
    this.exporterupgrade = [];
    this.importerupgrade = [];
    this.leasingupgrade = [];
    this.insuranceupgrade = [];
    this.showroomupgrade = [];
    this.dealerupgrade = [];
  }
  fetchdealershipData() {
    // Fetch car sale data from the backend
    this.userService.getdealershipData().subscribe({
      next: (data) => {
        this.dealershipData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.dealershipData);
        //this.filterCarData();
        this.filterdealershipData = this.dealershipData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        console.log('filter data : ', this.filterdealershipData);
        if (this.filterdealershipData.length > 0) {
          this.offer = true;
          this.show= false;
          this.dealer= false;
        }
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
        this.showroomData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.showroomData);
        //this.filterCarData();
        this.filterShowroomData = this.showroomData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        console.log('filter data : ', this.filterShowroomData);
        if (this.filterShowroomData.length > 0) {
          this.offer = true;
          this.show= false;
          this.showroom= false;
        }
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
        this.insuranceData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.insuranceData);
        //this.filterCarData();
        this.filterInsuranceData = this.insuranceData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        console.log('filter insurance data : ', this.filterInsuranceData);
        if (this.filterInsuranceData.length > 0) {
          this.offer = true;
          this.show= false;
          this.insurance= false;
        }
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
        this.leasingData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.leasingData);
        //this.filterCarData();
        this.filterLeasingData = this.leasingData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        console.log('filter insurance data : ', this.filterLeasingData);
        if (this.filterLeasingData.length > 0) {
          this.offer = true;
          this.show= false;
          this.leasing= false;
        }
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
        this.importerData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.importerData);
        //this.filterCarData();
        this.filterImporterData = this.importerData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        console.log('filter insurance data : ', this.filterImporterData);
        if (this.filterImporterData.length > 0) {
          this.offer = true;
          this.show= false;
          this.importer= false;
        }
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
        this.exporterData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.exporterData);
        //this.filterCarData();
        this.filterExporterData = this.exporterData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        console.log('filter insurance data : ', this.filterExporterData);
        if (this.filterExporterData.length > 0) {
          this.offer = true;
          this.show= false;
          this.exporter= false;
        }
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
        this.workshopData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.workshopData);
        //this.filterCarData();
        this.filterWorkshopData = this.workshopData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        console.log('filter insurance data : ', this.filterWorkshopData);
        if (this.filterWorkshopData.length > 0) {
          this.offer = true;
          this.show= false;
          this.workshop= false;
        }
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }

  fetchschoolData() {
    // Fetch car sale data from the backend
    this.userService.getschoolData().subscribe({
      next: (data) => {
        this.schoolData = data; // Store fetched data in carData property
        //this.filterData = data;
        console.log(this.schoolData);
        //this.filterCarData();
        this.filterSchoolData = this.schoolData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        console.log('filter insurance data : ', this.filterSchoolData);
        if (this.filterSchoolData.length > 0) {
          this.offer = true;
          this.show= false;
          this.school= false;
        }
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }

  async confirmDelete(id: string, saletype: string) {
    console.log('id : ', id , 'and type : ', saletype);
    this.deleteID = id ;
    this.deleteType = saletype;
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Delete cancelled');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Item deleted');
            // Here you can call your delete logic or service
            this.deleteItem();
          }
        }
      ]
    });

    await alert.present();
  }

  deleteItem() {
    // Create and present the loader before starting the deletion
    this.loadingController.create({
      message: 'Deleting...',
      spinner: 'circles', // You can change the spinner style if you prefer
      duration: 0 // This ensures the loader stays until we manually dismiss it
    }).then(loading => {
      loading.present(); // Show the loader
     
      // Your existing delete logic here
    

      const formData = new FormData();
      formData.append('deleteid', this.deleteID);
      formData.append('deletetype', this.deleteType);
    
      this.userService.carDeletePostBusines(formData).subscribe(
        (response) => {
          console.log('Data delete successfully:', response);
       
          // Remove the deleted item from the local data array
          switch (this.deleteType) {
            case 'dealer':
              this.fetchdealershipData();
              this.cdr.detectChanges();
              loading.dismiss()
              this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
          break;case 'showroom':
          this.fetchschoolData()
          this.cdr.detectChanges();
          loading.dismiss()
          this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
            this.route.navigate([this.router.url]);
          });
           break;
            case 'insurance':
              this.fetchinsuranceData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss()
          break;
            case 'leasing':
              this.fetchleasingData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss()
            break;
            case 'importer':
              this.fetchimporterData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss() 
            break;
            case 'exporter':
              this.fetchexporterData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss()
            break;
            case 'workshop':
              this.fetchworkshopData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss() 
            break;
            case 'school':
              this.fetchschoolData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss() 
            break;
            default:
              console.log('Unknown sale type:', this.deleteType);
              loading.dismiss() 
              break;
          }

          

          // Manually trigger change detection to update the UI
          this.ngZone.run(() => {
            console.log('Change detection triggered');
            this.cdr.detectChanges();  // Trigger change detection
          });
        },
        (error) => {
          console.error('Error delete data:', error);
          // Dismiss the loader in case of an error
          loading.dismiss();
        }
      );
    });
}




  back(){
    this.route.navigate(['/main-menu-after-login']);
  }

  navigateToPostDealer() {
    this.route.navigate(['/post-dealer-busines']);  // Replace '/post-dealer' with the actual path to the Post Dealer page
  }
  navigateToPostShowroom() {
    this.route.navigate(['/post-showroom-busines']);
  }
  navigateToPostInsurance() {
    this.route.navigate(['/post-insurance-busines']);
  }
  navigateToPostLeasing() {
    this.route.navigate(['/post-leasing-busines']);
  }
  navigateToPostImporter() {
    this.route.navigate(['/post-importer-busines']);
  }
  navigateToPostExporter() {
    this.route.navigate(['/post-exporter-busines']);
  }
  navigateToPostWorkshop() {
    this.route.navigate(['/post-workshop-busines']);
  }
  navigateToPostSchool() {
    this.route.navigate(['/post-driving-school']);
  }

  editDealer(id: any){
    this.route.navigate(['/update-dealer-busines'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editShowroom(id: any){
    this.route.navigate(['/update-showroom-busines'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editInsurance(id: any){
    this.route.navigate(['/update-insurance-busines'], {
      queryParams: {
        adsId: id,
      }
    });
  }

  editLeasing(id: any){
    this.route.navigate(['/update-leasing-busines'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editImporter(id: any){
    this.route.navigate(['/update-importer-busines'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editExporter(id: any){
    this.route.navigate(['/update-exporter-busines'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editWorkshop(id: any){
    this.route.navigate(['/update-workshop-busines'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editSchool(id: any){
    this.route.navigate(['/update-school-busines'], {
      queryParams: {
        adsId: id,
      }
    });
  }


  // Method to show the popup
  openPopup(id: string, saletype: string, plan: string) {
    if (plan === 'General'){
      this.isPopupVisible = true;
    }
    if (plan === 'Hotspot'){
      this.isPopupVisibleDiv = true;
    }
    this.upgradeID = id;
    this.upgradeType = saletype;
    console.log('upgrade post of id is :' , this.upgradeID , this.upgradeType , plan );
  }

  // Method to close the popup
  closePopup() {
    this.isPopupVisible = false;
    this.isPopupVisibleDiv = false;
  }

  // Actions for the buttons inside the popup
  buttonOneAction(plan: string) {
    console.log(`Selected Plan: ${plan}`);
    console.log('Selected Plan post of id is :' , this.upgradeID , this.upgradeType );
    // Add your action logic here

      // Add your logic for the Hotspot button here, using the passed ID and saleType
  this.route.navigate(['/ads-upgrade-hotspot'], {
    queryParams: {
      adsId: this.upgradeID,
      saleType:this.upgradeType // Additional parameter
    }
  });
  }

  buttonTwoAction(plan: string) {
    console.log(`Selected Plan: ${plan}`);
    console.log('Selected Plan post of id is :' , this.upgradeID , this.upgradeType );
    // Add your action logic here

    this.route.navigate(['/ads-upgrade-supreme'], {
      queryParams: {
        adsId: this.upgradeID,
        saleType:this.upgradeType,
        // Additional parameter
      }
    });
  }

  async openDialogueBox(carSaleId: string) {
    const modal = await this.modalController.create({
        component: MyCarAdsPaymentComponent, // Pass your component
        componentProps: {
            carAdSaleId: carSaleId // Pass the carAdSaleId to the component
        }
    });
    return await modal.present();
}
// Generic function to check if the payment button should be displayed for any post type

async fetchUpgradePost() {
  this.userService.getupgradepost().subscribe({
    next: (data) => {
      this.carpostData = data;
      console.log('Fetched Data:', this.carpostData); // Check fetched data

      // Filter data where user_id matches the current user's ID
      this.filteredCarPostData = this.carpostData.filter(item => item.user_id === this.userID);
      console.log('Filtered Data by User ID:', this.filteredCarPostData); // Check filtered data by user ID

      // Filter and assign data to respective post types
      this.schoolupgrade = this.filteredCarPostData.filter(item => item.post_type === 'school');
      this.workshopupgrade = this.filteredCarPostData.filter(item => item.post_type === 'workshop');
      this.exporterupgrade = this.filteredCarPostData.filter(item => item.post_type === 'exporter');
      this.importerupgrade = this.filteredCarPostData.filter(item => item.post_type === 'importer');
      this.leasingupgrade = this.filteredCarPostData.filter(item => item.post_type === 'leasing');
      this.insuranceupgrade = this.filteredCarPostData.filter(item => item.post_type === 'insurance');
      this.showroomupgrade = this.filteredCarPostData.filter(item => item.post_type === 'showroom');
      this.dealerupgrade = this.filteredCarPostData.filter(item => item.post_type === 'dealer');

      // Debug: Log the filtered arrays
      console.log('School Upgrade:', this.schoolupgrade);
      console.log('Workshop Upgrade:', this.workshopupgrade);
      console.log('Exporter Upgrade:', this.exporterupgrade);
      console.log('Importer Upgrade:', this.importerupgrade);
      console.log('Leasing Upgrade:', this.leasingupgrade);
      console.log('Insurance Upgrade:', this.insuranceupgrade);
      console.log('Showroom Upgrade:', this.showroomupgrade);
      console.log('Dealer Upgrade:', this.dealerupgrade);
    },
    error: (error) => {
      console.error('Error fetching car data:', error);
    }
  });
}

checkPaymentButton(postType: string, id: string): boolean {
  let postData: any[] | undefined;

  // Manually check for each postType
  if (postType === 'school') {
    postData = this.schoolupgrade;
  } else if (postType === 'workshop') {
    postData = this.workshopupgrade;
  } else if (postType === 'exporter') {
    postData = this.exporterupgrade;
  } else if (postType === 'importer') {
    postData = this.importerupgrade;
  } else if (postType === 'leasing') {
    postData = this.leasingupgrade;
  } else if (postType === 'insurance') {
    postData = this.insuranceupgrade;
  } else if (postType === 'showroom') {
    postData = this.showroomupgrade;
  } else if (postType === 'dealer') {
    postData = this. dealerupgrade;
  }

  // Check if postData exists and is an array
  if (Array.isArray(postData)) {
    return postData.some((item) => item.post_id === id && item.post_status === 'Pending');
  }
  return false;
}
}



 


