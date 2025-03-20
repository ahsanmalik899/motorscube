import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-account-prof-busines',
    templateUrl: './account-prof-busines.page.html',
    styleUrls: ['./account-prof-busines.page.scss'],
    standalone: false
})
export class AccountProfBusinesPage implements OnInit {
back() {
history.back()
}
  userForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';
  showUploadField = true;
  showUploaded = false;
  uploadedImage: any;
  selectedFileName = '';
  selectedFile: Blob | undefined;
  countryCode: any;
  userID = '';
  userType = '';
  userData: any;
  filterUserData: any;
  imageUrl = '';
  imageUrl1 = '';

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private alertController: AlertController,
    public router: Router
  ) {
    this.userID = sessionStorage.getItem('userId')??'';
    this.userType = sessionStorage.getItem('userType')??'';
    if(this.userID=='' || this.userType==''){
      this.userID=localStorage.getItem('userId')?? '';
      this.userType= localStorage.removeItem('userType')??'';
      }

    // Initialize the form with FormBuilder
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      web: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.getCountryCode();
    this.fetchUserData();
  }

  // Initializes the form
  initForm(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      web: ['', Validators.required],
      country: ['', Validators.required], // 'country' control for the country code
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]] // 'mobile' control for the phone number
   
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye-off' : 'eye';
  }

  onInputFocus(fieldName: string): void {
    console.log(`Input field ${fieldName} is focused`);
  }
  fetchUserData() {
    this.userService.getUserBsnData().subscribe({
      next: (data) => {
        this.userData = data;
        console.log(this.userData);
  
        // Filter user data based on the user ID
        this.filterUserData = this.userData.filter((item: { users_id: string; }) => item.users_id === this.userID);
        console.log('filter data : ', this.filterUserData);
  
        if (this.filterUserData.length > 0) {
          const userData = this.filterUserData[0];
          this.imageUrl1 = userData.user_logo;
          this.uploadedImage = userData.image_url1;
  
          // Ensure patchValue is called after the form is initialized
          this.userForm.patchValue({
            name: userData.user_name || '',
            country: userData.user_country || '+92',  // Default value for country
            mobile: userData.user_mobile || '',      // Default value for mobile
            email: userData.user_email || '',
            address: userData.user_location || '',
            web: userData.user_web || ''
          });
  
          if (this.uploadedImage) {
            this.showUploaded = true;
            this.showUploadField = false;
          }
        }
      },
      error: (error) => {
        console.error('Error fetching dealership data:', error);
      }
    });
  }
  
  
  onInputBlur(fieldName: string): void {
    console.log(`Input field ${fieldName} lost focus`);
  }

  // Fetch country code (example logic)
  getCountryCode() {
    this.userService.getCountryCode().subscribe({
      next: (data) => {
        this.countryCode = data;
        console.log('Fetched code:', this.countryCode);
      },
      error: (error) => {
        console.error('Error fetching cities:', error);
      }
    });
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files.length > 0) {
      const file = input.files[0];
      if (file) {
        this.selectedFileName = file.name;
        this.selectedFile = file;
        const reader = new FileReader();
        
        reader.onload = (e: any) => {
          this.uploadedImage = e.target.result;
          this.showUploaded = true;
          this.showUploadField = false;
     
        };

        reader.readAsDataURL(file);
      }
    }
  }

  // Handle form submission
  onFormSubmit(): void {
    const formData = new FormData();
    console.log(this.selectedFile);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFileName);
    }

    formData.append('name', this.userForm.get('name')?.value || '');
    formData.append('email', this.userForm.get('email')?.value || '');
    formData.append('address', this.userForm.get('address')?.value || '');
    formData.append('web', this.userForm.get('web')?.value || '');
    formData.append('userID', this.userID || '');
    formData.append('imageURL', this.imageUrl1 || '');

    this.userService.updateUserBsn(formData).subscribe(
      async response => {
        console.log('Data saved successfully:', response);
        this.userForm.reset();
        await this.presentSuccessAlert();
      },
      (error) => {
        console.error('Error saving data:', error);
        this.presentErrorAlert();
      }
    );
  }

  // Show error alert
  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'There was an issue saving the data. Please try again.',
      buttons: ['OK']
    });
    await alert.present();
  }

  // Show success alert
  async presentSuccessAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Your account has been successfully updated.',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/main-menu-after-login']);
          }
        }
      ]
    });

    await alert.present();
  }

  // Hide uploaded image
  hideImage() {
    this.showUploaded = false;
    this.showUploadField = true;
    this.uploadedImage = null;
  }

  // Navigate to reset password page
  goTooResetPass() {
    console.log('Redirecting to reset password page');
    this.router.navigate(['/reset-password']);
  }

  // Confirmation alert for deleting account
  async confirmationDelete(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Are you sure you want to delete your account? By deleting account your all ads will be deleted permanently.',
      cssClass: 'success-alert',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: async () => {
            await this.deleteAccount();
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('userType');
            console.log('Account deleted');
          }
        }
      ]
    });

    await alert.present();
  }

  // Delete account logic
  async deleteAccount(): Promise<void> {
    console.log('Deleting account...');
    const formData = new FormData();
    formData.append('userID', this.userID);

    this.userService.deleteAccount(formData).subscribe(
      async response  => {
        console.log('Data saved successfully:', response);
        this.userForm.reset();
        await this.presentSuccessAlert();
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
  }
}
