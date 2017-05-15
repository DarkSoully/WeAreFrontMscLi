import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuth } from 'angularfire2';

@Injectable()
export class UserService {
  public db: any;
  constructor(private af: AngularFire, private auth: FirebaseAuth) {

  }

  signUp(email: string, password: string) {
    var creds: any = {email: email, password: password};
    this.af.auth.createUser(creds);
  }

  login(email: string, password: string): Promise<boolean> {
    var creds: any = {email: email, password: password};
    var res: Promise<boolean> = new Promise((resolve, reject) => {
      this.auth.login(creds).then(result => {
        resolve(result);
      })
    });
    return res;
  }

}
