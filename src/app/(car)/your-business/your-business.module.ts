import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourBusinessPageRoutingModule } from './your-business-routing.module';

import { YourBusinessPage } from './your-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourBusinessPageRoutingModule
  ],
  declarations: [YourBusinessPage]
})
export class YourBusinessPageModule {}
