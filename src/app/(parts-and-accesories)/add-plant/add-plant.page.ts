import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { debounceTime, distinctUntilChanged, firstValueFrom } from 'rxjs';
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
  plant_access_ad_sale_id?: number;
  uploaded_files?: string[];
}

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.page.html',
  styleUrls: ['./add-plant.page.scss'],
  standalone: false,
})
export class AddPlantPage implements OnInit {
  machineryForm!: FormGroup;
  imagePreviews: string[] = [];
  selectedFiles: File[] = [];
  isFocused: { [key: string]: boolean } = {};
  subCategories: SubCategory[] = [];
  userId: string = '';
  storeId: string = '';
  userType: string = 'private';

  cities: City[] = [];
  countries: Country[] = [];
  filteredCities: City[] = [];
  filteredCountries: Country[] = [];
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private machineryservice: MachineryService,
    private partAndAcessories: PartsAndAccesoriesService,
  ) {}

  ngOnInit() {
    this.userId = localStorage.getItem('userId') || '';
    this.userType = localStorage.getItem('userType') || 'private';
    
    this.route.queryParams.subscribe(params => {
      this.storeId = params['store_id'] || '';
    });

    this.initializeForm();
    this.loadCategories();
    this.fetchCities();
    this.fetchCountries();
    this.setupSearch();
  }

  initializeForm() {
    this.machineryForm = this.fb.group({
      item_name: ['', Validators.required],
      item_condition: ['', Validators.required],
      item_for: ['', Validators.required],
      item_other_sector: [''],
      sub_sector: [''],
      category: ['', Validators.required],
      hour_used: ['', [Validators.required, Validators.min(0)]],
      gross_weight: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      seller_type: [this.userType ],
      ad_type: ['sale'],
      user_id: [this.userId, Validators.required],
      store_id: [this.storeId],
      post_status: ['Pending'],
      ad_for: ['plant'],
      created_date: [new Date().toISOString()],
      post_updated_date: [new Date().toISOString()]
    });
  }

  setupSearch() {
    this.machineryForm.get('city')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.filterCities();
    });

    this.machineryForm.get('country')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.filterCountries();
    });
  }

  loadCategories() {
    this.partAndAcessories.getmachineryCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Failed to load categories:', error);
        this.presentToast('Failed to load categories', 'danger');
      }
    });
  }

  filterCities() {
    const searchTerm = this.machineryForm.get('city')?.value?.toLowerCase() || '';
    this.filteredCities = this.cities.filter(city => 
      city.city_name?.toLowerCase().includes(searchTerm) || 
      city.name?.toLowerCase().includes(searchTerm)
    );
  }

  filterCountries() {
    const searchTerm = this.machineryForm.get('country')?.value?.toLowerCase() || '';
    this.filteredCountries = this.countries.filter(country => 
      country.country_name?.toLowerCase().includes(searchTerm) || 
      country.name?.toLowerCase().includes(searchTerm)
    );
  }

  fetchCities() {
    this.userService.getCities().subscribe({
      next: (cities: any[]) => {
        this.cities = cities.map(city => {
          if (typeof city === 'string') {
            return {
              city_id: city,
              city_name: city
            };
          }
          return {
            city_id: city.city_id || city.id || '',
            city_name: city.city_name || city.name || ''
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
      next: (countries: any[]) => {
        this.countries = countries.map(country => {
          if (typeof country === 'string') {
            return {
              country_id: country,
              country_name: country
            };
          }
          return {
            country_id: country.country_id || country.id || '',
            country_name: country.country_name || country.name || ''
          };
        });
        this.filteredCountries = [...this.countries];
      },
      error: (error) => {
        console.error('Error fetching countries:', error);
        this.presentToast('Failed to load countries', 'danger');
      }
    });
  }

  onInputFocus(field: string) {
    this.isFocused[field] = true;
  }

  onInputBlur(field: string) {
    this.isFocused[field] = false;
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.machineryForm.get(controlName);
    return control ? (control.invalid && (control.dirty || control.touched)) : false;
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        if (this.imagePreviews.length >= 8) break;
        
        const file = files[i];
        if (file.type.startsWith('image/')) {
          this.selectedFiles.push(file);
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.imagePreviews.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }

  removeImage(previewUrl: string) {
    const index = this.imagePreviews.indexOf(previewUrl);
    if (index > -1) {
      this.imagePreviews.splice(index, 1);
      this.selectedFiles.splice(index, 1);
    }
  }

  async presentToast(message: string, color: string = 'dark') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();
  }

  async submitForm() {
    if (this.machineryForm.invalid) {
      this.presentToast('Please fill in all required fields', 'danger');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Submitting...'
    });
    await loading.present();

    try {
      const formData = new FormData();
      const formValues = this.machineryForm.value;

      // Append form values
      Object.keys(formValues).forEach(key => {
        formData.append(key, formValues[key]);
      });

      // Append images
      this.selectedFiles.forEach((file, index) => {
        formData.append(`image_${index + 1}`, file);
      });

      const response = await firstValueFrom(this.partAndAcessories.addPlant(formData));
          
      if (response) {
        console.log('Server Response:', response);
        
        if (response.success) {
          await loading.dismiss();
          this.presentToast(response.message || 'Plant added successfully!', 'success');
          this.router.navigate(['/my-commercial-vehicles']);
        } else {
          await loading.dismiss();
          this.presentToast(response.message || 'Failed to add plant', 'danger');
        }
      }
    } catch (error: unknown) {
      await loading.dismiss();
      console.error('Error Details:', error);
      if (error && typeof error === 'object' && 'error' in error) {
        console.error('Error Response:', error.error);
      }
      this.presentToast('An error occurred while submitting the form', 'danger');
    }
  }
  
}