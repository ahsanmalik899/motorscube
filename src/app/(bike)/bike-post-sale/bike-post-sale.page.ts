import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { BikeService } from 'src/app/(services)/bike.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-bike-post-sale',
  templateUrl: './bike-post-sale.page.html',
  styleUrls: ['./bike-post-sale.page.scss'],
  standalone:false,
})
export class BikePostSalePage implements OnInit {

  selectedCity: string = '';
  selectedMake: string = '';
  selectedYear: any = '';
  selectedregisterCity: string = '';
  price: number = 0;
  mileage: number = 0;
  engineType: String = '';
  selectedFuel: string = '';
  selectedDrive: string = '';
  selectedDoors: any = '';
  ignition: string = '';
  selectedCategory: string = '';
  selectedColor: string = '';
  selectedFeatures: string[] = [];
  fileName: string = '';
  selectedFiles: File[] = [];
  filesArray: File[] = [];
  isItemAvailable: boolean = false;
  items: string[] = [];
  showModal: number = -1;
  selected_looking_for: any;
  userID: string = '';
  userType: string = '';


options = {
  centeredSlides: true,
  slidesPerView: 3.5,
  spaceBetween: -30,
};

categories = {
  slidesPerView: 3.5,
};
categorie = {
  slidesPerView: 3.0,
};
// eslint-disable-next-line @typescript-eslint/naming-convention

  // constructor() { }

  // ngOnInit() {
  // }
// Initialize selectedFiles variable
selectedFileArray: FileList | null = null;


originalContent = '';
  filteredCities: string[] = [];
  filteredMakes: string[] = [];
  filteredModels: string[] = [];
  filteredVersions: string[] = [];
  filteredYears: string[] = [];
  filteredFeatures: string[] = [];
  selectedModel = '';
  selectedVersion = '';
  selectedfeature = '';

  divVisible = false; // Initialize divVisible to false
  makedivVisible = false;
  modeldivVisible = false;
  versiondivVisible = false;
  yeardivVisible = false;
  registerdivVisible = false;
  showmake = true;
  showversion = true;
  showversion2 = false;
  showmodel = true;
  showmodel2 = false;
  showcar = true;
  showyear = true;
  showregister = true;
  showfeature = true;
  cities: string[] = [];
  makes: string[] = [];
  models: string[] = [];
  versions: string[] = [];
  years: string[] = [];
  features: string[] = [];
  selectedcon = '';
  selectedFile: File | undefined;
  constructor(
    public route: Router,
    private popoverController: PopoverController,
    private userService: UserService,
    private bikesevice:BikeService,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) {
    this.userID = localStorage.getItem('userId') || '';  // Use an empty string if null
    this.userType = localStorage.getItem('userType') || ''; // Use an empty string if null
    console.log('user ID : ', this.userID);
  }
  

  ngOnInit() {
    this.fetchCities(); // Call fetchCities when the component initializes
    this.fetchMakes();
    this.fetchYears();
    this.fetchFeatures();
  }

  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter(city => city.toLowerCase().includes(searchTerm));
  }

  async selectCity(city: string) {
    this.selectedCity = city;
    this.divVisible = true;
    this.showcar = false;
    await this.popoverController.dismiss(city);
  // Call filterCities with an empty search term
  this.filterCities({ target: { value: '' } });
  }

  hideDiv() {
    this.divVisible = false;
    this.showcar = true;
  }

  back(){
    window.history.back();
  }
  fetchCities() {
    // Fetch city names from the backend
    this.userService.getCities().subscribe({
      next: (data: string[]) => {
        this.cities = data;
        this.filteredCities = [...this.cities];
      //console.log('Fetched cities:', this.cities);
      //console.log('Fetched cities indata:', data);
      },
      error: (error: any) => {
        console.error('Error fetching cities:', error);
      }
    });
  }

