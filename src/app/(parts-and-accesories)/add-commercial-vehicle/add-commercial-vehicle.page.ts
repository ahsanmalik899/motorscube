import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { debounceTime, distinctUntilChanged, firstValueFrom } from 'rxjs';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { PartsAndAccesoriesService } from 'src/app/(services)/parts-and-accesories.service';
import { UserService } from 'src/app/(services)/user.service';
export interface Category {
  category_id: string;
  category_name: string;
}

export interface SubCategory {
  sub_category_id: number;
  sub_category_name: string;
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
  selector: 'app-add-commercial-vehicle',
  templateUrl: './add-commercial-vehicle.page.html',
  styleUrls: ['./add-commercial-vehicle.page.scss'],
  standalone:false,
})
export class AddCommercialVehiclePage implements OnInit {
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
    private commercialservice:CommercialService,
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
      car_accessories_price: ['', [Validators.required, Validators.min(0)]],
      car_description: ['', Validators.required],
      category: ['', Validators.required],
      sub_category: [{ value: '', disabled: true }],
      car_make: ['', Validators.required],
      car_model: [{ value: '', disabled: true }, Validators.required],
      car_version: [{ value: '', disabled: true }, Validators.required],
      car_location: ['', Validators.required],
      vehicle_private_trader: [this.userType === 'private'],
      vehicle_feature_type: ['General', Validators.required],
      user_id: [this.userId, Validators.required],
      store_id: [this.storeId],
      post_status: ['Pending'],
      ad_for: ['Commercial Accessory']
    });

    // Subscribe to category changes
    this.carForm.get('category')?.valueChanges.subscribe(categoryId => {
      const subCategoryControl = this.carForm.get('sub_category');
      if (categoryId) {
        subCategoryControl?.enable();
        this.updateSubCategories();
      } else {
        subCategoryControl?.disable();
        subCategoryControl?.setValue('');
      }
    });

    // Subscribe to form status changes
    this.carForm.statusChanges.subscribe(status => {
      console.log('Form Status:', status);
      console.log('Form Values:', this.carForm.value);
      console.log('Form Errors:', this.carForm.errors);
      console.log('Form Valid:', this.carForm.valid);
      
      // Log individual control statuses
      Object.keys(this.carForm.controls).forEach(key => {
        const control = this.carForm.get(key);
        console.log(`${key} - Valid: ${control?.valid}, Dirty: ${control?.dirty}, Touched: ${control?.touched}, Value: ${control?.value}`);
      });
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
    this.partAndAcessories.getcommercialCategories().subscribe({
      next: (categories) => {
        console.log('Categories loaded:', categories);
        this.categories = categories;
      },
      error: (error) => {
        console.error('Failed to load categories:', error);
        this.presentToast('Failed to load categories', 'danger');
      }
    });
  }

  updateSubCategories() {
    const selectedCategoryId = this.carForm.get('category')?.value;
    console.log('Selected category ID:', selectedCategoryId);
    
    if (!selectedCategoryId) {
      console.log('No category selected, clearing subcategories');
      this.subCategories = [];
      this.carForm.get('sub_category')?.reset();
      this.carForm.get('sub_category')?.disable();
      return;
    }

    console.log('Fetching subcategories for category:', selectedCategoryId);

    this.partAndAcessories.getcommercialSubCategories(selectedCategoryId).subscribe({
      next: (res) => {
        console.log('Subcategories response:', res);
        if (res && res.subcategories && Array.isArray(res.subcategories)) {
          this.subCategories = res.subcategories.map(sub => {
            // Handle both camelCase and underscore property names
            const id = sub.sub_category_id || sub.sub_category_id;
            const name = sub.sub_category_name || sub.sub_category_name;
            return {
              sub_category_id: id,
              sub_category_name: name
            };
          });
          console.log('Processed subcategories:', this.subCategories);
          
          // Enable subcategory control after loading subcategories
          this.carForm.get('sub_category')?.enable();
        } else {
          console.log('No subcategories found or invalid response format');
          this.subCategories = [];
          this.carForm.get('sub_category')?.disable();
        }
      },
      error: (err) => {
        console.error('Error fetching subcategories:', err);
        this.subCategories = [];
        this.carForm.get('sub_category')?.disable();
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
    this.commercialservice.getMakes().subscribe({
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

    this.commercialservice.getModels().subscribe({
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

    this.commercialservice.getVersions(formData).subscribe({
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
    return this.carForm.get('category') as FormControl;
  }

  get carSubCategoryControl(): FormControl {
    return this.carForm.get('sub_category') as FormControl;
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

        // Get userType from localStorage
        const userType = localStorage.getItem('userType') || 'private';
        console.log('User Type from localStorage:', userType);

        // Verify images
        if (this.selectedFiles.length === 0) {
            console.error('No images selected');
            this.presentToast('Please select at least one image', 'danger');
            return;
        }

        const formData = new FormData();
        
        // Get category and subcategory names from their IDs
        const selectedCategory = this.categories.find(cat => cat.category_id === this.carForm.get('category')?.value);
        const selectedSubCategory = this.subCategories.find(sub => sub.sub_category_id === this.carForm.get('sub_category')?.value);

        // Add all form fields with exact database field names
        const formControls = {
            'user_id': this.userId,
            'store_id': this.storeId,
            'item_name': this.carForm.get('car_item_name')?.value,
            'item_for': 'Commercial Accessory',
            'vehicle_condition': this.carForm.get('car_condition')?.value,
            'vehicle_city': this.carForm.get('car_location')?.value,
            'category': selectedCategory?.category_name || '',
            'sub_category': selectedSubCategory?.sub_category_name || '',
            'vehicle_price': this.carForm.get('car_accessories_price')?.value,
            'make': this.carForm.get('car_make')?.value,
            'model': this.carForm.get('car_model')?.value,
            'version': this.carForm.get('car_version')?.value,
            'description': this.carForm.get('car_description')?.value,
            'vehicle_private_trader': userType,
            'vehicle_feature_type': 'General',
            'post_status': 'Pending',
            'ad_for': 'Commercial Accessory',
            'post_created_date': new Date().toISOString().slice(0, 19).replace('T', ' '),
            'post_updated_date': new Date().toISOString().slice(0, 19).replace('T', ' ')
        };

        // Add form fields to FormData
        Object.entries(formControls).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                formData.append(key, value);
                console.log(`Added to FormData - ${key}:`, value);
            }
        });

        // Add images with correct field names
        this.selectedFiles.forEach((file, index) => {
            if (file) {
                const imageKey = `image_${index + 1}`;
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
        const response = await firstValueFrom(this.partAndAcessories.addCommercialVehicle(formData));
        
        if (response) {
            console.log('Server Response:', response);
            
            if (response.success) {
                this.presentToast(response.message || 'Commercial vehicle added successfully!', 'success');
                this.router.navigate(['/my-commercial-vehicles']);
            } else {
                this.presentToast(response.message || 'Failed to add commercial vehicle', 'danger');
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

  compareWithSubCategory = (o1: any, o2: any) => {
    return o1 && o2 ? o1.sub_category_id === o2.sub_category_id : o1 === o2;
  }
}
