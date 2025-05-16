import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { MachineryService } from 'src/app/(services)/machinery.service';
import { PlantsService } from 'src/app/(services)/plants.service';
import { UserService } from 'src/app/(services)/user.service';

@Component({
  selector: 'app-post-plant-school',
  templateUrl: './post-plant-school.page.html',
  styleUrls: ['./post-plant-school.page.scss'],
  standalone:false,
})
export class PostPlantSchoolPage implements OnInit {

  
back() {
history.back()
}
userID: string |'';
  userForm: FormGroup;
  showService1 = true;
  types!: string[];
subtypes!: string[];
  showService2 = false;
  showService3 = false;
  showPassword = false;
  showButton = true; // Initially show the button
  passwordToggleIcon = 'eye';
  cities: string[] = []; // Initialize with an empty array to avoid 'undefined' error
  selectedFiles: FileList | null = null; // Initialize selectedFiles variable
  selectedFileArray: FileList | null = null;
  filesArray: File[] = [];
  DealIns!:string[];
  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService, 
    private plantservice:PlantsService,
    private alertController: AlertController,
    private route: Router, private router: ActivatedRoute,
         private loadingController: LoadingController,
  ) {
    this.userForm = this.formBuilder.group({
      bcity: [''], // Assuming 'bcity' is the form control for city selection
      dealIn:[''],
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
     this.fetchtype();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      bname: ['', Validators.required],
      baddress: [''],
      dealIn:[''],
      bdetail: [''],
      bmobile: ['', Validators.required],
      bemail: ['',  Validators.email],
      bwebsite: [''],
      bcity: ['', Validators.required],  // Initialize bcity with an empty value
      bservice1: [''],
      bservice2: [''],
      bservice3: [''],
      bstartTime: [''],
      bendTime: [''],
       type:[''],
      subtype:[''],
      
    });

    this.fetchCities();
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
  fetchDealIn() {
    // Fetch city names from the backend
    this.plantservice.getModels().subscribe({
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
    if (selectElement) {
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
  }

  updateCityOptions() {
    const bcityControl = this.userForm.get('bcity');
    if (bcityControl) {  // Check if bcityControl is not null
      bcityControl.clearValidators(); // Clear any existing validators
      bcityControl.reset(); // Reset control to clear any previous value

      // Update city options based on fetched cities
      this.cities.forEach(city => {
        // Add logic to update the city options
      });
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

    // Hide addmoreContainer if it exists
    if (addmoreContainer) {
      addmoreContainer.style.display = 'none';
    }

    // Iterate over each selected file
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const file: File = this.selectedFiles[i];
        const reader = new FileReader();

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
          removeButton.innerHTML = '<img src="../../../assets/cross.webp" style="height: 20px; width: 20px; margin-left: 0px; margin-top: 0px;" />';
          removeButton.style.position = 'absolute';
          removeButton.style.top = '5px';
          removeButton.style.right = '5px';
          removeButton.onclick = () => {
            // Function to remove the image when the button is clicked
            if (imageContainer) {
              imageContainer.removeChild(imageDiv);
            }
          };

          // Append the image and button to the div
          imageDiv.appendChild(selectedImage);
          imageDiv.appendChild(removeButton);

          // Append the div to the image container
          if (imageContainer) {
            imageContainer.appendChild(imageDiv);
            imageContainer.style.display = 'block';
          }
        })(file, reader);

        reader.readAsDataURL(file);
      }

      // Add selected files to the filesArray
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.filesArray.push(this.selectedFiles[i]);
      }

      console.log('Files array:', this.filesArray);
    }
  }

  async saveUser(): Promise<void> {
    // Log validation errors if any
    this.logValidationErrors();
  
    // Check if the form is valid
    if (this.userForm.invalid) {
      console.log('Form is invalid. Data will not be submitted.');
      this.userForm.markAllAsTouched();  // Mark all fields as touched to trigger validation messages
      return;  // Prevent form submission if invalid
    }
  
    // Show the loader while processing the form submission
    const loading = await this.loadingController.create({
      message: 'Submitting your data...',
      spinner: 'circles',  // You can customize this spinner type if needed
    });
    await loading.present();
  
    // Proceed only if the form is valid
    console.log('Form data:', this.userForm.value);
  
    // Prepare form data
    const filesList = new DataTransfer();
    for (const file of this.filesArray) {
      filesList.items.add(file);
    }
  
    const fileNames: string[] = [];
    for (const file of this.filesArray) {
      fileNames.push(file.name);
    }
    console.log(fileNames);
  
    const formData = new FormData();
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
  
    for (let i = 0; i < this.filesArray.length; i++) {
      formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
    }
  
    formData.forEach((value, key) => {
      console.log(key, value);
    });
  
    console.log('FormData Object:', formData);
    formData.append('user_id', this.userID);
  
    // Call service to submit data
    this.plantservice.postDrivingSchool(formData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
        this.presentSuccessAlert();  // Show success alert after successful submission
  
        // Dismiss the loader after successful submission
        loading.dismiss();
      },
      (error) => {
        console.error('Error saving data:', error);
        // Handle error if needed
  
        // Dismiss the loader even if there is an error
        loading.dismiss();
      }
    );
  }
  
  
  // Helper method to log validation errors
  logValidationErrors(): void {
    const fieldLabels: { [key: string]: string } = {
      bname: 'Business Name',
      baddress: 'Business Address',
      bdetail: 'Business Details',
      bmobile: 'Business Mobile',
      bemail: 'Business Email',
      bwebsite: 'Business Website',
      bcity: 'Business City',
      bservice1: 'Business Service 1',
      bservice2: 'Business Service 2',
      bservice3: 'Business Service 3',
      bstartTime: 'Business Start Time',
      bendTime: 'Business End Time'
    };
  
    const requiredFields: string[] = [];  // Array to store required fields with missing values
  
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
  
      // Check if the field has the 'required' validator and is invalid (empty or missing)
      if (control && control.hasError('required') && control.value === '') {
        requiredFields.push(fieldLabels[field] || field);  // Add the field label if it's required and empty
      }
    });
  
    if (requiredFields.length > 0) {
      console.error('Required fields are empty:', requiredFields.join(', '));
    }
  
    this.presentRequiredFieldsAlert(requiredFields);
  }
  
  // Show an alert for required fields that are empty
  async presentRequiredFieldsAlert(requiredFields: string[]): Promise<void> {
    if (requiredFields.length > 0) {
      const alert = await this.alertController.create({
        header: 'Missing Required Fields',
        message: `Please fill in the following required fields: ${requiredFields.join(', ')}`,
        cssClass: 'error-alert',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }
  

// Show an alert for validation errors
async presentInvalidFieldsAlert(invalidFields: string[], emptyFields: string[]): Promise<void> {
  let message = '';
  if (invalidFields.length > 0) {
    message += `Invalid fields: ${invalidFields.join(', ')}. `;
  }
  if (emptyFields.length > 0) {
    message += `Empty fields: ${emptyFields.join(', ')}.`;
  }

  const alert = await this.alertController.create({
    header: 'Validation Errors',
    message: message,
    cssClass: 'error-alert',
    buttons: ['OK']
  });

  await alert.present();
}


  async presentSuccessAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Driving School posted successfully!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.route.navigateByUrl('/plant-buseness', { skipLocationChange: true }).then(() => {
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
  this.plantservice.getModels().subscribe({
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
  this.plantservice.getVersions(formData).subscribe({
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
