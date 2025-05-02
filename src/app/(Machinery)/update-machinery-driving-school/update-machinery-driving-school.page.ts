import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-update-machinery-driving-school',
  templateUrl: './update-machinery-driving-school.page.html',
  styleUrls: ['./update-machinery-driving-school.page.scss'],
  standalone:false,
})
export class UpdateMachineryDrivingSchoolPage implements OnInit {

back() {
  history.back()
}

DealIns!: string[];
    SchoolFeatured='';
    userForm: FormGroup;
    showService1 = true;
    showService2 = false;
    showService3 = false;
    showPassword = false;
    showButton = true; // Initially show the button
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

    constructor(private formBuilder: FormBuilder,private machineryservice:MachineryService, private userService: UserService, private alertController: AlertController,
      private router: ActivatedRoute,  private loadingController: LoadingController,public route: Router,
    ) {
      this.userForm = this.formBuilder.group({
        bcity: [''], // Assuming 'bcity' is the form control for city selection
        dealin:['']
      });

      this.router.queryParams.subscribe(params => {
        this.adsId = params['adsId'];
     });
     }

    ngOnInit(): void {
      this.initForm();
      this.fetchCities();
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
        bservice1: [''], // Remove Validators.required here
        bservice2: [''], // Remove Validators.required here
        bservice3: [''], // Remove Validators.required here
        bstartTime: ['', Validators.required],
        bendTime: ['', Validators.required],
        dealIn:['',Validators.required],
      });
    
      this.fetchCities();
      this.fetchCarSale();
    }
    
    showNextService() {
      if (this.showService1 && !this.showService2) {
        this.showService2 = true;
      } else if (this.showService1 && this.showService2 && !this.showService3) {
        this.showService3 = true;
        // Hide the button after all services are shown
        this.showButton = false; // Assuming you have a showButton variable to control button visibility
      }
    }

    fetchCarSale() {
      // Fetch car sale data from the backend
      this.machineryservice.getschoolData().subscribe({
        next: (data) => {
          console.log('Fetched car data:', data);
          this.carSaleData = data; // Store fetched data in carData property
          this.filteredCarSaleData = this.carSaleData.filter((item: {machinery_school_ad_sale_id: string; }) => item.machinery_school_ad_sale_id === this.adsId);

          const imageUrls = this.getImageUrls(this.filteredCarSaleData[0]);
          this.visibleImages = new Array(imageUrls.length).fill(true);
          if (this.filteredCarSaleData.length > 0) {
            console.log('filter data : ', this.filteredCarSaleData);
            const carData = this.filteredCarSaleData[0];
            if (carData.school_service_2 && carData.school_service_2.trim() !== '') {
              this.showService2 = true;
            }
            if (carData.school_service_3 && carData.school_service_3.trim() !== '') {
              this.showService3 = true;
            }
            this.SchoolFeatured= carData.school_featured_type;
          // Patch form values with the filtered data
          this.userForm.patchValue({
            bname: carData.school_name || '',
            baddress: carData.school_address || '',
            bdetail: carData.school_description || '',
            bmobile: carData.school_phone || '',
            bemail: carData.school_email || '',
            bwebsite: carData.school_web || '',
            bcity: carData.school_city || '',
            bservice1: carData.school_service_1 || '',
            bservice2: carData.school_service_2 || '',
            bservice3: carData.school_service_3 || '',
            bstartTime: carData.school_time_from || '',
            bendTime: carData.school_time_to || '',
            dealIn:carData.school_vehicle_type || '',
          });

          Object.keys(this.filteredCarSaleData[0]).forEach(key => {
            if (key.startsWith('school_img')  && this.filteredCarSaleData[0][key] !== 'NULL') {
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
      // Show loader before submission starts
      const loading = await this.loadingController.create({
        message: 'Saving your data...',
        spinner: 'circles', // You can customize the spinner here
      });
      await loading.present();  // Present the loader
  
      // Log form data to console
      console.log('Form data:', this.userForm.value);
  
      // Proceed with form submission (save data)
      this.submitFormData(loading);
    } else {
      // Form is invalid, mark all fields as touched to display validation errors
      this.userForm.markAllAsTouched();
  
      // Collect invalid fields to show them in the alert
      const invalidFields: string[] = [];
      Object.keys(this.userForm.controls).forEach((controlName) => {
        const control = this.userForm.get(controlName);
        if (control && control.invalid) {
          // Map the control names to full field names for display in the alert
          switch (controlName) {
            case 'bname':
              invalidFields.push('Business Name');
              break;
            case 'baddress':
              invalidFields.push('Business Address');
              break;
            case 'bdetail':
              invalidFields.push('Business Detail');
              break;
            case 'bmobile':
              invalidFields.push('Business Mobile');
              break;
            case 'bemail':
              invalidFields.push('Business Email');
              break;
            case 'bwebsite':
              invalidFields.push('Business Website');
              break;
            case 'bcity':
              invalidFields.push('Business City');
              break;
            case 'bservice1':
              invalidFields.push('Business Service 1');
              break;
            case 'bservice2':
              invalidFields.push('Business Service 2');
              break;
            case 'bservice3':
              invalidFields.push('Business Service 3');
              break;
            case 'bstartTime':
              invalidFields.push('Business Start Time');
              break;
            case 'bendTime':
              invalidFields.push('Business End Time');
              break;
              case 'dealIn' :
                invalidFields.push('School Machinery Type');
                break;
            default:
              break;
          }
        }
      });
  
      // If there are invalid fields, display a message listing those fields
      if (invalidFields.length > 0) {
        const alertMessage = `The following fields are required or invalid: ${invalidFields.join(', ')}.`;
        this.presentValidationAlert(alertMessage); // Assuming this is a method for showing the alert
      }
    }
  }
  
  // Method to submit the form data and handle loader dismissing
  submitFormData(loading: HTMLIonLoadingElement): void {
    const filesList = new DataTransfer();
    for (const file of this.filesArray) {
      filesList.items.add(file);
    }
  
    const formData = new FormData();
    formData.append('school_featured', this.SchoolFeatured);
  
    // Append form controls to formData
    Object.keys(this.userForm.controls).forEach((controlName) => {
      const control = this.userForm.get(controlName);
      if (Array.isArray(control!.value)) {
        formData.append(controlName, JSON.stringify(control!.value));
      } else {
        formData.append(controlName, control!.value);
      }
    });
  
    formData.append('adsID', this.adsId);
    formData.append('oldfilesArray', JSON.stringify(this.oldfilesArray));
  
    // Append each file to the FormData object
    for (let i = 0; i < this.filesArray.length; i++) {
      formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
    }
  
    // Use FormData to send the data to the server
    this.machineryservice.updateDrivingSchool(formData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        loading.dismiss();  // Dismiss the loader after success
        this.presentSuccessAlert();  // Show success alert (optional)
      },
      (error) => {
        console.error('Error saving data:', error);
        loading.dismiss();  // Dismiss the loader after error
       
      }
    );
  }
  
  // Method to present validation alert with the missing fields
  async presentValidationAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Validation Error',
      message: message,
      cssClass: 'error-alert',
      buttons: ['OK']
    });
    await alert.present();
  }
  
  // Success alert method (unchanged)
  async presentSuccessAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Your account has been successfully registered.',
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
  


  }

