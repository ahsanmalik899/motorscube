import { Component, Input, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { UserService } from '../../(services)/user.service';
  import { AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
  @Component({
    selector: 'app-update-importer-busines',
    templateUrl: './update-importer-busines.page.html',
    styleUrls: ['./update-importer-busines.page.scss'],
    standalone: false
})
  export class UpdateImporterBusinesPage implements OnInit {
back() {
  history.back()
}

   ImporterFeatured='';
    userForm: FormGroup;
    showPassword = false;
    passwordToggleIcon = 'eye';
    cities!: string[];
    selectedFiles: FileList | null = null; // Initialize selectedFiles variable
  selectedFileArray: FileList | null = null;

     filesArray: File[] = [];
     adsId = '';
     carSaleData: any = [];
     oldfilesArray: any = [];
     @Input() filteredCarSaleData: any[] = []; // Input property to receive filteredCarSaleData
     selectedImageSrc = ''; // Property to hold the URL of the selected image
     visibleImages: boolean[] = [];

    constructor(private formBuilder: FormBuilder, private userService: UserService, private alertController: AlertController,
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
        bcity: ['', Validators.required]  // Initialize bcity with an empty value
      });


      this.fetchCities();

      this.fetchCarSale();

    }

    fetchCarSale() {
      // Fetch car sale data from the backend
      this.userService.getimporterData().subscribe({
        next: (data) => {
          console.log('Fetched car data:', data);
          this.carSaleData = data; // Store fetched data in carData property
          this.filteredCarSaleData = this.carSaleData.filter((item: { car_importer_ad_sale_id: string; }) => item.car_importer_ad_sale_id === this.adsId);

          const imageUrls = this.getImageUrls(this.filteredCarSaleData[0]);
          this.visibleImages = new Array(imageUrls.length).fill(true);
          if (this.filteredCarSaleData.length > 0) {
            console.log('filter data : ', this.filteredCarSaleData);
            const carData = this.filteredCarSaleData[0];
            this.ImporterFeatured= carData.importer_featured_type;
          // Patch form values with the filtered data
          this.userForm.patchValue({
            bname: carData.importer_name || '',
            baddress: carData.importer_address || '',
            bdetail: carData.importer_description || '',
            bmobile: carData.importer_phone || '',
            bemail: carData.importer_email || '',
            bwebsite: carData.importer_web || '',
            bcity: carData.importer_city || ''
          });

          Object.keys(this.filteredCarSaleData[0]).forEach(key => {
            if (key.startsWith('importer_img')  && this.filteredCarSaleData[0][key] !== 'NULL') {
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
      // Show loader while submitting the form
      const loading = await this.loadingController.create({
        message: 'Submitting your data...',
        spinner: 'circles', // Customize the spinner type if needed
      });
      await loading.present();  // Show the loader
  
      // Log form data to console
      console.log('Form data:', this.userForm.value);
  
      // Process the form data (FormData, API call, etc.)
      const formData = this.createFormData();
  
      // Submit the form data
      this.submitFormData(formData, loading);  // Pass the loading object to be dismissed later
    } else {
      // Form is invalid, mark all fields as touched to display validation errors
      this.userForm.markAllAsTouched();
  
      // Collect error messages
      const errorMessages: string[] = [];
      Object.keys(this.userForm.controls).forEach(controlName => {
        const control = this.userForm.get(controlName);
        if (control?.invalid) {
          errorMessages.push(this.getErrorMessage(controlName, control));
        }
      });
  
      // Show the error alert with the messages
      if (errorMessages.length > 0) {
        this.presentErrorAlert(errorMessages);
      }
    }
  }
  submitFormData(formData: FormData, loading: any): void {
    this.userService.updateImporterBusiness(formData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        loading.dismiss();  // Dismiss the loader once the form is submitted
        this.presentSuccessAlert();  // Show success alert
      },
      (error) => {
        console.error('Error saving data:', error);
        loading.dismiss();  // Dismiss the loader even if there's an error
    
      }
    );
  }
    // Create FormData with form controls and selected files
createFormData(): FormData {
  const formData = new FormData();

  // Append form values to FormData
  Object.keys(this.userForm.controls).forEach(controlName => {
    const control = this.userForm.get(controlName);
    if (Array.isArray(control!.value)) {
      formData.append(controlName, JSON.stringify(control!.value));
    } else {
      formData.append(controlName, control!.value);
    }
  });

  // Append additional data like adsID and old files
  formData.append('adsID', this.adsId);
  formData.append('oldfilesArray', JSON.stringify(this.oldfilesArray));
  formData.append('importer_featured', this.ImporterFeatured);

  // Append selected files to FormData
  this.filesArray.forEach(file => {
    formData.append('images[]', file, file.name);
  });

  return formData;
}

  
  // Helper function to get the error message for each control
  getErrorMessage(controlName: string, control: any): string {
    const fieldNames: { [key: string]: string } = {
      bname: 'Business Name',
      baddress: 'Business Address',
      bdetail: 'Business Details',
      bmobile: 'Business Mobile',
      bemail: 'Business Email',
      bwebsite: 'Business Website',
      bcity: 'Business City',
    };
  
    let errorMessage = `${fieldNames[controlName] || controlName} is required`;
  
    if (control.hasError('required')) {
      errorMessage = `${fieldNames[controlName] || controlName} is required`;
    }
    if (control.hasError('email')) {
      errorMessage = `Please enter a valid email address for ${fieldNames[controlName] || controlName}`;
    }
    if (control.hasError('minlength')) {
      errorMessage = `${fieldNames[controlName] || controlName} should have at least ${control.getError('minlength').requiredLength} characters`;
    }
    if (control.hasError('maxlength')) {
      errorMessage = `${fieldNames[controlName] || controlName} should have no more than ${control.getError('maxlength').requiredLength} characters`;
    }
  
    return errorMessage;
  }
  
  // Present error alert with the collected error messages
  async presentErrorAlert(errorMessages: string[]): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Form Errors',
      message: errorMessages.join('<br/>'), // Join error messages with a line break
      cssClass: 'error-alert',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  // Show success alert after successful submission
  async presentSuccessAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Your business information has been updated successfully.',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Navigate back to the previous page
            this.route.navigateByUrl('/your-business', { skipLocationChange: true }).then(() => {
              this.route.navigate([this.router.url]);
            });
          }
        }
      ]
    });
  
    await alert.present();
  }
  

  
  }

