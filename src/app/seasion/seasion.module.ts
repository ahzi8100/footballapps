import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeasionPageRoutingModule } from './seasion-routing.module';

import { SeasionPage } from './seasion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeasionPageRoutingModule
  ],
  declarations: [SeasionPage]
})
export class SeasionPageModule {}
