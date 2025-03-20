import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDrivingSchoolPage } from './post-driving-school.page';

const routes: Routes = [
  {
    path: '',
    component: PostDrivingSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDrivingSchoolPageRoutingModule {}
