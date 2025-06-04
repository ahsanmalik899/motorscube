import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { debounceTime, distinctUntilChanged, firstValueFrom } from 'rxjs';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { MachineryService } from 'src/app/(services)/machinery.service';
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

export interface Country {
  country_id?: string;
  id?: string;
  country_name?: string;
  name?: string;
}

interface ServerResponse {
  success: boolean;
  message: string;
  machinery_id?: number;
  uploaded_files?: string[];
}

@Component({
  selector: 'app-add-machinery',
  templateUrl: './add-machinery.page.html',
  styleUrls: ['./add-machinery.page.scss'],
  standalone: false,
})
export class AddMachineryPage implements OnInit {
  machineryForm!: FormGroup;
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
  countries: Country[] = [];

  filteredMakes: any[] = [];
  filteredModels: any[] = [];
  filteredVersions: any[] = [];
  filteredCities: City[] = [];
  filteredCountries: Country[] = [];

  makeSearchTerm: string = '';
  modelSearchTerm: string = '';
  versionSearchTerm: string = '';
  citySearchTerm: string = '';
  countrySearchTerm: string = '';

  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private machineryservice:MachineryService,
    private partAndAcessories: PartsAndAccesoriesService,
  ) {}

  ngOnInit() {
    this.userId = localStorage.getItem('userId') || '';
    this.userType = localStorage.getItem('userType') || 'private';
    
    this.route.queryParams.subscribe(params => {
      this.storeId = params['store_id'] || '';
      console.log('Store ID from query params:', this.storeId);
    });

    this.initializeForm();
    this.loadCategories();
    this.fetchMakes();
    this.fetchCities();
    this.fetchCountries();
    this.setupSearch();

    this.machineryCategoryControl.valueChanges.subscribe(() => {
      this.updateSubCategories();
    });

    console.log('User Data:', {
      userId: this.userId,
      userType: this.userType,
      storeId: this.storeId
    });
  }

  initializeForm() {
    this.machineryForm = this.fb.group({
      access_name: ['', Validators.required],
      access_type: ['', Validators.required],
      access_other_type: [''],
      access_subtype: [''],
      access_category: ['', Validators.required],
      access_condition: ['', Validators.required],
      access_hourused: ['', [Validators.required, Validators.min(0)]],
      access_weight: ['', [Validators.required, Validators.min(0)]],
      access_price: ['', [Validators.required, Validators.min(0)]],
      access_description: ['', Validators.required],
      access_make: ['', Validators.required],
      access_model: [{ value: '', disabled: true }, Validators.required],
      access_version: [{ value: '', disabled: true }, Validators.required],
      access_city: ['', Validators.required],
      access_country: ['', Validators.required],
      access_privateortrade: [this.userType === 'private'],
      access_featuretype: ['General', Validators.required],
      user_id: [this.userId, Validators.required],
      store_id: [this.storeId],
      post_status: ['Pending'],
      ad_for: ['Machinery']
    });

    this.machineryForm.get('access_category')?.valueChanges.subscribe(categoryId => {
      const subCategoryControl = this.machineryForm.get('access_subtype');
      if (categoryId) {
        subCategoryControl?.enable();
        this.updateSubCategories();
      } else {
        subCategoryControl?.disable();
        subCategoryControl?.setValue('');
      }
    });

    this.machineryForm.statusChanges.subscribe(status => {
      console.log('Form Status:', status);
      console.log('Form Values:', this.machineryForm.value);
      console.log('Form Errors:', this.machineryForm.errors);
      console.log('Form Valid:', this.machineryForm.valid);
      
      Object.keys(this.machineryForm.controls).forEach(key => {
        const control = this.machineryForm.get(key);
        console.log(`${key} - Valid: ${control?.valid}, Dirty: ${control?.dirty}, Touched: ${control?.touched}, Value: ${control?.value}`);
      });
    });
  }

  setupSearch() {
    this.machineryForm.get('access_make')?.valueChanges.subscribe(value => {
      this.makeSearchTerm = '';
      this.filterMakes();
    });

    this.machineryForm.get('access_model')?.valueChanges.subscribe(value => {
      this.modelSearchTerm = '';
      this.filterModels();
    });

    this.machineryForm.get('access_version')?.valueChanges.subscribe(value => {
      this.versionSearchTerm = '';
      this.filterVersions();
    });

    this.machineryForm.get('access_city')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.citySearchTerm = term;
      this.filterCities();
    });

    this.machineryForm.get('access_country')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.countrySearchTerm = term;
      this.filterCountries();
    });
  }

  loadCategories() {
    this.partAndAcessories.getmachineryCategories().subscribe({
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
    const selectedCategoryId = this.machineryForm.get('access_category')?.value;
    console.log('Selected category ID:', selectedCategoryId);
    
    if (!selectedCategoryId) {
      this.subCategories = [];
      this.machineryForm.get('access_subtype')?.reset();
      this.machineryForm.get('access_subtype')?.disable();
      return;
    }

    this.partAndAcessories.getcommercialSubCategories(selectedCategoryId).subscribe({
      next: (res) => {
        console.log('Subcategories response:', res);
        if (res && res.subcategories && Array.isArray(res.subcategories)) {
          this.subCategories = res.subcategories.map(sub => ({
            sub_category_id: sub.sub_category_id,
            sub_category_name: sub.sub_category_name
          }));
          this.machineryForm.get('access_subtype')?.enable();
        } else {
          this.subCategories = [];
          this.machineryForm.get('access_subtype')?.disable();
        }
      },
      error: (err) => {
        console.error('Error fetching subcategories:', err);
        this.subCategories = [];
        this.machineryForm.get('access_subtype')?.disable();
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

  filterCountries() {
    if (!this.countrySearchTerm) {
      this.filteredCountries = [...this.countries];
    } else {
      this.filteredCountries = this.countries.filter(country =>
        country && country.country_name && 
        typeof country.country_name === 'string' &&
        country.country_name.toLowerCase().includes(this.countrySearchTerm.toLowerCase())
      );
    }
  }

  fetchMakes() {
    this.machineryservice.getMakes().subscribe({
      next: (data: any[]) => {
        this.carMakes = data.map(make => ({
          make_id: make,
          make_name: make
        }));
        this.filteredMakes = [...this.carMakes];
      },
      error: (err) => console.error('Error fetching makes', err),
    });
  }

  onMakeChange(makeId: string) {
    if (!makeId) {
      this.machineryForm.patchValue({ 
        access_make: null,
        access_model: null, 
        access_version: null 
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
    this.machineryservice.getModels().subscribe({
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
      this.machineryForm.patchValue({ 
        access_model: null,
        access_version: null 
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

    this.machineryservice.getVersions(formData).subscribe({
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
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
        this.presentToast('Failed to load cities', 'danger');
      }
    });
  }

  fetchCountries() {
    this.userService.getCountrties().subscribe({
      next: (data: any[]) => {
        this.countries = data.map(country => {
          if (typeof country === 'number') {
            return {
              country_id: country.toString(),
              country_name: country.toString()
            };
          }
          return {
            country_id: country.country_id || country.id || country.toString(),
            country_name: country.country_name || country.name || country.toString()
          };
        });
        this.filteredCountries = [...this.countries];
      },
      error: (error: any) => {
        console.error('Error fetching countries:', error);
        this.presentToast('Failed to load countries', 'danger');
      }
    });
  }

  get machineryCategoryControl(): FormControl {
    return this.machineryForm.get('access_category') as FormControl;
  }

  onInputFocus(field: string) {
    this.isFocused[field] = true;
  }

  onInputBlur(field: string) {
    this.isFocused[field] = false;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.machineryForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        if (this.selectedFiles.length < 8) {
          const file = files[i];
          if (!file.type.startsWith('image/')) {
            this.presentToast('Only image files are allowed', 'danger');
            continue;
          }
          this.selectedFiles.push(file);
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.imagePreviews.push(e.target.result);
          };
          reader.readAsDataURL(file);
        } else {
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
        if (!this.userId) {
            console.error('User ID not found in localStorage');
            this.presentToast('User session expired. Please login again.', 'danger');
            return;
        }

        const userType = localStorage.getItem('userType') || 'private';
        console.log('User Type from localStorage:', userType);

        if (this.selectedFiles.length === 0) {
            console.error('No images selected');
            this.presentToast('Please select at least one image', 'danger');
            return;
        }

        const formData = new FormData();
        
        const selectedCategory = this.categories.find(cat => cat.category_id === this.machineryForm.get('access_category')?.value);
        const selectedSubCategory = this.subCategories.find(sub => sub.sub_category_id === this.machineryForm.get('access_subtype')?.value);

        const formControls = {
            'user_id': this.userId,
            'store_id': this.storeId,
            'access_name': this.machineryForm.get('access_name')?.value,
            'access_type': this.machineryForm.get('access_type')?.value,
            'access_other_type': this.machineryForm.get('access_other_type')?.value,
            'access_subtype': selectedSubCategory?.sub_category_name || '',
            'access_category': selectedCategory?.category_name || '',
            'access_condition': this.machineryForm.get('access_condition')?.value,
            'access_hourused': this.machineryForm.get('access_hourused')?.value,
            'access_weight': this.machineryForm.get('access_weight')?.value,
            'access_price': this.machineryForm.get('access_price')?.value,
            'access_city': this.machineryForm.get('access_city')?.value,
            'access_country': this.machineryForm.get('access_country')?.value,
            'access_make': this.machineryForm.get('access_make')?.value,
            'access_model': this.machineryForm.get('access_model')?.value,
            'access_version': this.machineryForm.get('access_version')?.value,
            'access_description': this.machineryForm.get('access_description')?.value,
            'access_privateortrade': userType,
            'access_featuretype': 'General',
            'post_status': 'Pending',
            'ad_for': 'Machinery',
            'post_created_date': new Date().toISOString().slice(0, 19).replace('T', ' '),
            'post_updated_date': new Date().toISOString().slice(0, 19).replace('T', ' ')
        };

        Object.entries(formControls).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                formData.append(key, value);
                console.log(`Added to FormData - ${key}:`, value);
            }
        });

        this.selectedFiles.forEach((file, index) => {
            if (file) {
                const imageKey = `access_img${index + 1}`;
                formData.append(imageKey, file);
            }
        });

        console.log('Sending request to server...');
        const response = await firstValueFrom(this.partAndAcessories.addMachinery(formData));
        
        if (response) {
            console.log('Server Response:', response);
            
            if (response.success) {
                this.presentToast(response.message || 'Machinery added successfully!', 'success');
                this.router.navigate(['/my-machinery']);
            } else {
                this.presentToast(response.message || 'Failed to add machinery', 'danger');
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
