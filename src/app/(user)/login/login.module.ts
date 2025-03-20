import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Add CommonModule here
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { SharedModule } from 'src/app/components/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginPage  // Declare the LoginPage component here
  ],
  imports: [
    CommonModule,  // Ensure CommonModule is imported
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,  // Add ReactiveFormsModule here
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
})
export class LoginPageModule {}
