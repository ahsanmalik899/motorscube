import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-post-leasing-busines',
    templateUrl: './post-leasing-busines.page.html',
    styleUrls: ['./post-leasing-busines.page.scss'],
    standalone: false
})
export class PostLeasingBusinesPage implements OnInit {
back() {
history.back();
}
userID: string |'';
  userForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';
  cities: any[]=[];
  selectedFiles: FileList | null = null; // Initialize selectedFiles variable
selectedFileArray: FileList | null = null;

   filesArray: File[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertController: AlertController, private router: ActivatedRoute,
         private loadingController: LoadingController,private route: Router,private cdr: ChangeDetectorRef
  ) {
    this.userForm = this.formBuilder.group({
      bcity: [''] // Assuming 'bcity' is the form control for city selection
    });
    this.userID = sessionStorage.getItem('userId')??'';
    if(this.userID==''){
      this.userID = localStorage.getItem('userId')??'';
    }
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
      bemail: ['', Validators.email],
      bwebsite: [''],
      bcity: ['']  // Initialize bcity with an empty value
    });


    

  }
  fetchCities() {
    // Fetch city names from the backend
    this.userService.getCities().subscribe({
      next: (data) => {
        this.cities = data;
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
    placeholderOption.text = '';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    selectElement.add(placeholderOption);

    // Add new options based on fetched cities
    this.cities.forEach(city => {
      const option = document.createElement('option');
      option.text = city;
      selectElement.add(option);
    });
  }
  // Update city options in the form control
  updateCityOptions() {
    const bcityControl = this.userForm.get('bcity');
    
    // Clear existing validators and reset the value
    if (bcityControl) {
      bcityControl.clearValidators();
      bcityControl.reset();
    } else {
      console.error('bcity control not found');
      return;
    }
  
    // Assuming `this.cities` is an array of city objects that you want to use
    if (this.cities && Array.isArray(this.cities)) {
      // Assuming the cities array contains objects like { id: number, name: string }
      const cityOptions = this.cities.map(city => ({
        value: city.id, // id is the value we want to set
        label: city.name // name will be shown in the dropdown
      }));
  
      // Here, we assume you are using a dropdown (select element) to show the cities.
      // You would dynamically update the options for the city dropdown.
      // Assuming you have a form control for the city with name 'bcity'.
      // For simplicity, this code assumes you are using a select input.
  
      // Create or update a select input dynamically (you could bind this to your template directly)
      const selectElement = document.getElementById('bcitySelect') as HTMLSelectElement;
  
      if (selectElement) {
        // Clear current options in the dropdown
        selectElement.innerHTML = '';
  
        // Add a default "Select a City" option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = 'Select a City';
        selectElement.appendChild(defaultOption);
  
        // Add new options based on the cities array
        cityOptions.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option.value.toString(); // Ensure it's a string for the select value
          optionElement.text = option.label;
          selectElement.appendChild(optionElement);
        });
  
        // Optionally, you can set the default value to the first city or handle it otherwise
        if (cityOptions.length > 0) {
          selectElement.value = cityOptions[0].value.toString();
        }
      }
    } else {
      console.error('No cities available to update options');
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

  onFileSelected(event: Event): void {
    // Ensure selectedFiles is not null, fallback to an empty array if null
    const files = (event.target as HTMLInputElement).files;
  
    // If files is null, initialize as an empty FileList object
    this.selectedFiles = files ? files : [] as unknown as FileList;
  
    // Get DOM elements for image and add-more containers
    const imageContainer = document.getElementById('imageContainer');
    const addmoreContainer = document.getElementById('addmoreContainer');
  
    // Ensure addmoreContainer exists before modifying it
    if (addmoreContainer) {
      addmoreContainer.style.display = 'none';  // Hide the add-more container
    }
  
    // Ensure imageContainer exists before proceeding
    if (imageContainer) {
      // Iterate over each selected file
      Array.from(this.selectedFiles).forEach(file => {
        const reader = new FileReader();
  
        // Create image elements for each selected file
        reader.onload = () => {
          // Create an image element
          const selectedImage = document.createElement('img');
          selectedImage.style.maxWidth = '100px';
          selectedImage.style.maxHeight = '100px';
          selectedImage.style.minWidth = '100px';
          selectedImage.style.minHeight = '100px';
          selectedImage.style.border = '2px solid black '; 
           selectedImage.style.borderRadius='5px'
          selectedImage.style.marginRight = '5px'; // Add margin between images
          selectedImage.src = reader.result as string;
  
          // Create a div to hold the image and remove button
          const imageDiv = document.createElement('div');
          imageDiv.style.position = 'relative';
          imageDiv.style.display = 'inline-block';  // Display images inline
  
          // Create the remove button
          const removeButton = document.createElement('button');
          removeButton.innerHTML = '<img src="../../../assets/cross.webp" style="height: 20px; width: 20px; margin-left: 0px; margin-top: 0px;" />';
          removeButton.style.position = 'absolute';
          removeButton.style.top = '5px';
          removeButton.style.right = '5px';
  
          // Remove the image when the button is clicked
          removeButton.onclick = () => {
            imageContainer.removeChild(imageDiv);  // Remove the image div from the container
          };
  
          // Append the image and button to the div
          imageDiv.appendChild(selectedImage);
          imageDiv.appendChild(removeButton);
  
          // Append the div to the image container
          imageContainer.appendChild(imageDiv);
          imageContainer.style.display = 'block';  // Ensure imageContainer is visible
        };
  
        // Read the file as a data URL
        reader.readAsDataURL(file);
      });
  
      // Push selected files to filesArray
      Array.from(this.selectedFiles).forEach(file => {
        if (!this.filesArray.includes(file)) {  // Check if the file is already in the array
          this.filesArray.push(file);
        }
      });
  
      // Log the files array
      console.log('Files array:', this.filesArray);
    }
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
async saveUser(): Promise<void> {
  // Check if the form is valid and at least one file is selected
  if (this.userForm.valid) {
    console.log('Form data:');

    // Iterate over each form control and log its name and value
    Object.keys(this.userForm.controls).forEach((controlName) => {
      const control = this.userForm.get(controlName);
      if (control) {
        console.log(`${controlName}:`, control.value);
      }
    });

    // Prepare FormData to send both form fields and files
    const formData = new FormData();

    // Append form controls to FormData
    Object.keys(this.userForm.controls).forEach((controlName) => {
      const control = this.userForm.get(controlName);
      if (control) {
        formData.append(controlName, control.value);
      }
    });

    // Append selected files to FormData
    for (const file of this.filesArray) {
      formData.append('images[]', file, file.name);
    }

    formData.append('user_id', this.userID);

    // Create and present the loading spinner
    const loading = await this.loadingController.create({
      message: 'Saving your data...',
      spinner: 'circles',  // You can change the spinner type if you want
    });
    await loading.present();

    // Send FormData to backend using your userService
    this.userService.postLeasingBusiness(formData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        this.presentSuccessAlert(); // Show success alert after saving
      },
      (error) => {
        console.error('Error saving data:', error);
        // Optionally handle the error (show error alert, etc.)
      },
      () => {
        // Dismiss the loader once the request is completed (either success or error)
        loading.dismiss();
      }
    );
  } else {
    // Form is invalid or no files selected, mark all fields as touched to show validation
    this.userForm.markAllAsTouched();

    // Collect invalid fields to display in the alert
    const invalidFields: string[] = [];
    Object.keys(this.userForm.controls).forEach((controlName) => {
      const control = this.userForm.get(controlName);
      if (control && control.invalid) {
        invalidFields.push(controlName);
      }
    });

    // Show an alert only with the required fields and business name
    if (invalidFields.length > 0) {
      let message = 'Please fill in the required fields:\n';

      // Add the full name of the business (bname) if it's invalid
      if (this.userForm.get('bname')?.invalid) {
        message += 'Business Name \n';
      }

      // Add other invalid fields
      if (invalidFields.includes('bmobile')) {
        message += 'Business Mobile\n';
      }
      if (invalidFields.includes('bemail')) {
        message += 'Business Email\n';
      }
      if (invalidFields.includes('bcity')) {
        message += 'Business City\n';
      }
      if (invalidFields.includes('binsurance')) {
        message += 'Business Insurance\n';
      }

      this.presentMissingFieldsAlert(message);
    }

    // If no files are selected, show a specific alert
    if (this.filesArray.length === 0) {
      this.presentMissingFieldsAlert('Please select at least one image.');
    }
  }
}


// Alert to show missing required fields
async presentMissingFieldsAlert(missingFields: string): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Missing Fields',
    message: `The following fields are required: ${missingFields}`,
    cssClass: 'error-alert',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          history.back()
        }
      }
    ]
  });

  await alert.present();
}

// Success alert after successful form submission
async presentSuccessAlert(): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Success',
    message: 'Your account has been successfully registered.',
    cssClass: 'success-alert',
    buttons: [
      {
        text: 'OK',
        handler: () => {
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
