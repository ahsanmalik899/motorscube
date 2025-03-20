import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { UserService } from '../../(services)/user.service';

@Component({
    selector: 'app-my-car-ads-payment',
    templateUrl: './my-car-ads-payment.component.html',
    styleUrls: ['./my-car-ads-payment.component.scss'],
    standalone: false
})
export class MyCarAdsPaymentComponent implements OnInit {
String(arg0: string|number|null|undefined): string {
throw new Error('Method not implemented.');
}
  carAdSaleId = '';
  inputValue = '';

  constructor(private modalController: ModalController, private userService: UserService, private navParams: NavParams) {}

  ngOnInit() {
    this.carAdSaleId = this.navParams.get('carAdSaleId');
    console.log('Car Ad Sale ID:', this.carAdSaleId);
  }
  // Function to close the dialogue box
  close() {
    this.modalController.dismiss();
  }
  showInputValue() {
    console.log(this.inputValue);
  }

  onSubmit(submitvalue: string) {
    console.log('Submitted Value:', submitvalue);
    const formData = new FormData();

    // Append properties from userData to formData
    formData.append('post_id', this.carAdSaleId);
    formData.append('transaction_id', submitvalue);

    const formDataObject: Record<string, string | Blob> = {}; // Declaring the type for dynamic keys and mixed value types

    formData.forEach((value, key) => {
      formDataObject[key] = value; // No TypeScript errors, value can be a string or Blob
    });
    
      console.log('FormData contents:', formDataObject);
    //console.log(formData);
    this.userService.savetransaction(formData).subscribe(
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

}
