import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, AlertController, LoadingController } from '@ionic/angular';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-update-machinery-sale',
  templateUrl: './update-machinery-sale.page.html',
  styleUrls: ['./update-machinery-sale.page.scss'],
  standalone:false,
})
export class UpdateMachinerySalePage implements OnInit {

  
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
  items: string[] = []; // Assuming you have an array of items
  isItemAvailable: boolean = false;
  selected_looking_for: string = ''; // Assuming this is a string
  showModal: number = -1;






 


// eslint-disable-next-line @typescript-eslint/naming-convention

  // constructor() { }

  // ngOnInit() {
  // }
selectedFiles: FileList | null = null; // Initialize selectedFiles variable
selectedFileArray: FileList | null = null;
selectedCountry: string = '';
filteredCountries: string[] = [];
   filesArray: File[] = [];
  weight!: string;
  serialno!: string;
  price!: string;
  hourused!: string;
originalContent = '';
  filteredCities: string[] = [];
  filteredMakes: string[] = [];
  filteredModels: string[] = [];
  filteredVersions: string[] = [];
  filteredYears: string[] = [];
  filteredFeatures: string[] = [];
  selectedFeatures: string[] = [];
  countries: string[] = [];
  selectedCity = '';
  selectedMake = '';
  selectedModel = '';
  selectedVersion = '';
  selectedYear = '';
  selectedregisterCity = '';
  selectedfeature = '';
  divVisible = false; // Initialize divVisible to false
  makedivVisible = false;
  modeldivVisible = false;
  versiondivVisible = false;
  yeardivVisible = false;
  registerdivVisible = false;
  showmake = true;
  divcountry=false;
  showcountry= true;
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
  selectedFuel = ''; // Initialize selectedFuel variabl
  selectedTransmission = ''; // Initialize selectedTransmission variable
  selectedDrive = ''; // Initialize selectedDrive variable
  selectedDoors = ''; // Initialize selectedDoors variable
  selectedCategory = ''; // Initialize selectedCategory variable
  selectedColor = '';
  selectedcon = '';
  fileName = '';
  
  selectedFile!: File;
  userID='';
  userType='';
  adsId='';
  carAdNormalFeature='';
  carSaleData: any = [];
  oldfilesArray: any = [];
  @Input() filteredCarSaleData: any[] = []; // Input property to receive filteredCarSaleData
  selectedImageSrc = ''; // Property to hold the URL of the selected image
  visibleImages: boolean[] = [];

  // Function to show selected image

  @ViewChild('imageContainer')
  imageContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('selectedImage')
  selectedImage!: ElementRef<HTMLImageElement>;


