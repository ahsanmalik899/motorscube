import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMachineryDrivingSchoolPage } from './post-machinery-driving-school.page';

const routes: Routes = [
  {
    path: '',
    component: PostMachineryDrivingSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMachineryDrivingSchoolPageRoutingModule {}
