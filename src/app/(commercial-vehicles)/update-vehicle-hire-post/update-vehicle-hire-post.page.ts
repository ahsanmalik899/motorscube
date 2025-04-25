import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, AlertController, LoadingController } from '@ionic/angular';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-update-vehicle-hire-post',
  templateUrl: './update-vehicle-hire-post.page.html',
  styleUrls: ['./update-vehicle-hire-post.page.scss'],
  standalone:false,
})
export class UpdateVehicleHirePostPage implements OnInit {

  isItemAvailable = false;
items :any[]= [];

  
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
selected_looking_for: any;

  // constructor() { }

  // ngOnInit() {
  // }
  engineSize!: string;
  price!: string;
  mileage!: string;
originalContent = '';
selectedFiles: FileList | null = null; // Initialize selectedFiles variable
selectedFileArray: FileList | null = null;

   filesArray: File[] = [];

  filteredCities: string[] = [];
  filteredMakes: string[] = [];
  filteredYears: string[] = [];
  filteredFeatures: string[] = [];
  selectedFeatures: string[] = [];
  selectedCity = '';
  selectedMake = '';
  selectedYear = '';
  selectedregisterCity = '';
  selectedfeature = '';
  divVisible = false; // Initialize divVisible to false
  makedivVisible = false;
  yeardivVisible = false;
  registerdivVisible = false;
  showmake = true;
  showcar = true;
  showyear = true;
  showregister = true;
  showfeature = true;
  cities: string[] = [];
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
  carAdNormalFeature='';
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
  userID='';
  userType='';
   // Declare fileNames array at the class scope

   adsId='';
   carSaleData: any = [];
   oldfilesArray: any = [];
   @Input() filteredCarSaleData: any[] = []; // Input property to receive filteredCarSaleData
   selectedImageSrc = ''; // Property to hold the URL of the selected image
   visibleImages: boolean[] = [];

   // Function to show selected image
 @ViewChild('imageContainer') imageContainer!: ElementRef<HTMLDivElement>;
 @ViewChild('selectedImage') selectedImage!: ElementRef<HTMLImageElement>;

