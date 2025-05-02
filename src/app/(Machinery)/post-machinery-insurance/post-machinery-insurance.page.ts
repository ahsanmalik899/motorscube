import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BikeService } from 'src/app/(services)/bike.service';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-post-machinery-insurance',
  templateUrl: './post-machinery-insurance.page.html',
  styleUrls: ['./post-machinery-insurance.page.scss'],
  standalone:false,
})
export class PostMachineryInsurancePage implements OnInit {


  DealIns!: string[];
back() {
history.back();
}

userID: string |'';
  userForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';
  cities: string[]=[];
  selectedFiles: FileList | null = null; // Initialize selectedFiles variable
selectedFileArray: FileList | null = null;

   filesArray: File[] = [];

  constructor(private formBuilder: FormBuilder,private machineryservice:MachineryService, private userService: UserService, private alertController: AlertController, private router: ActivatedRoute,
         private loadingController: LoadingController,private route: Router,
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
    this.fetchDealIn();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      bname: ['', Validators.required],
      baddress: [''],
      bdetail: [''],
      bmobile: ['', Validators.required],
      bemail: ['',  Validators.email],
      bwebsite: [''],
      bcity: ['', ],  // Initialize bcity with an empty value
      binsurance: ['',Validators.required],
      dealIn:['']
    });


    this.fetchCities();

  }
  fetchCities() {
    // Fetch city names from the backend
    this.userService.getCities().subscribe({
      next: (data) => {
        this.cities = data;
      //console.log('Fetched cities:', this.cities);
      //console.log('Fetched cities indata:', data);
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
    // Get the control for 'bcity'
    const bcityControl = this.userForm.get('bcity');
  
    // Check if bcityControl is not null
    if (bcityControl) {
      // Clear any existing validators
      bcityControl.clearValidators();
  
      // Reset control to clear any previous value
      bcityControl.reset();
  
      // Update city options based on fetched cities
      if (this.cities && this.cities.length > 0) {
        this.cities.forEach(city => {
          // Populate the select options (for example, if using a dropdown)
          // You might want to update a select dropdown here
          // Example: add each city to a select element
        });
      } else {
        console.warn('No cities available to update options.');
      }
    } else {
      console.error('Control "bcity" not found in the form.');
    }
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
    placeholderOption.text = '';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    selectElement.add(placeholderOption);
  
    // Add new options based on fetched cities
    this.DealIns.forEach(dealIn => {
      const option = document.createElement('option');
      option.text = dealIn;
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

  onFileSelected(event: any): void {
    // Ensure that event.target.files is not null
    const files = event.target.files;
  
    if (!files) {
      console.error('No files selected');
      return; // Exit if no files are selected
    }
  
    // Assign files to selectedFiles
    this.selectedFiles = files;
  
    // Ensure selectedFiles is not null
    if (!this.selectedFiles) {
      console.error('selectedFiles is null');
      return; // Exit if selectedFiles is null
    }
  
    const imageContainer = document.getElementById('imageContainer');
    const addmoreContainer = document.getElementById('addmoreContainer');
  
    // Hide addmoreContainer if it exists
    if (addmoreContainer) {
      addmoreContainer.style.display = 'none';
    }
  
    // Check if imageContainer exists before manipulating it
    if (!imageContainer) {
      console.error('Image container not found!');
      return; // Exit if imageContainer is not found
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
        selectedImage.style.minHeight = '100px';
         selectedImage.style.borderRadius='5px'
        selectedImage.style.border = '2px solid black '; 
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
          imageContainer.removeChild(imageDiv);
        };
  
        // Append the image and button to the div
        imageDiv.appendChild(selectedImage);
        imageDiv.appendChild(removeButton);
  
        // Append the div to the image container
        imageContainer.appendChild(imageDiv);
        imageContainer.style.display = 'block';
      })(file, reader);
  
      // Read file as a data URL
      reader.readAsDataURL(file);
    }
  
    // Add selected files to the filesArray
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.filesArray.push(this.selectedFiles[i]);
    }
  
    // Log the files array
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
    this.machineryservice.postInsuranceBusiness(formData).subscribe(
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

      this.presentInvalidFieldsAlert(message);
    }

    // If no files are selected, show a specific alert
    if (this.filesArray.length === 0) {
      this.presentInvalidFieldsAlert('Please select at least one image.');
    }
  }
}


// Success alert function
async presentSuccessAlert(): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Success',
    message: 'Your business has been successfully registered.',
    cssClass: 'success-alert',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.route.navigateByUrl('/machinery-buseness', { skipLocationChange: true }).then(() => {
            this.route.navigate([this.router.url]);
          });
        }
      }
    ]
  });
  await alert.present();
}

// File selection alert function


// Invalid fields alert function
async presentInvalidFieldsAlert(message: string): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Fields Required',
    message: message,
    cssClass: 'error-alert',
    buttons: ['OK'],
  });
  await alert.present();
}

}

