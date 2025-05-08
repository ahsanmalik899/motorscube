import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController, LoadingController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { PlantsService } from 'src/app/(services)/plants.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-post-plant-hire',
  templateUrl: './post-plant-hire.page.html',
  styleUrls: ['./post-plant-hire.page.scss'],
  standalone:false,
})
export class PostPlantHirePage implements OnInit {

  back() {
    history.back();
  }

  items: string[] = []; // Assuming you have an array of items
  isItemAvailable: boolean = false;
  selected_looking_for: string = ''; // Assuming this is a string
  showModal: number = -1;
  selectedCountry: string = '';
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
  weight: string = ''; // Initialize with an empty string or default value
  price: string = ''; // Initialize with an empty string or default value
  hourused: string = ''; // Initialize with an empty string or default value
  serialno: string='';
  originalContent = '';
  selectedFiles: FileList | null = null; // Initialize selectedFiles variable
  selectedFileArray: FileList | null = null;
  plantparameter='';
  plantdimention='';
  filesArray: File[] = [];

  filteredCities: string[] = [];
  filteredMakes: string[] = [];
  filteredYears: string[] = [];
  filteredFeatures: string[] = [];
  selectedFeatures: string[] = [];
  filteredCountries: string[] = [];
  selectedCity = '';
  selectedMake = '';
  selectedYear = '';
  country = '';
  selectedfeature = '';
  divVisible = false; // Initialize divVisible to false
  makedivVisible = false;
  yeardivVisible = false;
  registerdivVisible = false;
  showmake = true;
  showcar = true;
  showyear = true;
  showregister = true;
  divcountry=false;
  showcountry= true;
  showfeature = true;
  cities: string[] = [];
  countries: string[] = [];
  makes: string[] = [];
  years: string[] = [];
  features: string[] = [];
  selectedFuel = ''; // Initialize selectedFuel variabl
  selectedTransmission = ''; // Initialize selectedTransmission variable
  selectedDrive = ''; // Initialize selectedDrive variable
  selectedDoors = ''; // Initialize selectedDoors variable
  selectedCategory = ''; // Initialize selectedCategory variable
  selectedColor = '';
  selectedcon = '';
  fileName = '';
  plantname:string='';
  plantmake:string='';
  plantmodel:string='';
  plantversion:string='';
  selectedFile!: File;
  selectdriver = ''; // Variable to store the selected condition
  selectedDuration = '';
  filteredModels: string[] = [];
  filteredVersions: string[] = [];
  selectedModel = '';
  selectedVersion = '';
  modeldivVisible = false;
  versiondivVisible = false;
  showversion = true;
  showversion2 = false;
  showmodel = true;
  showmodel2 = false;
  models: string[] = [];
  versions: string[] = [];
  userID = '';
  userType = '';
  // Declare fileNames array at the class scope
  private fileNames: string[] = [];

  constructor(
    private alertController: AlertController,
    public route: Router,
    private popoverController: PopoverController,
    private userService: UserService,
    private loadingController: LoadingController,
    private plantservice:PlantsService,
  ) {
    this.userID = sessionStorage.getItem('userId') || ''; // Default to an empty string if null
    this.userType = sessionStorage.getItem('userType') || ''; // Default to an empty string if null
    if (this.userID == '' || this.userType == '') {
      this.userID = localStorage.getItem('userId') ?? '';
      this.userType = localStorage.removeItem('userType') ?? '';
    }
  }

  ngOnInit() {
    this.fetchCities(); // Call fetchCities when the component initializes
    this.fetchYears();
    this.fetchFeatures();
    this.fetchCountries();
    this.fetchModels();
  }

  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter((city) =>
      city.toLowerCase().includes(searchTerm)
    );
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
  fetchCountries() {
    // Fetch city names from the backend
    this.userService.getCountrties().subscribe({
      next: (data: string[]) => {
        this.countries = data;
        this.filteredCountries = [...this.countries];
      //console.log('Fetched cities:', this.cities);
      //console.log('Fetched cities indata:', data);
      },
      error: (error: any) => {
        console.error('Error fetching cities:', error);
      }
    });
  }

