import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMachineryExporterPage } from './post-machinery-exporter.page';

const routes: Routes = [
  {
    path: '',
    component: PostMachineryExporterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMachineryExporterPageRoutingModule {}
