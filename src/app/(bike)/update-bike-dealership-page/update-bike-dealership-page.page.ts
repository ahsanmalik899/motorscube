import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-bike-dealership-page',
  templateUrl: './update-bike-dealership-page.page.html',
  styleUrls: ['./update-bike-dealership-page.page.scss'],
  standalone: false,
})
export class UpdateBikeDealershipPagePage implements OnInit {
  back() {
    history.back();
  }
  
  userForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';
  cities!: string[];
  selectedFiles: FileList | null = null;
  selectedFileArray: FileList | null = null;
  DealershipFeatured = '';
  filesArray: File[] = [];
  adsId = '';
  carSaleData: any = [];
  oldfilesArray: any = [];
  @Input() filteredCarSaleData: any[] = [];
  selectedImageSrc = '';
  visibleImages: boolean[] = [];

  // New properties for condition selection
  selectedcon = '';
  showcar = false;
  divVisible = false;
  selectedCity = '';

  // New properties for make selection
  showmake = false;
  makedivVisible = false;
  selectedMake = '';
  makes: string[] = [];
  filteredMakes: string[] = [];

  // New properties for model selection
  showmodel = false;
  showmodel2 = false;
  modeldivVisible = false;
  selectedModel = '';
  models: string[] = [];
  filteredModels: string[] = [];

  // New properties for version selection
  showversion = false;
  showversion2 = false;
  versiondivVisible = false;
  selectedVersion = '';
  versions: string[] = [];
  filteredVersions: string[] = [];

  // New properties for year selection
  showyear = false;
  yeardivVisible = false;
  selectedYear = '';
  years: string[] = [];
  filteredYears: string[] = [];

  // New properties for registration city
  showregister = false;
  registerdivVisible = false;
  selectedregisterCity = '';
  filteredCities: string[] = [];

