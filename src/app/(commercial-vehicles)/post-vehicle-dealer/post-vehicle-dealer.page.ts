import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-post-vehicle-dealer',
  templateUrl: './post-vehicle-dealer.page.html',
  styleUrls: ['./post-vehicle-dealer.page.scss'],
  standalone:false,
})
export class PostVehicleDealerPage implements OnInit {

  userID: string |'';
back() {
  history.back()
}

  userForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';
  cities!: string[];
  selectedFiles: FileList | null = null; // Initialize selectedFiles variable
selectedFileArray: FileList | null = null;
 
   filesArray: File[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertController: AlertController,
     private loadingController: LoadingController, private route: Router, private router: ActivatedRoute,
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
      bemail: ['', [Validators.required, Validators.email]],
      bwebsite: ['', Validators.required],
      bcity: ['', Validators.required]  // Initialize bcity with an empty value
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
  // Mark all fields as touched to show validation messages
  this.userForm.markAllAsTouched();

  // Check if the form is valid
  if (this.userForm.valid) {
    console.log('Form data:', this.userForm.value);

    // Check if at least one image is selected
    if (this.filesArray.length === 0) {
      this.presentErrorAlert('Please select at least one image.');
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    
    // Append form controls to FormData
    Object.keys(this.userForm.controls).forEach((controlName) => {
      const control = this.userForm.get(controlName);
      if (Array.isArray(control!.value)) {
        formData.append(controlName, JSON.stringify(control!.value));
      } else {
        formData.append(controlName, control!.value);
      }
    });

    // Append the files to FormData
    for (let i = 0; i < this.filesArray.length; i++) {
      formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
    }

    // Append user ID to FormData
    formData.append('user_id', this.userID);

    // Show loading spinner while the request is in progress
    const loading = await this.loadingController.create({
      message: 'Saving your data...',
      spinner: 'circles',
    });
    await loading.present();

    // Make the API request to post the dealer business data
    this.userService.postDealerBusiness(formData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        this.presentSuccessAlert();
      },
      (error) => {
        console.error('Error saving data:', error);
        // Optionally, handle the error here (e.g., show an alert)
      },
      () => {
        // Dismiss the loading spinner after the request completes (success or error)
        loading.dismiss();
      }
    );
  } else {
    // Collect missing fields
    const missingFields: string[] = [];
    Object.keys(this.userForm.controls).forEach((controlName) => {
      const control = this.userForm.get(controlName);
      if (control!.invalid && control!.hasError('required')) {
        missingFields.push(this.getFieldLabel(controlName));
      }
    });

    // Add check for missing files
    if (this.filesArray.length === 0) {
      missingFields.push('Image(s)');
    }

    const alertMessage =
      missingFields.length > 0
        ? `Please fill the following required fields: \n${missingFields.join('\n')}`
        : 'Please fill in all required fields.';

    this.presentErrorAlert(alertMessage);
  }
}


getFieldLabel(field: string): string {
  const fieldLabels: { [key: string]: string } = {
    bname: 'Business Name',
    baddress: 'Business Address',
    bdetail: 'Business Detail',
    bmobile: 'Mobile Number',
    bemail: 'Email',
    bwebsite: 'Website',
    bcity: 'City',
  };
  return fieldLabels[field] || field;
}
async presentErrorAlert(message: string): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Error',
    message: message,
    cssClass: 'error-alert',
    buttons: ['OK'],
  });
  await alert.present();
}


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
