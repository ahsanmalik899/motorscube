import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides, PopoverController } from '@ionic/angular';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { UserService } from 'src/app/(services)/user.service';
interface MakeModelVersion {
  make: string;
  models: { model: string; versions: string[] }[];  // Make sure versions is typed as string[]
}
@Component({
  selector: 'app-vehicle-sale-filter',
  templateUrl: './vehicle-sale-filter.page.html',
  styleUrls: ['./vehicle-sale-filter.page.scss'],
  standalone:false,
})
export class VehicleSaleFilterPage implements OnInit {


  slideOpts = {
    initialSlide: 0,  
    speed: 400,      
    pager: true,    
    loop: true,       
    autoplay: true    
  };
  categories = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
    pagination: { clickable: true },
  };
  swiperModules = [IonicSlides];
  isItemAvailable = false;
items = [];

options = {
  centeredSlides: true,
  slidesPerView: 3.5,
  spaceBetween: -30,
};
categorie = {
  slidesPerView: 3.0,
};
filteredCombinedModelVersions: string[] = [];

  // Store the selected model-version combination
  selectedModelVersion: string = '';

  // Store the search term
  searchTerm: string = '';
makes: string[] = [];  // Holds all makes from the service
  filteredMakes: string[] = [];  // Holds filtered makes based on search input
  selectedMake: string = '';  // Store selected make
  mergecararray: string[] = [];  // Holds selected makes for display in the div
  makedivVisible: boolean = false;  // Controls visibility of the selected makes div

models: string[] = [];
versions: string[] = [];
filteredMakesModels: string[] = [];
allMakesData: MakeModelVersion[] = [];  // Holds all makes, models, and versions data
selectedModel: string = '';
selectedVersion: string = '';
showmake: boolean = false;
selectedLowYear: string = '';  // Default low year
selectedHighYear: string = ''; // Default high year
filteredModels: string[] = [];
filteredVersions: string[] = [];
selectedValues: string[] = [];
selectedmakearray: string[] = [];
selectedmodelarray: string[] = [];
selectedversionarray: string[] = [];
// Assuming 'years' is an array of year values from your service
years: string[] = []; // This will hold the years fetched from the API or your predefined list
filteredLowYears: string[] = [];
filteredHighYears: string[] = [];
selected_looking_for: any;
selectedFiles: FileList | null = null; 
selectedFileArray: FileList | null = null;

   filesArray: File[] = [];
  engineSize: string | undefined;
  price!: string;
  mileage: string | undefined;
  selectedLowPrice: string = '';  // Low price selected by user
  selectedHighPrice: string = ''; // High price selected by user
  highPriceOptions: string[] = [];
originalContent = '';
  filteredCities: string[] = [];
  filteredYears: string[] = [];
  filteredFeatures: string[] = [];
  selectedFeatures: string[] = [];
  selectedCity: string[] = [];
  selectedYear = '';
  selectedregisterCity = '';
  selectedfeature = '';
  divVisible = false; 
  modeldivVisible = false;
  versiondivVisible = false;
  yeardivVisible = false;
  registerdivVisible = false;
  showversion = true;
  showversion2 = false;
  showmodel = false;
  showmodel2 = false;
  showcar = true;
  showyear = true;  // Versions associated with the selected model
  combinedModelVersions: string[] = [];  // Combined models and versions for search
  selectedMakesModels: any[] = [];  // Array of selected makes, models, and versions  // Flag to show selected makes section
  showregister = true;
  showfeature = true;
  cities: string[] = [];
  features: string[] = [];
  selectedFuel: string[] = []; 
  selectedTransmission: string[] = []; 
  selectedDrive = ''; 
  selectedDoors: string[] = []; 
  selectedCategory = ''; 
  selectedColor = '';
  selectedcon: string[] = [];
  fileName = '';
  selectedFile: File | undefined;
  selectedSellerType: string;