   constructor(public route: Router, private popoverController: PopoverController,private commercialservice:CommercialService, private userService: UserService, private alertcontroler:AlertController,
      private loadingController: LoadingController,private router: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {
     this.userID = sessionStorage.getItem('userId')!;
     this.userType = sessionStorage.getItem('userType')!;
     if(this.userID=='' || this.userType==''){
      this.userID=localStorage.getItem('userId')?? '';
      this.userType= localStorage.removeItem('userType')??'';
      }

     this.router.queryParams.subscribe(params => {
       this.adsId = params['adsId'];
    });
   }

  ngOnInit() {
    this.fetchCities(); // Call fetchCities when the component initializes
    this.fetchMakes();
    this.fetchYears();
    this.fetchFeatures();
    this.fetchCarHire();
  }


  fetchCarHire() {
    // Fetch car sale data from the backend
    this.commercialservice.getCommercialHire().subscribe({
      next: (data) => {
        console.log('Fetched car data:', data);
        this.carSaleData = data; // Store fetched data in carData property
        this.filteredCarSaleData = this.carSaleData.filter((item: { commercial_vehicle_ad_hire_id: string; }) => item.commercial_vehicle_ad_hire_id === this.adsId);
        console.log('filter data : ', this.filteredCarSaleData);
        const imageUrls = this.getImageUrls(this.filteredCarSaleData[0]);
        this.visibleImages = new Array(imageUrls.length).fill(true);

        if (this.filteredCarSaleData.length > 0) {
          // Extract the car_name from the first item in the filtered array
          this.selectedcon= this.filteredCarSaleData[0].vehicle_condition;
          this.selectedCity= this.filteredCarSaleData[0].vehicle_city;
          this.divVisible = true;
          this.showcar = false;
          this.selectedMake = this.filteredCarSaleData[0].vehicle_make;
          this.makedivVisible = true;
          this.showmake = false;
          this.showmodel2 = true;
          this.fetchModels();
          this.selectedModel = this.filteredCarSaleData[0].vehicle_type;
          this.modeldivVisible = true;
          this.showmodel = false;
          this.showversion2 = true;
          this.fetchVersions();
          this.selectedVersion = this.filteredCarSaleData[0].vehicle_sub_type;
          this.versiondivVisible = true;
          this.showversion = false;
          this.selectedYear= this.filteredCarSaleData[0].vehicle_year;
          this.yeardivVisible = true;
          this.showyear = false;
          this.selectedregisterCity = this.filteredCarSaleData[0].vehicle_reg_city;
          this.registerdivVisible = true;
          this.showregister = false;
          this.carAdNormalFeature = this.filteredCarSaleData[0].vehicle_ad_normal_feature;
          this.price=this.filteredCarSaleData[0].vehicle_charges;
          this.selectedDuration = this.filteredCarSaleData[0].vehicle_about_charges;
          this.selectdriver = this.filteredCarSaleData[0].vehicle_about_drive;
          this.mileage = this.filteredCarSaleData[0].vehicle_mileage;
          this.selectedFuel = this.filteredCarSaleData[0].vehicle_fuel_type;
          //this.selectedColor = this.filteredCarSaleData[0].car_body_colour;
          //console.log('body color : ' , this.filteredCarSaleData[0].car_body_colour);
          this.selectColor(this.filteredCarSaleData[0].vehicle_body_colour);
          this.engineSize = this.filteredCarSaleData[0].vehicle_engine_size;
          this.selectedCategory = this.filteredCarSaleData[0].vehicle_body_type;
          this.selectedTransmission = this.filteredCarSaleData[0].vehicle_power_transmission;
          this.selectedDrive = this.filteredCarSaleData[0].vehicle_transmission;
          this.selectedDoors = this.filteredCarSaleData[0].vehicle_no_of_doors;
          //this.selectedFeatures = this.filteredCarSaleData[0].car_features;
          const carFeaturesString = this.filteredCarSaleData[0].vehicle_features;
          if (carFeaturesString) {
              try {
                  // Parse the JSON string into an array and store it in selectedFeatures
                  this.selectedFeatures = JSON.parse(carFeaturesString);
                  console.log('Selected Features:', this.selectedFeatures);
              } catch (error) {
                  console.error('Error parsing car features:', error);
              }
          } else {
              console.log('No car features found.');
          }
          Object.keys(this.filteredCarSaleData[0]).forEach(key => {
            if (key.startsWith('car_image')  && this.filteredCarSaleData[0][key] !== 'NULL') {
              this.oldfilesArray.push(this.filteredCarSaleData[0][key]);
            }
          });
          console.log('File Array : ',this.oldfilesArray);


      } else {
          console.log('No data found matching the filter criteria.');
      }

      },
      error: (error) => {
        console.error('Error fetching car data:', error);
      }
    });
  }

  // Function to mock fetching image URLs
 // Method to filter keys starting with 'imageURL'
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
  // This function is no longer necessary for hiding images directly.
  const removedFile = this.oldfilesArray.splice(index, 1);

        // Also remove the visibility status at the same index to keep both arrays in sync
        this.visibleImages.splice(index, 1);

        console.log('Close button clicked for image index:', index);
        console.log('Removed file:', removedFile[0]);
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
back(){
  history.back();
}
  hideDiv() {
    this.divVisible = false;
    this.showcar = true;
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
      }
    });
  }

