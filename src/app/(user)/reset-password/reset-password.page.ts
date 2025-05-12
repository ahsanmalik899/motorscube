
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../(services)/user.service';
import { AlertController } from '@ionic/angular';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.page.html',
    styleUrls: ['./reset-password.page.scss'],
    standalone: false
})
export class ResetPasswordPage implements OnInit {
  
  fb: any;


userForm: FormGroup;
  showPassword: { [key: string]: boolean } = {
    oldpassword: false,
    newpassword: false,
    retypepassword: false
  };
  passwordToggleIcon: { [key: string]: string } = {
    oldpassword: 'eye-off',
    newpassword: 'eye-off',
    retypepassword: 'eye-off'
  };
  showUploadField = true;
  showUploaded = false;
  uploadedImage: any;
  selectedFileName = '';
  selectedFile: Blob = new Blob(); // default empty Blob
  countryCode: any;
  userID='';
  userType='';
  userData: any;
  filterUserData: any;
  userPassword='';
  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertController: AlertController,
    private router: Router) {
  this.userID = sessionStorage.getItem('userId') || 'defaultUserID';
  this.userType = sessionStorage.getItem('userType') || 'defaultUserType';
  if(this.userID==''||this.userType=='userType'){
    this.userID = localStorage.getItem('userId')??'';
    this.userType = localStorage.getItem('userType')??'';
  }
  // Initialize the form group correctly
  this.userForm = this.formBuilder.group({
    oldpassword: ['', Validators.required],
    newpassword: ['', Validators.required],
    retypepassword: ['', Validators.required],
  });
  console.log('user ID : ', this.userID);

    }
    ngOnInit(): void {
      this.initForm();
      this.fetchUserData();
    }
    back() {
      history.back();
    }
    
  fetchUserData() {
      this.userService.getUserBsnData().subscribe({
          next: (data) => {
            this.userData = data; // Store fetched data in carData property
            //this.filterData = data;
            console.log(this.userData);
            //this.filterCarData();
            this.filterUserData = this.userData.filter((item: { users_id: string; }) => item.users_id === this.userID);
            console.log('filter data : ', this.filterUserData);
            if (this.filterUserData.length > 0) {
              // Get the password of the first matched user
              this.userPassword = this.filterUserData[0].user_password;
              console.log('User password:', this.userPassword);
            }
          },
          error: (error) => {
            console.error('Error fetching dealership data:', error);
          }
        });
  }

  initForm(): void {
    this.userForm = this.formBuilder.group(
      {
        oldpassword: ['', [Validators.required]],
        newpassword: ['', [Validators.required]],
        retypepassword: ['', [Validators.required]],
      },
      {
        validators: this.passwordsMatch('newpassword', 'retypepassword'),  // Add the custom password match validator
      }
    );
  }
  

  togglePassword(controlName: string): void {
    this.showPassword[controlName] = !this.showPassword[controlName];
    this.passwordToggleIcon[controlName] = this.showPassword[controlName] ? 'eye' : 'eye-off';
  }
  onInputFocus(fieldName: string): void {
    // Define your logic when the input field receives focus
    console.log(`Input field ${fieldName} is focused`);
  }

  onInputBlur(fieldName: string): void {
    // Define your logic when the input field loses focus
    console.log(`Input field ${fieldName} lost focus`);
  }


  async onFormSubmit(): Promise<void> {
    if (this.userForm.valid) {
      const newPassword = this.userForm.get('newpassword')?.value;
      const retypePassword = this.userForm.get('retypepassword')?.value;
      const oldPassword = this.userForm.get('oldpassword')?.value;
  
      if (newPassword === retypePassword) {
        console.log('New Password:', newPassword);
        console.log('Retype New Password:', retypePassword);
  
        if (oldPassword !== null && oldPassword === this.userPassword) {
          console.log('Passwords match and old password verified');
  
          const formData = new FormData();
          formData.append('newPassword', newPassword);
          formData.append('userID', this.userID);
  
          try {
            const response = await this.userService.updatePass(formData).toPromise();
            console.log('Data saved successfully:', response);
            this.userForm.reset();
            await this.presentSuccessAlert();
          } catch (error) {
            console.error('Error saving data:', error);
          }
        } else {
          console.error('Old password verification failed or is null/undefined');
          await this.oldpasswordnotmatched();
        }
      } else {
        console.error('Passwords do not match');
        await this.passwordnotsame();
      }
    } else {
      console.error('Form is not valid');
    }
  }
  
  

async presentSuccessAlert(): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Success',
    message: 'Your password has been changed successfully.',
    cssClass: 'success-alert',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.navigateToLogin();
        }
      }
    ]
  });

  await alert.present();
}
navigateToLogin() {
  this.router.navigate(['/login']);
}


async oldpasswordnotmatched(): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Error',
    message: 'Your old password has not been matched.',
    cssClass: 'success-alert',
    buttons: ['OK']
  });

  await alert.present();
}

async passwordnotsame(): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Error',
    message: 'Your new password and retype password does not same.',
    cssClass: 'success-alert',
    buttons: ['OK']
  });

  await alert.present();
}




hideImage() {
  this.showUploaded = false;
  this.showUploadField = true;
  this.uploadedImage = null; // Clear uploaded image
}

passwordsMatch(password: string, retypepassword: string) {
  return (formGroup: FormGroup) => {
    const newPasswordControl = formGroup.controls[password];
    const retypePasswordControl = formGroup.controls[retypepassword];

    if (retypePasswordControl.errors && !retypePasswordControl.errors['passwordMismatch']) {
      return;
    }

    // If the passwords don't match, set an error on the retypepassword control
    if (newPasswordControl.value !== retypePasswordControl.value) {
      retypePasswordControl.setErrors({ passwordMismatch: true });
    } else {
      retypePasswordControl.setErrors(null);
    }
  };
}
}
