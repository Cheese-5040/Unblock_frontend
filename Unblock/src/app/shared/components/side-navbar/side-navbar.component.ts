import { Input, Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgModule} from '@angular/core';
import { CommonService } from '../../services/common.service'
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

// @NgModule({
//   imports:[
//     MatExpansionModule,
//     MatIconModule
//   ]
// })
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],

})

export class SideNavbarComponent implements OnInit, AfterViewInit{
  Titles=[
    {
      position: 1,
      name: "關於我們",
      link: "/#/home-page",

    },
    {
      position: 2,
      name: "成為會員",
      link: "/#/our-services",

    },
    {
      position: 3,
      name: "會員服務",
      link: "/#/home-page",

    },
    {
      position: 4,
      name: "活動",
      link: "/#/contact-us",

    },
    {
      position: 5,
      name: "合作伙伴",
      link: "/#/"
    },
    {
      position: 6,
      name: "最新優惠",
      link: "/#/"
    },


  ]
  Home=[
    {
      title:"Home page",
      link: "/#/home-page",
    },
    {
      title:"Featured page",
      link: "/#/featured-page",
    },

  ]

  Services=[
    {
      title:"Consulting",
      link: "/#/feature1",
    },
    {
      title:"Accounting",
      link: "/#/feature2",
    },
    {
      title:"Start up",
      link: "/#/feature3",
    },

  ]

  Updates=[
    {
      title:"Latest news",
      link:"",
    },
    {
      title:"Industry insights",
      link:"",
    },
    {
      title:"Market updates",
      link:"",
    },

  ]
  Contacts=[
    {
      title:" Location",
      link:"",
    },
    {
      title:" Schedule a meeting",
      link:"",
    },

  ]
  tempo = false;



  // @Input() header: string[];


  @ViewChild('bump') bump: ElementRef
  isTraditional=true;
  switchLang(){

    console.log("traditional: ",this.isTraditional)
    this.tempo = this.isTraditional;
    this.isTraditional= !this.tempo;
    console.log("new traditional: ", this.isTraditional)
    this.hideSideNavbar()
  }

  bump_position = ""

  bumpIsOpen = false;

  hoveredItem = -1;

  openBump() {
    this.bumpIsOpen = true
  }

  closeBump() {
    this.bumpIsOpen = false
  }

  icon1: boolean = false;
  icon2: boolean = false;
  icon3: boolean = false;
  icon4: boolean = false;
  icon5: boolean = false;
  icon6: boolean = false;
  icon7: boolean = false;


  click1(){
    this.icon1 = !this.icon1;
    console.log(this.icon1);
  }
  click2(){
    this.icon2 = !this.icon2;
    console.log(this.icon2);

  }
  click3(){
    this.icon3 = !this.icon3;
    console.log(this.icon3);

  }
  click4(){
    this.icon4 = !this.icon4;
    console.log(this.icon4);

  }
  click5(){
    this.icon5 = !this.icon5;
    console.log(this.icon5);

  }
  click6(){
    this.icon6 = !this.icon6;
    console.log(this.icon6);

  }
  click7(){
    this.icon7 = !this.icon7;
    console.log(this.icon7);

  }


  isMobile = false;

  showSideNavbar = true;

  show = false;

  setHovered(position: number) {
    this.hoveredItem = position
  }

  showDropdown1 = false;//TODO

  showDropdown2 = false;//TODO


  hideSideNavbar() {
    this.commonService.changeSideNavbarIsShow(false)

    //switch back to member login when hide
    setTimeout(() => {
      //back to init state
      this.showSideNavbar = true;
      this.showDropdown1 = false;
      this.showDropdown2 = false;
    }, 1000)
  }


  checkState(event, el) {
    event.preventDefault();
    el.checked = !el.checked
  }

  constructor(private commonService: CommonService, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.commonService.sideNavbarIsShow.subscribe((show) => {
      console.log('checkcheckcheckc 2')
      this.show = show
    })

    this.breakpointObserver.observe(['(min-width: 991px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });


  }
  ngAfterViewInit() : void {
  }

}

