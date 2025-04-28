import { BikeService } from './../../(services)/bike.service';

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../(services)/user.service';
import { AlertController, ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { MyCarAdsPaymentComponent } from 'src/app/(car)/my-car-ads-payment/my-car-ads-payment.component';


@Component({
  selector: 'app-bike-you-posted',
  templateUrl: './bike-you-posted.page.html',
  styleUrls: ['./bike-you-posted.page.scss'],
  standalone: false,
})
export class BikeYouPostedPage implements OnInit {
  postItem: any;
  closeDialog() {
    throw new Error('Method not implemented.');
  }
  navController: any;
  hire: any[] = [];  // This will store posts with post_type = 'hire'
  sale: any[] = [];  // This will store posts with post_type = 'sale'
  bikeHireData: any[] = [];
  bikeSaleData: any[] = [];
  bikepostData: any[] = [];
  filterData: any[] = [];
  filteredBikeSaleData: any[] = [];
  filteredBikePostData: any[] = [];
  filteredBikeHireData: any[] = [];
  userID = '';
  deleteid = '';
  deletetype = '';

  showSendPaymentButton = false; // Boolean variable to control button visibility
  showupgradebutton = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private bikeService: BikeService,
    private modalController: ModalController,
    private popoverController: PopoverController,
    private alertController: AlertController,
    private cdr: ChangeDetectorRef,
    private loadingController: LoadingController
  ) {
    this.userID = sessionStorage.getItem('userId') ?? '';
    if (this.userID == '') {
      this.userID = localStorage.getItem('userId') ?? '';
    }
  }

  ngOnInit() {
    this.fetchBikeSale();
    this.fetchUpgradePost();
  }

  checksalePaymentStatus(saleItemId: string): boolean {
    let isButtonVisible = false;
    for (let saleItem of this.sale) {
      if (saleItem.post_status === 'Pending' && saleItem.post_id.toString() === saleItemId) {
        isButtonVisible = true;
        break;
      }
    }
    this.showSendPaymentButton = isButtonVisible;
    return this.showSendPaymentButton;
  }

  checkhirePaymentStatus(saleItemId: string): boolean {
    let isButtonVisible = false;
    for (let saleItem of this.hire) {
      if (saleItem.post_status === 'Pending' && saleItem.post_id.toString() === saleItemId) {
        isButtonVisible = true;
        break;
      }
    }
    this.showSendPaymentButton = isButtonVisible;
    return this.showSendPaymentButton;
  }

  checksaleUpgradeStatus(saleItemId: string): boolean {
    let isUpgradeButtonVisible = true;
    for (let saleItem of this.sale) {
      if (saleItem.post_id.toString() === saleItemId) {
        if (saleItem.post_status !== 'Pending') {
          isUpgradeButtonVisible = true;
          break;
        }
        if (saleItem.post_status === 'Pending') {
          isUpgradeButtonVisible = false;
          break;
        }
      } else {
        if (saleItem.post_id !== saleItemId) {
          isUpgradeButtonVisible = true;
        } else {
          isUpgradeButtonVisible = false;
        }
      }
    }
    this.showupgradebutton = isUpgradeButtonVisible;
    return this.showupgradebutton;
  }

  checkhireUpgradeStatus(saleItemId: string): boolean {
    let isUpgradeButtonVisible = true;
    for (let saleItem of this.hire) {
      if (saleItem.post_id.toString() === saleItemId) {
        if (saleItem.post_status !== 'Pending') {
          isUpgradeButtonVisible = true;
          break;
        }
        if (saleItem.post_status === 'Pending') {
          isUpgradeButtonVisible = false;
          break;
        }
      } else {
        if (saleItem.post_id !== saleItemId) {
          isUpgradeButtonVisible = true;
        } else {
          isUpgradeButtonVisible = false;
        }
      }
    }
    this.showupgradebutton = isUpgradeButtonVisible;
    return this.showupgradebutton;
  }

  trackByPostId(index: number, postItem: any): string {
    return postItem.post_id;
  }

  back() {
    this.router.navigate(['/main-menu-after-login'])
  }

  truncateText(text: string, limit: number): string {
    if (!text) {
      return '';
    }
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  async openDialogueBox(bikeAdSaleId: string,bikeAdType:string) {
    const modal = await this.modalController.create({
      component: MyCarAdsPaymentComponent,
      componentProps: {
        AdId: bikeAdSaleId,
        AdType:bikeAdType,
      }
    });
    return await modal.present();
  }

  async showPopup(popupId: string) {
    const popupDiv = document.getElementById(popupId);
    if (popupDiv) {
      popupDiv.classList.add('show');
    }
  }

  async closePopup(popupId: string) {
    const popupDiv = document.getElementById(popupId);
    if (popupDiv) {
      popupDiv.classList.remove('show');
    }
  }

  async buttonOneAction(id: string, saletype: string) {
    this.router.navigate(['/ads-upgrade-hotspot'], {
      queryParams: {
        adsId: id,
        saleType: saletype,
      }
    });
  }

  async buttonTwoAction(id: string, saletype: string) {
    this.router.navigate(['/ads-upgrade-supreme'], {
      queryParams: {
        adsId: id,
        saleType: saletype,
      }
    });
  }

  async confirmDelete(id: string, saletype: string) {
    this.deleteid = id;
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
            this.deleteItem();
          }
        }
      ]
    });
    await alert.present();
  }

  async editSale(id: any) {
    this.router.navigate(['/update-bike-sale-post'], {
      queryParams: {
        adsId: id,
      }
    });
  }

  async editHire(id: any) {
    this.router.navigate(['/bike-ad-hire-update'], {
      queryParams: {
        adsId: id,
      }
    });
  }

  async showLoader(message: string) {
    const loader = await this.loadingController.create({
      message: message,
      spinner: 'circles',
      backdropDismiss: false,
    });
    await loader.present();
    return loader;
  }

  async hideLoader(loader: any) {
    await loader.dismiss();
  }

  async fetchBikeSale() {
    this.bikeService.getBikeSale().subscribe({
      next: (data) => {
        this.bikeSaleData = data;
        this.filteredBikeSaleData = this.bikeSaleData.filter(item => item.user_id === this.userID);
        console.log('Filtered bike sale data:', this.filteredBikeSaleData);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching bike sale data:', error);
      }
    });
  }

  async fetchUpgradePost() {
    this.userService.getupgradepost().subscribe({
      next: (data) => {
        this.bikepostData = data;
        this.filteredBikePostData = this.bikepostData.filter(item => item.user_id === this.userID);
        this.hire = this.filteredBikePostData.filter(item => item.post_type === 'Bike Hire');
        this.sale = this.filteredBikePostData.filter(item => item.post_type === 'Bike Sale');
        console.log(data)
      },
      error: (error) => {
        console.error('Error fetching upgrade post data:', error);
      }
    });
  }

  async deleteItem() {
    const loader = await this.showLoader('Deleting item...');
    const formData = new FormData();
    formData.append('deleteid', this.deleteid);
    formData.append('deletetype', this.deletetype);

    this.bikeService.bikeDeleteAds(formData).subscribe(
      (response) => {
        console.log('Data deleted successfully:', response);
        this.fetchBikeSale();
        this.cdr.detectChanges();
        this.hideLoader(loader);
      },
      (error) => {
        console.error('Error deleting data:', error);
        this.hideLoader(loader);
      }
    );
  }
}