  filterCountries(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.countries.filter(country => country.toLowerCase().includes(searchTerm));
  }
  async selectCountry(country: string) {
    this.selectedCountry = country;
    this.divcountry = true;
    this.showcountry = false;
    await this.popoverController.dismiss(country);
  // Call filterCities with an empty search term
  this.filterCities({ target: { value: '' } });
  }
  hideDivcountry() {
    this.divcountry = true;
    this.showcountry = false;
  }
  fetchCities() {
    // Fetch city names from the backend
    this.userService.getCities().subscribe({
      next: (data) => {
        this.cities = data;
        this.filteredCities = [...this.cities];
        //console.log('Fetched cities:', this.cities);
        //console.log('Fetched cities indata:', data);
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      },
    });
  }

  // select make car
  
  // Filter makes based on search term
  filterMakes(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredMakes = this.makes.filter((make) =>
      make.toLowerCase().includes(searchTerm)
    );
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
    this.plantservice.getModels().subscribe({
      next: (data) => {
        // Handle successful response here
        console.log('Fetched models:', data);
        this.models = data;
        //console.log('Fetched makes:', data);
        // Initialize filteredMakes with all makes
        this.filteredModels = [...this.models];
      },
      error: (error) => {
        // Handle error response here
        console.error('Error fetching models:', error);
      },
    });
  }

  // Filter makes based on search term
  filterModels(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredModels = this.models.filter((model) =>
      model.toLowerCase().includes(searchTerm)
    );
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

    this.plantservice.getVersions(formData).subscribe({
      next: (data) => {
        // Handle successful response here
        console.log('Fetched versions:', data);
        this.versions = data;
        //console.log('Fetched makes:', data);
        // Initialize filteredMakes with all makes
        this.filteredVersions = [...this.versions];
      },
      error: (error) => {
        // Handle error response here
        console.error('Error fetching Versions:', error);
      },
    });
  }

