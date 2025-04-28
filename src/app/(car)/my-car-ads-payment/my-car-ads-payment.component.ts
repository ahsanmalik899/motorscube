import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { UserService } from '../../(services)/user.service';

@Component({
  selector: 'app-my-car-ads-payment',
  templateUrl: './my-car-ads-payment.component.html',
  styleUrls: ['./my-car-ads-payment.component.scss'],
  standalone: false
})
export class MyCarAdsPaymentComponent implements OnInit {
  carAdSaleId = '';
  carAdType = '';
  inputValue = '';

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private loadingController: LoadingController, // ✅ Inject LoadingController
    private userService: UserService,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.carAdSaleId = this.navParams.get('AdId');
    this.carAdType = this.navParams.get('AdType');
    console.log('Car Ad Sale ID:', this.carAdSaleId);
  }

  close() {
    this.modalController.dismiss();
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.modalController.dismiss(); // ✅ Close modal on OK
          }
        }
      ]
    });
    await alert.present();
  }

  async onSubmit(submitvalue: any) {
    const transactionId = String(submitvalue);
    const formData = new FormData();

    formData.append('post_id', this.carAdSaleId);
    formData.append('transaction_id', transactionId);
    formData.append('post_type', this.carAdType);

    const loading = await this.loadingController.create({
      message: 'Saving transaction...',
      spinner: 'crescent'
    });

    await loading.present();

    this.userService.savetransaction(formData).subscribe(
      async (response) => {
        console.log('Data saved successfully:', response);
        await loading.dismiss(); // ✅ Hide loader
        this.showAlert('Success', 'Transaction saved successfully.');
      },
      async (error) => {
        console.error('Error saving data:', error);
        await loading.dismiss(); // ✅ Hide loader
        this.showAlert('Error', 'Failed to save transaction. Please try again.');
      }
    );
  }
}