// select make car
  fetchMakes() {
    this.bikesevice.getMakes().subscribe({
      next: (data: string[]) => {
        this.makes = data;
        //console.log('Fetched makes:', data);
        // Initialize filteredMakes with all makes
        this.filteredMakes = [...this.makes];
      },
      error: (error: any) => {
        console.error('Error fetching makes:', error);
      }
    });
  }
  // Filter makes based on search term
  filterMakes(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredMakes = this.makes.filter(make => make.toLowerCase().includes(searchTerm));
  }

  async selectMake(make: string) {
    this.selectedMake = make;
    this.makedivVisible = true;
    this.showmake = false;
    this.showmodel2 = true;
    await this.popoverController.dismiss(make);
  // Call filterCities with an empty search term

  this.fetchModels();
  this.filterMakes({ target: { value: '' } });
  }

  makeDiv() {
    this.makedivVisible = false;
    this.showmake = true;
    this.showmodel2 = false;
  }



  // select make car
  fetchModels() {
    const makeData = {
    make: this.selectedMake,
    };
    const formData = new FormData();
    formData.append('make', this.selectedMake);

    console.log(makeData);
    this.bikesevice.getModels(formData).subscribe({
      next: (data: string[]) => {
          // Handle successful response here
          console.log('Fetched models:', data);
          this.models = data;
        //console.log('Fetched makes:', data);
        // Initialize filteredMakes with all makes
        this.filteredModels = [...this.models];
      },
      error: (error: any) => {
          // Handle error response here
          console.error('Error fetching models:', error);
      }
  });
  }

  // Filter makes based on search term
  filterModels(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredModels = this.models.filter(model => model.toLowerCase().includes(searchTerm));
  }

  async selectModel(model: string) {
    this.selectedModel = model;
    this.modeldivVisible = true;
    this.showmodel = false;
    this.showversion2 = true;
    await this.popoverController.dismiss(model);
  // Call filterCities with an empty search term
  this.fetchVersions();
  this.filterModels({ target: { value: '' } });
  }

  modelDiv() {
    this.modeldivVisible = false;
    this.showmodel = true;
    this.showversion2 = false;
  }



  // select make car
  fetchVersions() {
    const formData = new FormData();
    formData.append('model', this.selectedModel);


    this.userService.getVersions(formData).subscribe({
      next: (data: string[]) => {
          // Handle successful response here
          console.log('Fetched versions:', data);
          this.versions = data;
        //console.log('Fetched makes:', data);
        // Initialize filteredMakes with all makes
        this.filteredVersions = [...this.versions];
      },
      error: (error: any) => {
          // Handle error response here
          console.error('Error fetching Versions:', error);
      }
  });
  }

  // Filter makes based on search term
  filterVersions(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredVersions = this.versions.filter(version => version.toLowerCase().includes(searchTerm));
  }

  async selectVersion(version: string) {
    this.selectedVersion = version;
    this.versiondivVisible = true;
    this.showversion = false;
    await this.popoverController.dismiss(version);
  // Call filterCities with an empty search term
  this.filterVersions({ target: { value: '' } });
  }

  versionDiv() {
    this.versiondivVisible = false;
    this.showversion = true;
  }
  //slect year

  fetchYears() {
    this.userService.getYears().subscribe({
      next: (data: string[]) => {
        //console.log('Received years data:', data);
        this.years = data;
        // Initialize filteredYears with all years
        this.filteredYears = [...this.years];
      },
      error: (error: any) => {
        console.error('Error fetching years:', error);
      }
    });
  }
  filterYears(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredYears = this.years.filter(year => year.toLowerCase().includes(searchTerm));
  }
  async selectYear(year: string) {
    this.selectedYear = year;
    this.yeardivVisible = true;
    this.showyear = false;
    await this.popoverController.dismiss(year);
  // Call filterCities with an empty search term
  this.filterYears({ target: { value: '' } });
  }

  yearDiv() {
    this.yeardivVisible = false;
    this.showyear = true;
  }

  //select registeration city

  async selectregistered(city: string) {
    this.selectedregisterCity = city;
    this.registerdivVisible = true;
    this.showregister = false;
    await this.popoverController.dismiss(city);
  // Call filterCities with an empty search term
  this.filterCities({ target: { value: '' } });
  }
  registerDiv() {
    this.registerdivVisible = false;
    this.showregister = true;
  }

  // select fuel type


  selectFuel(fuelType: string) {
    // Set the selectedFuel variable to the clicked fuel type
    this.selectedFuel = fuelType;
    // Log the selected fuel type to console
    console.log('Selected fuel:', fuelType);
  }
  selectengentype(enginetype: string) {
    // Set the selectedFuel variable to the clicked fuel type
    this.engineType = enginetype;
    // Log the selected fuel type to console
    console.log('Selected engine type:',enginetype);
  }
  selectedcondition(conitionType: string) {
    // Set the selectedFuel variable to the clicked fuel type
    this.selectedcon = conitionType;
    // Log the selected fuel type to console
    console.log('Selected fuel:', conitionType);
  }

  //select transmisison