  constructor(public route: Router, private popoverController: PopoverController, private userService: UserService,private machineryservice:MachineryService, private alercontroler:AlertController,  private loadingController: LoadingController,
     private router: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {
      this.userID = sessionStorage.getItem('userId') || '';  // Default to empty string if null
      this.userType = sessionStorage.getItem('userType') || '';  // Default to empty string if null
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
    this.fetchCarSale();
    this.fetchCountries();
      // Initialize visibility states for each image

  }
  back() {
    this.route.navigate(['/machinery-you-posted']);
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
  this.filterCountries({ target: { value: '' } });
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
  hideDivcountry() {
    this.divcountry = false;
    this.showcountry = true;
  }
  fetchCarSale() {
    // Fetch car sale data from the backend
    this.machineryservice.getMachinerySale().subscribe({
      next: (data) => {
        console.log('Fetched car data:', data);
        this.carSaleData = data; // Store fetched data in carData property
        this.filteredCarSaleData = this.carSaleData.filter((item: { machinery_ad_sale_id: string; }) => item.machinery_ad_sale_id === this.adsId);
        console.log('filter data : ', this.filteredCarSaleData);
        const imageUrls = this.getImageUrls(this.filteredCarSaleData[0]);
        this.visibleImages = new Array(imageUrls.length).fill(true);

        if (this.filteredCarSaleData.length > 0) {
          // Extract the car_name from the first item in the filtered array
          this.selectedcon= this.filteredCarSaleData[0].condition_machinery;
          this.selectedCity= this.filteredCarSaleData[0].city;
          this.divVisible = true;
          this.showcar = false;
          this.selectedMake = this.filteredCarSaleData[0].make;
          this.makedivVisible = true;
          this.showmake = false;
          this.showmodel2 = true;
          this.divcountry=true;
           this.showcountry= false;
          this.fetchModels();
          this.selectedModel = this.filteredCarSaleData[0].type;
          this.modeldivVisible = true;
          this.showmodel = false;
          this.showversion2 = true;
          this.fetchVersions();
          this.selectedVersion = this.filteredCarSaleData[0].subtype;
          this.versiondivVisible = true;
          this.showversion = false;
          this.selectedYear= this.filteredCarSaleData[0].year;
          this.yeardivVisible = true;
          this.showyear = false;
          this.selectedregisterCity = this.filteredCarSaleData[0].reg_city;
          this.registerdivVisible = true;
          this.showregister = false;
          this.price=this.filteredCarSaleData[0].price;
          this.hourused= this.filteredCarSaleData[0].hourused;
          this.selectedFuel = this.filteredCarSaleData[0].fueltype;
          //this.selectedColor = this.filteredCarSaleData[0].car_body_colour;
          //console.log('body color : ' , this.filteredCarSaleData[0].car_body_colour);
          this.selectColor(this.filteredCarSaleData[0].color);
          this.weight = this.filteredCarSaleData[0].weight;
          this.serialno = this.filteredCarSaleData[0].serialno;
          this.selectedCountry=this.filteredCarSaleData[0].country;
          this.selectedCategory = this.filteredCarSaleData[0].vehicle_body_type;
          this.selectedTransmission = this.filteredCarSaleData[0].vehicle_power_transmission;
          this.selectedDrive = this.filteredCarSaleData[0].vehicle_transmission;
          this.carAdNormalFeature = this.filteredCarSaleData[0].normal_feature;
          this.selectedDoors = this.filteredCarSaleData[0].doors;
          //this.selectedFeatures = this.filteredCarSaleData[0].car_features;
          const carFeaturesString = this.filteredCarSaleData[0].features;
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
    this.machineryservice.getMakes().subscribe({
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
    this.machineryservice.getModels().subscribe({
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


    this.machineryservice.getVersions(formData).subscribe({
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

onFileSelected(event: any) {
  this.selectedFiles = event.target.files;

  // Safe check if imageContainer exists
  const imageContainer = document.getElementById('imageContainer');
  const addmoreContainer = document.getElementById('addmoreContainer');

  // Hide addmoreContainer if it exists
  if (addmoreContainer) {
    addmoreContainer.style.display = 'none';
    console.log('file removed');
  }

  // Check if selectedFiles is not null before iterating over it
  if (this.selectedFiles && this.selectedFiles.length > 0) {
    // Iterate over each selected file
    for (let i = 0; i < this.selectedFiles.length; i++) {
      const file: File = this.selectedFiles[i];
      const reader = new FileReader();

      // Use closure to capture the current file and reader
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
        removeButton.innerHTML = '<img src="../../../assets/cross.webp" style="height: 20px; width: 20px; margin-left: 0px; margin-top: 0px;" fill="clear;"/>';
        removeButton.style.position = 'absolute';
        removeButton.style.top = '5px';
        removeButton.style.right = '5px';
        removeButton.onclick = () => {
          // Function to remove the image when the button is clicked
          if (imageContainer) {
            imageContainer.removeChild(imageDiv);
            console.log('remove image');
            const imageIndex = Array.from(imageContainer.children).indexOf(imageDiv);

            if (imageIndex !== -1) {
              // Remove the corresponding file from filesArray
              this.filesArray.splice(imageIndex, 1);
              console.log('Removed file from filesArray:', this.filesArray);
            } else {
              console.warn('Image index not found in imageContainer.');
            }
          }
        };

        // Append the image and button to the div
        imageDiv.appendChild(selectedImage);
        imageDiv.appendChild(removeButton);

        // Append the div to the image container if it exists
        if (imageContainer) {
          imageContainer.appendChild(imageDiv);
          imageContainer.style.display = 'block';
        }
      })(file, reader);

      reader.readAsDataURL(file);
    }

    // Add selected files to filesArray
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.filesArray.push(this.selectedFiles[i]);
    }

    console.log('Files array:', this.filesArray);
  }
}






async updateAd() {
 

  const descriptionTextarea = document.getElementById('description') as HTMLTextAreaElement;
  let description = '';
  // Check if the element exists
  if (descriptionTextarea) {
    // Get the value of the textarea
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
    register: this.selectedregisterCity,
    price: this.price,
    hourused: this.hourused,
    weight: this.weight,
    serialno:this.serialno,
    fuel: this.selectedFuel,
    drive: this.selectedDrive,
    doors: this.selectedDoors,
    transmission: this.selectedTransmission,
    category: this.selectedCategory,
    color: this.selectedColor,
    features: this.selectedFeatures,
    fileName: this.fileName,
    discription: description,
    change: this.selectedcon,
    loginUser: this.userID,
    loginUserType: this.userType,
    carAdNormalFeature: this.carAdNormalFeature,
    country:this.selectedCountry,
  };

  const formData = new FormData();

  const filesList = new DataTransfer();
  for (const file of this.filesArray) {
    filesList.items.add(file);
  }

  // Initialize an array to store file names
  const fileNames = [];
  for (const file of this.filesArray) {
    const fileName = file.name;
    fileNames.push(fileName);
  }

  console.log(fileNames);

  // Append user data to the FormData object
  for (const [key, value] of Object.entries(userData)) {
    if (Array.isArray(value)) {
      // If the value is an array, stringify it and append as a single string
      formData.append(key, JSON.stringify(value));
    } else {
      // Otherwise, append the value directly
      formData.append(key, value);
    }
  }

  // Append each file to the FormData object
  for (let i = 0; i < this.filesArray.length; i++) {
    formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
  }

  // Show loading spinner
  const loading = await this.loadingController.create({
    message: 'Updating your ad...',
    spinner: 'circles',
  });
  await loading.present();

  try {
    // Make the API request and wait for the response
    const response = await this.machineryservice.machinerySaleUpdate(formData).toPromise();
    console.log('Data saved successfully:', response);
    this.presentSuccessAlert(); // Display success message
  } catch (error) {
    console.error('Error saving data:', error);
    // Optionally handle error (e.g., show an alert or message)
  } finally {
    // Hide the loading spinner after the request completes
    loading.dismiss();
  }
}



getItems(ev: any) {
  // Get the value from the input
  const val = ev.target.value;

  // Ensure val is a string and not empty or whitespace
  if (val && typeof val === 'string' && val.trim() !== '') {
      this.isItemAvailable = true;
      // Filter items to match the search term, ensuring items are strings
      this.items = this.items.filter((item) => {
          if (typeof item === 'string') {
              return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
          }
          return false; // Skip non-string items
      });
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
    const alert = await this.alercontroler.create({
      header: 'Success',
      message: 'Your Post has been Updated successfully.',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Navigate back to the previous page
            this.route.navigateByUrl('/machinery-you-posted', { skipLocationChange: true }).then(() => {
              this.route.navigate([this.router.url]);
            });
            
          }
        }
      ]
    });

    await alert.present();
  }
}
