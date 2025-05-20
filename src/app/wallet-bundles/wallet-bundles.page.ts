import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../(services)/user.service';

@Component({
    selector: 'app-wallet-bundles',
    templateUrl: './wallet-bundles.page.html',
    styleUrls: ['./wallet-bundles.page.scss'],
    standalone: false
})
export class WalletBundlesPage implements OnInit {
  selectedValue!: string;
  userID='';
  userType='';
  userWallet: any[] = [];
  userOffer: any[] = [];
  bundle: any[] = [];
  filterbundle: any[] = [];
  selectedOfferIndex: number | null = null;
  isDiv1Visible = false;
  isDivVisible = false;
  isButtunVisible = true;
  istrasactiondiv = false;
  transactiondetail = false;
  bundleType='';
  savingPercentage!: number;
  bundlePrice!: number;
  amountCredit!: number;
  transType='';
  maxID!: number;

  constructor(private route: Router, private alertController: AlertController, private userService: UserService,) {
    this.userID = sessionStorage.getItem('userId') ?? '';  // Fallback to empty string if null
    this.userType = sessionStorage.getItem('userType') ?? '';  // Fallback to empty string if null
    if(this.userID=='' || this.userType==''){
      this.userID=localStorage.getItem('userId')?? '';
      this.userType= localStorage.getItem('userType')??'';
    }
  }

  getStatusIcon(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'time-outline';
      case 'completed':
        return 'checkmark-circle-outline';
      case 'failed':
        return 'close-circle-outline';
      default:
        return 'help-circle-outline';
    }
  }

  ngOnInit() {
    this.fetchWallet();
    this.fetchBundleOffer();
    this.fetchBundleMaxID();
    this.fetchBundle();
  }

  back(){
    window.history.back();
  }

  toggleDiv(): void {
    this.isDivVisible = !this.isDivVisible;
  }

  toggleExpandWindow(): void {
    this.isDiv1Visible = !this.isDiv1Visible;
  }

  showtransactiondetail(): void {
    this.transactiondetail = true;
    this.istrasactiondiv = false;
    this.isButtunVisible = false;
  }

  getBundleIcon(bundleType: string): string {
    switch (bundleType) {
      case 'Supreme':
        return 'diamond-outline';
      case 'Hotspot':
        return 'wifi-outline';
      case 'General':
        return 'gift-outline';
      default:
        return 'help-circle-outline';
    }
  }

  selectOffer(id: number, bundleType: string, bundlePrice: number, amountCredit: number, savingPercentage: number): void {
    this.selectedOfferIndex = id;
    this.bundleType = bundleType;
    this.bundlePrice = bundlePrice;
    this.amountCredit = amountCredit;
    this.savingPercentage = savingPercentage;
    console.log('Bundle Type:', bundleType);
    console.log('Bundle Price:', bundlePrice);
    console.log('Amount Credit:', amountCredit);
    console.log('Saving Percentage:', savingPercentage);
  }

  onRadioChange(event: Event): void {
    const customEvent = event as CustomEvent; // Type casting to CustomEvent
    const value = customEvent.detail.value; // Access the value from event's detail property
    console.log('Selected Value:', value);
    this.transType = value;
  }
  
  
  fetchWallet() {
    // Fetch car sale data from the backend
    this.userService.getWallet().subscribe({
      next: (data) => {
        this.userWallet = data;
        this.userWallet = this.userWallet.filter(item => item.user_id === this.userID);
        console.log('filter wallet : ', this.userWallet);
      },
      error: (error) => {
        console.error('Error fetching car data:', error);
      }
    });
  }

  fetchBundleOffer() {
    // Fetch car sale data from the backend
    this.userService.getBundleOffer().subscribe({
      next: (data) => {
        this.userOffer = data;
        console.log('Error fetching car data:', data);
      },
      error: (error) => {
        console.error('Error fetching car data:', error);
      }
    });
  }

  fetchBundle() {
    this.userService.getBundle().subscribe({
      next: (data) => {
        this.bundle = data;
        const filteredData = this.bundle.filter(item => item.user_id === this.userID);

        // Save the filtered data to this.bundle
        this.filterbundle = filteredData;
        if (Array.isArray(this.filterbundle) && this.filterbundle.length > 0) {
          this.isButtunVisible = false;
          this.istrasactiondiv = true;
          this.transactiondetail = false;
        } else {
          this.isButtunVisible = true;
          this.istrasactiondiv = false;
          this.transactiondetail = false;
        }
        // Logging the filtered result
        console.log('Filtered bundle data:', this.filterbundle);
        console.log('Transaction div visible:', this.istrasactiondiv);
        console.log('Transaction detail visible:', this.transactiondetail);
      },
      error: (error) => {
        console.error('Error fetching bundle data:', error);
      }
    });
  }

  fetchBundleMaxID() {
    // Fetch car sale data from the backend
    this.userService.getBundleMaxID().subscribe({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      next: (data: any) => {
    // Assuming data is an object with max_id property
    // eslint-disable-next-line @typescript-eslint/naming-convention
    // Convert max_id to a number
    const maxId = parseInt(data.max_id, 10);

    if (isNaN(maxId)) {
        console.error('Invalid max_id:', data.max_id);
        return;
    }

    // Adding 1 to the max id
    this.maxID = maxId + 1;

    // Logging the result
    console.log('max id car data:', this.maxID);
},
      error: (error) => {
        console.error('Error fetching car data:', error);
      }
    });
  }

  saveBundle(): void {
    const formData = new FormData();
    formData.append('bundleType', this.bundleType);
    formData.append('transType', this.transType);
    formData.append('bundlePrice', String(this.bundlePrice));
    formData.append('amountCredit', String(this.amountCredit));
    formData.append('userID', this.userID);
      formData.forEach((value, key) => {
        console.log(key, value);
      });


  // Now you can use fileList for your API call
  this.userService.postBundle(formData).subscribe(
      (response) => {
          console.log('Data saved successfully:', response);
          // Optionally, handle the response from the backend

      },
      (error) => {
          console.error('Error saving data:', error);
          // Handle error if needed
      }
  );
  }

  updateTransaction(inputValue: string, bundleId: string): void {
    const formData = new FormData();

    formData.append('inputValue', inputValue);
    formData.append('bundleId', bundleId);

    // Log the form data
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    // Now you can use formData for your API call
    this.userService.updateBundle(formData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        // Optionally, handle the response from the backend
      },
      (error) => {
        console.error('Error saving data:', error);
        // Handle error if needed
      }
    );
  }
  async confirmationDelete(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Are you sure you want to delete your bundle? ',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: async () => {
            // Call the method to delete the account here
            await this.deleteAccount();
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('userType');
            console.log('Account deleted');
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteAccount(): Promise<void> {
    // Implement your account deletion logic here
    console.log('Deleting account...');
    const formData = new FormData();
    // Append form data fields directly
    formData.append('userID', this.userID);
    this.userService.deleteAccount(formData).subscribe(
      async response  => {
        console.log('Data saved successfully:', response);
        // Handle success

        // Show a success message popup
        //await this.presentSuccessAlert();
      },
      (error) => {
        console.error('Error saving data:', error);
        // Handle error
      }
    );
  }


}