selectedLowMilage: string;
selectedHighMilage: string;
lowMilages: string[] = ['1 ','100 ', '1000 ', '10000 ', '100000 ', '1000000 ', '10000000 ']; 
filteredHighMilages: string[] = []; 
engineSizes: number[] = [100, 500, 1000, 2000, 5000, 10000];
  selectedEngineLowSize: string;
  selectedEngineHighSize: string;
  filteredHighEngineSizes: string[];
  selectedValuesString = '';
  constructor(public route: Router,private cdRef: ChangeDetectorRef, private popoverController: PopoverController, private userService: UserService,private commrcialservice:CommercialService) {
    this.filteredHighEngineSizes = this.engineSizes.map(size => size.toString());
  this.selectedMake = localStorage.getItem('selectedmake') || '';
  this.selectedModel = localStorage.getItem('selectedmodel') || '';
  this.selectedVersion = localStorage.getItem('selectedversion') || '';
  this.selectedLowPrice= localStorage.getItem('lowprice') || '';
  this.selectedHighPrice = localStorage.getItem('highprice') || '';
  this.selectedLowYear= localStorage.getItem('lowyear') || '1950';
  this.selectedHighYear = localStorage.getItem('highyear') || '2025';
  this.selectedLowMilage= localStorage.getItem('lowmilage') || '';
  this.selectedHighMilage = localStorage.getItem('highmilage') || '';
  this.selectedCategory = localStorage.getItem('selectedCategory') || '';
  this.selectedColor = localStorage.getItem('selectedColor') || '';
  this.selectedSellerType = localStorage.getItem('selectedSellerType') || '';
  this.selectedEngineHighSize = localStorage.getItem('highengine') || '';
  this.selectedEngineLowSize = localStorage.getItem('lowengine') || '';
  this.makedivVisible = !!this.selectedMake;
  this.showversion2 = !!this.selectedModel;
  this.modeldivVisible = !!this.selectedModel;
  this.versiondivVisible = !!this.selectedVersion;
  this.selectedCity = this.getStoredArray('selectedCity');
  this.divVisible = !!this.selectedCity.length; 
  this.selectedLowYear = localStorage.getItem('selectedLowYear') || '';
  this.selectedHighYear = localStorage.getItem('selectedHighYear') || '';
  this.selectedModel= localStorage.getItem('selectedmodel') || '';
  this.selectedMake=localStorage.getItem('selectedmake') || '';
  
  }
  ngOnInit() {
    this.fetchCities();

    this.fetchYears();
    this.updateHighPriceOptions();
    this.updateHighYearOptions();  
    this.updateHighMilageOptions();
    this.fetchMakes();
    this.loadSelectedModelsversion();
    this.loadSelectedMakes();
    this.fetchModelsAndVersions(this.selectedMake);
    this.selectedMake = this.getStoredValue('selectedmake');
    this.selectedModel = this.getStoredValue('selectedmodel');
    this.selectedVersion = this.getStoredValue('selectedversion');
    this.selectedLowPrice = this.getStoredValue('lowprice');
    this.selectedHighPrice = this.getStoredValue('highprice');
    this.selectedLowYear = this.getStoredValue('lowyear', '');
    this.selectedHighYear = this.getStoredValue('highyear', '');
    this.selectedLowMilage = this.getStoredValue('lowmilage');
    this.selectedHighMilage = this.getStoredValue('highmilage');
    this.selectedCategory = this.getStoredValue('selectedCategory');
    this.selectedColor = this.getStoredValue('selectedColor');
    this.selectedSellerType = this.getStoredValue('selectedSellerType');
    this.selectedEngineHighSize = this.getStoredValue('highengine');
    this.selectedEngineLowSize = this.getStoredValue('lowengine');
    this.selectedModelVersion= this.getStoredValue('selectedmodelversion');
    // Set visibility flags based on selected values
    this.updateVisibilityFlags();
  }
  
  ionViewWillEnter() {
    // Ensure selected values are properly fetched again on view enter
    this.selectedcon = this.getStoredArray('selectedcon');
    this.selectedFuel = this.getStoredArray('selectedFuel');
    this.selectedTransmission = this.getStoredArray('selectedTransmission');
    this.selectedDoors = this.getStoredArray('selectedDoors');
    this.selectedDrive = this.getStoredValue('selectedDrive');
    
    // Reapply visibility flags
    this.updateVisibilityFlags();
  }
  
  getStoredValue(key: string, defaultValue: string = ''): string {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
  }
  
  getStoredArray(key: string): any[] {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  }
  
  updateVisibilityFlags() {
    this.divVisible = !!this.selectedCity;
    this.showmodel2 = !!this.selectedModelVersion;
    this.makedivVisible = !!this.selectedMake;
    this.showversion2 = !!this.selectedModel;
    this.modeldivVisible = !!this.selectedModel;
    this.versiondivVisible = !!this.selectedVersion;
    this.showmake=!!this.selectedMake;
  }
   
   onFileSelected(event: any) {
  const file = event.target.files[0];  // Assuming single file selection
  if (file) {
    this.fileName = file.name;
  }
}

      updateHighEngineSizes() {
    if (this.selectedEngineLowSize === '10000') {
      this.filteredHighEngineSizes = this.engineSizes.map(size => size.toString());
    } else {
      const start = parseInt(this.selectedEngineLowSize, 10);
      this.filteredHighEngineSizes = [];
      for (let i = start; i <= 100000; i += 1000) { // Assuming the maximum value is 100000
        this.filteredHighEngineSizes.push(i.toString());
      }
    }
    if (parseInt(this.selectedEngineHighSize, 10) <= parseInt(this.selectedEngineLowSize, 10)) {
      this.selectedEngineHighSize = "";
    }
    }
  selectedcondition(conitionType: string) {
    const index = this.selectedcon.indexOf(conitionType);
    if (index === -1) {
      this.selectedcon.push(conitionType);
    } else {      this.selectedcon.splice(index, 1);
    }
  }
  filterCities(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter(city => city.toLowerCase().includes(searchTerm));
  }
  async selectCity(city: string) {
    this.divVisible = true;
    if (!this.selectedCity.includes(city)) {
      this.selectedCity.push(city);
            await this.popoverController.dismiss(city);
      this.filterCities({ target: { value: '' } });
    }  }
  hideDiv(city: string) {
      this.showcar = true;
    const index = this.selectedCity.indexOf(city); 
    if (index !== -1) {
      this.selectedCity.splice(index, 1); 
    }
  }  
  

   
  integrateVersionsIntoMakes() {
    this.filteredMakes = [];
    this.filteredMakes.push(this.selectedMake);
    this.filteredModels.forEach(model => {
      this.filteredMakes.push(`-- ${model}`);
      this.versions.forEach(version => {
        this.filteredMakes.push(`---- ${version}`);
      });
    });
  }
 
     versionDiv() {
    this.versiondivVisible = false;
    this.showversion = true;
  }   fetchCities() {    this.userService.getCities().subscribe({
      next: (data: string[]) => {
        this.cities = data;
        this.filteredCities = [...this.cities]; },
      error: (error: any) => {
        console.error('Error fetching cities:', error);
      }
    });
  }

