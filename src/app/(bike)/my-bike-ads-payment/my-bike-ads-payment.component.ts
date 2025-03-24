import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { UserService } from '../../(services)/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-bike-ads-payment',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Payment Details</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2>Payment Information</h2>
      <p>Please complete your payment to publish your bike ad.</p>
      
      <!-- Payment details here -->
      <ion-list>
        <ion-item>
          <ion-label position="stacked">Bank Details</ion-label>
          <ion-text>
            <p>Bank: HBL</p>
            <p>Account Title: Motors Cube</p>
            <p>Account Number: 24747900138303</p>
          </ion-text>
        </ion-item>
      </ion-list>

      <!-- Payment instructions -->
      <div class="payment-instructions">
        <h3>Instructions</h3>
        <ol>
          <li>Transfer the required amount to the above account</li>
          <li>Save the transaction receipt</li>
          <li>Upload the receipt below</li>
        </ol>
      </div>

      <!-- File upload -->
      <ion-item>
        <ion-label position="stacked">Upload Payment Receipt</ion-label>
        <ion-input type="file" (change)="onFileSelected($event)"></ion-input>
      </ion-item>

      <ion-button expand="block" (click)="submitPayment()" [disabled]="!selectedFile">
        Submit Payment
      </ion-button>
    </ion-content>
  `,
  styles: [`
    .payment-instructions {
      margin: 20px 0;
      padding: 15px;
      background: #f4f4f4;
      border-radius: 8px;
    }
    
    h2 {
      color: #333;
      margin-bottom: 20px;
    }
    
    ion-item {
      margin-bottom: 15px;
    }
  `],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class MyBikeAdsPaymentComponent {
  @Input() bikeAdId!: string;
  selectedFile: File | null = null;

  constructor(
    private modalController: ModalController,
    private userService: UserService
  ) {}

  dismiss() {
    this.modalController.dismiss();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  async submitPayment() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('receipt', this.selectedFile);
    formData.append('bikeAdId', this.bikeAdId);

    try {
      // Call your service method to handle payment submission
      await this.userService.submitBikePayment(formData).toPromise();
      this.modalController.dismiss({ submitted: true });
    } catch (error) {
      console.error('Error submitting payment:', error);
      // Handle error appropriately
    }
  }
} 