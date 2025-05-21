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
  userForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';
  showUploadField = true;
  showUploaded = false;
  uploadedImage: any;
  selectedFileName = '';
  selectedFile: Blob | null = null;
  countryCode: any;
  loading: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertController: AlertController,
    private navController: NavController,
    private loadingController: LoadingController
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

  back() {
    this.navController.back();
  }

  onInputFocus(fieldName: string) {
    const control = this.userForm.get(fieldName);
    if (control) {
      control.markAsTouched();
    }
  }

  onInputBlur(fieldName: string) {
    const control = this.userForm.get(fieldName);
    if (control) {
      control.markAsTouched();
    }
  }

  hideImage() {
    this.uploadedImage = null;
    this.showUploaded = false;
    this.showUploadField = true;
    this.selectedFile = null;
    this.selectedFileName = '';
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordToggleIcon = this.showPassword ? 'eye-off' : 'eye';
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

  async showLoader(message: string) {
    this.loading = await this.loadingController.create({
      message: message,
      spinner: 'crescent',
      duration: 0,
    });
    await this.loading.present();
  }

  async hideLoader() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

  async onFormSubmit() {
    if (this.userForm.valid && this.selectedFile) {
      try {
        await this.showLoader('Creating account...');
        
        const formData = new FormData();
        this.appendFormData(formData, 'name');
        this.appendFormData(formData, 'country');
        this.appendFormData(formData, 'mobile');
        this.appendFormData(formData, 'email');
        this.appendFormData(formData, 'password');
        this.appendFormData(formData, 'address');
        this.appendFormData(formData, 'web');
        
        if (this.selectedFile) {
          formData.append('profile_picture', this.selectedFile);
        }

        this.userService.createBusinessAccount(formData).subscribe({
          next: async (response: { success: boolean; message: string }) => {
            await this.hideLoader();
            const alert = await this.alertController.create({
              header: 'Success',
              message: 'Business account created successfully!',
              buttons: ['OK']
            });
            await alert.present();
            this.navController.navigateRoot('/login');
          },
          error: async (error: HttpErrorResponse) => {
            await this.hideLoader();
            await this.handleError(error);
          }
        });
      } catch (error) {
        await this.hideLoader();
        await this.presentErrorAlert('An error occurred while creating the account.');
      }
    } else {
      await this.showFieldValidityAlert();
    }
  }

  private appendFormData(formData: FormData, controlName: string): void {
    const control = this.userForm.get(controlName);
    if (control) {
      formData.append(controlName, control.value);
    }
  }

  async presentErrorAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

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
