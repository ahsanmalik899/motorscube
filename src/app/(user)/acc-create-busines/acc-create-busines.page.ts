import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-acc-create-busines',
  templateUrl: './acc-create-busines.page.html',
  styleUrls: ['./acc-create-busines.page.scss'],
  standalone: false
})
export class AccCreateBusinesPage implements OnInit {
back() {
throw new Error('Method not implemented.');
}
onInputFocus(arg0: string) {
throw new Error('Method not implemented.');
}
onInputBlur(arg0: string) {
throw new Error('Method not implemented.');
}
hideImage() {
throw new Error('Method not implemented.');
}
  userForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';
  showUploadField = true;
  showUploaded = false;
  uploadedImage: any;
  selectedFileName = '';
  selectedFile: Blob | null = null;
  countryCode: any;
  loading: any; // Variable to hold the loading indicator instance

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertController: AlertController,
  
    private navController: NavController,
    private loadingController: LoadingController // Injecting LoadingController for loading indicator
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['+92'],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      address: ['', Validators.required],
      web: ['']
    });
  }

  ngOnInit(): void {
    this.getCountryCode();
  }

  // Toggles the visibility of the password
  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye-off' : 'eye';
  }

  // Fetch country codes from the backend service
  getCountryCode() {
    this.userService.getCountryCode().subscribe({
      next: (data) => {
        this.countryCode = data;
      },
      error: (error) => {
        console.error('Error fetching country codes:', error);
      }
    });
  }

  // Handle file selection and preview
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input && input.files && input.files.length > 0) {
      const file = input.files.item(0);
      if (file) {
        this.selectedFileName = file.name;
        this.selectedFile = file;

        const reader = new FileReader();
        reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
          this.uploadedImage = loadEvent.target?.result as string;
          this.showUploaded = true;
          this.showUploadField = false;
        };
        reader.onerror = (error) => {
          console.error("Error reading file: ", error);
        };
        reader.readAsDataURL(file);
      }
    } else {
      this.selectedFile = null;
      this.showUploaded = false;
      this.showUploadField = true;
    }
  }

  // Show loader
  async showLoader(message: string) {
    this.loading = await this.loadingController.create({
      message: message,
      spinner: 'crescent',
      duration: 0, // Infinite loader
    });
    await this.loading.present();
  }

  // Hide loader
  async hideLoader() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

// Submit the form
async onFormSubmit(): Promise<void> {
  if (!this.userForm.valid || !this.selectedFile) {
    await this.showFieldValidityAlert();
    return;
  }

  await this.showLoader('Submitting your data...'); // Show loading spinner

  const formData = new FormData();
  this.appendFormData(formData, 'name');
  this.appendFormData(formData, 'country');
  this.appendFormData(formData, 'mobile');
  this.appendFormData(formData, 'email');
  this.appendFormData(formData, 'password');
  this.appendFormData(formData, 'address');
  this.appendFormData(formData, 'web');

  // Append selected image file if available
  if (this.selectedFile) {
    formData.append('image', this.selectedFile, this.selectedFileName);
  }

  // Conditional logic based on country code
  const countryCode = this.userForm.get('country')?.value;
  let submitObservable;

  if (countryCode === '+92') {
    // If country code is +92, call saveUserWithPhone
    submitObservable = this.userService.saveUserWithPhone(formData);
  } else {
    // If country code is not +92, call saveUserWithEmail
    submitObservable = this.userService.saveUserWithEmail(formData);
  }

  submitObservable.subscribe(
    async response => {
      await this.hideLoader(); // Hide the loader after submission
      if (response.error) {
        await this.presentErrorAlert(response.error);
      } else {
        await this.presentSuccessAlert();
        this.userForm.reset();
      }
    },
    async error => {
      await this.hideLoader(); // Hide the loader on error
      console.error('Error:', error);
      this.handleError(error);
    }
  );
}


  // Helper function to append form control values to FormData
  private appendFormData(formData: FormData, controlName: string): void {
    const control = this.userForm.get(controlName);
    if (control) {
      formData.append(controlName, control.value);
    }
  }

  // Show error alert
  async presentErrorAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Handle error response
  private async handleError(error: HttpErrorResponse): Promise<void> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    const alert = await this.alertController.create({
      header: 'Error',
      message: errorMessage,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Success alert after form submission
  async presentSuccessAlert(): Promise<void> {
    const countryCode = this.userForm.get('country')?.value;
    let message = countryCode === '+92' ?
      'Your password has been sent to your phone via SMS.' :
      'Your password has been sent to your email.';

    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navController.navigateForward('/login');
          }
        }
      ]
    });

    await alert.present();
  }

  // Show an alert with invalid fields
  async showFieldValidityAlert(): Promise<void> {
    const fieldNames = ['name', 'country', 'mobile', 'email', 'password', 'address', 'web'];
    const invalidFields: string[] = [];

    for (const fieldName of fieldNames) {
      const fieldControl = this.userForm.get(fieldName);
      if (fieldControl && !fieldControl.valid) {
        invalidFields.push(fieldName);
      }
    }

    const alert = await this.alertController.create({
      header: 'Form Validation',
      message: invalidFields.length > 0 ?
        `The following fields are invalid: ${invalidFields.join(', ')}` :
        'Please Upload Profile Picture',
      buttons: ['OK']
    });

    await alert.present();
  }
}