selectFuel(fuelType: string) {
  const index = this.selectedFuel.indexOf(fuelType);
  if (index === -1) {    this.selectedFuel.push(fuelType);
  } else {    this.selectedFuel.splice(index, 1);
  } localStorage.setItem('selectedFuel', JSON.stringify(this.selectedFuel));}
selectCategory(category: string) {  this.selectedCategory = category;  }
selectTransmission(transmissionType: string) {
  const index = this.selectedTransmission.indexOf(transmissionType);
  if (index === -1) {    this.selectedTransmission.push(transmissionType);
  } else {    this.selectedTransmission.splice(index, 1);
  }
}selectColor(color: string) {
  this.selectedColor = color;  }
selectDoors(doorNumber: string) {
  const index = this.selectedDoors.indexOf(doorNumber);
  if (index === -1) {    this.selectedDoors.push(doorNumber);
  } else {    this.selectedDoors.splice(index, 1);
  }}

  updateFilteredHighYears() {
    const startYear = parseInt(this.selectedLowYear, 10);
   
  
    this.filteredHighYears = this.years
      .filter(year => parseInt(year, 10) >= startYear)
      .sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
    
 
  
    if (!this.filteredHighYears.includes(this.selectedHighYear)) {
   
      this.selectedHighYear = this.filteredHighYears[0]; // Select the latest year first
    }
  }
  selectSellerType(sellerType: string) {
    // Toggle the selection: if it's the same as the current selection, unselect it
    if (this.selectedSellerType === sellerType) {
      this.selectedSellerType = '';  // Unselect if the same option is clicked
      localStorage.removeItem('selectedSellerType');  // Remove from localStorage if unselected
    } else {
      this.selectedSellerType = sellerType;  // Select the new option
      localStorage.setItem('selectedSellerType', this.selectedSellerType);  // Save to localStorage
    }
  }
  updateHighPriceOptions() {
    const lowPrice = parseInt(this.selectedLowPrice, 10);
    this.highPriceOptions = lowPrice === 100000 ? 
      ['100000', '500000', '600000', '700000', '800000', '900000', '1000000'] :
      Array.from({length: Math.floor((500000000 - lowPrice) / 1000000)}, (_, i) => (lowPrice + (i + 1) * 1000000).toString());
      
    if (!this.highPriceOptions.includes(this.selectedHighPrice)) {
      this.selectedHighPrice = this.highPriceOptions[0];
    }
  }
  

updateHighMilageOptions() {
  const startMilage = parseInt(this.selectedLowMilage.replace(/\D/g,''), 10); 
  this.filteredHighMilages = this.lowMilages.filter(milage => parseInt(milage.replace(/\D/g,''), 10) >= startMilage);
  if (parseInt(this.selectedHighMilage.replace(/\D/g,''), 10) < startMilage) {
    this.selectedHighMilage = this.filteredHighMilages[0]; }
} modal(){
  this.route.navigate(['Modal']);
  }
  showModal = -1;
  show(index: number){
  this.showModal = index;
  }close(){
  this.showModal = -1;
  }select(){
  this.showModal = -1;
  }  city(val: any): void{
  this.selected_looking_for = val;
  this.route.navigate(['addproject']);
  }  back(){
    window.history.back();
  }  
  resetAll() {
    // Clear specific items from localStorage
    localStorage.removeItem('selectedcon');
    localStorage.removeItem('selectedcity');
    localStorage.removeItem('selectedmake');
    localStorage.removeItem('selectedmodel');
    localStorage.removeItem('selectedversion');
    localStorage.removeItem('lowprice');
    localStorage.removeItem('highprice');
    localStorage.removeItem('lowyear');
    localStorage.removeItem('highyear');
    localStorage.removeItem('lowmilage');
    localStorage.removeItem('highmilage');
    localStorage.removeItem('selectedCategory');
    localStorage.removeItem('selectedColor');
    localStorage.removeItem('selectedSellerType');
    localStorage.removeItem('highengine');
    localStorage.removeItem('lowengine');
    localStorage.removeItem('selectedmodelversion');
    // Reset selected filters
    this.selectedcon = [];
    this.selectedCity = [];
    this.selectedmakearray = [];
    this.selectedmodelarray = [];
    this.selectedversionarray = [];
    this.mergecararray = [];
    this.selectedLowPrice = '';
    this.selectedHighPrice = '';
    this.selectedLowYear = '';
    this.selectedHighYear = '';
    this.selectedModelVersion='';
    this.selectedLowMilage = '';
    this.selectedHighMilage = '';
    this.selectedCategory = '';
    this.selectedFuel = [];
    this.selectedTransmission = [];
    this.selectedColor = '';
    this.selectedDoors = [];
    this.selectedEngineLowSize = '';
    this.selectedEngineHighSize = '';
    this.selectedSellerType = '';
    this.showmodel2 = false;
    this.showmodel = false;
    this.makedivVisible = false;
    this.showversion2 = false;
    this.modeldivVisible = false;
    this.versiondivVisible = false;
    this.divVisible = false;
    this.selectedMake='';
     this.selectedModel='';
    
  }
  
  getcitylist() {
   
      }
     
      
      search() {
        // Store filter values in localStorage
        localStorage.setItem('selectedLowYear', this.selectedLowYear);
        localStorage.setItem('selectedHighYear', this.selectedHighYear);
        localStorage.setItem('selectedCity', JSON.stringify(this.selectedCity));
        localStorage.setItem('selectedcon', JSON.stringify(this.selectedcon));
        localStorage.setItem('selectedmake', this.selectedMake);
        localStorage.setItem('selectedmodelversion', this.selectedModelVersion);
        localStorage.setItem('lowprice', this.selectedLowPrice);
        localStorage.setItem('highprice', this.selectedHighPrice);
        localStorage.setItem('lowyear', this.selectedLowYear);
        localStorage.setItem('highyear', this.selectedHighYear);
        localStorage.setItem('lowmilage', this.selectedLowMilage);
        localStorage.setItem('highmilage', this.selectedHighMilage);
        localStorage.setItem('selectedCategory', this.selectedCategory);
        localStorage.setItem('selectedColor', this.selectedColor);
        localStorage.setItem('selectedSellerType', this.selectedSellerType);
        localStorage.setItem('highengine', this.selectedEngineHighSize);
        localStorage.setItem('lowengine', this.selectedEngineLowSize);
        localStorage.setItem('selectedFuel', JSON.stringify(this.selectedFuel));
        localStorage.setItem('selectedTransmission', JSON.stringify(this.selectedTransmission));
        localStorage.setItem('selectedDoors', JSON.stringify(this.selectedDoors));
      
                  // example high engine size
        
        // Navigate to the For Sale page with query parameters
        this.route.navigate(['/commercial-sale-listing'], {
            queryParams: {
                selectedcon: this.selectedcon.join(','),
                selectedmake: this.selectedMake,
                selectedmodelversion:this.selectedModelVersion,
                selectedcity: this.selectedCity.join(','),
                highprice: this.selectedHighPrice,
                lowprice: this.selectedLowPrice,
                highyear: this.selectedHighYear,
                lowyear: this.selectedLowYear,
                highmilage: this.selectedHighMilage,
                lowmilage: this.selectedLowMilage,
                selectedFuel: this.selectedFuel.join(','),
                selectedCategory: this.selectedCategory,
                selectedTransmission: this.selectedTransmission.join(','),
                selectedColor: this.selectedColor,
                selectedDoor: this.selectedDoors.join(','),
                selectedSellerType: this.selectedSellerType,
                highengine: this.selectedEngineHighSize,
                lowengine: this.selectedEngineLowSize
            }
        });
    }
    // Fetch years from your API or predefined list
  fetchYears() {
    this.userService.getYears().subscribe({
      next: (data: string[]) => {
        this.years = data;

        // Initialize both filtered years
        this.filteredLowYears = [...this.years];
        this.filteredHighYears = [...this.years].reverse();  // Ensure high years are in descending order

       
      },
      error: (error: any) => {
        console.error('Error fetching years:', error);
      }
    });
  }



  // Update the high year options when low year is changed
