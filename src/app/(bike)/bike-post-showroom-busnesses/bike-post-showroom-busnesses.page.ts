import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/(services)/bike.service';
@Component({
  selector: 'app-bike-post-showroom-busnesses',
  templateUrl: './bike-post-showroom-busnesses.page.html',
  styleUrls: ['./bike-post-showroom-busnesses.page.scss'],
  standalone: false,
})
export class BikePostShowroomBusnessesPage implements OnInit {

  back() {
    history.back();
    }
    userID: string |'';
      userForm: FormGroup;
      showPassword = false;
      passwordToggleIcon = 'eye';
      cities: string[]=[];
      countries: string[]=[];
      makes: string[]=[];
    
      selectedFiles: FileList | null = null; // Initialize selectedFiles variable
    selectedFileArray: FileList | null = null;
    
       filesArray: File[] = [];
    
      constructor(private bikeService: BikeService, private formBuilder: FormBuilder, private userService: UserService, private alertController: AlertController, private router: ActivatedRoute,
            private loadingController: LoadingController,private route: Router,
      ) {
        this.userForm = this.formBuilder.group({
          bcity: [''], // Assuming 'bcity' is the form control for city selection
          bcountries: [''], // Assuming 'bcity' is the form control for city selection
          bmake:['']
        });
        this.userID = sessionStorage.getItem('userId')??'';
        if(this.userID==''){
          this.userID = localStorage.getItem('userId')??'';
        }
       }
    
      ngOnInit(): void {
        this.initForm();
        this.fetchCities();
        this.fetchMakes();
        this.fetchCountries();
      }
    
      initForm(): void {
        this.userForm = this.formBuilder.group({
          bname: ['', Validators.required],
          baddress: [''],
          bdetail: [''],
          bmobile: ['', Validators.required],
          bemail: ['', Validators.email],
          bwebsite: [''],
          bcity: [''],  // Initialize bcity with an empty value
          bcountry: [''],  // Initialize bcity with an empty value
          bmake: ['', ],
          bstartTime: ['',],
          bendTime: ['', ]
        });
    
    
      
    
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
        
        // Check if bcityControl is not null before proceeding
        if (bcityControl) {
          bcityControl.clearValidators(); // Clear any existing validators
          bcityControl.reset(); // Reset control to clear any previous value
      
          // Update city options based on fetched cities
          this.cities.forEach(city => {
            // Add logic to update the city options here
          });
        } else {
          console.error('City control "bcity" not found in the form');
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
    
    
    fetchMakes() {
      // Fetch city names from the backend
      this.bikeService.getMakes().subscribe({
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
      placeholderOption.text = '';
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      selectElement.add(placeholderOption);
    
      // Add new options based on fetched cities
      this.makes.forEach(make => {
        const option = document.createElement('option');
        option.text = make;
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
    // }
    async saveUser(): Promise<void> {
      // Check if the form is valid
      if (this.userForm.valid) {
        // Log form data to console (you can replace this with the actual saving logic)
        console.log('Form data:', this.userForm.value);
    
        // Create FormData for the API call
        const formData = new FormData();
        
        // Add form controls to FormData
        Object.keys(this.userForm.controls).forEach(controlName => {
          const control = this.userForm.get(controlName);
    
          // Check if control exists before appending its value
          if (control) {
            // If control value is an array (like file inputs), serialize it
            if (Array.isArray(control.value)) {
              formData.append(controlName, JSON.stringify(control.value));  // Serialize array as JSON
            } else {
              formData.append(controlName, control.value);  // Append regular value
            }
          }
        });
    
        // Append each selected file to FormData object
        for (let i = 0; i < this.filesArray.length; i++) {
          formData.append('images[]', this.filesArray[i], this.filesArray[i].name);
        }
        formData.append('user_id', this.userID);
    
        // Log FormData to console for inspection
        formData.forEach((value, key) => {
          console.log(key, value);
        });
        
        // Show the loading spinner
        const loading = await this.loadingController.create({
          message: 'Saving your data...',
          spinner: 'circles',  // You can change the spinner style
        });
        await loading.present();
    
        // Now you can use FormData for your API call
        this.bikeService.postShowroomBusiness(formData).subscribe(
          (response) => {
            console.log('Data saved successfully:', response);
            this.presentSuccessAlert();  // Show success alert
          },
          (error) => {
            console.error('Error saving data:', error);
            // Optionally handle the error (show error alert, etc.)
          },
          () => {
            // Dismiss the loading spinner when the request is completed (either success or error)
            loading.dismiss();
          }
        );
      } else {
        // Form is invalid, mark all fields as touched
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
        };
    
        Object.keys(this.userForm.controls).forEach(controlName => {
          const control = this.userForm.get(controlName);
          if (control && control.errors && control.errors['required']) {
            const fieldName = fieldNameMap[controlName] || controlName;
            missingFields.push(fieldName);
          }
        });
    
        if (missingFields.length > 0) {
          const missingFieldsMessage = `The following fields are required: ${missingFields.join(', ')}`;
          this.presentMissingFieldsAlert(missingFieldsMessage);  // Show alert with missing fields
        }
      }
    }
    
    
    async presentMissingFieldsAlert(missingFieldsMessage: string): Promise<void> {
      const alert = await this.alertController.create({
        header: 'Missing Fields',
        message: missingFieldsMessage,
        cssClass: 'error-alert',
        buttons: ['OK']
      });
      await alert.present();
    }
    
    async presentSuccessAlert(): Promise<void> {
      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Your showroom business has been successfully posted.',
        cssClass: 'success-alert',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.route.navigateByUrl('/bike-busenesses', { skipLocationChange: true }).then(() => {
                this.route.navigate([this.router.url]);
              });
            }
          }
        ]
      });
      await alert.present();
    }
    
    
    
    }
    
    