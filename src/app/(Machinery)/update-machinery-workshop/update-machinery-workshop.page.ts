import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-update-machinery-workshop',
  templateUrl: './update-machinery-workshop.page.html',
  styleUrls: ['./update-machinery-workshop.page.scss'],
  standalone:false,
})
export class UpdateMachineryWorkshopPage implements OnInit {
back() {
  history.back()
}
types!: string[];
subtypes!: string[];
    WorkshopFeatured='';
    userForm: FormGroup;
    showService1 = true;
    showService2 = false;
    showService3 = false;
    showService4 = false;
    showPassword = false;
    showButton = true; // Initially show the button
    passwordToggleIcon = 'eye';
    cities!: string[];
    categories: string[] = ['Electrical', 'Mechanical', 'Body Work', 'Other'];
    selectedFiles: FileList | null = null; // Initialize selectedFiles variable
  selectedFileArray: FileList | null = null;

     filesArray: File[] = [];

     adsId = '';
     carSaleData: any = [];
     oldfilesArray: any = [];
     @Input() filteredCarSaleData: any[] = []; // Input property to receive filteredCarSaleData
     selectedImageSrc = ''; // Property to hold the URL of the selected image
     visibleImages: boolean[] = [];

    constructor(private formBuilder: FormBuilder,private machineryservice:MachineryService, private userService: UserService, private alertController: AlertController,
      private router: ActivatedRoute,  private loadingController: LoadingController,public route: Router,
    ) {
      this.userForm = this.formBuilder.group({
        bcity: [''] // Assuming 'bcity' is the form control for city selection
      });

      this.router.queryParams.subscribe(params => {
        this.adsId = params['adsId'];
     });
     }

    ngOnInit(): void {
      this.initForm();
      this.fetchCities();
    }

    initForm(): void {
      this.userForm = this.formBuilder.group({
        bname: ['', Validators.required],
        baddress: [''],
        bdetail: [''],
        bmobile: ['', Validators.required],
        bemail: ['', [Validators.required, Validators.email]],
        bwebsite: ['', Validators.required],
        bcity: ['', Validators.required],  // Initialize bcity with an empty value
        bservice1: [''],
        bservice2: [''],
        bservice3: [''],
        bservice4: [''],
        bstartTime: [''],
        bendTime: [''],
        type:[''],
        subtype:[''],
        bcategory: [[], Validators.required]
      });

      this.fetchCities();
      this.fetchCategory();
      this.fetchCarSale();
      this.fetchtype();
    
    }
    showNextService() {
      if (this.showService1 && !this.showService2) {
        this.showService2 = true;
      } else if (this.showService1 && this.showService2 && !this.showService3) {
        this.showService3 = true;
      } else if (this.showService1 && this.showService2 && this.showService3 && !this.showService4) {
        this.showService4 = true;
        // Hide the button after all services are shown
        this.showButton = false;
      }
    }

