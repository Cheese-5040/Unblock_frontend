import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { LayoutModule } from '@angular/cdk/layout';

// LIBRARY
import { SlickCarouselModule } from "ngx-slick-carousel";
import { CountoModule } from "angular2-counto";
import { FlexLayoutModule } from "@angular/flex-layout";

// MATERIAL-UI
import { MaterialModule } from "../../material.module";

// COMPONENTS
import { HeaderComponent} from "./components/header/header.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { FooterComponent } from "./components/footer/footer.component";
import { StrengthComponent } from "./components/strength/strength.component";
import { StrengthContainerComponent } from "./components/strength-container/strength.container.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { BottomFooterComponent } from "./components/bottom-footer/bottom-footer.component"
import { SideBannerComponent } from "./components/side-banner/side-banner.component"
import { SideNavbarComponent } from "./components/side-navbar/side-navbar.component"


//INCLUDE these inside views when calling 
const classesToInclude = [
  HeaderComponent,
  ExperienceComponent,
  FooterComponent,
  StrengthComponent,
  StrengthContainerComponent,
  NavigationBarComponent,
  BottomFooterComponent,
  SideBannerComponent,
  SideNavbarComponent,

];

const modulesToImportExport = [
  MaterialModule,
  SlickCarouselModule,
  CountoModule,
  FlexLayoutModule,
];

@NgModule({
  declarations: classesToInclude,
  imports: [CommonModule, LayoutModule, modulesToImportExport],
  providers: [],
  exports: [modulesToImportExport, classesToInclude],
})
export class SharedModule {}
