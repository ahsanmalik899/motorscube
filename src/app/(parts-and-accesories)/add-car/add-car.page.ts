import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PartsAndAccesoriesService, CarAccessoryResponse } from 'src/app/(services)/parts-and-accesories.service';
import { UserService } from 'src/app/(services)/user.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';

export interface Category {
  category_id: string;
  category_name: string;
}

export interface SubCategory {
  subcategory_id: number;
  subcategory_name: string;
}

export interface City {
  city_id?: string;
  id?: string;
  city_name?: string;
  name?: string;
}

interface ServerResponse {
  success: boolean;
  message: string;
  accessory_id?: number;
  uploaded_files?: string[];
}

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
  standalone: false,
})
export class AddCarPage implements OnInit {
  carForm!: FormGroup;
  imagePreviews: string[] = [];
  selectedFiles: File[] = [];
  isFocused: { [key: string]: boolean } = {};
  subCategories: SubCategory[] = [];
  userId: string = '';
  storeId: string = '';
  userType: string = 'private';

  carMakes: any[] = [];
  carModels: any[] = [];
  carVersions: any[] = [];

  cities: City[] = [];

  filteredMakes: any[] = [];
  filteredModels: any[] = [];
  filteredVersions: any[] = [];
  filteredCities: City[] = [];

