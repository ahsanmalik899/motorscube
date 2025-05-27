import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';
import { PartsAndAccesoriesService } from 'src/app/(services)/parts-and-accesories.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.page.html',
  styleUrls: ['./edit-store.page.scss'],
  standalone: false,
})
export class EditStorePage implements OnInit {
  editForm: FormGroup;
  store: any;
  preview = {
    logo: '',
    cover_image: ''
  };
  isFocused: { [key: string]: boolean } = {};

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private navCtrl: NavController,
    private partsAndAccesories: PartsAndAccesoriesService,
     private route: ActivatedRoute,
  ) {
    this.editForm = this.fb.group({
      store_name: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      store_detail: [''],
      select_option: [null, Validators.required],
      bank_name: [''],
      account: [''],
      mobile: ['', Validators.required],
      jazzcash: [''],
      logo: [null],
      cover_image: [null],
    });
  }
StoreId:any| undefined;
  ngOnInit() {
  this.StoreId = this.route.snapshot.paramMap.get('id');
  if (this.StoreId) {
    this.partsAndAccesories.getstorebyid(this.StoreId).subscribe((response) => {
      if (response && response.store) {
        this.store = response.store;
        this.populateForm(this.store);
      }
    });
  } else {
    console.error('No store ID found in route');
  }
  }

  back() {
    this.navCtrl.back();
  }

  populateForm(data: any) {
    this.editForm.patchValue({
      store_name: data.store_name,
      city: data.city,
      address: data.address || data.adress, // handle possible typo
      email: data.email,
      store_detail: data.store_detail,
      select_option: this.matchStoreType(data.select_option),
      bank_name: data.bank_name,
      account: data.account,
      mobile: data.mobile,
      jazzcash: data.jazzcash,
     
    });

    this.preview.logo = data.logo_url || '';
    this.preview.cover_image = data.cover_image_url || '';
  }

  matchStoreType(option: string): string {
    const valid = ['Bike', 'Car','Commercial Vehicel','Machinery','Industrial Plant'];
    return valid.includes(option) ? option : 'Car';
  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      this.editForm.patchValue({ [field]: file });

      const reader = new FileReader();
      reader.onload = () => {
        if (field === 'logo') this.preview.logo = reader.result as string;
        if (field === 'cover_image') this.preview.cover_image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

async onSubmit() {
  if (this.editForm.invalid) {
    console.warn('Form is invalid', this.editForm.value);
    this.editForm.markAllAsTouched();
    return;
  }

  const formData = new FormData();

  Object.entries(this.editForm.value).forEach(([key, value]) => {
    if (value instanceof File) {
      console.log(`Appending file: ${key}`, value.name);
      formData.append(key, value, value.name);
    } else if (value !== null && value !== undefined) {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        console.log(`Appending field: ${key}`, value.toString());
        formData.append(key, value.toString());
      }
    }
  });

  const userId = localStorage.getItem('userId');
  if (!userId) {
    console.error('User ID not found in localStorage');
    return;
  }

  formData.append('store_id',this.StoreId );
  console.log('FormData prepared for submission');

  // Debugging: show all FormData contents
(formData as any).forEach((value: any, key: any) => {
  console.log(`${key}:`, value);
});


  try {
    const response = await lastValueFrom(this.partsAndAccesories.updateStore(formData));
    console.log('Update response:', response);

    const toast = await this.toastController.create({
      message: 'Store updated successfully!',
      duration: 2000,
      color: 'success',
    });
    toast.present();

this.navCtrl.navigateRoot('/main-menu-after-login');

  } catch (error) {
    console.error('Update error:', error);

    const toast = await this.toastController.create({
      message: 'Error updating store. Please try again.',
      duration: 3000,
      color: 'danger',
    });
    toast.present();
  }
}


  onInputFocus(fieldName: string) {
    this.isFocused[fieldName] = true;
  }

  onInputBlur(fieldName: string) {
    this.isFocused[fieldName] = false;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.editForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
