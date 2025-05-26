import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.page.html',
  styleUrls: ['./create-store.page.scss'],
  standalone:false,
})
export class CreateStorePage implements OnInit {
storeForm: FormGroup;
  loading = false;
  selectedFiles: any = {
    logo: null,
    cover_image: null
  };
  constructor( private fb: FormBuilder,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private navCtrl: NavController) {  this.storeForm = this.fb.group({
      store_name: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      web: [''],
      select_option: ['', Validators.required],
      bank_name: [''],
      account: [''],
      jazzcash: ['']
    });}

  ngOnInit() {
  }
onFileChange(event: any, type: 'logo' | 'cover_image') {
    this.selectedFiles[type] = event.target.files[0];
  }
back(){
  history.back()
}
  async onSubmit() {
    if (this.storeForm.invalid) return;
    this.loading = true;

    const formData = new FormData();
 

    if (this.selectedFiles.logo) {
      formData.append('logo', this.selectedFiles.logo);
    }

    if (this.selectedFiles.cover_image) {
      formData.append('cover_image', this.selectedFiles.cover_image);
    }

    try {
      const response = await this.http.post<any>('https://yourdomain.com/api/create-store.php', formData).toPromise();
      this.presentToast('Store created successfully!');
      this.navCtrl.navigateBack('/my-store');
    } catch (error) {
      this.presentToast('Failed to create store. Please try again.');
    } finally {
      this.loading = false;
    }
  }

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }
}