    fetchCarSale() {
      // Fetch car sale data from the backend
      this.machineryservice.getworkshopData().subscribe({
        next: (data) => {
          console.log('Fetched car data:', data);
          this.carSaleData = data; // Store fetched data in carData property
          this.filteredCarSaleData = this.carSaleData.filter((item: {machinery_workshop_ad_sale_id: string; }) => item.machinery_workshop_ad_sale_id === this.adsId);
         
          const imageUrls = this.getImageUrls(this.filteredCarSaleData[0]);
          this.visibleImages = new Array(imageUrls.length).fill(true);
          if (this.filteredCarSaleData.length > 0) {
            console.log('filter data : ', this.filteredCarSaleData);
            const carData = this.filteredCarSaleData[0];
            if (carData.workshop_service_2 && carData.workshop_service_2.trim() !== '') {
              this.showService2 = true;
            }
            if (carData.workshop_service_3 && carData.workshop_service_3.trim() !== '') {
              this.showService3 = true;
            }
            if (carData.workshop_service_4 && carData.workshop_service_4.trim() !== '') {
              this.showService4 = true;
            }
            this.WorkshopFeatured= carData.workshop_featured_type;
          // Patch form values with the filtered data
          this.fetchsubtype(carData.workshop_sector);
          this.userForm.patchValue({
            bname: carData.workshop_name || '',
            baddress: carData.workshop_address || '',
            bdetail: carData.workshop_description || '',
            bmobile: carData.workshop_phone || '',
            bemail: carData.workshop_email || '',
            bwebsite: carData.workshop_web || '',
            bcity: carData.workshop_city || '',
            bservice1: carData.workshop_service_1 || '',
            bservice2: carData.workshop_service_2 || '',
            bservice3: carData.workshop_service_3 || '',
            bservice4: carData.workshop_service_4 || '',
            bstartTime: carData.workshop_time_from || '',
            bendTime: carData.workshop_time_to || '',
            type: carData.workshop_sector || '',
            subtype: carData.workshop_sub_sector || '',
            bcategory: this.parseCategory(carData.workshop_category) || [],
           
          });

          Object.keys(this.filteredCarSaleData[0]).forEach(key => {
            if (key.startsWith('workshop_img')  && this.filteredCarSaleData[0][key] !== 'NULL') {
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

parseCategory(categoryString: string): string[] {
  try {
    // Attempt to parse the JSON string into an array
    return JSON.parse(categoryString);
  } catch (error) {
    console.error('Error parsing category JSON:', error);
    // Return an empty array if parsing fails
    return [];
  }
}
fetchCities() {
  // Fetch city names from the backend
  this.userService.getCities().subscribe({
    next: (data) => {
      this.cities = data;

      // Check if the current bcity value is in the fetched cities
      const currentCity = this.userForm.get('bcity')!.value;
      if (currentCity && !this.cities.includes(currentCity)) {
        this.cities.push(currentCity); // Add current bcity to the list if not present
      }

      // Call updateSelectOptions to populate the select element
      this.updateSelectOptions();
    },
    error: (error) => {
      console.error('Error fetching cities:', error);
    }
  });
}

updateSelectOptions() {
  const selectElement = document.getElementById('bcity') as HTMLSelectElement;
  selectElement.innerHTML = ''; // Clear existing options

  // Add placeholder option
  const placeholderOption = document.createElement('option');
  placeholderOption.text = 'Select a city';
  placeholderOption.value = '';
  placeholderOption.disabled = true;
  selectElement.add(placeholderOption);

  // Add new options based on fetched cities
  this.cities.forEach(city => {
    const option = document.createElement('option');
    option.text = city;
    option.value = city;
    if (city === this.userForm.get('bcity')!.value) {
      option.selected = true; // Pre-select the option if it matches bcity
    }
    selectElement.add(option);
  });
}

    // Update city options in the form control
  updateCityOptions() {
    const bcityControl = this.userForm.get('bcity');
    bcityControl!.clearValidators(); // Clear any existing validators
    bcityControl!.reset(); // Reset control to clear any previous value

    // Update city options based on fetched cities
    this.cities.forEach(city => {
    });
  }

  async fetchCategory() {
    // Fetch city names from the backend
    this.userService.getCategories().subscribe({
      next: (data) => {
        //this.categories = data;
      //console.log('Fetched cities:', this.cities);
      //console.log('Fetched cities indata:', data);

      //this.updateCategory();
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      }
    });
  }
  updateCategory() {
    // Example method to update categories dynamically if needed
    this.categories.push('New Category');
  }
  onInputFocus(fieldName: string): void {
    // Define your logic when the input field loses focus
    console.log(`Input field ${fieldName}  focus`);
  }
    onInputBlur(fieldName: string): void {
      // Define your logic when the input field loses focus
      console.log(`Input field ${fieldName} lost focus`);
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

  // async saveUser(): Promise<void> {
  //   if (this.userForm.valid) {
  //     console.log('User data:', this.userForm.value);
  //     this.userService.saveUser(this.userForm.value).subscribe(
  //       async response => {
  //         console.log('Response:', response);
  //         // Reset the form after successful submission
  //         this.userForm.reset();
  //         // Show a success message popup
  //         await this.presentSuccessAlert();
  //       },
  //       error => {
  //         console.error('Error:', error);
  //         // Handle error if needed
  //       }
  //     );
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }

  async saveUser(): Promise<void> {
    // Check if the form is valid
    if (this.userForm.valid) {
      // Show loader before starting the submission
      const loading = await this.loadingController.create({
        message: 'Saving your data...', // Customize your loader message here
        spinner: 'circles',  // Customize the spinner type here (default is 'crescent')
      });
      await loading.present();  // Show the loader
  
      // Log form data to console
      console.log('Form data:', this.userForm.value);
  
      // Proceed with saving user data
      const formData = new FormData();
      for (const controlName of Object.keys(this.userForm.controls)) {
        const control = this.userForm.get(controlName);
        if (Array.isArray(control!.value)) {
          formData.append(controlName, JSON.stringify(control!.value));
        } else {
          formData.append(controlName, control!.value);
        }
      }
  
      formData.append('adsID', this.adsId);
      formData.append('workshop_featured', this.WorkshopFeatured);
      formData.append('oldfilesArray', JSON.stringify(this.oldfilesArray));
  
      // Append files if selected
      for (let i = 0; i < this.filesArray.length; i++) {
        formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
      }
  
      // Make the API call to save data
      this.machineryservice.updateWorkshopBusiness(formData).subscribe(
        async (response) => {
          console.log('Data saved successfully:', response);
          await loading.dismiss(); // Dismiss the loader on success
          this.presentSuccessAlert(); // Show success alert
        },
        async (error) => {
          console.error('Error saving data:', error);
          await loading.dismiss(); // Dismiss the loader on error
          this.presentErrorAlert(['An error occurred while saving your data. Please try again.']); // Show error alert
        }
      );
    } else {
      // If form is invalid, mark all fields as touched to show validation errors
      this.userForm.markAllAsTouched();
  
      // Find invalid fields
      const invalidFields: string[] = [];
      Object.keys(this.userForm.controls).forEach(controlName => {
        const control = this.userForm.get(controlName);
        if (control && control.invalid && control.touched) {
          invalidFields.push(controlName); // Add invalid field name to the list
        }
      });
  
      // Show alert with invalid fields
      if (invalidFields.length > 0) {
        const fieldNames = invalidFields.map(field => this.getFieldName(field)); // Get field names for invalid fields
        this.presentErrorAlert(fieldNames);
      }
    }
  }
  
  getFieldName(controlName: string): string {
    // Return the readable name of the field (you can customize this logic)
    switch (controlName) {
      case 'bname':
        return 'Workshop Name';
      case 'bmobile':
        return 'Mobile Number';
      case 'bemail':
        return 'Email';
      case 'bwebsite':
        return 'Website';
      case 'city':
        return 'Business City';
      case 'bservice1':
        return 'Service 1';
      case 'bservice2':
        return 'Service 2';
      case 'bservice3':
        return 'Service 3';
      case 'bservice4':
        return 'Service 4';
      case 'Business startTime':
        return 'Start Time';
      case 'bendTime':
        return 'End Time';
      case 'bcategory':
        return 'Workshop Category';
        case 'type':
          return 'Workshop Sector';
          case 'subtype':
            return 'Workshop Sub Sector';
      default:
        return controlName; // Default to control name if not found
    }
  }
  
  async presentErrorAlert(invalidFields: string[]): Promise<void> {
    const fieldList = invalidFields.join(', ');
    const alert = await this.alertController.create({
      header: 'Validation Error',
      message: `The following fields are required: ${fieldList}`,
      cssClass: 'error-alert',
      buttons: ['OK']
    });
  
    await alert.present();
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
            // Navigate back to the previous page
            this.route.navigateByUrl('/machinery-buseness', { skipLocationChange: true }).then(() => {
              this.route.navigate([this.router.url]);
            });
          }
        }
      ]
    });

    await alert.present();
  }
  
  fetchtype() {
    // Fetch city names from the backend
    this.machineryservice.getModels().subscribe({
      next: (data) => {
        this.types = data;
      //console.log('Fetched cities:', this.cities);
      //console.log('Fetched cities indata:', data);
      this.updateSelectdtype();
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      }
    });
  }
  updateSelectdtype() {
    const selectElement = document.getElementById('type') as HTMLSelectElement;
    selectElement.innerHTML = ''; // Clear existing options
  
    // Add placeholder
    const placeholderOption = document.createElement('option');
    placeholderOption.text = 'Select Workshop Sector';
    placeholderOption.value = '';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    selectElement.add(placeholderOption);
  
    // Add new options
    this.types.forEach(type => {
      const option = document.createElement('option');
      option.text = type;
      option.value = type;
  
      if (type === this.userForm.get('type')!.value) {
        option.selected = true;
      }
  
      selectElement.add(option);
    });
  
    // Add event listener
    selectElement.onchange = (event) => {
      const selectedType = (event.target as HTMLSelectElement).value;
      this.userForm.get('type')?.setValue(selectedType);
      this.fetchsubtype(selectedType);
    };
  }
  
  
  fetchsubtype(type:string) {
    // Fetch city names from the backend
    const formData = new FormData();
    formData.append('model', type);
    this.machineryservice.getVersions(formData).subscribe({
      next: (data) => {
        this.subtypes = data;
      //console.log('Fetched cities:', this.cities);
      //console.log('Fetched cities indata:', data);
      this.updateSelectdsubtype();
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      }
    });
  }
  updateSelectdsubtype() {
    const selectElement = document.getElementById('subtype') as HTMLSelectElement;
    selectElement.innerHTML = ''; // Clear existing options
  
    // Add placeholder option
    const placeholderOption = document.createElement('option');
    placeholderOption.text = 'Select Workshop Sub Sector';
    placeholderOption.value = '';
    placeholderOption.disabled = true;
    selectElement.add(placeholderOption);
  
    // Add new options based on fetched cities
    this.subtypes.forEach(subtype => {
      const option = document.createElement('option');
      option.text = subtype;
      option.value = subtype;
      if (subtype === this.userForm.get('subtype')!.value) {
        option.selected = true; // Pre-select the option if it matches bcity
      }
      selectElement.add(option);
    });
  }
  }

