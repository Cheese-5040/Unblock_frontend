import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sideNavbarIsShowSource = new BehaviorSubject(false);
  sideNavbarIsShow = this.sideNavbarIsShowSource.asObservable()

  changeSideNavbarIsShow(isShow: boolean) {
    console.log("function changeSideNavbarIsShow is called ", isShow)
    this.sideNavbarIsShowSource.next(isShow)
  }


  private popUpIsShowSource = new BehaviorSubject(false);
  popUpIsShow = this.popUpIsShowSource.asObservable()

  changePopUpIsShow(isShow: boolean) {
    console.log('checkcheckcheck 3', isShow)
    this.popUpIsShowSource.next(isShow)
  }

  constructor() {}
}
