import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-account-prof-pvt',
    templateUrl: './account-prof-pvt.page.html',
    styleUrls: ['./account-prof-pvt.page.scss'],
    standalone: false
})
export class AccountProfPvtPage implements OnInit {
    userForm!: FormGroup;
    countryCode: any;
    userID: string | null = null;
    userType: string | null = null;
    userData: any;
    filterUserData: any;
    isLoading = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private alertController: AlertController,
        private loadingController: LoadingController
    ) {
        this.userID = sessionStorage.getItem('userId') ?? '';
        this.userType = sessionStorage.getItem('userType') ?? '';
        if (this.userID === '' || this.userType === '') {
            this.userID = localStorage.getItem('userId') ?? '';
            this.userType = localStorage.getItem('userType') ?? '';
        }
        this.initForm();
    }

    ngOnInit(): void {
        this.getCountryCode();
        this.fetchUserData();
    }

    initForm(): void {
        this.userForm = this.formBuilder.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
            country: ['+92'],
            mobile: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

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

    fetchUserData() {
        this.userService.getUserBsnData().subscribe({
            next: (data: any[]) => {
                this.userData = data;
                this.filterUserData = this.userData.filter(
                    (item: any) => item.users_id === this.userID
                );
                if (this.filterUserData.length > 0) {
                    const userData = this.filterUserData[0];
                    this.userForm.patchValue({
                        id: userData.users_id || '',
                        name: userData.user_name || '',
                        country: userData.user_country || '+92',
                        mobile: userData.user_mobile || '',
                        email: userData.user_email || ''
                    });
                }
            },
            error: (error) => {
                console.error('Error fetching user data:', error);
            }
        });
    }

    onInputFocus(fieldName: string): void {
        console.log(`Input field ${fieldName} is focused`);
    }

    onInputBlur(fieldName: string): void {
        console.log(`Input field ${fieldName} lost focus`);
    }

    async saveUser(): Promise<void> {
        if (this.userForm?.valid) {
            try {
                this.isLoading = true;
                const loading = await this.loadingController.create({
                    message: 'Updating profile...',
                    spinner: 'circular',
                    translucent: true,
                    backdropDismiss: false,
                    cssClass: 'custom-loading',
                    duration: 0
                });

                await loading.present();

                this.userService.updateUserPvt(this.userForm.value).subscribe({
                    next: async (response) => {
                        await loading.dismiss();
                        this.isLoading = false;
                        await this.presentSuccessAlert();
                        this.router.navigate(['/account-prof-busines']);
                    },
                    error: async (error) => {
                        await loading.dismiss();
                        this.isLoading = false;
                        console.error('Error updating profile:', error);
                        this.presentErrorAlert('Failed to update profile');
                    }
                });
            } catch (error) {
                this.isLoading = false;
                console.error('Error showing loading:', error);
            }
        }
    }

    async presentSuccessAlert(): Promise<void> {
        const alert = await this.alertController.create({
            header: 'Success',
            message: 'Your profile has been updated successfully.',
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        this.router.navigate(['/account-prof-busines']);
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
            buttons: ['OK']
        });
        await alert.present();
    }

    goTooResetPass() {
        this.router.navigate(['/reset-password']);
    }

    async confirmationDelete(): Promise<void> {
        const alert = await this.alertController.create({
            header: 'Delete Account',
            message: 'Are you sure you want to delete your account? This action cannot be undone.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    cssClass: 'danger',
                    handler: async () => {
                        await this.deleteAccount();
                    }
                }
            ]
        });
        await alert.present();
    }

    async deleteAccount(): Promise<void> {
        const formData = new FormData();
        formData.append('userID', this.userID ?? '');
        
        this.userService.deleteAccount(formData).subscribe({
            next: async () => {
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('userType');
                localStorage.removeItem('userId');
                localStorage.removeItem('userType');
                await this.presentSuccessAlert();
                this.router.navigate(['/login']);
            },
            error: (error) => {
                console.error('Error deleting account:', error);
                this.presentErrorAlert('Failed to delete account');
            }
        });
    }

    back() {
        this.router.navigate(['/main-menu-after-login']);
    }
}
