import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivitiesPageComponent } from './activities-page.component';

export const ActivitiesPageModuleRoutes: Routes = [
    /* configure routes here */

  ];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ActivitiesPageModuleRoutes),

  ],
  declarations: [ActivitiesPageComponent],
  providers: []
})
export class ActivitiesPageModule {}