updateHighYearOptions() {
  const startYear = parseInt(this.selectedLowYear, 10);

  // Filter high years based on the selected low year
  this.filteredHighYears = this.years
    .filter(year => parseInt(year, 10) >= startYear) // Filter years greater than or equal to the low year
    .sort((a, b) => parseInt(b, 10) - parseInt(a, 10)); // Sort in descending order

  if (!this.filteredHighYears.includes(this.selectedHighYear)) {
    // Reset the selected high year if it's no longer valid
    this.selectedHighYear = this.filteredHighYears[0]; // Default to the first item in the filtered list
  }
}  
fetchMakes() {
  this,this.commrcialservice.getMakes().subscribe({
    next: (makesData: string[]) => {
      this.makes = makesData; // Store makes data
      this.filteredMakes = makesData; // Initialize filtered makes with all makes data
    },
    error: (error: any) => {
      console.error('Error fetching makes:', error);
    }
  });
}

// Handle make search input and filter makes
filterMakes(event: any) {
  this.searchTerm = event.target.value.trim().toLowerCase();  // Update search term
  if (!this.searchTerm) {
    this.filteredMakes = this.makes;  // If search term is empty, show all makes
  } else {
    // Filter makes based on search term
    this.filteredMakes = this.makes.filter(make => make.toLowerCase().includes(this.searchTerm)); 
  }
}

// Select a make and show it in the selected div
selectMake(make: string) {
  if (!this.mergecararray.includes(make)) {
    this.mergecararray.push(make);  // Add selected make to the list
this.selectedMake=make;
    this.showmake = true;  // Show selected makes
    this.makedivVisible = true;  // Show div with selected makes
  }
  this.fetchModelsAndVersions(this.selectedMake);
  this.showmodel=true;
  this.searchTerm = '';  // Clear the search term after selection
  // Save selected makes to localStorage
  this.popoverController.dismiss();
}

