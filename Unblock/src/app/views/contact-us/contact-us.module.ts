import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';

export const ContactUsModuleRoutes: Routes = [
    /* configure routes here */

  ];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ContactUsModuleRoutes),

  ],
  declarations: [ContactUsComponent],
  providers: []
})
export class ContactUsModule {}
