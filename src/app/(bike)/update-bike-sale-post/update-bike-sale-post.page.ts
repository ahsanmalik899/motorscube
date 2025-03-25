import { BikeService } from 'src/app/(services)/bike.service';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, AlertController, LoadingController } from '@ionic/angular';
import { UserService } from '../../(services)/user.service';

@Component({
  selector: 'app-update-bike-sale-post',
  templateUrl: './update-bike-sale-post.page.html',
  styleUrls: ['./update-bike-sale-post.page.scss'],
  standalone:false,
})
export class UpdateBikeSalePostPage implements OnInit {

  back() {
    history.back();
    }
      
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
    
       filesArray: File[] = [];
      engineSize!: string;
      price!: string;
      mileage!: string;
    originalContent = '';
      filteredCities: string[] = [];
      filteredMakes: string[] = [];
      filteredModels: string[] = [];
      filteredVersions: string[] = [];
      filteredYears: string[] = [];
      filteredFeatures: string[] = [];
      selectedFeatures: string[] = [];
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
    
    
      constructor(public route: Router,private bikeService:BikeService, private popoverController: PopoverController, private userService: UserService, private alercontroler:AlertController,  private loadingController: LoadingController,
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
          // Initialize visibility states for each image
    
      }
    
      fetchCarSale() {
        this.bikeService.getBikeSale().subscribe({
          next: (data) => {
            console.log('Fetched bike data:', data);
            this.carSaleData = data;
            this.filteredCarSaleData = this.carSaleData.filter((item: { bike_ad_sale_id: string; }) => item.bike_ad_sale_id === this.adsId);
            console.log('filter data : ', this.filteredCarSaleData);
    
            const imageUrls = this.getImageUrls(this.filteredCarSaleData[0]);
            this.visibleImages = new Array(imageUrls.length).fill(true);
    
            if (this.filteredCarSaleData.length > 0) {
              this.selectedcon = this.filteredCarSaleData[0].bike_condition;
              this.selectedCity = this.filteredCarSaleData[0].bike_ad_location;
              this.divVisible = true;
              this.showcar = false;
              this.selectedMake = this.filteredCarSaleData[0].bike_ad_make;
              this.makedivVisible = true;
              this.showmake = false;
              this.showmodel2 = true;
              this.fetchModels();
              this.selectedModel = this.filteredCarSaleData[0].bike_ad_model;
              this.modeldivVisible = true;
              this.showmodel = false;
              this.showversion2 = true;
              this.fetchVersions();
              this.selectedVersion = this.filteredCarSaleData[0].bike_version;
              this.versiondivVisible = true;
              this.showversion = false;
              this.selectedYear = this.filteredCarSaleData[0].bike_ad_year;
              this.yeardivVisible = true;
              this.showyear = false;
              this.selectedregisterCity = this.filteredCarSaleData[0].bike_ad_reg_city;
              this.registerdivVisible = true;
              this.showregister = false;
              this.price = this.filteredCarSaleData[0].bike_ad_price;
              this.mileage = this.filteredCarSaleData[0].bike_ad_mileage;
              this.selectedFuel = this.filteredCarSaleData[0].bike_ad_fuel_type;
              this.selectColor(this.filteredCarSaleData[0].bike_ad_colour);
              this.engineSize = this.filteredCarSaleData[0].bike_ad_engine_type;
              this.selectedCategory = this.filteredCarSaleData[0].bike_ad_bodytype;
              this.selectedDrive = this.filteredCarSaleData[0].bike_ad_ignition;
              this.carAdNormalFeature = this.filteredCarSaleData[0].bike_ad_normal_feature;
              this.selectedTransmission= this.filteredCarSaleData[0].bike_ad_ignition;
      
              const bikeFeaturesString = this.filteredCarSaleData[0].bike_features;
              if (bikeFeaturesString) {
                try {
                  this.selectedFeatures = JSON.parse(bikeFeaturesString);
                  console.log('Selected Features:', this.selectedFeatures);
                } catch (error) {
                  console.error('Error parsing bike features:', error);
                }
              } else {
                console.log('No bike features found.');
              }
    
              // Handle bike images
              Object.keys(this.filteredCarSaleData[0]).forEach(key => {
                if (key.startsWith('bike_image') && this.filteredCarSaleData[0][key] !== '') {
                  this.oldfilesArray.push(this.filteredCarSaleData[0][key]);
                }
              });
              console.log('File Array : ', this.oldfilesArray);
            } else {
              console.log('No data found matching the filter criteria.');
            }
          },
          error: (error) => {
            console.error('Error fetching bike data:', error);
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
        this.userService.getMakes().subscribe({
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
        this.userService.getModels(formData).subscribe({
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
    
    
        this.userService.getVersions(formData).subscribe({
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
      if (descriptionTextarea) {
        description = descriptionTextarea.value;
        console.log('Description:', description);
      } else {
        console.error('Textarea element not found');
      }
    
      const userData = {
        ad_for: 'Bike Sale',
        bike_ad_location: this.selectedCity,
        adsID: this.adsId,
        oldfilesArray: this.oldfilesArray,
        bike_ad_make: this.selectedMake,
        bike_ad_model: this.selectedModel,
        bike_version: this.selectedVersion,
        bike_ad_year: this.selectedYear,
        bike_ad_reg_city: this.selectedregisterCity,
        bike_ad_price: this.price,
        bike_ad_mileage: this.mileage,
        bike_ad_engine_type: this.engineSize,
        bike_ad_fuel_type: this.selectedFuel,
        bike_ad_ignition: this.selectedDrive,
        bike_ad_colour: this.selectedColor,
        bike_ad_bodytype: this.selectedCategory,
        bike_features: this.selectedFeatures,
        bike_condition: this.selectedcon,
        bike_ad_description: description,
        loginUser: this.userID,
        loginUserType: this.userType,
        bike_ad_normal_feature: this.carAdNormalFeature
      };
    
      const formData = new FormData();
    
      const filesList = new DataTransfer();
      for (const file of this.filesArray) {
        filesList.items.add(file);
      }
    
      const fileNames = [];
      for (const file of this.filesArray) {
        const fileName = file.name;
        fileNames.push(fileName);
      }
    
      console.log(fileNames);
    
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
    
      const loading = await this.loadingController.create({
        message: 'Updating your ad...',
        spinner: 'circles',
      });
      await loading.present();
    
      try {
        const response = await this.userService.carSaleUpdate(formData).toPromise();
        console.log('Data saved successfully:', response);
        this.presentSuccessAlert();
      } catch (error) {
        console.error('Error saving data:', error);
      } finally {
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
                this.route.navigateByUrl('/my-car-ads', { skipLocationChange: true }).then(() => {
                  this.route.navigate([this.router.url]);
                });
                
              }
            }
          ]
        });
    
        await alert.present();
      }
    }
    
