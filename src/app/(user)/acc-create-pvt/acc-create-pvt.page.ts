import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-acc-create-pvt',
  templateUrl: './acc-create-pvt.page.html',
  styleUrls: ['./acc-create-pvt.page.scss'],
  standalone: false,
})
export class AccCreatePvtPage implements OnInit {
  userForm: FormGroup;
  countryCode: string[] = ['+1', '+44', '+91', '+61', '+86', '+81', '+49', '+33', '+39', '+34'];
  isLoading: boolean = false;
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private loadingController: LoadingController,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      country: ['+91', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.getCountryCode();
  }

  onInputFocus(field: string): void {
    const control = this.userForm.get(field);
    if (control) {
      control.markAsTouched();
    }
  }

  onInputBlur(field: string): void {
    const control = this.userForm.get(field);
    if (control) {
      control.markAsTouched();
    }
  }

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

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye-off' : 'eye';
  }

  async saveUser(): Promise<void> {
    if (this.userForm.valid) {
      this.isLoading = true;
      try {
        console.log('User data:', this.userForm.value);

        if (this.userForm.get('country')?.value === '+92') {
          this.userService.saveUserWithPhone(this.userForm.value).subscribe(
            async response => {
              if (response && response.error === 'Phone number is already registered') {
                await this.presentErrorAlert('This phone number is already registered.');
              } else if (response && response.error === 'Email is already registered') {
                await this.presentErrorAlert('This email is already registered.');
              } else {
                this.userForm.reset();
                await this.presentSuccessAlert('Your password has been sent to your phone via SMS.');
              }
            },
            async error => {
              console.error('Error:', error);
              await this.presentErrorAlert('An error occurred while registering the user.');
            }
          );
        } else {
          this.userService.saveUserWithEmail(this.userForm.value).subscribe(
            async response => {
              if (response && response.error === 'Email is already registered') {
                await this.presentErrorAlert('This email is already registered.');
              } else {
                this.userForm.reset();
                await this.presentSuccessAlert('Your password has been sent to your email.');
              }
            },
            async error => {
              console.error('Error:', error);
              await this.presentErrorAlert('An error occurred while registering the user.');
            }
          );
        }
      } catch (error) {
        console.error('Error creating user:', error);
      } finally {
        this.isLoading = false;
      }
    } else {
      await this.showFieldValidityAlert();
    }
  }

  async presentSuccessAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (this.navCtrl) {
              this.navCtrl.navigateForward('/login');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async presentErrorAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      cssClass: 'error-alert',
      buttons: ['OK']
    });

    await alert.present();
  }

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

  back() {
    this.navCtrl.back();
  }
}
