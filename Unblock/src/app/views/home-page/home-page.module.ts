import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

export const HomePageModuleRoutes: Routes = [
    /* configure routes here */

  ];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(HomePageModuleRoutes),

  ],
  declarations: [HomePageComponent],
  providers: []
})
export class HomePageModule {}
