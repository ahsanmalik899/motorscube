import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostImporterBusinesPage } from './post-importer-busines.page';

const routes: Routes = [
  {
    path: '',
    component: PostImporterBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostImporterBusinesPageRoutingModule {}
