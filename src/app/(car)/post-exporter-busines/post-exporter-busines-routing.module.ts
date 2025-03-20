import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostExporterBusinesPage } from './post-exporter-busines.page';

const routes: Routes = [
  {
    path: '',
    component: PostExporterBusinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostExporterBusinesPageRoutingModule {}
