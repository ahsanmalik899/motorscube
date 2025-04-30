import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMachineryImporterPage } from './post-machinery-importer.page';

const routes: Routes = [
  {
    path: '',
    component: PostMachineryImporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMachineryImporterPageRoutingModule {}
