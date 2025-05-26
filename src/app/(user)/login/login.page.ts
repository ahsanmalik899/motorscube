import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../(services)/auth.service';
import { UserService } from '../../(services)/user.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  userForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';
  showRegisterSection = false;
  userId: any;
  userType: any;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService,
    private loadingController: LoadingController // Inject LoadingController
  ) {
    this.userForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  back(): void {
    history.back();
  }

  toggleRegisterSection(): void {
    this.showRegisterSection = !this.showRegisterSection;
  }
isFocused = {
  mobile: false,
  password: false
}

onInputFocus(fieldName: 'mobile' | 'password'): void {
  this.isFocused[fieldName] = true;
}

onInputBlur(fieldName: 'mobile' | 'password'): void {
  this.isFocused[fieldName] = false;
}

  goToTrader(): void {
    this.router.navigate(['/acc-create-busines']);
  }

  goToPrivate(): void {
    this.router.navigate(['/acc-create-pvt']);
  }

  async loginUser(): Promise<void> {
    this.userForm.markAllAsTouched();

    if (this.userForm.invalid) {
      this.showErrorAlert();
      return;
    }

    const formData = this.userForm.value;

    // Show the loading spinner with a blurred background
    const loading = await this.loadingController.create({
      message: 'Logging in...',
      spinner: 'crescent', // You can choose other types like 'lines', 'dots'
      backdropDismiss: false, // Disables dismissing by tapping on the backdrop
      cssClass: 'full-screen-loader' // Optional: Custom CSS for full-screen effect
    });

    await loading.present(); // Show loading spinner

    // Authenticate user
    this.userService.authenticateUser(formData)
      .subscribe(
        async (response: { error: any; user_id: string; user_type: string }) => {
          await loading.dismiss(); // Dismiss the loader

          if (response.error) {
            // If login fails, show error alert
            const alert = await this.alertController.create({
              header: 'Failed Login',
              message: response.error || 'Please check your Mobile and Password',
              buttons: ['OK']
            });
            await alert.present();
          } else {
            // If login succeeds, navigate to homepage
            this.router.navigate(['/']);
            this.userService.setSession(response.user_id);
            this.authService.setUserSession(response.user_id);
            sessionStorage.setItem('userId', response.user_id);
            sessionStorage.setItem('userType', response.user_type);
            localStorage.setItem('userId', response.user_id); // Use localStorage instead of sessionStorage
            localStorage.setItem('userType', response.user_type);
          }

        },
        async (error: any) => {
          await loading.dismiss(); // Dismiss the loader on error
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Something went wrong. Please try again later.',
            buttons: ['OK']
          });
          await alert.present();
        }
      );
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye-off' : 'eye';
  }

 

  async showErrorAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Please fill out all required fields correctly.',
      buttons: ['OK'],
      cssClass: 'error-alert'
    });

    await alert.present();
  }
}
