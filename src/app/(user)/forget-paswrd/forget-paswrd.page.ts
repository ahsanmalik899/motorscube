import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import FormGroup, FormBuilder, Validators
import { UserService } from '../../(services)/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertController } from '@ionic/angular';  // Make sure this import is correct

@Component({
    selector: 'app-forget-paswrd',
    templateUrl: './forget-paswrd.page.html',
    styleUrls: ['./forget-paswrd.page.scss'],
    standalone: false
})
export class ForgetPaswrdPage implements OnInit {
  userForm: FormGroup; // Declare the form group for user input
  countryCode: any;    // To hold country codes from the API


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,   // Inject the user service
    private router: Router,
    private snackBar: MatSnackBar,
    private alertController: AlertController
  ) {
    this.userForm = this.formBuilder.group({
      country: ['+92', Validators.required],  // Default country code is +92 (Pakistan)
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]], // Mobile should be 10 digits
    });
  }

  ngOnInit() {
    this.getCountryCode();
  }

  // Fetch available country codes from the backend or a predefined list
  getCountryCode() {
    this.userService.getCountryCode().subscribe({
      next: (data) => {
        this.countryCode = data;
        console.log('Fetched codes:', this.countryCode);
      },
      error: (error) => {
        console.error('Error fetching country codes:', error);
      }
    });
  }

  // Handle input field focus (Optional)
  onInputFocus(field: string) {
    // You can add custom behavior here if required
  }

  // Handle input field blur (Optional)
  onInputBlur(field: string) {
    // You can add custom behavior here if required
  }

  // Back button action
  back() {
    window.history.back();
  }

  // Handle form submission
  async onSubmit() {
    if (this.userForm.valid) {
      const mobile = this.userForm.get('mobile')?.value;
      const country = this.userForm.get('country')?.value;

      if (country === '+92') {
        // Handle sending password via SMS
        this.userService.forgotPassword(mobile, country).subscribe({
          next: async (response: any) => {
            if (response.success) {
              await this.presentSuccessAlert(response.message);  // Show success alert
              this.router.navigate(['/login']);
            } else {
              await this.presentErrorAlert(response.error);  // Show error alert
            }
          },
          error: async (error) => {
            console.error('Error:', error);
            await this.presentErrorAlert('An error occurred. Please try again later.');  // Show error alert
          }
        });
      } else {
        // Handle sending password via Email
        this.userService.sendPasswordByEmail(mobile, country).subscribe({
          next: async (response: any) => {
            if (response.success) {
              await this.presentSuccessAlert(response.message);  // Show success alert
              this.router.navigate(['/login']);
            } else {
              await this.presentErrorAlert(response.error);  // Show error alert
            }
          },
          error: async (error) => {
            console.error('Error:', error);
            await this.presentErrorAlert('An error occurred. Please try again later.');  // Show error alert
          }
        });
      }
    } else {
      console.log('Form is invalid!');
      await this.presentErrorAlert('Please fill in all required fields.');  // Show error alert
    }
  }

  // Success Alert Method (using Ionic's AlertController)
  async presentSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Error Alert Method (using Ionic's AlertController)
  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Generalized function to show success and error messages using traditional alert
  showAlert(message: string, type: 'success' | 'error') {
    const alertType = type === 'success' ? 'Success' : 'Error';
    const alertMessage = `${alertType}: ${message}`;
    alert(alertMessage);  // Use JavaScript alert to show message
  }


  
  // Success Alert Method
  showSuccessAlert(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-success'],
    });
  }

  // Error Alert Method
  showErrorAlert(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-error'],
    });
  }
  // Success Alert Method (Using MatSnackBar)

}

// Error Alert Method (Using MatSnackBar)





