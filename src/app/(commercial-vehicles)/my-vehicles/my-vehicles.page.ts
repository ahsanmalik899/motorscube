import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { MyCarAdsPaymentComponent } from 'src/app/(car)/my-car-ads-payment/my-car-ads-payment.component';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-my-vehicles',
  templateUrl: './my-vehicles.page.html',
  styleUrls: ['./my-vehicles.page.scss'],
  standalone:false,
})
export class MyVehiclesPage implements OnInit {
postItem: any;
closeDialog() {
throw new Error('Method not implemented.');
}
  navController: any;
  hire: any[] = [];  // This will store posts with post_type = 'hire'
  sale: any[] = [];  // This will store posts with post_type = 'sale'
  carHireData: any[] = [];
  carSaleData: any[] = [];
  carpostData: any[] = [];
  filterData: any[] = [];
  filteredCarSaleData: any[] = [];
  filteredCarPostData: any[] = [];
  filteredCarHireData: any[] = [];
  userID = '';
  deleteid='';
  deletetype= '';

   // Initialize as false

  showSendPaymentButton = false; // Boolean variable to control button visibility
  showupgradebutton= false;

    //alertController: any;

    isLoading = true; // Add loading state

    constructor(private router: Router, 
      private commercialservice: CommercialService, 
      private modalController: ModalController,
      private popoverController: PopoverController, 
      private alertController: AlertController,
      private cdr: ChangeDetectorRef,
      private userService:UserService,
      private loadingController: LoadingController ) {
this.userID = sessionStorage.getItem('userId') ?? '';  // Assign an empty string if null
if(this.userID==''){
this.userID=localStorage.getItem('userId')?? '';
}

}


  ngOnInit() {
    this.fetchCarSale();
    this.fetchUpgradePost();
    this.fetchcarHire();
  }
  // Function to check the condition and set the boolean variable

  // Function to check the payment status and set the boolean variable
  checksalePaymentStatus(saleItemId: string): boolean {
    // Initialize the flag to false before checking
    let isButtonVisible = false;
  
    // Loop through all items in the sale array
    for (let saleItem of this.sale) {
      // Check if the payment_status is 'Pending' and the post_id matches the saleItemId
      if (saleItem.post_status === 'Pending' && saleItem.post_id.toString() === saleItemId) {
        isButtonVisible = true; // Set to true if the condition is met
        break; // Stop checking once a matching item is found
      }
    }
  
    // Set the flag for showing the payment button based on whether a valid sale item was found
    this.showSendPaymentButton = isButtonVisible;
  
    // Return whether the button should be shown
    return this.showSendPaymentButton;
  }
  checkhirePaymentStatus(saleItemId: string): boolean {
    // Initialize the flag to false before checking
    let isButtonVisible = false;
  
    // Loop through all items in the sale array
    for (let saleItem of this.hire) {
      // Check if the payment_status is 'Pending' and the post_id matches the saleItemId
      if (saleItem.post_status === 'Pending' && saleItem.post_id.toString() === saleItemId) {
        isButtonVisible = true; // Set to true if the condition is met
        break; // Stop checking once a matching item is found
      }
    }
  
    // Set the flag for showing the payment button based on whether a valid sale item was found
    this.showSendPaymentButton = isButtonVisible;
  
    // Return whether the button should be shown
    return this.showSendPaymentButton;
  }
  checksaleUpgradeStatus(saleItemId: string): boolean {
    // Initialize the flag to false before checking
    let isUpgradeButtonVisible = true;
  
    // Loop through all items in the sale array
    for (let saleItem of this.sale) {
    if(saleItem.post_id.toString() === saleItemId){      // Check if post_status is 'Pending' and post_id matches the saleItemId
      if (saleItem.post_status !== 'Pending' ) {
        isUpgradeButtonVisible = true; // Set to true if the condition is met
        break; // Stop checking once a matching item is found
        
      }
      if (saleItem.post_status === 'Pending' ) {
        isUpgradeButtonVisible = false; // Set to true if the condition is met
       
        break; // Stop checking once a matching item is found
        
      }
    }
    else{
      
       if (saleItem.post_id !== saleItemId) {
        isUpgradeButtonVisible = true; // Set to true if any post_id doesn't match
      }
      else{
        isUpgradeButtonVisible = false;
    
      }
    }
    }
  
    // Set the flag for showing the upgrade button based on whether a valid sale item was found
    this.showupgradebutton = isUpgradeButtonVisible;
    
    // Return whether the upgrade button should be shown
    return this.showupgradebutton;
  }
  checkhireUpgradeStatus(saleItemId: string): boolean {
    let isUpgradeButtonVisible = true;
  
    // Loop through all items in the sale array
    for (let saleItem of this.hire) {
    if(saleItem.post_id.toString() === saleItemId){      // Check if post_status is 'Pending' and post_id matches the saleItemId
      if (saleItem.post_status !== 'Pending' ) {
        isUpgradeButtonVisible = true; // Set to true if the condition is met
        console.log('true1')
        break; // Stop checking once a matching item is found
        
      }
      if (saleItem.post_status === 'Pending' ) {
        isUpgradeButtonVisible = false; // Set to true if the condition is met
        console.log('true2')
        break; // Stop checking once a matching item is found
        
      }
    }
    else{
       if (saleItem.post_id !== saleItemId) {
        isUpgradeButtonVisible = true; // Set to true if any post_id doesn't match
        console.log('true3')
      }
      else{
        isUpgradeButtonVisible = false;
        console.log('true4')
      }
    }
    }
  
    // Set the flag for showing the upgrade button based on whether a valid sale item was found
    this.showupgradebutton = isUpgradeButtonVisible;
 
    // Return whether the upgrade button should be shown
    return this.showupgradebutton;
  }


trackByPostId(index: number, postItem: any): string {
  return postItem.post_id; // Ensure a unique identifier is used
}
 
