import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-post-vehicle-workshop',
  templateUrl: './post-vehicle-workshop.page.html',
  styleUrls: ['./post-vehicle-workshop.page.scss'],
  standalone:false,
})
export class PostVehicleWorkshopPage implements OnInit {

back() {
history.back();
}
userID: string |'';
  userForm: FormGroup;
  showService1 = true;
  showService2 = false;
  showService3 = false;
  showService4 = false;
  showPassword = false;
  showButton = true; // Initially show the button
  passwordToggleIcon = 'eye';
  cities: string[]=[];
  categories: string[] = ['Electrical', 'Mechanical', 'Body Work', 'Other'];
  selectedFiles: FileList | null = null; // Initialize selectedFiles variable
selectedFileArray: FileList | null = null;

   filesArray: File[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertController: AlertController, private router: ActivatedRoute,
         private loadingController: LoadingController,private route: Router,
  ) {
    this.userForm = this.formBuilder.group({
      bcity: [''], // Assuming 'bcity' is the form control for city selection
      bcategory:['']
    });
    this.userID = sessionStorage.getItem('userId')??'';
    if(this.userID==''){
      this.userID = localStorage.getItem('userId')??'';
    }
   }

  ngOnInit(): void {
    this.initForm();
    this.fetchCities();
    this.fetchCategory();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      bname: ['', Validators.required],
      baddress: [''],
      bdetail: [''],
      bmobile: ['', Validators.required],
      bemail: ['', Validators.email],
      bwebsite: ['',],
      bcity: ['', ],  // Initialize bcity with an empty value
      bservice1: ['',],
      bservice2: ['',],
      bservice3: ['',],
      bservice4: ['',],
      bstartTime: [''],
      bendTime: ['', ],
      bcategory: [[], Validators.required]
    });


 
  

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
    
    // Check if bcityControl is not null
    if (bcityControl) {
      bcityControl.clearValidators(); // Clear any existing validators
      bcityControl.reset(); // Reset control to clear any previous value
  
      // Update city options based on fetched cities
      this.cities.forEach(city => {
        // Your logic to update the city options goes here
      });
    } else {
      console.error('City control "bcity" not found');
    }
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
    // Ensure selectedFiles is not null
    this.selectedFiles = event.target.files;
    if (!this.selectedFiles) {
      return; // Exit early if no files were selected
    }
  
    const imageContainer = document.getElementById('imageContainer');
    const addmoreContainer = document.getElementById('addmoreContainer');
  
    // Check if addmoreContainer exists before hiding it
    if (addmoreContainer) {
      addmoreContainer.style.display = 'none';
    }
  
    // Ensure imageContainer is not null before proceeding
    if (!imageContainer) {
      console.error('Image container not found.');
      return; // Exit if imageContainer is not in the DOM
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
         selectedImage.style.borderRadius='5px'
        selectedImage.style.minHeight = '100px';
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
  
    // Add selected files to the filesArray if files were selected
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.filesArray.push(this.selectedFiles[i]);
      }
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
    // Show the loader while processing the form submission
    const loading = await this.loadingController.create({
      message: 'Submitting your data...',
      spinner: 'circles',  // You can customize this spinner type if you want
    });
    await loading.present();

    // Log form data to console
    console.log('Form data:', this.userForm.value);

    // Proceed with file handling and form submission logic
    const filesList = new DataTransfer();
    for (const file of this.filesArray) {
      filesList.items.add(file);
    }

    // Initialize an array to store file names
    const fileNames: string[] = [];
    // Loop through each file in filesArray
    for (const file of this.filesArray) {
      const fileName = file.name;
      fileNames.push(fileName);
    }

    console.log(fileNames);

    // Convert DataTransfer to FormData
    const formData = new FormData();

    // Iterate over each control in the form and append its value to formData
    Object.keys(this.userForm.controls).forEach(controlName => {
      const control = this.userForm.get(controlName);

      if (control && control.value !== null && control.value !== undefined) {
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

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    // Append user ID to the FormData object
    formData.append('user_id', this.userID);

    // Submit the form data using your userService
    this.userService.postWorkshopBusiness(formData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        this.presentSuccessAlert(); // Show success alert

        // Dismiss the loader after successful submission
        loading.dismiss();
      },
      (error) => {
        console.error('Error saving data:', error);
        // Handle error if needed

        // Dismiss the loader even in case of an error
        loading.dismiss();
      }
    );
  } else {
    // Form is invalid, mark all fields as touched to display validation messages
    this.userForm.markAllAsTouched();

    // Collect missing required fields
    const missingFields: string[] = [];
    const fieldNameMap: { [key: string]: string } = {
      bname: 'Business Name',
      baddress: 'Business Address',
      bdetail: 'Business Details',
      bmobile: 'Business Mobile Number',
      bemail: 'Business Email',
      bwebsite: 'Business Website',
      bcity: 'Business City',
      bcountry: 'Business Country',
      bmake: 'Business Make',
      bstartTime: 'Start Time',
      bendTime: 'End Time',
      bcategory: 'Business Category',
    };

    Object.keys(this.userForm.controls).forEach(controlName => {
      const control = this.userForm.get(controlName);
      if (control && control.errors && control.errors['required']) {
        const fieldName = fieldNameMap[controlName] || controlName;
        missingFields.push(fieldName);
      }
    });

    // Show alert with missing required fields if any
    if (missingFields.length > 0) {
      const missingFieldsMessage = `The following fields are required: ${missingFields.join(', ')}`;
      this.presentMissingFieldsAlert(missingFieldsMessage); // Show alert with missing fields
    }
  }
}


// Function to show missing fields alert
async presentMissingFieldsAlert(missingFieldsMessage: string): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Missing Fields',
    message: missingFieldsMessage,
    cssClass: 'error-alert',
    buttons: ['OK']
  });
  await alert.present();
}

// Function to show success alert
async presentSuccessAlert(): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Success',
    message: 'Your showroom business has been successfully posted.',
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
