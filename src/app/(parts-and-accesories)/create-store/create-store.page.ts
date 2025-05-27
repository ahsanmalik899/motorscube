import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, NavController } from '@ionic/angular';
import { PartsAndAccesoriesService } from 'src/app/(services)/parts-and-accesories.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.page.html',
  styleUrls: ['./create-store.page.scss'],
  standalone: false,
})
export class CreateStorePage implements OnInit {
  storeForm: FormGroup;
  isFocused: Record<string, boolean> = {};
  preview = {
    logo: '',
    cover_image: '',
  };


  constructor(private fb: FormBuilder,private partsAndAceesories:PartsAndAccesoriesService,   private toastController: ToastController,  private navCtrl: NavController) {
    this.storeForm = this.fb.group({
      store_name: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      store_detail: [''],
      select_option: ['', Validators.required],
      bank_name: [''],
      account: [''],
      jazzcash: [''],
      logo: [null],  // can add validation if needed
      cover_image: [null],
    });
  }

  ngOnInit() {}

  back() {
  history.back();
  }

  onInputFocus(field: string) {
    this.isFocused[field] = true;
  }

  onInputBlur(field: string) {
    this.isFocused[field] = false;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.storeForm.get(controlName);
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched)
    );
  }

  onFileChange(event: Event, type: 'logo' | 'cover_image') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.storeForm.patchValue({
        [type]: file
      });
      this.storeForm.get(type)?.updateValueAndValidity();

      // Create image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.preview[type] = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

onSubmit() {
  if (this.storeForm.invalid) {
    this.storeForm.markAllAsTouched();
    return;
  }

  const formData = new FormData();

  // Append form values
  Object.entries(this.storeForm.value).forEach(([key, value]) => {
    if (value instanceof File) {
      formData.append(key, value); // file inputs
    } else if (value !== null && value !== undefined) {
      formData.append(key, String(value)); // other inputs
    }
  });

  // Add user_id from localStorage
  const userId = localStorage.getItem('userId');
  if (userId) {
    formData.append('user_id', userId);
  }

  this.partsAndAceesories.createstore(formData).subscribe({
    next: async (response) => {
      if (response.success) {
        const alert = await this.toastController.create({
          message: 'Store created successfully!',
          duration: 2000,
          color: 'success',
        });
        await alert.present();

        setTimeout(() => {
          this.navCtrl.navigateForward('/main-menu-after-login');
        }, 2000);
      } else {
        const alert = await this.toastController.create({
          message: response.message || 'Failed to create store.',
          duration: 3000,
          color: 'warning',
        });
        await alert.present();
      }
    },
    error: async (error) => {
      const alert = await this.toastController.create({
        message: 'Server error. Please try again later.',
        duration: 3000,
        color: 'danger',
      });
      await alert.present();
    }
  });
}


}