  back(){
    this.router.navigate(['/main-menu-after-login']);
  }
  truncateText(text: string, limit: number): string {
    if (!text) {
      return '';
    }
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }
  // Function to open the dialogue box
  async openDialogueBox(carSaleId: string) {
    const modal = await this.modalController.create({
        component: MyCarAdsPaymentComponent, // Pass your component
        componentProps: {
            carAdSaleId: carSaleId // Pass the carAdSaleId to the component
        }
    });
    return await modal.present();
}



  


  async showPopup(popupId: string) {
    const popupDiv = document.getElementById(popupId);
    if (popupDiv) {
      popupDiv.classList.add('show'); // Show the specified popup
    }
  }

  async closePopup(popupId: string) {
    console.log('Closing popup:', popupId); // Check if the function is being called
    const popupDiv = document.getElementById(popupId);
    console.log('Popup div:', popupDiv); // Check if the popup element is found
    if (popupDiv) {
      popupDiv.classList.remove('show'); // Hide the specified popup
    }
  }



// home.page.ts
async buttonOneAction(id: string, saletype: string) {
  console.log('Hotspot button clicked with ID:', id, 'and saleType:', saletype);
  // Add your logic for the Hotspot button here, using the passed ID and saleType
  this.router.navigate(['/ads-upgrade-hotspot'], {
    queryParams: {
      adsId: id,
      saleType: saletype, // Additional parameter
    }
  });
}


  async buttonTwoAction(id: string, saletype: string) {
    console.log('Supreme button clicked with ID:', id);
    // Add your logic for the Supreme button here, using the passed ID
    this.router.navigate(['/ads-upgrade-supreme'], {
      queryParams: {
        adsId: id,
        saleType: saletype,
      }
    });
  }

  async confirmDelete(id: string, saletype: string) {
    console.log('id : ', id , 'and type : ', saletype);
    this.deleteid = id ;
    this.deletetype = saletype;
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


  
 
 

  async editSale(id: any){
    this.router.navigate(['/car-ad-sale-update'], {
      queryParams: {
        adsId: id,
      }
    });
  }

  async editHire(id: any){
    this.router.navigate(['/car-ad-hire-update'], {
      queryParams: {
        adsId: id,
      }
    });
  }


  // Function to show a loader
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

  // Function to hide the loader
  async hideLoader(loader: any) {
    await loader.dismiss();
  }

  async fetchCarSale() {
    const loader = await this.showLoader();
    this.commercialservice.getCommercialSale().subscribe({
      next: (data) => {
        this.carSaleData = data;
        this.filteredCarSaleData = this.carSaleData.filter(item => item.user_id === this.userID);
        console.log('Filtered car sale data:', this.filteredCarSaleData);
        this.cdr.detectChanges();
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching car sale data:', error);
        this.hideLoader(loader);
      }
    });
  }

  async fetchUpgradePost() {
    const loader = await this.showLoader();
    this.userService.getupgradepost().subscribe({
      next: (data) => {
        this.carpostData = data;
        this.filteredCarPostData = this.carpostData.filter(item => item.user_id === this.userID);
        this.hire = this.filteredCarPostData.filter(item => item.post_type === 'Hire');
        this.sale = this.filteredCarPostData.filter(item => item.post_type === 'Sale');
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching upgrade post data:', error);
        this.hideLoader(loader);
      }
    });
  }

  async fetchcarHire() {
    const loader = await this.showLoader();
    this.commercialservice.getCommercialHire().subscribe({
      next: (data) => {
        this.carHireData = data;
        this.filteredCarHireData = this.carHireData.filter(item => item.user_id === this.userID);
        console.log('Filtered car hire data:', this.filteredCarHireData);
        this.cdr.detectChanges();
        this.hideLoader(loader);
      },
      error: (error) => {
        console.error('Error fetching car hire data:', error);
        this.hideLoader(loader);
      }
    });
  }

  // Other methods like deleteItem, editSale, editHire, etc., should also handle loading states similarly.
  
  async deleteItem() {
    const loader = await this.showLoader();
    const formData = new FormData();
    formData.append('deleteid', this.deleteid);
    formData.append('deletetype', this.deletetype);

    this.commercialservice.commercialDeleteAds(formData).subscribe(
      (response) => {
        console.log('Data deleted successfully:', response);
        this.fetchCarSale();
        this.fetchcarHire();
        this.cdr.detectChanges();
        this.hideLoader(loader);
      },
      (error) => {
        console.error('Error deleting data:', error);
        this.hideLoader(loader);
      }
    );
  }

  // Add other necessary methods here...
}
