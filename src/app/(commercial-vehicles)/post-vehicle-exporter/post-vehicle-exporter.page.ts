import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-post-vehicle-exporter',
  templateUrl: './post-vehicle-exporter.page.html',
  styleUrls: ['./post-vehicle-exporter.page.scss'],
  standalone:false,
})
export class PostVehicleExporterPage implements OnInit {
back() {
history.back();
}
userID: string |'';
  userForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';
  cities: string[] = [];
  countries: string[]=[];
  selectedFiles: FileList | null = null; // Initialize selectedFiles variable
selectedFileArray: FileList | null = null;

   filesArray: File[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertController: AlertController, private router: ActivatedRoute,
         private loadingController: LoadingController,private route: Router,
  ) {
    this.userForm = this.formBuilder.group({
      bcountries: [''],
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
      bcountry: [''],
      bcity: ['']  // Initialize bcity with an empty value
    });


    this.fetchCities();
    this.fetchCountries();

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
    // Access the 'bcity' form control
    const bcityControl = this.userForm.get('bcity');
  
    if (bcityControl) {
      // Clear any existing validators
      bcityControl.clearValidators();
      // Reset the control value (optional)
      bcityControl.reset();
  
      // Clear previous cities
      bcityControl.setValue(null); // Or reset to a default value
  
      // Assuming 'this.cities' is populated with city data.
      // Dynamically update city options in the select element
      const selectElement = document.getElementById('bcity') as HTMLSelectElement;
  
      // Clear any existing options before appending new ones
      if (selectElement) {
        selectElement.innerHTML = ''; // Clear existing options
  
        // Add a default option (optional)
        const defaultOption = document.createElement('option');
        defaultOption.text = 'Select a City';
        defaultOption.value = ''; // Empty value
        selectElement.appendChild(defaultOption);
  
        // Loop through the cities array and create new option elements
        this.cities.forEach(city => {
          const option = document.createElement('option');
          option.text = city;
          option.value = city; // Or set value based on your data
          selectElement.appendChild(option);
        });
  
        // Optionally, you can set the first option as selected
        selectElement.selectedIndex = 0; // This will select the first option
      }
    }
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
    // Access the selected files
    this.selectedFiles = event.target.files;
  
    // Get references to image container and add-more container
    const imageContainer = document.getElementById('imageContainer');
    const addmoreContainer = document.getElementById('addmoreContainer');
  
    // Hide the "addmoreContainer" if it exists
    if (addmoreContainer) {
      addmoreContainer.style.display = 'none';
    }
  
    // Ensure that selectedFiles exists and has at least one file
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      // Iterate over each selected file
      Array.from(this.selectedFiles).forEach((file: File) => {
        const reader = new FileReader();
  
        // Use closure to handle the current file and reader
        reader.onload = ((selectedFile: File, fileReader: FileReader) => () => {
          if (imageContainer) { // Ensure imageContainer exists
            // Create the image element
            const selectedImage = document.createElement('img');
            selectedImage.style.maxWidth = '100px';
            selectedImage.style.maxHeight = '100px';
            selectedImage.style.minWidth = '100px';
             selectedImage.style.borderRadius='5px'
            selectedImage.style.minHeight = '100px';
            selectedImage.style.border = '2px solid black '; 
            selectedImage.style.marginRight = '5px'; // Add margin between images
            selectedImage.src = fileReader.result as string;
  
            // Create a div to hold the image and the remove button
            const imageDiv = document.createElement('div');
            imageDiv.style.position = 'relative';
            imageDiv.style.display = 'inline-block'; // Display images inline
  
            // Create the remove button
            const removeButton = document.createElement('button');
            removeButton.innerHTML = '<img src="../../../assets/cross.webp" style="height: 20px; width: 20px; margin-left: 0px; margin-top: 0px;" fill="clear;"/>';
            removeButton.style.position = 'absolute';
            removeButton.style.top = '5px';
            removeButton.style.right = '5px';
  
            // Add click event to remove the image from the container
            removeButton.onclick = () => {
              if (imageContainer) {
                imageContainer.removeChild(imageDiv);
              }
            };
  
            // Append the image and remove button to the image div
            imageDiv.appendChild(selectedImage);
            imageDiv.appendChild(removeButton);
  
            // Append the image div to the image container
            imageContainer.appendChild(imageDiv);
            imageContainer.style.display = 'block'; // Make sure the container is visible
          }
        })(file, reader);
  
        // Read the file as a data URL (to display image)
        reader.readAsDataURL(file);
      });
  
      // Update the filesArray with the selected files
      this.filesArray.push(...Array.from(this.selectedFiles));
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
// }
saveUser(): void {
  // First, check if the form is valid
  if (this.userForm.valid) {
    // If form is valid, log the form data and proceed
    console.log('Form data:', this.userForm.value);

    // Proceed with file and form data submission
    this.submitFormData();
  } else {
    // If form is invalid, mark all fields as touched to display validation errors
    this.userForm.markAllAsTouched();

    // Log or show missing required fields
    this.logRequiredFields();
  }
}

logRequiredFields(): void {
  const requiredFields: string[] = [];
  const fieldLabels: { [key: string]: string } = {
    bname: 'Business Name',
    baddress: 'Business Address',
    bdetail: 'Business Details',
    bmobile: 'Business Mobile',
    bemail: 'Business Email',
    bwebsite: 'Business Website',
    bcountry: 'Business Country',
    bcity: 'Business City',
  };

  // Check each form control to find required fields that are empty
  Object.keys(this.userForm.controls).forEach(field => {
    const control = this.userForm.get(field);
    if (control && control.hasError('required') && control.value === '') {
      requiredFields.push(fieldLabels[field] || field);
    }
  });

  // If any required fields are empty, show a message or alert
  if (requiredFields.length > 0) {
    const message = `Please fill in the following required fields: ${requiredFields.join(', ')}`;
    console.error(message);

    // Optionally show an alert to the user
    this.presentRequiredFieldsAlert(requiredFields);
  }
}

async presentRequiredFieldsAlert(requiredFields: string[]): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Missing Required Fields',
    message: `Please fill in the following required fields: ${requiredFields.join(', ')}`,
    cssClass: 'error-alert',
    buttons: ['OK']
  });

  await alert.present();
}

