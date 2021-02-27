import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import axios from 'axios';
import qs from 'qs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  @Input('ngModel') model:any;

  startPosition ='';
  endPosition='';
  public play: boolean = false;
  @ViewChild('video')
  video!: ElementRef;

  isMobile=false;

  isMobileMini=false;
  constructor(public breakpointObserver: BreakpointObserver) { }
  log(x){
    console.log(x)
  }
  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 450px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });
  }  
  onClick() {
    const videoEle = this.video.nativeElement;
    if (videoEle.paused) {
      this.play = true;
      videoEle.play();
    } else {
      this.play = false;
      videoEle.pause();
    }
  }
  
  

  async addTodo(text1, text2, text3, text4) {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    console.log("initial location:", text1);
    console.log("initial location:", text2);
    console.log("Final location:", text3);
    console.log("Final location:", text4);
    
    const result = await axios({
      method: 'POST',
      url: 'http://10.89.161.2:5000/traffic/route',
      data: qs.stringify({
        startLat: text1,
        startLong: text2,
        endLat: text3,
        endLong: text4,
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    console.log(result.data.data)
  }

}

