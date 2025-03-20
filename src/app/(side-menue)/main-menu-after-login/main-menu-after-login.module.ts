import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainMenuAfterLoginPageRoutingModule } from './main-menu-after-login-routing.module';

import { MainMenuAfterLoginPage } from './main-menu-after-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainMenuAfterLoginPageRoutingModule
  ],
  declarations: [MainMenuAfterLoginPage]
})
export class MainMenuAfterLoginPageModule {}
