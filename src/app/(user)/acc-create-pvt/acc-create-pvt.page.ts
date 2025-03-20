import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-acc-create-pvt',
  templateUrl: './acc-create-pvt.page.html',
  styleUrls: ['./acc-create-pvt.page.scss'],
  standalone: false
})
export class AccCreatePvtPage implements OnInit {
onInputFocus(arg0: string) {
throw new Error('Method not implemented.');
}
onInputBlur(arg0: string) {
throw new Error('Method not implemented.');
}

  back() {
    history.back();
  }

  userForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';
  countryCode: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService, 
    private alertController: AlertController,
    private NavController: NavController,
    private loadingController: LoadingController // Inject LoadingController
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['+92'], // Default country code to +92
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''] // Add validation for password
    });
  }

  ngOnInit(): void {
    this.getCountryCode();
  }

  // Fetch country codes from the backend service
  getCountryCode(): void {
    this.userService.getCountryCode().subscribe({
      next: (data) => {
        this.countryCode = data;
        console.log('Fetched country codes:', this.countryCode);
      },
      error: (error) => {
        console.error('Error fetching country codes:', error);
      }
    });
  }

  // Toggles the visibility of the password
  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye-off' : 'eye';
  }

  // Submit the form and handle the validation
  async saveUser(): Promise<void> {
    // Show the loading spinner
    const loading = await this.loadingController.create({
      message: 'Creating Account...',
      spinner: 'crescent', // You can use other spinner styles like 'dots', 'lines', etc.
      backdropDismiss: false
    });
    await loading.present(); // Show the loader

    // Check the validity of the form
    if (this.userForm.valid) {
      console.log('User data:', this.userForm.value);

      // Check the country code and decide which service method to call
      if (this.userForm.get('country')?.value === '+92') {
        // Country code is +92, so call the saveUserWithPhone method
        this.userService.saveUserWithPhone(this.userForm.value).subscribe(
          async response => {
            await loading.dismiss(); // Dismiss the loader

            if (response && response.error === 'Phone number is already registered') {
              await this.presentErrorAlert('This phone number is already registered.');
            } else if (response && response.error === 'Email is already registered') {
              await this.presentErrorAlert('This email is already registered.');
            } else {
              // Reset the form after successful submission
              this.userForm.reset();
              await this.presentSuccessAlert('Your password has been sent to your phone via SMS.');
            }
          },
          async error => {
            await loading.dismiss(); // Dismiss the loader in case of error
            console.error('Error:', error);
            await this.presentErrorAlert('An error occurred while registering the user.');
          }
        );
      } else {
        // Country code is not +92, so call the saveUserWithEmail method
        this.userService.saveUserWithEmail(this.userForm.value).subscribe(
          async response => {
            await loading.dismiss(); // Dismiss the loader

            if (response && response.error === 'Email is already registered') {
              await this.presentErrorAlert('This email is already registered.');
            } else {
              // Reset the form after successful submission
              this.userForm.reset();
              await this.presentSuccessAlert('Your password has been sent to your email.');
            }
          },
          async error => {
            await loading.dismiss(); // Dismiss the loader in case of error
            console.error('Error:', error);
            await this.presentErrorAlert('An error occurred while registering the user.');
          }
        );
      }
    } else {
      await loading.dismiss(); // Dismiss the loader if form is invalid
      await this.showFieldValidityAlert(); // Show validation alert if form is invalid
    }
  }

  // Show success alert after form submission
  async presentSuccessAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,  // Custom success message based on the country code
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (this.NavController) {
              this.NavController.navigateForward('/login'); // Navigate to the login page after success
            }
          }
        }
      ]
    });

    await alert.present();
  }

  // Show error alert with a custom message
  async presentErrorAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      cssClass: 'error-alert',
      buttons: ['OK']
    });

    await alert.present();
  }

  // Show alert with the names of the invalid fields
  async showFieldValidityAlert(): Promise<void> {
    const fieldNames = ['name', 'country', 'mobile', 'email', 'password'];
    const invalidFields: string[] = [];

    for (const fieldName of fieldNames) {
      const fieldControl = this.userForm.get(fieldName);
      if (fieldControl && !fieldControl.valid) {
        invalidFields.push(fieldName);
      }
    }

    if (invalidFields.length > 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: `The following fields are invalid: ${invalidFields.join(', ')}`,
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