  // Filter makes based on search term
  filterVersions(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredVersions = this.versions.filter((version) =>
      version.toLowerCase().includes(searchTerm)
    );
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
      next: (data) => {
        //console.log('Received years data:', data);
        this.years = data;
        // Initialize filteredYears with all years
        this.filteredYears = [...this.years];
      },
      error: (error) => {
        console.error('Error fetching years:', error);
      },
    });
  }
  filterYears(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredYears = this.years.filter((year) =>
      year.toLowerCase().includes(searchTerm)
    );
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

  async selectregistered(country: string) {
    this.country = country;
    this.registerdivVisible = true;
    this.showregister = false;
    await this.popoverController.dismiss(country);
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
  selectedcondition(conitionType: string) {
    // Set the selectedFuel variable to the clicked fuel type
    this.selectedcon = conitionType;
    // Log the selected fuel type to console
    console.log('Selected fuel:', conitionType);
  }

  //select transmisison

  selectTransmission(transmissionType: string) {
    // Set the selectedTransmission variable to the clicked transmission type
    this.selectedTransmission = transmissionType;
    // Log the selected transmission type to console
    console.log('Selected transmission:', transmissionType);
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
      next: (data) => {
        this.features = data;
        //console.log('Fetched makes:', data);
        // Initialize filteredMakes with all makes
        this.filteredFeatures = [...this.features];
      },
      error: (error) => {
        console.error('Error fetching makes:', error);
      },
    });
  }
  // Filter makes based on search term
  filterFeatures(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredFeatures = this.features.filter((feature) =>
      feature.toLowerCase().includes(searchTerm)
    );
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

  aboutDriver(condition: string) {
    this.selectdriver = condition;
    console.log('Selected Condition:', condition);
  }
  updateDuration(duration: string) {
    this.selectedDuration = duration;
    console.log('Selected Duration:', duration);
  }
  onFileSelected(event: any) {
    // Ensure that selectedFiles is not null
    this.selectedFiles = event.target.files;

    // Check if selectedFiles is not null before using it
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      const imageContainer = document.getElementById('imageContainer');
      const addmoreContainer = document.getElementById('addmoreContainer');

      // Hide addmoreContainer if it exists
      if (addmoreContainer) {
        addmoreContainer.style.display = 'none';
      }

      // Iterate over each selected file
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const file: File = this.selectedFiles[i];
        const reader = new FileReader();

        // Use a closure to capture the current file and reader
        reader.onload = ((selectedFile: File, fileReader: FileReader) => () => {
          const selectedImage = document.createElement('img');
          selectedImage.style.maxWidth = '100px';
          selectedImage.style.maxHeight = '100px';
          selectedImage.style.minWidth = '100px';
          selectedImage.style.border = '2px solid black';
          selectedImage.style.borderRadius = '5px';
          selectedImage.style.minHeight = '100px';
          selectedImage.style.marginRight = '5px'; // Add margin between images
          selectedImage.src = fileReader.result as string;

          // Create a div to hold each image and its corresponding button
          const imageDiv = document.createElement('div');
          imageDiv.style.position = 'relative';
          imageDiv.style.display = 'inline-block'; // Display images inline

          // Create the remove button
          const removeButton = document.createElement('button');
          removeButton.innerHTML =
            '<img src="../../../assets/cross.webp" style="height: 20px; width: 20px; margin-left: 0px; margin-top: 0px;" fill="clear;"/>';
          removeButton.style.position = 'absolute';
          removeButton.style.top = '5px';
          removeButton.style.right = '5px';
          removeButton.onclick = () => {
            // Only remove the image if imageContainer exists
            if (imageContainer) {
              imageContainer.removeChild(imageDiv);
            } else {
              console.error('Image container not found');
            }
          };

          // Append the image and button to the div
          imageDiv.appendChild(selectedImage);
          imageDiv.appendChild(removeButton);

          // Append the div to the image container if it exists
          if (imageContainer) {
            imageContainer.appendChild(imageDiv);
            imageContainer.style.display = 'block';
          } else {
            console.error('Image container not found');
          }
        })(file, reader);

        reader.readAsDataURL(file);
      }
    } else {
      console.error('No files selected or selectedFiles is null');
    }

    // Add the selected files to filesArray
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.filesArray.push(this.selectedFiles[i]);
      }
      console.log('Files array:', this.filesArray);
    }
  }

  async postAd() {
    console.log('Button clicked! Printing to console.');
    console.log('city.', this.selectedCity);
    console.log('make.', this.selectedMake);
    console.log('year.', this.selectedYear);
    console.log('register.', this.country);
    console.log('Price:', this.price);
    console.log('Mileage:', this.hourused);
    console.log('Weight:', this.weight);
    console.log('serialno:', this.serialno);
    console.log('fuel.', this.selectedFuel);
    console.log('Drive.', this.selectedDrive);
    console.log('Door.', this.selectedDoors);
    console.log('Transmission.', this.selectedTransmission);
    console.log('Category.', this.selectedCategory);
    console.log('Color.', this.selectedColor);
    console.log('Selected features:', this.selectedFeatures);
    console.log('Selected file name:', this.fileName);

    const descriptionTextarea = document.getElementById(
      'description'
    ) as HTMLTextAreaElement;
    let description = '';
    if (descriptionTextarea) {
      description = descriptionTextarea.value;
      console.log('Description:', description);
    } else {
      console.error('Textarea element not found');
    }


    // Form data to be sent
    const userData = {
      country:this.selectedCountry,
      city: this.selectedCity,
      model: this.selectedModel,
      version: this.selectedVersion,
      year: this.selectedYear,
      price: this.price,
      hourused: this.hourused,
      weight: this.weight,
      discription: description,
      change: this.selectedcon,
      duration: this.selectedDuration,
      loginUser: this.userID,
      loginUserType: this.userType,
      plantversion:this.plantversion,
      plantmodel:this.plantmodel,
      plantmake:this.plantmake,
      plantname:this.plantname,
      plantparameter:this.plantparameter,
      plantdimention:this.plantdimention,
    };

    // Validation: Check for empty fields
    const missingFields: string[] = [];
    for (const [key, value] of Object.entries(userData)) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        missingFields.push(key);
      }
    }
    if (this.filesArray.length === 0) {
      missingFields.push('At least one image');
    }

    if (missingFields.length > 0) {
      // Create a dynamic message for the missing fields
      let alertMessage = 'Please fill the following fields:\n';
      missingFields.forEach((field) => {
        alertMessage += `${this.getFieldLabel(field)}\n`; // Get human-friendly field name
      });

      this.presentErrorAlert(alertMessage);
      return; // Don't proceed with submission
    }

    // Create and show loading spinner
    const loading = await this.loadingController.create({
      message: 'Posting your ad...',
      spinner: 'circles',
    });
    await loading.present();

    // If there are no missing fields, proceed with form submission
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      const filesList = new DataTransfer();
      for (const file of this.filesArray) {
        filesList.items.add(file);
      }

      const formData = new FormData();
      for (const [key, value] of Object.entries(userData)) {
        if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      }

      for (let i = 0; i < this.filesArray.length; i++) {
        formData.append(
          'images[]',
          this.filesArray[i],
          this.filesArray[i].name
        );
      }

      try {
        // Call the API and wait for response
        const response = await this.plantservice
          .plantHirePost(formData)
          .toPromise();
        console.log('Data saved successfully:', response);
        this.presentSuccessAlert();
      } catch (error) {
        console.error('Error saving data:', error);
        this.presentErrorAlert(
          'There was an issue posting your ad. Please try again.'
        );
      } finally {
        // Hide the loading spinner
        loading.dismiss();
      }
    } else {
      console.error('No files selected.');
      loading.dismiss();
    }
  }

  // Function to get a human-readable field name for the alert
  getFieldLabel(field: string): string {
    const fieldLabels: { [key: string]: string } = {
      regCity:'Regested City',
      city: 'City',
        make: 'Make',
      model: 'Model',
      version: 'Version',
      year: 'Year',
      price: 'Price',
      hourused: 'Hour Used',
      serialno:'Serial No',
      weight: 'Weight',
      fuel: 'Fuel Type',
      doors: 'Doors',
      category: 'Category',
      color: 'Color',
      features: 'Features',
      discription: 'Description',
      change: 'Condition',
      selectDriver: 'Driver Type',
      duration: 'Duration',
      plantversion:'Plant Version',
      plantmodel:'Plant Model',
      plantmake:'Plant Make',
      plantname:'Plant Name',
      plantparameter:'Plant Parameter Type',
      plantdimention:'Dimension',
    };

    return fieldLabels[field] || field; // Return field name if not found
  }

  // Success Alert
  async presentSuccessAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Your Ad has been successfully posted.',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Navigate back to the previous page
            history.back();
          },
        },
      ],
    });
    await alert.present();
  }

  // Error Alert with dynamic message
  async presentErrorAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      cssClass: 'error-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Success Alert

  // Error Alert (optional, if needed)

  // Your function to get the city list
  getcitylist(): void {
    console.log('getcity name method');
    // Implement the logic for fetching city list
  }

  // Navigate to a modal page
  modal(): void {
    this.route.navigate(['Modal']);
  }

  // Show a modal based on index
  show(index: number): void {
    this.showModal = index;
  }

  // Close the modal
  close(): void {
    this.showModal = -1;
  }

  // Select a city and navigate
  city(val: string): void {
    this.selected_looking_for = val;
    // myGlobals.AlbaytConstants.filter_post_selected_looking_for = val;
    this.route.navigate(['addproject']);
  }

  // Assuming postAd is another method within the class
}
function getItems(
  ev: any,
  Event: {
    new (type: string, eventInitDict?: EventInit): Event;
    prototype: Event;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
  }
) {
  throw new Error('Function not implemented.');
}
