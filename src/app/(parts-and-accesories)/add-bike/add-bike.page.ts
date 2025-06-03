import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PartsAndAccesoriesService } from 'src/app/(services)/parts-and-accesories.service';
import { UserService } from 'src/app/(services)/user.service';
import { debounceTime, distinctUntilChanged, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BikeService } from 'src/app/(services)/bike.service';

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
  selector: 'app-add-bike',
  templateUrl: './add-bike.page.html',
  styleUrls: ['./add-bike.page.scss'],
  standalone: false
})
export class AddBikePage implements OnInit {
  bikeForm!: FormGroup;
  imagePreviews: string[] = [];
  selectedFiles: File[] = [];
  isFocused: { [key: string]: boolean } = {};
  subCategories: SubCategory[] = [];
  userId: string = '';
  storeId: string = '';
  userType: string = 'private';

  bikeMakes: any[] = [];
  bikeModels: any[] = [];
  bikeVersions: any[] = [];

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
    private bikeservice: BikeService,
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

    this.bikeCategoryControl.valueChanges.subscribe(() => {
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
    this.bikeForm = this.fb.group({
      bikeitem_name: ['', Validators.required],
      bike_condition: ['', Validators.required],
      bike_ad_location: ['', Validators.required],
      bikeitem_category: ['', Validators.required],
      bikeitem_subcategory: [{ value: '', disabled: true }],
      bikeitem_price: ['', [Validators.required, Validators.min(0)]],
      bike_ad_make: [null, Validators.required],
      bike_ad_model: [{ value: null, disabled: true }, Validators.required],
      bike_version: [{ value: null, disabled: true }, Validators.required],
      bike_description: ['', Validators.required],
      bike_ad_normal_feature: [''],
      bike_ad_privateortrade: [this.userType],
      user_id: [this.userId, Validators.required],
      store_id: [this.storeId],
      post_status: ['Pending'],
      ad_for: ['Bike Accessory']
    });

    // Log form initialization
    console.log('Form initialized with store_id:', this.storeId);
  }

  setupSearch() {
    this.bikeForm.get('bike_ad_make')?.valueChanges.subscribe(value => {
      this.makeSearchTerm = '';
      this.filterMakes();
    });

    this.bikeForm.get('bike_ad_model')?.valueChanges.subscribe(value => {
      this.modelSearchTerm = '';
      this.filterModels();
    });

    this.bikeForm.get('bike_version')?.valueChanges.subscribe(value => {
      this.versionSearchTerm = '';
      this.filterVersions();
    });

    this.bikeForm.get('bike_ad_location')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.citySearchTerm = term;
      this.filterCities();
    });
  }

  loadCategories() {
    this.partAndAcessories.getbikeCategories().subscribe({
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
    const selectedCategoryId = this.bikeCategoryControl.value;
    if (!selectedCategoryId) {
      this.subCategories = [];
      this.bikeSubCategoryControl.reset();
      this.bikeSubCategoryControl.disable();
      return;
    }

    this.bikeSubCategoryControl.enable();

    this.partAndAcessories.getbikeSubCategories(selectedCategoryId).subscribe({
      next: (res) => {
        this.subCategories = res.subcategories || [];
        this.bikeSubCategoryControl.reset();
      },
      error: (err) => {
        console.error('Error fetching subcategories:', err);
        this.subCategories = [];
        this.presentToast('Failed to load subcategories', 'danger');
      }
    });
  }

  filterMakes() {
    this.filteredMakes = this.bikeMakes;
    if (this.makeSearchTerm) {
      this.filteredMakes = this.bikeMakes.filter(make =>
        make.make_name && 
        typeof make.make_name === 'string' &&
        make.make_name.toLowerCase().includes(this.makeSearchTerm.toLowerCase())
      );
    }
  }

  filterModels() {
    this.filteredModels = this.bikeModels;
    if (this.modelSearchTerm) {
      this.filteredModels = this.bikeModels.filter(model =>
        model.model_name && 
        typeof model.model_name === 'string' &&
        model.model_name.toLowerCase().includes(this.modelSearchTerm.toLowerCase())
      );
    }
  }

  filterVersions() {
    this.filteredVersions = this.bikeVersions;
    if (this.versionSearchTerm) {
      this.filteredVersions = this.bikeVersions.filter(version =>
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
    this.bikeservice.getMakes().subscribe({
      next: (data: any[]) => {
        this.bikeMakes = data.map(make => ({
          make_id: make,
          make_name: make
        }));
        this.filteredMakes = [...this.bikeMakes];
        console.log('Makes:', this.bikeMakes);
      },
      error: (err) => console.error('Error fetching makes', err),
    });
  }

  onMakeChange(makeId: string) {
    if (!makeId) {
      this.bikeForm.patchValue({ 
        bike_ad_make: null,
        bike_ad_model: null, 
        bike_version: null 
      });
      this.bikeModels = [];
      this.bikeVersions = [];
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

    this.bikeservice.getModels(formData).subscribe({
      next: (data) => {
        this.bikeModels = Array.isArray(data) ? data.map(model => ({
          model_id: model,
          model_name: model
        })) : [];
        this.filteredModels = [...this.bikeModels];
      },
      error: (error) => console.error('Error fetching models:', error)
    });
  }

  onModelChange(modelId: string) {
    if (!modelId) {
      this.bikeForm.patchValue({ 
        bike_ad_model: null,
        bike_version: null 
      });
      this.bikeVersions = [];
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
        this.bikeVersions = Array.isArray(data) ? data.map(version => ({
          version_id: version,
          version_name: version
        })) : [];
        this.filteredVersions = [...this.bikeVersions];
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

  get bikeCategoryControl(): FormControl {
    return this.bikeForm.get('bikeitem_category') as FormControl;
  }

  get bikeSubCategoryControl(): FormControl {
    return this.bikeForm.get('bikeitem_subcategory') as FormControl;
  }

  onInputFocus(field: string) {
    this.isFocused[field] = true;
  }

  onInputBlur(field: string) {
    this.isFocused[field] = false;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.bikeForm.get(controlName);
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
      const selectedCategory = this.categories.find(cat => cat.category_id === this.bikeForm.get('bikeitem_category')?.value);
      const selectedSubCategory = this.subCategories.find(sub => sub.subcategory_id === this.bikeForm.get('bikeitem_subcategory')?.value);

      // Add all form fields with null checks
      const formControls = {
        'bikeitem_name': this.bikeForm.get('bikeitem_name')?.value,
        'bike_condition': this.bikeForm.get('bike_condition')?.value,
        'bike_ad_location': this.bikeForm.get('bike_ad_location')?.value,
        'bikeitem_category': selectedCategory?.category_name || '',
        'bikeitem_subcategory': selectedSubCategory?.subcategory_name || '',
        'bikeitem_price': this.bikeForm.get('bikeitem_price')?.value,
        'bike_ad_make': this.bikeForm.get('bike_ad_make')?.value,
        'bike_ad_model': this.bikeForm.get('bike_ad_model')?.value,
        'bike_version': this.bikeForm.get('bike_version')?.value,
        'bike_description': this.bikeForm.get('bike_description')?.value,
        'bike_ad_normal_feature': this.bikeForm.get('bike_ad_normal_feature')?.value,
        'bike_ad_privateortrade': this.bikeForm.get('bike_ad_privateortrade')?.value,
        'store_id': this.storeId
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
      formData.append('post_status', 'Pending');
      formData.append('ad_for', 'Bike Accessory');

      // Log store ID in FormData
      console.log('Store ID in FormData:', formData.get('store_id'));

      // Add images with detailed logging
      console.log('Processing images for upload:');
      this.selectedFiles.forEach((file, index) => {
        if (file) {
          const imageKey = `bikeitem_image${index + 1}`;
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
      const response = await firstValueFrom(this.partAndAcessories.addBikeAccessory(formData));
      
      if (response) {
        console.log('Server Response:', {
          success: response.success,
          message: response.message,
          accessory_id: response.accessory_id
        });
        
        if (response.success) {
          console.log('Success:', response);
          this.presentToast(response.message || 'Bike accessory added successfully!', 'success');
          this.router.navigate(['/my-accessories']);
        } else {
          console.log('Error:', response);
          this.presentToast(response.message || 'Failed to add bike accessory', 'danger');
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
