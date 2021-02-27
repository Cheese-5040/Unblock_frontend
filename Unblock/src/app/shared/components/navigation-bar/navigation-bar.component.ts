import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonService } from '../../services/common.service'
import {  ActivatedRoute, Router, RouterModule} from '@angular/router'; //import router


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {


  showSideNavbar() {
    this.commonService.changeSideNavbarIsShow(true)
  }
  idName: any;
  private sub: any;
  isMobile = false;
  componentName: string;
  href: string;
  // YAS IT CAN DELAY TIME WOOOOOOOOOOOO
  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  public async refresh(){
    await this.delay(50);
    this.href = window.location.href;
    this.componentName= this.href.split("/").pop();

    console.log("the component url is ", this.href);
    console.log("the component name is ", this.componentName);
  }


  constructor(private commonService: CommonService,public breakpointObserver: BreakpointObserver, private route: ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 992px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });

    //reading route parameters
    this.sub = this.route.paramMap.subscribe(paramMap => {
      console.log(this.idName);
      this.idName = +paramMap.get('idName');
    });
    this.href = window.location.href;
    this.componentName= this.href.split("/").pop();

    console.log("the component url is ", this.href);
    console.log("the component name is ", this.componentName);

  }

}
