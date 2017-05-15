//our root app component
import {Component} from '@angular/core';
import { UserService } from './user.service';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

/*
 * Didn't set up router, use the same form for login/signup
 * and change submit function accordingly. Config'd to use
 * example plnkr repo, see set up in 'main.ts'. Auth details
 * logged to console.
*/


@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent {
  email: string;
  pw: string;
  authed: boolean;
  constructor(private _us: UserService) {
    this.authed = false;
  }
  
  signup() {
    this._us.signUp(this.email, this.pw);
  }
  
  login() {
    this._us.login(this.email, this.pw).then((res) => {
      console.log(res);
      /*(res.provider === 4)
        this.authed = true;*/
    });
  }
}