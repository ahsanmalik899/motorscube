import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PartsAndAccesoriesService } from 'src/app/(services)/parts-and-accesories.service';
export interface Category {
  category_id: string;
  category_name: string;
}
export interface SubCategory {
  subcategory_id: number;  // Change from string to number
  subcategory_name: string;
}
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
  standalone:false,
})
export class AddCarPage implements OnInit {
  carForm!: FormGroup;
  imagePreviews: string[] = [];
  selectedFiles: File[] = [];
  isFocused: { [key: string]: boolean } = {};
   subCategories: SubCategory[] = [];
  // Data for dropdowns
  categories: Category[] = []; 
  locations: string[] = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Multan'];
  carMakes: string[] = ['Toyota', 'Honda', 'Suzuki', 'Kia', 'Hyundai'];
  carModels: string[] = ['Corolla', 'Civic', 'Cultus', 'Sportage', 'Elantra'];
  carVersions: string[] = ['GLi', 'Altis', 'Oriel', 'VXL', 'Base Model'];
  

  currentSubCategories: string[] | undefined;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private partAndAcessories: PartsAndAccesoriesService,
  ) { }

  ngOnInit() {
    this.initializeForm();
       this.loadCategories();
         this.carCategoryControl.valueChanges.subscribe(() => {
    this.updateSubCategories();
  });
  }
  loadCategories() {
    this.partAndAcessories.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Failed to load categories', error);
        this.presentToast('Failed to load categories', 'danger');
      }
    });
  }
  

updateSubCategories() {
  const selectedCategoryId = this.carCategoryControl.value;
  console.log('Selected Category ID:', selectedCategoryId); // ✅ Log selected category ID

  if (!selectedCategoryId) {
    this.subCategories = [];
    this.carSubCategoryControl.reset();
    this.carSubCategoryControl.disable();
    return;
  }

  this.carSubCategoryControl.enable();

  this.partAndAcessories.getSubCategories(selectedCategoryId).subscribe({
    next: (res) => {
      console.log('API Response for Subcategories:', res); // ✅ Log full response
      this.subCategories = res.subcategories || [];
      this.carSubCategoryControl.reset();
    },
    error: (err) => {
      console.error('Error fetching subcategories:', err); // ✅ Log errors
      this.subCategories = [];
      this.presentToast('Failed to load subcategories', 'danger');
    }
  });
}


initializeForm() {
  this.carForm = this.fb.group({
    car_item_name: ['', Validators.required],
    car_condition: ['', Validators.required],
    car_location: ['', Validators.required],
    car_category: ['', Validators.required],
    car_sub_category: [{value: '', disabled: true}], // Disabled by default
    car_accessories_price: ['', [Validators.required, Validators.min(0)]],
    car_make: [''],
    car_model: [''],
    car_version: [''],
    car_description: ['', Validators.required],
    car_ad_normal_feature: [''],
    user_id: ['1', Validators.required],
    store_id: ['1']
  });
}

  onInputFocus(field: string) {
    this.isFocused[field] = true;
  }

  onInputBlur(field: string) {
    this.isFocused[field] = false;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.carForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }


onFileChange(event: any) {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  const remainingSlots = 8 - this.imagePreviews.length;
  if (files.length > remainingSlots) {
    this.presentToast(`You can only upload ${remainingSlots} more images.`, 'warning');
    return;
  }

  for (let i = 0; i < files.length && this.imagePreviews.length < 8; i++) {
    const file = files[i];
    this.selectedFiles.push(file);

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreviews.push(e.target.result);
    };
    reader.readAsDataURL(file);
  }
}
removeImage(previewUrl: string) {
  const index = this.imagePreviews.indexOf(previewUrl);
  if (index !== -1) {
    this.imagePreviews.splice(index, 1);
    this.selectedFiles.splice(index, 1);
  }
}




  async submitForm() {
    if (this.carForm.invalid) {
      this.presentToast('Please fill all required fields correctly');
      return;
    }

    if (this.imagePreviews.length === 0) {
      this.presentToast('Please upload at least one image');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Submitting your accessory...',
      spinner: 'crescent'
    });
    await loading.present();

    const formData = new FormData();
    
    // Append form data
    Object.keys(this.carForm.controls).forEach(key => {
      const value = this.carForm.get(key)?.value;
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    // Append images
    this.selectedFiles.forEach((file, index) => {
      formData.append(`caritem_image_${index + 1}`, file);
    });

    this.http.post('https://yourdomain.com/api/add_car_accessory.php', formData)
      .subscribe({
        next: async (res: any) => {
          await loading.dismiss();
          if (res.success) {
            this.presentToast('Accessory added successfully!', 'success');
            this.router.navigate(['/my-accessories']);
          } else {
            this.presentToast(res.message || 'Failed to add accessory', 'danger');
          }
        },
        error: async (error) => {
          await loading.dismiss();
          console.error('Error:', error);
          this.presentToast('Network error. Please try again later.', 'danger');
        }
      });
  }

async presentToast(message: string, color: string = 'dark') {
  const toast = await this.toastCtrl.create({
    message,
    duration: 3000,
    color,
    position: 'top'
  });
  toast.present();
}
get carCategoryControl(): FormControl {
  return this.carForm.get('car_category') as FormControl;
}

get carSubCategoryControl(): FormControl {
  return this.carForm.get('car_sub_category') as FormControl;
}




}