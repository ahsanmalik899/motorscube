import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-account-prof-busine',
  templateUrl: './account-prof-busine.page.html',
  styleUrls: ['./account-prof-busine.page.scss'],
  standalone: false
})
export class AccountProfBusinePage implements OnInit {
  userForm: FormGroup;
  userData: any;
  loading: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertController: AlertController,
    private navController: NavController,
    private loadingController: LoadingController
  ) {
    this.userForm = this.formBuilder.group({
      business_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      business_license: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadUserData();
  }

  async loadUserData() {
    try {
      await this.showLoader('Loading business profile...');
      const userId = await this.userService.getSession();
      if (userId) {
        const formData = new FormData();
        formData.append('user_id', userId);
        this.userService.getUserBsnData().subscribe({
          next: (response: any) => {
            const userData = Array.isArray(response) ? response.find(user => user.users_id === userId) : response;
            if (userData) {
              this.userData = userData;
              this.userForm.patchValue({
                business_name: userData.business_name || userData.user_name,
                email: userData.email || userData.user_email,
                mobile: userData.mobile || userData.user_mobile,
                address: userData.address || userData.user_address,
                business_license: userData.business_license,
                website: userData.website
              });
            }
            this.hideLoader();
          },
          error: async (error) => {
            await this.hideLoader();
            await this.handleError(error);
          }
        });
      }
    } catch (error) {
      await this.hideLoader();
      await this.presentErrorAlert('Error loading business profile data');
    }
  }

  back() {
    this.navController.back();
  }

  async editProfile() {
    const alert = await this.alertController.create({
      header: 'Edit Business Profile',
      inputs: [
        {
          name: 'business_name',
          type: 'text',
          value: this.userData.business_name,
          placeholder: 'Business Name'
        },
        {
          name: 'email',
          type: 'email',
          value: this.userData.email,
          placeholder: 'Email'
        },
        {
          name: 'address',
          type: 'text',
          value: this.userData.address,
          placeholder: 'Business Address'
        },
        {
          name: 'business_license',
          type: 'text',
          value: this.userData.business_license,
          placeholder: 'Business License'
        },
        {
          name: 'website',
          type: 'url',
          value: this.userData.website,
          placeholder: 'Website'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: async (data) => {
            try {
              await this.showLoader('Updating business profile...');
              const formData = new FormData();
              formData.append('user_id', await this.userService.getSession());
              formData.append('business_name', data.business_name);
              formData.append('email', data.email);
              formData.append('address', data.address);
              formData.append('business_license', data.business_license);
              formData.append('website', data.website);

              this.userService.updateUserBsn(formData).subscribe({
                next: async (response) => {
                  await this.hideLoader();
                  this.userData = { ...this.userData, ...data };
                  await this.presentSuccessAlert('Business profile updated successfully');
                },
                error: async (error) => {
                  await this.hideLoader();
                  await this.handleError(error);
                }
              });
            } catch (error) {
              await this.hideLoader();
              await this.presentErrorAlert('Error updating business profile');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async changePassword() {
    const alert = await this.alertController.create({
      header: 'Change Password',
      inputs: [
        {
          name: 'currentPassword',
          type: 'password',
          placeholder: 'Current Password'
        },
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'New Password'
        },
        {
          name: 'confirmPassword',
          type: 'password',
          placeholder: 'Confirm New Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Change',
          handler: async (data) => {
            if (data.newPassword !== data.confirmPassword) {
              await this.presentErrorAlert('New passwords do not match');
              return;
            }
            try {
              await this.showLoader('Changing password...');
              const formData = new FormData();
              formData.append('user_id', await this.userService.getSession());
              formData.append('current_password', data.currentPassword);
              formData.append('new_password', data.newPassword);

              this.userService.updatePass(formData).subscribe({
                next: async (response) => {
                  await this.hideLoader();
                  await this.presentSuccessAlert('Password changed successfully');
                },
                error: async (error) => {
                  await this.hideLoader();
                  await this.handleError(error);
                }
              });
            } catch (error) {
              await this.hideLoader();
              await this.presentErrorAlert('Error changing password');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteAccount() {
    const alert = await this.alertController.create({
      header: 'Delete Business Account',
      message: 'Are you sure you want to delete your business account? This action cannot be undone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          cssClass: 'danger',
          handler: async () => {
            try {
              await this.showLoader('Deleting business account...');
              const formData = new FormData();
              formData.append('user_id', await this.userService.getSession());

              this.userService.deleteAccount(formData).subscribe({
                next: async (response) => {
                  await this.hideLoader();
                  await this.userService.clearSession();
                  await this.presentSuccessAlert('Business account deleted successfully');
                  this.navController.navigateRoot('/login');
                },
                error: async (error) => {
                  await this.hideLoader();
                  await this.handleError(error);
                }
              });
            } catch (error) {
              await this.hideLoader();
              await this.presentErrorAlert('Error deleting business account');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async showLoader(message: string) {
    this.loading = await this.loadingController.create({
      message: message,
      spinner: 'crescent',
      duration: 0
    });
    await this.loading.present();
  }

  async hideLoader() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

  async presentSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  private async handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    await this.presentErrorAlert(errorMessage);
  }
} 