// Remove make from the selected list
makeDiv(item: string) {
  const index = this.mergecararray.indexOf(item);
  if (index !== -1) {
    this.mergecararray.splice(index, 1);  // Remove item from the list
    this.showmake = this.mergecararray.length > 0;  // Hide div if no makes are selected
    this.makedivVisible = this.mergecararray.length > 0;
    this.selectedMake='';
    localStorage.removeItem('selectedmake');
    this.showmodel=false;
    this.selectedModelVersion = '';
    this.showmodel2=false;

  }
    // Save to localStorage after removal
}




// Load selected makes from localStorage when the component initializes
loadSelectedMakes() {
  const selectedMakes = this.selectedMake
  if (selectedMakes) {
    try {
      this.mergecararray = JSON.parse(selectedMakes);  // Parse JSON data

    } catch (error) {
      console.error('Error parsing selected makes from localStorage:', error);
      this.mergecararray = selectedMakes.split(',').map(make => make.trim());  // Fallback to string split
    }
  } else {
    this.mergecararray = [];  // Initialize as empty array if no makes found
  }

  // Update visibility based on whether there are selected makes
  this.makedivVisible = this.mergecararray.length > 0;
  this.showmodel = this.mergecararray.length > 0;
}
selectModelVersion(combinedModelVersion: string) {
  this.selectedModelVersion = combinedModelVersion;

  // Add the selected make, model, and version to the selected makes array
  if (!this.selectedMakesModels.some(item => item.modelVersion === combinedModelVersion)) {
    this.selectedMakesModels.push({ make: this.selectedMake, modelVersion: combinedModelVersion });
  }

   // Save to localStorage after selection
  this.showmodel2 = true;  // Hide the make/model selectio
  this.popoverController.dismiss();
}
fetchModelsAndVersions(make: string) {
  const makeData = new FormData();
  makeData.append('make', make);

  this.commrcialservice.getModels().subscribe({
    next: (modelsData: string[]) => {
      this.models = modelsData;
      this.combinedModelVersions = [];  // Clear previous combinations
      this.filteredCombinedModelVersions = [];  // Reset filtered versions

      // Array to store version fetch promises
      const versionRequests = modelsData.map(model => {
        const versionData = new FormData();
        versionData.append('make', make);
        versionData.append('model', model);

        return this.commrcialservice.getVersions(versionData).toPromise()
          .catch(error => {
            console.error(`Error fetching versions for model ${model}:`, error);
            return [];  // Return an empty array if there's an error fetching versions for this model
          });
      });

      // Wait for all version fetches to complete
      Promise.all(versionRequests).then(results => {
        results.forEach((versionsData, index) => {
          const model = modelsData[index];

          // Ensure versionsData is an array before processing
          if (Array.isArray(versionsData) && versionsData.length > 0) {
            versionsData.forEach(version => {
              this.combinedModelVersions.push(`${model} ${version}`);
            });
          } else {
            console.warn(`No valid version data for model ${model}`);
          }
        });

        // Populate the filtered list with all model-version combinations initially
        this.filteredCombinedModelVersions = [...this.combinedModelVersions];
        this.cdRef.detectChanges();  // Trigger change detection
      }).catch(error => {
        console.error('Error fetching versions for models:', error);
      });
    },
    error: (error: any) => {
      console.error('Error fetching models for make:', error);
    }
  });
}


loadSelectedModelsversion() {
  const selectedMakesModels = this.selectedModelVersion
  if (selectedMakesModels) {
    try {
      this.selectedMakesModels = JSON.parse(selectedMakesModels);  // Parse stored makes/models/versions
    } catch (error) {
      console.error('Error parsing selected makes/models/versions from localStorage:', error);
      this.selectedMakesModels = [];
    }
  } else {
    this.selectedMakesModels = [];  // Initialize as empty if no selected makes
  }
  this.makedivVisible = this.selectedMakesModels.length > 0;
    // Show selected makes section if any are selected
}
filterCombinedModelVersions(event: any) {
  const searchTerm = event.target.value.trim().toLowerCase();  // Get the search term
  if (!searchTerm) {
    this.filteredCombinedModelVersions = this.combinedModelVersions;  // If no search term, show all combined versions
  } else {
    this.filteredCombinedModelVersions = this.combinedModelVersions.filter(combined => 
      combined.toLowerCase().includes(searchTerm)  // Filter combined versions based on search term
    );
  }
}
// Method to clear the selected model-version combination
clearSelectedModelVersion() {
  this.selectedModelVersion = '';
  this.showmodel2=false;
}
}
