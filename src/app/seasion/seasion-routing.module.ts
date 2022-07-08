import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasionPage } from './seasion.page';

const routes: Routes = [
  {
    path: '',
    component: SeasionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeasionPageRoutingModule {}
