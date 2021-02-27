import { Component, Input, OnInit } from '@angular/core';
import { Strength } from '../../../app.type';

@Component({
  selector: '.app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss'],
})
export class StrengthComponent implements OnInit {
  @Input()
  public strength!: Strength;
  constructor() {}

  ngOnInit(): void {}
}
