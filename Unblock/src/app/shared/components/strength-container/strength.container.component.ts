import { Component, OnInit } from '@angular/core';
import { Strength } from '../../../app.type';
import { StrengthsService } from '../../../strengths.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-strength-container',
  templateUrl: './strength.container.component.html',
  styleUrls: ['./strength.container.component.scss'],
  providers: [StrengthsService],
})
export class StrengthContainerComponent implements OnInit {
  isMobile=false;

  isMobileMini=false;
  public strengths: Strength[] = [];
  constructor(private _strengthsService: StrengthsService,public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.strengths = this._strengthsService.getStrengths();
    this.breakpointObserver.observe(['(min-width: 992px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });
  }
}