// select make car
fetchMakes() {
  this.commercialservice.getMakes().subscribe({
    next: (data) => {
      this.makes = data;
      //console.log('Fetched makes:', data);
      // Initialize filteredMakes with all makes
      this.filteredMakes = [...this.makes];
    },
    error: (error) => {
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
  this.commercialservice.getModels().subscribe({
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


  this.commercialservice.getVersions(formData).subscribe({
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
      next: (data) => {
        //console.log('Received years data:', data);
        this.years = data;
        // Initialize filteredYears with all years
        this.filteredYears = [...this.years];
      },
      error: (error) => {
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
    next: (data) => {
      this.features = data;
      //console.log('Fetched makes:', data);
      // Initialize filteredMakes with all makes
      this.filteredFeatures = [...this.features];
    },
    error: (error) => {
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



aboutDriver(condition: string) {
  this.selectdriver = condition;
  console.log('Selected Condition:', condition);
}
updateDuration(duration: string) {
  this.selectedDuration = duration;
  console.log('Selected Duration:', duration);
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
  for (let i = 0; i < this.selectedFiles!.length; i++) {
    const file: File = this.selectedFiles![i];
    const reader = new FileReader();

    // Use a closure to capture the current file and reader
    reader.onload = ((selectedFile: File, fileReader: FileReader) => () => {
      const selectedImage = document.createElement('img');
      selectedImage.style.maxWidth = '100px';
      selectedImage.style.maxHeight = '100px';
      selectedImage.style.minWidth = '100px';
      selectedImage.style.minHeight = '100px';
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
        // Function to remove the image when the button is clicked
        imageContainer!.removeChild(imageDiv);
      };

      // Append the image and button to the div
      imageDiv.appendChild(selectedImage);
      imageDiv.appendChild(removeButton);

      // Append the div to the image container
      imageContainer!.appendChild(imageDiv);
      imageContainer!.style.display = 'block';
    })(file, reader);

    reader.readAsDataURL(file);
  }
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < this.selectedFiles!.length; i++) {
    this.filesArray.push(this.selectedFiles![i]);
  }
  console.log('Files array:', this.filesArray);

}


async updateAd() {
  console.log('Button clicked! Printing to console.');
  console.log('city.', this.selectedCity);
  console.log('make.', this.selectedMake);
  console.log('year.', this.selectedYear);
  console.log('register.', this.selectedregisterCity);
  console.log('Price:', this.price);
  console.log('Mileage:', this.mileage);
  console.log('Engine size:', this.engineSize);
  console.log('fuel.', this.selectedFuel);
  console.log('Drive.', this.selectedDrive);
  console.log('Door.', this.selectedDoors);
  console.log('Transmission.', this.selectedTransmission);
  console.log('Category.', this.selectedCategory);
  console.log('Color.', this.selectedColor);
  console.log('Selected features:', this.selectedFeatures);
console.log('adsid',this.adsId);
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
    adsID: this.adsId,
    oldfilesArray: this.oldfilesArray,
    make: this.selectedMake,
    model: this.selectedModel,
    version: this.selectedVersion,
    year: this.selectedYear,
    price: this.price,
    mileage: this.mileage,
    engineSize: this.engineSize,
    fuel: this.selectedFuel,
    drive: this.selectedDrive,
    doors: this.selectedDoors,
    transmission: this.selectedTransmission,
    category: this.selectedCategory,
    color: this.selectedColor,
    features: this.selectedFeatures,
    description: description, // Add the description value
    change: this.selectedcon,
    selectDriver: this.selectdriver,
    duration: this.selectedDuration,
    loginUser: this.userID,
    loginUserType: this.userType,
    carAdNormalFeature: this.carAdNormalFeature
  };

  // Create a FormData object to append all user data and files
  const formData = new FormData();

  // Append user data to the FormData object
  Object.entries(userData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // If the value is an array, stringify it and append as a single string
      formData.append(key, JSON.stringify(value));
    } else {
      // Otherwise, append the value directly
      formData.append(key, value);
    }
  });

  // Append selected files to FormData only if new files are selected
  if (this.filesArray.length > 0) {
    this.filesArray.forEach(file => {
      formData.append('images[]', file, file.name);
    });
  } else {
    console.log('No new files selected. Updating existing data only.');
  }

  // Show loading spinner
  const loading = await this.loadingController.create({
    message: 'Updating your ad...',
    spinner: 'circles',
  });
  await loading.present();

  // Make the API request to update the ad
  try {
    const response = await this.commercialservice.commercoalHireUpdate(formData).toPromise();
    console.log('Data saved successfully:', response);
    this.presentSuccessAlert(); // Display success message after the update
  } catch (error) {
    console.error('Error saving data:', error);
    // Optionally, handle the error (e.g., show an error message)
  } finally {
    // Dismiss the loading spinner after the request finishes
    loading.dismiss();
  }
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
  showModal = -1;

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
    const alert = await this.alertcontroler.create({
      header: 'Success',
      message: 'Your Post has been Updated successfully.',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Navigate back to the previous page
            this.route.navigateByUrl('/my-vehicles', { skipLocationChange: true }).then(() => {
              this.route.navigate([this.router.url]);
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
