import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-account-prof-pvt',
    templateUrl: './account-prof-pvt.page.html',
    styleUrls: ['./account-prof-pvt.page.scss'],
    standalone: false
})
export class AccountProfPvtPage implements OnInit {
back() {
 history.back();
}
userForm: FormGroup = this.formBuilder.group({
  id: ['', Validators.required],
  name: ['', Validators.required],
  country: ['+92'],
  mobile: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', Validators.required],
});
  showPassword = false;
  passwordToggleIcon = 'eye';
  countryCode: any;
  userID: string | null = null;
  userType: string | null = null;
  userData: any;
  filterUserData: any;
  imageUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertController: AlertController,
    public router: Router
  ) {
    this.userID = sessionStorage.getItem('userId') ?? '';
    this.userType = sessionStorage.getItem('userType') ?? '';
    if(this.userID=='' || this.userType==''){
      this.userID=localStorage.getItem('userId')?? '';
      this.userType= localStorage.removeItem('userType')??'';
      }
  }

  ngOnInit(): void {
    this.initForm();
  this.getCountryCode();
  this.fetchUserData();
  }

  initForm(): void {
    // Initialize userForm as a non-null FormGroup
    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      country: ['+92'],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getCountryCode() {
    this.userService.getCountryCode().subscribe({
      next: (data) => {
        this.countryCode = data;
        console.log('Fetched code:', this.countryCode);
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      },
    });
  }

  fetchUserData() {
    this.userService.getUserBsnData().subscribe({
      next: (data: any[]) => {
        this.userData = data;
        this.filterUserData = this.userData.filter(
          (item: any) => item.users_id === this.userID
        );
        console.log('filter data : ', this.filterUserData);
        if (this.filterUserData.length > 0) {
          const userData = this.filterUserData[0];
          if (this.userForm) {
            this.userForm.patchValue({
              id: userData.users_id || '',
              name: userData.user_name || '',
              country: userData.user_country || '+92',
              mobile: userData.user_mobile || '',
              email: userData.user_email || '',
              password: userData.user_password || '',
            });
          }
        }
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      },
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye-off' : 'eye';
  }

  onInputFocus(fieldName: string): void {
    console.log(`Input field ${fieldName} is focused`);
  }

  onInputBlur(fieldName: string): void {
    console.log(`Input field ${fieldName} lost focus`);
  }

  async saveUser(): Promise<void> {
    if (this.userForm?.valid) {
      console.log('User data:', this.userForm.value);
      this.userService.updateUserPvt(this.userForm.value).subscribe(
        async (response) => {
          console.log('Response:', response);
          await this.presentSuccessAlert();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  async presentSuccessAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Your account has been updated successfully.',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/main-menu-after-login']);
          },
        },
      ],
    });

    await alert.present();
  }

  goTooResetPass() {
    console.log('Redirecting to reset password page');
    this.router.navigate(['/reset-password']);
  }

  async confirmationDelete(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Delete',
      message:
        'Are you sure you want to delete your account? By deleting account your all ads will be deleted permanently.',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Yes',
          handler: async () => {
            await this.deleteAccount();
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('userType');
            console.log('Account deleted');
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteAccount(): Promise<void> {
    console.log('Deleting account...');
    const formData = new FormData();
    formData.append('userID', this.userID ?? '');
    this.userService.deleteAccount(formData).subscribe(
      async (response) => {
        console.log('Data saved successfully:', response);
        this.userForm?.reset();
        await this.presentSuccessAlert();
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
  }
}