selectTransmission(transmissionType: string) {
  // Set the selectedTransmission variable to the clicked transmission type
  this.ignition = transmissionType;
  // Log the selected transmission type to console
  console.log('ignition:', transmissionType);
}

selectDrive(driveType: string) {
  // Set the selectedDrive variable to the clicked drive type
  this.selectedDrive = driveType;
  // Log the selected drive type to console
  console.log('Selected drive:', driveType);
}

selectDoors(doorsType: string) {
  // Set the selectedDoors variable to the clicked doors type
  this.selectedDoors = doorsType;
  // Log the selected doors type to console
  console.log('Selected doors:', doorsType);
}



selectCategory(category: string) {
  // Set the selectedCategory variable to the clicked category
  this.selectedCategory = category;
  // Log the selected category to console
  console.log('Selected category:', category);
}
selectColor(color: string) {
  this.selectedColor = color;
  console.log('Selected color:', color);
}

fetchFeatures() {
  this.userService.getFeatures().subscribe({
    next: (data: string[]) => {
      this.features = data;
      //console.log('Fetched makes:', data);
      // Initialize filteredMakes with all makes
      this.filteredFeatures = [...this.features];
    },
    error: (error: any) => {
      console.error('Error fetching makes:', error);
    }
  });
}
// Filter makes based on search term
filterFeatures(event: any) {
  const searchTerm = event.target.value.toLowerCase();
  this.filteredFeatures = this.features.filter(feature => feature.toLowerCase().includes(searchTerm));
}

async selectFeature(feature: string) {
  if (!this.selectedFeatures.includes(feature)) {
    this.selectedFeatures.push(feature);
    //console.log('Selected features:', this.selectedFeatures); // Print selected features to the console
    await this.popoverController.dismiss(feature);
    this.filterFeatures({ target: { value: '' } });
  }
}


removeFeature(feature: string) {
  const index = this.selectedFeatures.indexOf(feature); // Find the index of the feature
  if (index !== -1) {
    this.selectedFeatures.splice(index, 1); // Remove the feature from the array
  }
}



onFileSelected(event: any) {
  this.selectedFiles = event.target.files;
  const imageContainer = document.getElementById('imageContainer');
  const addmoreContainer = document.getElementById('addmoreContainer');

  // Hide addmoreContainer
  if (addmoreContainer) {
    addmoreContainer.style.display = 'none';
  }

  // Iterate over each selected file
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  if (this.selectedFiles) {  // Ensure this.selectedFiles is not null
    for (let i = 0; i < this.selectedFiles.length; i++) {
      const file: File = this.selectedFiles[i];
      const reader = new FileReader();
    // Use a closure to capture the current file and reader
    reader.onload = ((selectedFile: File, fileReader: FileReader) => () => {
      const selectedImage = document.createElement('img');
      selectedImage.style.maxWidth = '100px';
      selectedImage.style.maxHeight = '100px';
      selectedImage.style.minWidth = '100px';
       selectedImage.style.borderRadius='5px'
      selectedImage.style.minHeight = '100px';
      selectedImage.style.border='2px solid black'
      selectedImage.style.marginRight = '5px'; // Add margin between images
      selectedImage.src = fileReader.result as string;

      // Create a div to hold each image and its corresponding button
      const imageDiv = document.createElement('div');
      imageDiv.style.position = 'relative';
      imageDiv.style.display = 'inline-block'; // Display images inline

      // Create the remove button
      const removeButton = document.createElement('button');
      // eslint-disable-next-line max-len
      removeButton.innerHTML = '<img src="../../../assets/cross.webp" style="height: 20px; width: 20px; margin-left: 0px; margin-top: 0px;" fill="clear;"/>';
      removeButton.style.position = 'absolute';
      removeButton.style.top = '5px';
      removeButton.style.right = '5px';
      removeButton.onclick = () => {
        // Check if imageContainer is not null before calling removeChild
        if (imageContainer) {
          imageContainer.removeChild(imageDiv);
        }
      };
      

      // Append the image and button to the div
      imageDiv.appendChild(selectedImage);
      imageDiv.appendChild(removeButton);

      // Append the div to the image container
      if (imageContainer) {
        imageContainer.appendChild(imageDiv);  // Add the imageDiv as a child
        imageContainer.style.display = 'block'; // Make sure the imageContainer is visible
      }
      
    })(file, reader);

    reader.readAsDataURL(file);
  }
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < this.selectedFiles.length; i++) {
    this.filesArray.push(this.selectedFiles[i]);
  }
  console.log('Files array:', this.filesArray);

}

}
checkRequiredFields() {
  let missingFields = [];

  if (!this.selectedCity) {
    missingFields.push('City');
  }
  if (!this.selectedMake) {
    missingFields.push('Make');
  }
  if (!this.selectedModel) {
    missingFields.push('Model');
  }
  if (!this.selectedYear) {
    missingFields.push('Year');
  }
  if (!this.selectedregisterCity) {
    missingFields.push('Registration City');
  }
  if (this.price <= 0) {
    missingFields.push('Price');
  }
  if (this.mileage <= 0) {
    missingFields.push('Mileage');
  }
  if (this.engineType === '') {
    missingFields.push('Engine Type');
  }
  if (!this.selectedFuel) {
    missingFields.push('Fuel Type');
  }
  if (!this.ignition) {
    missingFields.push('ignition');
  }
  if (!this.selectedCategory) {
    missingFields.push('Category');
  }
  if (!this.selectedColor) {
    missingFields.push('Color');
  }
  if (this.filesArray.length === 0) {
    missingFields.push('At least one image');
  }

  return missingFields;
}



