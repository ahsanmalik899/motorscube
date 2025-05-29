import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
  standalone:false,
})
export class AddCarPage implements OnInit {
 carForm!: FormGroup;
  selectedFiles: File[] = [];
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.carForm = this.fb.group({
      car_item_name: ['', Validators.required],
      car_condition: ['', Validators.required],
      car_location: ['', Validators.required],
      car_category: ['', Validators.required],
      car_sub_category: [''],
      car_accessories_price: ['', [Validators.required, Validators.min(0)]],
      car_make: [''],
      car_model: [''],
      car_version: [''],
      car_description: ['', Validators.required],
      car_ad_privateortrade: ['', Validators.required],
      item_ad_postdate: [new Date().toISOString(), Validators.required],
      car_ad_normal_feature: [''],
      user_id: ['', Validators.required],
      store_id: ['']
    });
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 8) {
      this.presentToast('You can upload max 8 images only.');
      return;
    }
    this.selectedFiles = [];
    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(files[i]);
    }
  }

  async submitForm() {
    if (this.carForm.invalid) {
      this.presentToast('Please fill all required fields');
      return;
    }

    const loading = await this.loadingCtrl.create({ message: 'Submitting...' });
    await loading.present();

    const formData = new FormData();

    Object.keys(this.carForm.controls).forEach(key => {
      formData.append(key, this.carForm.get(key)!.value);
    });

    // Append images
    this.selectedFiles.forEach((file, idx) => {
      formData.append('caritem_image' + (idx + 1), file);
    });

    this.http.post('https://yourdomain.com/api/add_car_accessory.php', formData)
      .subscribe({
        next: async (res: any) => {
          await loading.dismiss();
          if (res.success) {
            this.presentToast('Accessory added successfully!');
            this.carForm.reset();
            this.selectedFiles = [];
          } else {
            this.presentToast('Failed to add accessory.');
          }
        },
        error: async () => {
          await loading.dismiss();
          this.presentToast('Server error. Try again later.');
        }
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      position: 'bottom'
    });
    await toast.present();
  }
}
