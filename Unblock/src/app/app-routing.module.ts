import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component'
import { ActivitiesPageComponent } from './views/activities-page/activities-page.component'
import { ContactUsComponent } from './views/contact-us/contact-us.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home-page', pathMatch: 'full'
  },
  {
    path: 'home-page',
    component: HomePageComponent,
    loadChildren:() => import('./views/home-page/home-page.module').then(m=>m.HomePageModule),
    data:{preload: true}
  },
  {
    path : 'activities-page',
    component: ActivitiesPageComponent,
    loadChildren:() => import ('./views/activities-page/activities-page.module').then(m=>m.ActivitiesPageModule),
  },
  {
    path : 'contact-us',
    component: ContactUsComponent,
    loadChildren:() => import ('./views/contact-us/contact-us.module').then(m=>m.ContactUsModule),
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