async submitFormData(): Promise<void> {
  // Show the loader while processing the form submission
  const loading = await this.loadingController.create({
    message: 'Submitting your data...',
    spinner: 'circles',  // You can customize this spinner type if you want
  });
  await loading.present();

  // Handle file selection and convert selected files into a DataTransfer object
  const filesList = new DataTransfer();
  for (const file of this.filesArray) {
    filesList.items.add(file);
  }

  // Initialize an array to store file names
  const fileNames: string[] = [];

  // Loop through each file in filesArray and extract the file name
  for (const file of this.filesArray) {
    fileNames.push(file.name);
  }

  // Print or use the file names as needed
  console.log('Selected file names:', fileNames);

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
    }
  });

  // Append each file to the FormData object
  for (let i = 0; i < this.filesArray.length; i++) {
    formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
  }

  // Log the FormData object for debugging
  formData.forEach((value, key) => {
    console.log(key, value);
  });

  // Add the user ID to FormData
  formData.append('user_id', this.userID);

  // Submit the FormData object to the backend API
  this.userService.postExporterBusiness(formData).subscribe(
    (response) => {
      console.log('Data saved successfully:', response);
      this.presentSuccessAlert();  // Optionally show a success message

      // Dismiss the loader after successful submission
      loading.dismiss();
    },
    (error) => {
      console.error('Error saving data:', error);
      // You can show an error alert or handle the error as needed
      loading.dismiss();  // Dismiss the loader even in case of error
    }
  );
}


async presentSuccessAlert(): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Success',
    message: 'Your business has been successfully registered.',
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

