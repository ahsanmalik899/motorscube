import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-update-machinery-showroom',
  templateUrl: './update-machinery-showroom.page.html',
  styleUrls: ['./update-machinery-showroom.page.scss'],
  standalone:false,
})
export class UpdateMachineryShowroomPage implements OnInit {
  DealIns!: string[];

back() {
  history.back()}
   ShowroomFeatured='';
   userForm: FormGroup;
    showPassword = false;
    passwordToggleIcon = 'eye';
    cities!: string[];
    countries!: string[];
    makes!: string[];

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
      private router: ActivatedRoute,  private loadingController: LoadingController,public route: Router,) {
      this.userForm = this.formBuilder.group({
        bcity: [''], // Assuming 'bcity' is the form control for city selection
        bcountries: [''], // Assuming 'bcity' is the form control for city selection
        bmake:[''],
        dealIn:[''],
      });
      this.router.queryParams.subscribe(params => {
        this.adsId = params['adsId'];
     });
     }

    ngOnInit(): void {
      this.initForm();
      this.fetchCities();
      this.fetchMakes();
      this.fetchDealIn();
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
        bcountry: ['', Validators.required],  // Initialize bcity with an empty value
        bmake: ['', Validators.required],
        bstartTime: ['', Validators.required],
        bendTime: ['', Validators.required],
        dealIn: ['', Validators.required],
      });

      this.fetchCities();
      this.fetchCountries();
      this.fetchCarSale();

    }




    fetchCarSale() {
      // Fetch car sale data from the backend
      this.machineryservice.getshowroomData().subscribe({
        next: (data) => {
          console.log('Fetched car data:', data);
          this.carSaleData = data; // Store fetched data in carData property
          this.filteredCarSaleData = this.carSaleData.filter((item: {machinery_showroom_ad_sale_id: string; }) => item.machinery_showroom_ad_sale_id=== this.adsId);

          const imageUrls = this.getImageUrls(this.filteredCarSaleData[0]);
          this.visibleImages = new Array(imageUrls.length).fill(true);
          if (this.filteredCarSaleData.length > 0) {
            console.log('filter data : ', this.filteredCarSaleData);
            const carData = this.filteredCarSaleData[0];
            this.ShowroomFeatured= carData.showroom_featured_type;
          // Patch form values with the filtered data
          this.userForm.patchValue({
            bname: carData.showroom_name || '',
            baddress: carData.showroom_address || '',
            bdetail: carData.showroom_description || '',
            bmobile: carData.showroom_phone || '',
            bemail: carData.showroom_email || '',
            bwebsite: carData.showroom_web || '',
            bcity: carData.showroom_city || '',
            bcountry: carData.showroom_country || '',  // Initialize bcity with an empty value
            bmake: carData.showroom_make || '',
            bstartTime: carData.showroom_time_from || '',
            bendTime: carData.showroom_time_to || '',
            dealIn: carData.showroom_deals_in || ''
          });

          Object.keys(this.filteredCarSaleData[0]).forEach(key => {
            if (key.startsWith('showroom_img')  && this.filteredCarSaleData[0][key] !== 'NULL') {
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

  fetchCountries() {
    // Fetch city names from the backend
    this.userService.getCountrties().subscribe({
      next: (data) => {
        this.countries = data;
      //console.log('Fetched cities:', this.cities);
      //console.log('Fetched cities indata:', data);
      this.updateSelectcountry();
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      }
    });
  }
  updateSelectcountry() {
    const selectElement = document.getElementById('bcountry') as HTMLSelectElement;
    selectElement.innerHTML = ''; // Clear existing options

    // Add placeholder option
    const placeholderOption = document.createElement('option');
    placeholderOption.text = '';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    selectElement.add(placeholderOption);

    // Add new options based on fetched cities
    this.countries.forEach(country => {
      const option = document.createElement('option');
      option.text = country;
      selectElement.add(option);
    });
  }

  fetchMakes() {
    // Fetch city names from the backend
    this.machineryservice.getMakes().subscribe({
      next: (data) => {
        this.makes = data;
      //console.log('Fetched cities:', this.cities);
      //console.log('Fetched cities indata:', data);
      this.updateSelectMake();
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      }
    });
  }
  updateSelectMake() {
    const selectElement = document.getElementById('bmake') as HTMLSelectElement;
    selectElement.innerHTML = ''; // Clear existing options

    // Add placeholder option
    const placeholderOption = document.createElement('option');
    placeholderOption.text = 'Select make';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    selectElement.add(placeholderOption);

    // Add new options based on fetched makes
    this.makes.forEach(make => {
      const option = document.createElement('option');
      option.text = make;
      selectElement.add(option);
    });

    // Update form control with default or existing value
    const currentValue = this.userForm.get('bmake')!.value;
    if (currentValue) {
      selectElement.value = currentValue;
    }
  }

    togglePassword(): void {
      this.showPassword = !this.showPassword;
      this.passwordToggleIcon = this.showPassword ? 'eye-off' : 'eye';
    }
    onInputFocus(fieldName: string): void {
      // Define your logic when the input field receives focus
      console.log(`Input field ${fieldName} is focused`);
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
        message: 'Saving your data...',  // Custom message
        spinner: 'circles',  // You can change the spinner type here (default is 'crescent')
      });
      await loading.present();  // Show the loader
  
      // Log form data to console
      console.log('Form data:', this.userForm.value);
      
      // You can proceed with form submission (as per your current flow)
      const filesList = new DataTransfer();
      for (const file of this.filesArray) {
        filesList.items.add(file);
      }
    
      // Initialize FormData to be sent to the backend
      const formData = new FormData();
      formData.append('showroom_featured', this.ShowroomFeatured);
      
      // Iterate over each control in the form and append its value to formData
      Object.keys(this.userForm.controls).forEach(controlName => {
        const control = this.userForm.get(controlName);
        if (Array.isArray(control!.value)) {
          formData.append(controlName, JSON.stringify(control!.value));
        } else {
          formData.append(controlName, control!.value);
        }
      });
    
      // Append files to formData
      for (let i = 0; i < this.filesArray.length; i++) {
        formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
      }
      
      formData.append('adsID', this.adsId);
      formData.append('oldfilesArray', JSON.stringify(this.oldfilesArray));
  
      // Log FormData for debugging
      formData.forEach((value, key) => {
        console.log(key, value);
      });
  
      // Submit the form and handle the loader dismissal
      this.machineryservice.updateShowroomBusiness(formData).subscribe(
        async (response) => {
          console.log('Data saved successfully:', response);
          await loading.dismiss(); // Dismiss the loader on success
          this.presentSuccessAlert();  // Show success alert (you can customize this)
        },
        async (error) => {
          console.error('Error saving data:', error);
          await loading.dismiss(); // Dismiss the loader on error
          this.presentErrorAlert(['An error occurred while saving your data. Please try again.']);  // Show error alert (optional)
        }
      );
    } else {
      // If form is invalid, mark all fields as touched
      this.userForm.markAllAsTouched();
    
      // Collect error messages for invalid fields
      const errorMessages: string[] = [];
      
      // Mapping form control names to user-friendly labels
      const controlLabels: { [key: string]: string } = {
        bname: 'Business Name',
        baddress: 'Business Address',
        bdetail: 'Business Detail',
        bmobile: 'Mobile Number',
        bemail: 'Email Address',
        bwebsite: 'Website',
        bcity: 'City',
        bcountry: 'Country',
        bmake: 'Car Make',
        bstartTime: 'Start Time',
        bendTime: 'End Time'
      };
    
      // Iterate through each control to check its validation and capture errors
      Object.keys(this.userForm.controls).forEach(controlName => {
        const control = this.userForm.get(controlName);
        if (control?.invalid) {
          let errorMessage = `${controlLabels[controlName] || controlName} is required`;
    
          // Check if the field has specific validation errors
          if (control.hasError('email')) {
            errorMessage = `Please enter a valid email address`;
          } else if (control.hasError('minlength')) {
            errorMessage = `${controlLabels[controlName] || controlName} should have at least ${control.getError('minlength').requiredLength} characters`;
          } else if (control.hasError('maxlength')) {
            errorMessage = `${controlLabels[controlName] || controlName} should have no more than ${control.getError('maxlength').requiredLength} characters`;
          }
    
          errorMessages.push(errorMessage);
        }
      });
    
      // Show error messages in an alert
      if (errorMessages.length > 0) {
        this.presentErrorAlert(errorMessages); // Assuming this is a method for showing the alert
      }
    }
  }
  
  async presentErrorAlert(errorMessages: string[]): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Form Errors',
      message: errorMessages.join('\n'),
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
  fetchDealIn() {
    // Fetch city names from the backend
    this.machineryservice.getModels().subscribe({
      next: (data) => {
        this.DealIns = data;
      //console.log('Fetched cities:', this.cities);
      //console.log('Fetched cities indata:', data);
      this.updateSelectdeal();
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      }
    });
  }
  updateSelectdeal() {
    const selectElement = document.getElementById('dealIn') as HTMLSelectElement;
    selectElement.innerHTML = ''; // Clear existing options
  
    // Add placeholder option
    const placeholderOption = document.createElement('option');
    placeholderOption.text = 'Select Deal IN';
    placeholderOption.value = '';
    placeholderOption.disabled = true;
    selectElement.add(placeholderOption);
  
    // Add new options based on fetched cities
    this.DealIns.forEach(dealin => {
      const option = document.createElement('option');
      option.text = dealin;
      option.value = dealin;
      if (dealin === this.userForm.get('dealIn')!.value) {
        option.selected = true; // Pre-select the option if it matches bcity
      }
      selectElement.add(option);
    });
  }
  // Update city options in the form control
  updateCitydeal() {
  const bcityControl = this.userForm.get('dealIn');
  bcityControl!.clearValidators(); // Clear any existing validators
  bcityControl!.reset(); // Reset control to clear any previous value
  
  // Update city options based on fetched cities
  this.DealIns.forEach(dealIn => {
  });
  }
  }