async presentMissingFieldsAlert(missingFields: string[]): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Missing Fields',
    message: 'Please fill the following required fields:\n ' + missingFields.join('\n'),
    cssClass: 'warning-alert',
    buttons: ['OK']
  });

  await alert.present();
}

  getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
        this.isItemAvailable = true;
        this.items = this.items.filter((item) => (item.toLowerCase().indexOf(val.toLowerCase()) > -1));
    } else {
        this.isItemAvailable = false;
    }
  }
  getcitylist(){
    console.log('getcity name method');
  }
  modal(){
  this.route.navigate(['Modal']);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering


  show(index: number){
  this.showModal = index;
  }

  close(){
  this.showModal = -1;
  }
  select(){
  this.showModal = -1;
  }
  city(val: any): void{
  this.selected_looking_for = val;
  // myGlobals.AlbaytConstants.filter_post_selected_looking_for =val;
  this.route.navigate(['addproject']);
  }
  async presentSuccessAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Your Ad has been successfully Posted.',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Navigate back to the previous page
            history.back();
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  async postAd() {
    // Check for missing fields
    const missingFields = this.checkRequiredFields();
  
    if (missingFields.length > 0) {
      // If there are missing fields, show an alert with the list
      this.presentMissingFieldsAlert(missingFields);
      return;
    }
  
    // Create and show the loading spinner
    const loading = await this.loadingController.create({
      message: 'Posting your ad...',
      spinner: 'circles',
    });
    await loading.present();
  
    const descriptionTextarea = document.getElementById('description') as HTMLTextAreaElement;
    let description = '';
    if (descriptionTextarea) {
      description = descriptionTextarea.value;
      console.log('Description:', description);
    } else {
      console.error('Textarea element not found');
    }
  
    const userData = {
      city: this.selectedCity,
      make: this.selectedMake,
      model: this.selectedModel,
      version: this.selectedVersion,
      year: this.selectedYear,
      register: this.selectedregisterCity,
      price: this.price,
      mileage: this.mileage,
      engineSize: this.engineType,
      fuel: this.selectedFuel,
      doors: this.selectedDoors,
      ignition: this.ignition,
      category: this.selectedCategory,
      color: this.selectedColor,
      features: this.selectedFeatures,
      fileName: this.fileName,
      discription: description,
      change: this.selectedcon,
      loginUser: this.userID,
      loginUserType: this.userType,
      engineType: this.engineType,
    };
  
    // FormData logic (same as before)
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      const formData = new FormData();
  
      for (const [key, value] of Object.entries(userData)) {
        if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      }
  
      for (let i = 0; i < this.filesArray.length; i++) {
        formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
      }
  
      try {
        // Call the API and wait for response
        const response = await this.bikesevice.bikeSalePost(formData).toPromise();
        console.log('Data saved successfully:', response);
        this.presentSuccessAlert();
      } catch (error) {
        console.error('Error saving data:', error);
      } finally {
        // Hide the loading spinner
        loading.dismiss();
      }
    } else {
      missingFields.push('Select Picture');
      loading.dismiss();
    }
  }

    
}

