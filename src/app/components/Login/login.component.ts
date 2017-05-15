import {Component, ViewChild, AfterViewInit} from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {ModalComponent} from "ng2-bs3-modal/components/modal";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  implements AfterViewInit  {
  @ViewChild('modal') modal:ModalComponent;

  username: string;
  password: string;
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }
  ngAfterViewInit() {
    this.modal.open();
  }
  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }
}
