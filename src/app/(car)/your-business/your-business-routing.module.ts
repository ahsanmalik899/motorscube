import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourBusinessPage } from './your-business.page';

const routes: Routes = [
  {
    path: '',
    component: YourBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourBusinessPageRoutingModule {}
