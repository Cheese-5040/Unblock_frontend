import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthContainerComponent } from './strength.container.component';

describe('ServicesComponent', () => {
  let component: StrengthContainerComponent;
  let fixture: ComponentFixture<StrengthContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
