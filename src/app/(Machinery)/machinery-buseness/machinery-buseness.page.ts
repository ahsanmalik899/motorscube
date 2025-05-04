import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { MyCarAdsPaymentComponent } from 'src/app/(car)/my-car-ads-payment/my-car-ads-payment.component';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-machinery-buseness',
  templateUrl: './machinery-buseness.page.html',
  styleUrls: ['./machinery-buseness.page.scss'],
  standalone:false,
})
export class MachineryBusenessPage implements OnInit {


  schoolupgrade: any[] = [];
  
  workshopupgrade: any[] = [];
  exporterupgrade: any[] = [];
  importerupgrade: any[] = [];
  leasingupgrade: any[] = [];
  insuranceupgrade: any[] = [];
  showroomupgrade: any[] = [];
  dealerupgrade: any[] = [];
  isLoading = true;

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

constructor(public route: Router, private popoverController: PopoverController, private userService: UserService,private machineryservice:MachineryService,
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

  async showLoader() {
    const loader = await this.loadingController.create({
      spinner: 'circular',
      cssClass: 'full-screen-loader',
      backdropDismiss: false,
      showBackdrop: true,
      translucent: true
    });
    await loader.present();
    return loader;
  }

  async hideLoader(loader: any) {
    await loader.dismiss();
  }

  async fetchdealershipData() {
    const loader = await this.showLoader();
    this.machineryservice.getdealershipData().subscribe({
      next: (data) => {
        this.dealershipData = data;
        this.filterdealershipData = this.dealershipData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        if (this.filterdealershipData.length > 0) {
          this.offer = true;
          this.show = false;
          this.dealer = false;
        }
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
        this.hideLoader(loader);
      }
    });
  }

  async fetchshowroomData() {
    const loader = await this.showLoader();
    this.machineryservice.getshowroomData().subscribe({
      next: (data) => {
        this.showroomData = data;
        this.filterShowroomData = this.showroomData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        if (this.filterShowroomData.length > 0) {
          this.offer = true;
          this.show = false;
          this.showroom = false;
        }
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching showroom data:', error);
        this.hideLoader(loader);
      }
    });
  }

  async fetchinsuranceData() {
    const loader = await this.showLoader();
    this.machineryservice.getinsuranceData().subscribe({
      next: (data) => {
        this.insuranceData = data;
        this.filterInsuranceData = this.insuranceData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        if (this.filterInsuranceData.length > 0) {
          this.offer = true;
          this.show = false;
          this.insurance = false;
        }
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching insurance data:', error);
        this.hideLoader(loader);
      }
    });
  }

  async fetchleasingData() {
    const loader = await this.showLoader();
    this.machineryservice.getleasingData().subscribe({
      next: (data) => {
        this.leasingData = data;
        this.filterLeasingData = this.leasingData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        if (this.filterLeasingData.length > 0) {
          this.offer = true;
          this.show = false;
          this.leasing = false;
        }
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching leasing data:', error);
        this.hideLoader(loader);
      }
    });
  }
 
  
  
  async fetchimporterData() {
    const loader = await this.showLoader();
    this.machineryservice.getimporterData().subscribe({
      next: (data) => {
        this.importerData = data;
        this.filterImporterData = this.importerData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        if (this.filterImporterData.length > 0) {
          this.offer = true;
          this.show = false;
          this.importer = false;
        }
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching importer data:', error);
        this.hideLoader(loader);
      }
    });
  }

  async fetchexporterData() {
    const loader = await this.showLoader();
    this.machineryservice.getexporterData().subscribe({
      next: (data) => {
        this.exporterData = data;
        this.filterExporterData = this.exporterData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        if (this.filterExporterData.length > 0) {
          this.offer = true;
          this.show = false;
          this.exporter = false;
        }
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching exporter data:', error);
        this.hideLoader(loader);
      }
    });
  }

  async fetchworkshopData() {
    const loader = await this.showLoader();
    this.machineryservice.getworkshopData().subscribe({
      next: (data) => {
        this.workshopData = data;
        this.filterWorkshopData = this.workshopData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        if (this.filterWorkshopData.length > 0) {
          this.offer = true;
          this.show = false;
          this.workshop = false;
        }
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching workshop data:', error);
        this.hideLoader(loader);
      }
    });
  }

  async fetchschoolData() {
    const loader = await this.showLoader();
    this.machineryservice.getschoolData().subscribe({
      next: (data) => {
        this.schoolData = data;
        this.filterSchoolData = this.schoolData.filter((item: { user_id: string; }) => item.user_id === this.userID);
        if (this.filterSchoolData.length > 0) {
          this.offer = true;
          this.show = false;
          this.school = false;
        }
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching school data:', error);
        this.hideLoader(loader);
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
    
      this.machineryservice.machineryDeletePostBusines(formData).subscribe(
        (response) => {
          console.log('Data delete successfully:', response);
       
          // Remove the deleted item from the local data array
          switch (this.deleteType) {
            case 'dealer':
              this.fetchdealershipData();
              this.cdr.detectChanges();
              loading.dismiss()
              this.route.navigateByUrl('/machinery-buseness', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
          break;case 'showroom':
          this.fetchschoolData()
          this.cdr.detectChanges();
          loading.dismiss()
          this.route.navigateByUrl('/machinery-buseness', { skipLocationChange: true }).then(() => {
            this.route.navigate([this.router.url]);
          });
           break;
            case 'insurance':
              this.fetchinsuranceData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/machinery-buseness', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss()
          break;
            case 'leasing':
              this.fetchleasingData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/machinery-buseness', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss()
            break;
            case 'importer':
              this.fetchimporterData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/machinery-buseness', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss() 
            break;
            case 'exporter':
              this.fetchexporterData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/machinery-buseness', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss()
            break;
            case 'workshop':
              this.fetchworkshopData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/machinery-buseness', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
              loading.dismiss() 
            break;
            case 'school':
              this.fetchschoolData()
              this.cdr.detectChanges();
              this.route.navigateByUrl('/machinery-buseness', { skipLocationChange: true }).then(() => {
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
    this.route.navigate(['/post-machinery-dealer']);  // Replace '/post-dealer' with the actual path to the Post Dealer page
  }
  navigateToPostShowroom() {
    this.route.navigate(['/post-machinery-showroom']);
  }
  navigateToPostInsurance() {
    this.route.navigate(['/post-machinery-insurance']);
  }
  navigateToPostLeasing() {
    this.route.navigate(['/post-machinery-leasing']);
  }
  navigateToPostImporter() {
    this.route.navigate(['/post-machinery-importer']);
  }
  navigateToPostExporter() {
    this.route.navigate(['/post-machinery-exporter']);
  }
  navigateToPostWorkshop() {
    this.route.navigate(['/post-machinery-workshop']);
  }
  navigateToPostSchool() {
    this.route.navigate(['/post-machinery-driving-school']);
  }

  editDealer(id: any){
    this.route.navigate(['/update-machinery-dealer'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editShowroom(id: any){
    this.route.navigate(['/update-machinery-showroom'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editInsurance(id: any){
    this.route.navigate(['/update-machinery-insurance'], {
      queryParams: {
        adsId: id,
      }
    });
  }

  editLeasing(id: any){
    this.route.navigate(['/update-machinery-leasing'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editImporter(id: any){
    this.route.navigate(['/update-machinery-importer'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editExporter(id: any){
    this.route.navigate(['/update-machinery-exporter'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editWorkshop(id: any){
    this.route.navigate(['/update-machinery-workshop'], {
      queryParams: {
        adsId: id,
      }
    });
  }
  editSchool(id: any){
    this.route.navigate(['/update-machinery-driving-school'], {
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
  async openDialogueBox(commercialAdSaleId: string,commercialAdType:string) {
    const modal = await this.modalController.create({
      component: MyCarAdsPaymentComponent,
      componentProps: {
        AdId: commercialAdSaleId,
        AdType:commercialAdType,
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
      this.schoolupgrade = this.filteredCarPostData.filter(item => item.post_type === 'Machinery School');
      this.workshopupgrade = this.filteredCarPostData.filter(item => item.post_type === 'Machinery Workshop');
      this.exporterupgrade = this.filteredCarPostData.filter(item => item.post_type === 'Machinery Exporter');
      this.importerupgrade = this.filteredCarPostData.filter(item => item.post_type === 'Machinery Importer');
      this.leasingupgrade = this.filteredCarPostData.filter(item => item.post_type === 'Machinery Leasing');
      this.insuranceupgrade = this.filteredCarPostData.filter(item => item.post_type === 'Machinery Insurance');
      this.showroomupgrade = this.filteredCarPostData.filter(item => item.post_type === 'Machinery Showroom');
      this.dealerupgrade = this.filteredCarPostData.filter(item => item.post_type === 'Machinery Dealer');

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
  if (postType === 'Machinery School') {
    postData = this.schoolupgrade;
  } else if (postType === 'Machinery Workshop') {
    postData = this.workshopupgrade;
  } else if (postType === 'Machinery Exporter') {
    postData = this.exporterupgrade;
  } else if (postType === 'Machinery Importer') {
    postData = this.importerupgrade;
  } else if (postType === 'Machinery Leasing') {
    postData = this.leasingupgrade;
  } else if (postType === 'Machinery Insurance') {
    postData = this.insuranceupgrade;
  } else if (postType === 'Machinery Showroom') {
    postData = this.showroomupgrade;
  } else if (postType === 'Machinery Dealer') {
    postData = this. dealerupgrade;
  }

  // Check if postData exists and is an array
  if (Array.isArray(postData)) {
    return postData.some((item) => item.post_id === id && item.post_status === 'Pending');
  }
  return false;
}
}



 


