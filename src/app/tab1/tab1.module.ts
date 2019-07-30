import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { SyncFusionModule } from '../components/syncfusion/syncfusion.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SyncFusionModule,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