  makeSearchTerm: string = '';
  modelSearchTerm: string = '';
  versionSearchTerm: string = '';
  citySearchTerm: string = '';

  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private partAndAcessories: PartsAndAccesoriesService,
  ) {}

  ngOnInit() {
    // Get user data from localStorage
    this.userId = localStorage.getItem('userId') || '';
    this.userType = localStorage.getItem('userType') || 'private';
    
    // Get store ID from query parameters
    this.route.queryParams.subscribe(params => {
      this.storeId = params['store_id'] || '';
      console.log('Store ID from query params:', this.storeId);
    });

    this.initializeForm();
    this.loadCategories();
    this.fetchMakes();
    this.fetchCities();
    this.setupSearch();

    this.carCategoryControl.valueChanges.subscribe(() => {
      this.updateSubCategories();
    });

    // Log user data
    console.log('User Data:', {
      userId: this.userId,
      userType: this.userType,
      storeId: this.storeId
    });
  }

  initializeForm() {
    this.carForm = this.fb.group({
      car_item_name: ['', Validators.required],
      car_condition: ['', Validators.required],
      car_location: ['', Validators.required],
      car_category: ['', Validators.required],
      car_sub_category: [{ value: '', disabled: true }],
      car_accessories_price: ['', [Validators.required, Validators.min(0)]],
      car_make: [null, Validators.required],
      car_model: [{ value: null, disabled: true }, Validators.required],
      car_version: [{ value: null, disabled: true }, Validators.required],
      car_description: ['', Validators.required],
      user_id: [this.userId, Validators.required],
      store_id: [this.storeId],
      userType: [this.userType],
      post_status: ['Pending'],
      ad_for: ['Car Accessory']
    });

    // Log form initialization
    console.log('Form initialized with store_id:', this.storeId);
  }

  setupSearch() {
    this.carForm.get('car_make')?.valueChanges.subscribe(value => {
      this.makeSearchTerm = '';
      this.filterMakes();
    });

    this.carForm.get('car_model')?.valueChanges.subscribe(value => {
      this.modelSearchTerm = '';
      this.filterModels();
    });

    this.carForm.get('car_version')?.valueChanges.subscribe(value => {
      this.versionSearchTerm = '';
      this.filterVersions();
    });

    this.carForm.get('car_location')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.citySearchTerm = term;
      this.filterCities();
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
    if (!selectedCategoryId) {
      this.subCategories = [];
      this.carSubCategoryControl.reset();
      this.carSubCategoryControl.disable();
      return;
    }

    this.carSubCategoryControl.enable();

    this.partAndAcessories.getSubCategories(selectedCategoryId).subscribe({
      next: (res) => {
        this.subCategories = res.subcategories || [];
        this.carSubCategoryControl.reset();
      },
      error: (err) => {
        console.error('Error fetching subcategories:', err);
        this.subCategories = [];
        this.presentToast('Failed to load subcategories', 'danger');
      }
    });
  }

  filterMakes() {
    this.filteredMakes = this.carMakes;
    if (this.makeSearchTerm) {
      this.filteredMakes = this.carMakes.filter(make =>
        make.make_name && 
        typeof make.make_name === 'string' &&
        make.make_name.toLowerCase().includes(this.makeSearchTerm.toLowerCase())
      );
    }
  }

  filterModels() {
    this.filteredModels = this.carModels;
    if (this.modelSearchTerm) {
      this.filteredModels = this.carModels.filter(model =>
        model.model_name && 
        typeof model.model_name === 'string' &&
        model.model_name.toLowerCase().includes(this.modelSearchTerm.toLowerCase())
      );
    }
  }

  filterVersions() {
    this.filteredVersions = this.carVersions;
    if (this.versionSearchTerm) {
      this.filteredVersions = this.carVersions.filter(version =>
        version.version_name && 
        typeof version.version_name === 'string' &&
        version.version_name.toLowerCase().includes(this.versionSearchTerm.toLowerCase())
      );
    }
  }

  filterCities() {
    if (!this.citySearchTerm) {
      this.filteredCities = [...this.cities];
    } else {
      this.filteredCities = this.cities.filter(city =>
        city && city.city_name && 
        typeof city.city_name === 'string' &&
        city.city_name.toLowerCase().includes(this.citySearchTerm.toLowerCase())
      );
    }
  }

  fetchMakes() {
    this.userService.getMakes().subscribe({
      next: (data: any[]) => {
        this.carMakes = data.map(make => ({
          make_id: make,
          make_name: make
        }));
        this.filteredMakes = [...this.carMakes];
        console.log('Makes:', this.carMakes);
      },
      error: (err) => console.error('Error fetching makes', err),
    });
  }

  onMakeChange(makeId: string) {
    if (!makeId) {
      this.carForm.patchValue({ 
        car_make: null,
        car_model: null, 
        car_version: null 
      });
      this.carModels = [];
      this.carVersions = [];
      this.filteredModels = [];
      this.filteredVersions = [];
      return;
    }
    this.fetchModels(makeId);
  }

  fetchModels(makeId: string) {
    if (!makeId) return;
    const formData = new FormData();
    formData.append('make', makeId);

    this.userService.getModels(formData).subscribe({
      next: (data) => {
        this.carModels = Array.isArray(data) ? data.map(model => ({
          model_id: model,
          model_name: model
        })) : [];
        this.filteredModels = [...this.carModels];
      },
      error: (error) => console.error('Error fetching models:', error)
    });
  }

  onModelChange(modelId: string) {
    if (!modelId) {
      this.carForm.patchValue({ 
        car_model: null,
        car_version: null 
      });
      this.carVersions = [];
      this.filteredVersions = [];
      return;
    }
    this.fetchVersions(modelId);
  }

  fetchVersions(modelId: string) {
    if (!modelId) return;
    const formData = new FormData();
    formData.append('model', modelId);

    this.userService.getVersions(formData).subscribe({
      next: (data) => {
        this.carVersions = Array.isArray(data) ? data.map(version => ({
          version_id: version,
          version_name: version
        })) : [];
        this.filteredVersions = [...this.carVersions];
      },
      error: (error) => console.error('Error fetching versions:', error)
    });
  }

  fetchCities() {
    this.userService.getCities().subscribe({
      next: (data: any[]) => {
        console.log('Raw cities data:', data);
        this.cities = data.map(city => {
          if (typeof city === 'number') {
            return {
              city_id: city.toString(),
              city_name: city.toString()
            };
          }
          return {
            city_id: city.city_id || city.id || city.toString(),
            city_name: city.city_name || city.name || city.toString()
          };
        });
        this.filteredCities = [...this.cities];
        console.log('Processed cities:', this.cities);
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
        this.presentToast('Failed to load cities', 'danger');
      }
    });
  }

  get carCategoryControl(): FormControl {
    return this.carForm.get('car_category') as FormControl;
  }

  get carSubCategoryControl(): FormControl {
    return this.carForm.get('car_sub_category') as FormControl;
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
    console.log('File Change Event:', event);
    const files = event.target.files;
    console.log('Selected Files:', files);

    if (files) {
      for (let i = 0; i < files.length; i++) {
        if (this.selectedFiles.length < 8) {
          const file = files[i];
          console.log(`Processing file ${i + 1}:`, {
            name: file.name,
            type: file.type,
            size: file.size
          });
          
          // Validate file type
          if (!file.type.startsWith('image/')) {
            console.error('Invalid file type:', file.type);
            this.presentToast('Only image files are allowed', 'danger');
            continue;
          }

          this.selectedFiles.push(file);
          
          const reader = new FileReader();
          reader.onload = (e: any) => {
            console.log(`Generated preview for ${file.name}`);
            this.imagePreviews.push(e.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          console.log('Maximum image limit reached');
          break;
        }
      }
    }
  }

  removeImage(previewUrl: string) {
    const index = this.imagePreviews.indexOf(previewUrl);
    if (index !== -1) {
      this.imagePreviews.splice(index, 1);
      this.selectedFiles.splice(index, 1);
    }
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

  async submitForm() {
    try {
      // Verify user data
      if (!this.userId) {
        console.error('User ID not found in localStorage');
        this.presentToast('User session expired. Please login again.', 'danger');
        return;
      }

      // Verify images
      if (this.selectedFiles.length === 0) {
        console.error('No images selected');
        this.presentToast('Please select at least one image', 'danger');
        return;
      }

      // Log store ID before submission
      console.log('Store ID before submission:', this.storeId);

      const formData = new FormData();
      
      // Get category and subcategory names from their IDs
      const selectedCategory = this.categories.find(cat => cat.category_id === this.carForm.get('car_category')?.value);
      const selectedSubCategory = this.subCategories.find(sub => sub.subcategory_id === this.carForm.get('car_sub_category')?.value);

      // Add all form fields with null checks
      const formControls = {
        'car_item_name': this.carForm.get('car_item_name')?.value,
        'car_condition': this.carForm.get('car_condition')?.value,
        'car_location': this.carForm.get('car_location')?.value,
        'car_category': selectedCategory?.category_name || '',
        'car_sub_category': selectedSubCategory?.subcategory_name || '',
        'car_accessories_price': this.carForm.get('car_accessories_price')?.value,
        'car_make': this.carForm.get('car_make')?.value,
        'car_model': this.carForm.get('car_model')?.value,
        'car_version': this.carForm.get('car_version')?.value,
        'car_description': this.carForm.get('car_description')?.value,
        'store_id': this.storeId // Add store_id to form controls
      };

      // Add form fields to FormData
      Object.entries(formControls).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value);
          console.log(`Added to FormData - ${key}:`, value);
        }
      });
      
      // Add user data
      formData.append('user_id', this.userId);
      formData.append('user_type', this.userType);

      // Log store ID in FormData
      console.log('Store ID in FormData:', formData.get('store_id'));

      // Add images with detailed logging
      console.log('Processing images for upload:');
      this.selectedFiles.forEach((file, index) => {
        if (file) {
          const imageKey = `caritem_image${index + 1}`;
          console.log(`Adding image ${index + 1}:`, {
            key: imageKey,
            name: file.name,
            type: file.type,
            size: `${(file.size / 1024).toFixed(2)} KB`
          });
          formData.append(imageKey, file);
        }
      });

      // Log final FormData contents
      console.log('Final FormData Contents:');
      const formDataEntries = new Map(formData as unknown as Iterable<[string, FormDataEntryValue]>);
      formDataEntries.forEach((value, key) => {
        console.log(`${key}: ${value instanceof File ? value.name : value}`);
      });

      console.log('Sending request to server...');
      const response = await firstValueFrom(this.partAndAcessories.addCarAccessory(formData));
      
      if (response) {
        console.log('Server Response:', {
          success: response.success,
          message: response.message,
          accessory_id: response.accessory_id
        });
        
        if (response.success) {
          console.log('Success:', response);
          this.presentToast(response.message || 'Accessory added successfully!', 'success');
          this.router.navigate(['/my-accessories']);
        } else {
          console.log('Error:', response);
          this.presentToast(response.message || 'Failed to add accessory', 'danger');
        }
      }
      
    } catch (error: unknown) {
      console.error('Error Details:', error);
      if (error && typeof error === 'object' && 'error' in error) {
        console.error('Error Response:', error.error);
      }
      this.presentToast('An error occurred while submitting the form', 'danger');
    }
  }
}