  // New properties for bike details
  price = '';
  mileage = '';
  selectedFuel = '';
  engineSize = '';
  selectedCategory = '';
  selectedTransmission = '';
  selectedDrive = '';
  selectedColor = '';
  selectedDoors = '';
  selectedFeatures: string[] = [];
  filteredFeatures: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertController: AlertController,
    private router: ActivatedRoute,
    private loadingController: LoadingController,
    public route: Router,
    private toastController: ToastController
  ) {
    this.userForm = this.formBuilder.group({
      bcity: ['']
    });

    this.router.queryParams.subscribe(params => {
      this.adsId = params['adsId'];
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.fetchCities();
    this.initializeData();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      bname: ['', Validators.required],
      baddress: [''],
      bdetail: [''],
      bmobile: ['', Validators.required],
      bemail: ['', [Validators.required, Validators.email]],
      bwebsite: ['', Validators.required],
      bcity: ['', Validators.required]
    });

    this.fetchCities();
    this.fetchCarSale();
  }

  fetchCarSale() {
    this.userService.getdealershipData().subscribe({
      next: (data) => {
        console.log('Fetched car data:', data);
        this.carSaleData = data;
        this.filteredCarSaleData = this.carSaleData.filter((item: { car_dealership_ad_sale_id: string; }) => item.car_dealership_ad_sale_id === this.adsId);

        const imageUrls = this.getImageUrls(this.filteredCarSaleData[0]);
        this.visibleImages = new Array(imageUrls.length).fill(true);
        if (this.filteredCarSaleData.length > 0) {
          console.log('filter data : ', this.filteredCarSaleData);
          const carData = this.filteredCarSaleData[0];
          this.DealershipFeatured = carData.dealership_featured_type;

          this.userForm.patchValue({
            bname: carData.dealership_name || '',
            baddress: carData.dealership_address || '',
            bdetail: carData.dealership_description || '',
            bmobile: carData.dealership_phone || '',
            bemail: carData.dealership_email || '',
            bwebsite: carData.dealership_web || '',
            bcity: carData.dealership_city || ''
          });

          Object.keys(this.filteredCarSaleData[0]).forEach(key => {
            if (key.startsWith('dealership_img') && this.filteredCarSaleData[0][key] !== 'NULL') {
              this.oldfilesArray.push(this.filteredCarSaleData[0][key]);
            }
          });
          console.log('File Array : ',this.oldfilesArray);

          console.log('Form values after patch:', this.userForm.value);
        } else {
          console.log('No data found matching the filter criteria.');
        }

      },
      error: (error) => {
        console.error('Error fetching car data:', error);
      }
    });
  }

  getImageUrls(data: any): string[] {
    if (data) {
      const imageUrls: string[] = [];
      Object.keys(data).forEach(key => {
        if (key.startsWith('image_url') && data[key] && !data[key].endsWith('NULL')) {
          imageUrls.push(data[key]);
        }
      });
      return imageUrls;
    }
    return [];
  }

  hideImage(index: number) {
    const removedFile = this.oldfilesArray.splice(index, 1);

    this.visibleImages.splice(index, 1);

    console.log('Close button clicked for image index:', index);
    console.log('Removed file:', removedFile[0]);
  }

  fetchCities() {
    this.userService.getCities().subscribe({
      next: (data) => {
        this.cities = data;

        const currentCity = this.userForm.get('bcity')!.value;
        if (currentCity && !this.cities.includes(currentCity)) {
          this.cities.push(currentCity);
        }

        this.updateSelectOptions();
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      }
    });
  }

  updateSelectOptions() {
    const selectElement = document.getElementById('bcity') as HTMLSelectElement;
    selectElement.innerHTML = '';

    const placeholderOption = document.createElement('option');
    placeholderOption.text = 'Select a city';
    placeholderOption.value = '';
    placeholderOption.disabled = true;
    selectElement.add(placeholderOption);

    this.cities.forEach(city => {
      const option = document.createElement('option');
      option.text = city;
      option.value = city;
      if (city === this.userForm.get('bcity')!.value) {
        option.selected = true;
      }
      selectElement.add(option);
    });
  }

  updateCityOptions() {
    const bcityControl = this.userForm.get('bcity');
    bcityControl!.clearValidators();
    bcityControl!.reset();

    this.cities.forEach(city => {
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye-off' : 'eye';
  }

  onInputFocus(fieldName: string): void {
    console.log(`Input field ${fieldName} is focused`);
  }

  onInputBlur(fieldName: string): void {
    console.log(`Input field ${fieldName} lost focus`);
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    const imageContainer = document.getElementById('imageContainer');
    const addmoreContainer = document.getElementById('addmoreContainer');

    if (addmoreContainer) {
      addmoreContainer.style.display = 'none';
    }

    for (let i = 0; i < this.selectedFiles!.length; i++) {
      const file: File = this.selectedFiles![i];
      const reader = new FileReader();

      reader.onload = ((selectedFile: File, fileReader: FileReader) => () => {
        const selectedImage = document.createElement('img');
        selectedImage.style.maxWidth = '100px';
        selectedImage.style.maxHeight = '100px';
        selectedImage.style.minWidth = '100px';
        selectedImage.style.minHeight = '100px';
        selectedImage.style.marginRight = '5px';
        selectedImage.src = fileReader.result as string;
        const imageDiv = document.createElement('div');
        imageDiv.style.position = 'relative';
        imageDiv.style.display = 'inline-block';
        const removeButton = document.createElement('button');
        removeButton.innerHTML = '<img src="../../../assets/cross.webp" style="height: 20px; width: 20px; margin-left: 0px; margin-top: 0px;" fill="clear;"/>';
        removeButton.style.position = 'absolute';
        removeButton.style.top = '5px';
        removeButton.style.right = '5px';
        removeButton.onclick = () => {
          imageContainer!.removeChild(imageDiv);
        };
        imageDiv.appendChild(selectedImage);
        imageDiv.appendChild(removeButton);
        imageContainer!.appendChild(imageDiv);
        imageContainer!.style.display = 'block';
      })(file, reader);
      reader.readAsDataURL(file);
    }
    for (let i = 0; i < this.selectedFiles!.length; i++) {
      this.filesArray.push(this.selectedFiles![i]);
    }
    console.log('Files array:', this.filesArray);
  }

  async saveUser(): Promise<void> {
    this.userForm.markAllAsTouched();
  
    if (this.userForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Submitting your data...',
        spinner: 'circles',
      });
      await loading.present();
  
      const filesList = new DataTransfer();
      for (const file of this.filesArray) {
        filesList.items.add(file);
      }
  
      const fileNames: string[] = [];
  
      for (const file of this.filesArray) {
        const fileName = file.name;
        fileNames.push(fileName);
      }
  
      console.log('Files array:', fileNames);
  
      const formData = new FormData();
  
      Object.keys(this.userForm.controls).forEach((controlName) => {
        const control = this.userForm.get(controlName);
        if (Array.isArray(control!.value)) {
          formData.append(controlName, JSON.stringify(control!.value));
        } else {
          formData.append(controlName, control!.value);
        }
      });
  
      formData.append('dealership_featured', this.DealershipFeatured);
      formData.append('adsID', this.adsId);
  
      formData.append('oldfilesArray', JSON.stringify(this.oldfilesArray));
  
      for (let i = 0; i < this.filesArray.length; i++) {
        formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
      }
  
      formData.forEach((value, key) => {
        console.log(key, value);
      });
  
      this.userService.updateDealerBusiness(this.adsId, formData).subscribe(
        (response) => {
          console.log('Data saved successfully:', response);
          this.presentSuccessAlert();
          loading.dismiss();
        },
        (error) => {
          console.error('Error saving data:', error);
          loading.dismiss();
          this.presentErrorAlert('Error saving data, please try again.');
        }
      );
    } else {
      const missingFields: string[] = [];
      Object.keys(this.userForm.controls).forEach((controlName) => {
        const control = this.userForm.get(controlName);
        if (control!.invalid && control!.hasError('required')) {
          missingFields.push(this.getFieldLabel(controlName));
        }
      });
  
      const alertMessage =
        missingFields.length > 0
          ? `Please fill the following required fields: \n${missingFields.join('\n')}`
          : 'Please fill in all required fields.';
  
      this.presentErrorAlert(alertMessage);
    }
  }
  
  async presentSuccessAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Your account has been successfully Updated.',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
              this.route.navigate([this.router.url]);
            });
          }
        }
      ]
    });
  
    await alert.present();
  }

  getFieldLabel(field: string): string {
    const fieldLabels: { [key: string]: string } = {
      bname: 'Business Name',
      baddress: 'Business Address',
      bdetail: 'Business Detail',
      bmobile: 'Mobile Number',
      bemail: 'Email',
      bwebsite: 'Website',
      bcity: 'City',
    };
    return fieldLabels[field] || field;
  }

  async presentErrorAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      cssClass: 'error-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }

  // New methods for condition selection
  selectedcondition(condition: string) {
    this.selectedcon = condition;
  }

  // New methods for city selection
  getcitylist() {
    this.divVisible = true;
  }

  hideDiv() {
    this.divVisible = false;
  }

  selectCity(city: string) {
    this.selectedCity = city;
    this.divVisible = false;
  }

  // New methods for make selection
  makeDiv() {
    this.makedivVisible = !this.makedivVisible;
  }

  filterMakes(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredMakes = this.makes.filter(make => 
      make.toLowerCase().includes(searchTerm)
    );
  }

  selectMake(make: string) {
    this.selectedMake = make;
    this.makedivVisible = false;
    this.showmodel = true;
  }

  // New methods for model selection
  modelDiv() {
    this.modeldivVisible = !this.modeldivVisible;
  }

  filterModels(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredModels = this.models.filter(model => 
      model.toLowerCase().includes(searchTerm)
    );
  }

  selectModel(model: string) {
    this.selectedModel = model;
    this.modeldivVisible = false;
    this.showversion2 = true;
  }

  // New methods for version selection
  versionDiv() {
    this.versiondivVisible = !this.versiondivVisible;
  }

  filterVersions(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredVersions = this.versions.filter(version => 
      version.toLowerCase().includes(searchTerm)
    );
  }

  selectVersion(version: string) {
    this.selectedVersion = version;
    this.versiondivVisible = false;
  }

  // New methods for year selection
  yearDiv() {
    this.yeardivVisible = !this.yeardivVisible;
  }

  filterYears(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredYears = this.years.filter(year => 
      year.toLowerCase().includes(searchTerm)
    );
  }

  selectYear(year: string) {
    this.selectedYear = year;
    this.yeardivVisible = false;
  }

  // New methods for registration city
  registerDiv() {
    this.registerdivVisible = !this.registerdivVisible;
  }

  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter(city => 
      city.toLowerCase().includes(searchTerm)
    );
  }

  selectregistered(city: string) {
    this.selectedregisterCity = city;
    this.registerdivVisible = false;
  }

  // New methods for bike details
  selectFuel(fuel: string) {
    this.selectedFuel = fuel;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  selectTransmission(transmission: string) {
    this.selectedTransmission = transmission;
  }

  selectDrive(drive: string) {
    this.selectedDrive = drive;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectDoors(doors: string) {
    this.selectedDoors = doors;
  }

  // New methods for features
  filterFeatures(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredFeatures = this.getAvailableFeatures().filter(feature => 
      feature.toLowerCase().includes(searchTerm)
    );
  }

  selectFeature(feature: string) {
    if (!this.selectedFeatures.includes(feature)) {
      this.selectedFeatures.push(feature);
    }
  }

  removeFeature(feature: string) {
    this.selectedFeatures = this.selectedFeatures.filter(f => f !== feature);
  }

  getAvailableFeatures(): string[] {
    return [
      'ABS', 'Air Conditioning', 'Airbags', 'Alarm', 'Alloy Wheels',
      'Bluetooth', 'CD Player', 'Central Locking', 'Cruise Control',
      'Electric Mirrors', 'Electric Windows', 'Fog Lights', 'GPS',
      'Leather Seats', 'Parking Sensors', 'Power Steering', 'Radio',
      'Rear View Camera', 'Sunroof', 'USB Port'
    ];
  }

  // New method for updating ad
  async updateAd() {
    try {
      const loading = await this.loadingController.create({
        message: 'Updating your ad...'
      });
      await loading.present();

      const formData = new FormData();
      formData.append('dealership_name', this.userForm.get('bname')?.value);
      formData.append('dealership_address', this.userForm.get('baddress')?.value);
      formData.append('dealership_description', this.userForm.get('bdetail')?.value);
      formData.append('dealership_phone', this.userForm.get('bmobile')?.value);
      formData.append('dealership_email', this.userForm.get('bemail')?.value);
      formData.append('dealership_web', this.userForm.get('bwebsite')?.value);
      formData.append('dealership_city', this.userForm.get('bcity')?.value);
      
      formData.append('price', this.price);
      formData.append('mileage', this.mileage);
      formData.append('fuel_type', this.selectedFuel);
      formData.append('engine_size', this.engineSize);
      formData.append('category', this.selectedCategory);
      formData.append('transmission', this.selectedTransmission);
      formData.append('drive_type', this.selectedDrive);
      formData.append('color', this.selectedColor);
      formData.append('doors', this.selectedDoors);
      formData.append('features', JSON.stringify(this.selectedFeatures));
      formData.append('adsID', this.adsId);

      if (this.selectedFiles) {
        for (let i = 0; i < this.selectedFiles.length; i++) {
          formData.append('images', this.selectedFiles[i]);
        }
      }

      await this.userService.updateDealerBusiness(this.adsId, formData).toPromise();

      await loading.dismiss();
      this.presentSuccessAlert();
    } catch (error) {
      console.error('Error updating ad:', error);
      await this.presentErrorAlert('Failed to update ad. Please try again.');
    }
  }

  // Initialize data
  private initializeData() {
    // Initialize makes
    this.makes = ['Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'BMW', 'Ducati'];
    this.filteredMakes = this.makes;

    // Initialize models
    this.models = ['Model 1', 'Model 2', 'Model 3'];
    this.filteredModels = this.models;

    // Initialize versions
    this.versions = ['Version 1', 'Version 2', 'Version 3'];
    this.filteredVersions = this.versions;

    // Initialize years
    const currentYear = new Date().getFullYear();
    this.years = Array.from({length: 30}, (_, i) => (currentYear - i).toString());
    this.filteredYears = this.years;

    // Initialize features
    this.filteredFeatures = this.getAvailableFeatures();
  }
}
  