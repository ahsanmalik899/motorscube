import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CommercialService } from 'src/app/(services)/commercial.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({

  selector: 'app-post-vehicle-importer',
  templateUrl: './post-vehicle-importer.page.html',
  styleUrls: ['./post-vehicle-importer.page.scss'],
  standalone:false,
})
export class PostVehicleImporterPage implements OnInit {
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

  constructor(private formBuilder: FormBuilder,private commercialservice:CommercialService, private userService: UserService, private alertController: AlertController, private router: ActivatedRoute,
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
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      bname: ['', Validators.required],
      baddress: [''],
      bdetail: [''],
      bmobile: ['', Validators.required],
      bemail: ['', Validators.email],
      bwebsite: [''],
      bcity: ['', ]  // Initialize bcity with an empty value
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
    
    // Ensure the bcityControl is not null before proceeding
    if (bcityControl) {
      bcityControl.clearValidators(); // Clear any existing validators
      bcityControl.reset(); // Reset control to clear any previous value
  
      // Update city options based on fetched cities
      if (this.cities && this.cities.length > 0) {
        // Here, you can update the city options for the form control, e.g., adding them to a dropdown
        // For example, if you're updating a select control with options:
        const selectElement = document.getElementById('citySelect') as HTMLSelectElement;
        this.cities.forEach(city => {
          const option = document.createElement('option');
          option.text = city;
          selectElement.add(option);
        });
      }
    } else {
      console.error('bcity control is not available.');
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
    // Check if event.target.files is not null
    if (event.target.files) {
      this.selectedFiles = event.target.files; // TypeScript will infer this as FileList
  
      // Ensure imageContainer exists and is not null
      const imageContainer = document.getElementById('imageContainer');
      const addmoreContainer = document.getElementById('addmoreContainer');
  
      // Hide addmoreContainer if it exists
      if (addmoreContainer) {
        addmoreContainer.style.display = 'none';
      }
  
      // Check if imageContainer is not null and if there are selected files
      if (imageContainer && this.selectedFiles && this.selectedFiles.length > 0) {
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
  
          reader.readAsDataURL(file);
        }
  
        // Store the selected files in filesArray
        for (let i = 0; i < this.selectedFiles.length; i++) {
          this.filesArray.push(this.selectedFiles[i]);
        }
        console.log('Files array:', this.filesArray);
      } else {
        console.error('Image container is null or no files selected.');
      }
    } else {
      console.error('No files selected.');
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
// }
saveUser(): void {
  // Check if the form is valid
  if (this.userForm.valid) {
    // Log form data to console
    console.log('Form data:', this.userForm.value);

    // Proceed with form and file submission
    this.submitFormData();
  } else {
    // Form is invalid, mark all fields as touched
    this.userForm.markAllAsTouched();

    // Show specific alert for each required field that is invalid
    this.showRequiredFieldAlert();
  }
}

showRequiredFieldAlert(): void {
  const formControls = this.userForm.controls;
  const requiredFields: string[] = [];

  // Loop through all the form controls to check for required fields
  Object.keys(formControls).forEach(controlName => {
    const control = formControls[controlName];

    // Check if the control is required and not filled
    if (control.hasValidator(Validators.required) && !control.value) {
      requiredFields.push(controlName); // Add to required fields if not filled
    }
  });

  if (requiredFields.length > 0) {
    const fieldNames = requiredFields.map(field => this.getFieldName(field)).join(', ');
    this.presentFieldAlert(fieldNames);
  }
}

getFieldName(field: string): string {
  const fieldNames: { [key: string]: string } = {
    bname: 'Business Name',
    bmobile: 'Business Mobile',
    bemail: 'Business Email'
    // Add other form fields here as needed
  };

  return fieldNames[field] || field;
}

presentFieldAlert(fieldNames: string): void {
  this.alertController.create({
    header: 'Missing Required Fields',
    message: `Please fill in the following fields: ${fieldNames}.`,
    buttons: ['OK']
  }).then(alert => alert.present());
}

async submitFormData(): Promise<void> {
  // Create a DataTransfer object to hold files
  const filesList = new DataTransfer();
  for (const file of this.filesArray) {
    filesList.items.add(file);
  }

  // Prepare FormData object for submission
  const formData = new FormData();

  // Iterate over each form control in the userForm and append its value to formData
  Object.keys(this.userForm.controls).forEach(controlName => {
    const control = this.userForm.get(controlName);

    if (control) {
      if (Array.isArray(control.value)) {
        formData.append(controlName, JSON.stringify(control.value));
      } else {
        formData.append(controlName, control.value);
      }
    } else {
      console.error(`Control for ${controlName} is null`);
    }
  });

  // Append files to FormData object
  for (let i = 0; i < this.filesArray.length; i++) {
    formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
  }

  // Log the FormData object for debugging (optional)
  formData.forEach((value, key) => {
    console.log(key, value);
  });
  formData.append('user_id', this.userID);

  // Create and show the loader while the form is being submitted
  const loading = await this.loadingController.create({
    message: 'Submitting your data...',
    spinner: 'circles',  // You can choose a different spinner type if needed
  });
  await loading.present();

  // Now you can use the FormData for the API call
  this.commercialservice.postImporterBusiness(formData).subscribe(
    (response) => {
      console.log('Data saved successfully:', response);
      this.presentSuccessAlert();  // Show success alert after saving

      // Dismiss the loader after successful submission
      loading.dismiss();
    },
    (error) => {
      console.error('Error saving data:', error);
     
      // Dismiss the loader after error
      loading.dismiss();
    }
  );
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
          this.route.navigateByUrl('/commercial-vehicle-buseness', { skipLocationChange: true }).then(() => {
            this.route.navigate([this.router.url]);
          });
        }
      }
    ]
  });

  await alert.present();
}






async presentFileSelectionAlert(): Promise<void> {
  const alert = await this.alertController.create({
    header: 'File Selection Required',
    message: 'Please select at least one file to proceed.',
    cssClass: 'error-alert',
    buttons: ['OK']
  });

  await alert.present();
}




}
