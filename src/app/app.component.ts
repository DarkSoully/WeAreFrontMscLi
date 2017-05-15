
import {Component, ViewChild, Input, EventEmitter, Output} from '@angular/core';
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {AngularFire, AuthMethods, AuthProviders} from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  @ViewChild('modal') modal:ModalComponent;
  @Input() public email;
  @Input() public password;
  private messageInput: string = "";
  @Output() sendMessage = new EventEmitter();

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  close() {
    this.modal.close();

  }
  dismiss() {

  }
  open() {
    this.modal.open();
  }


  login(email:any, password:any) {
    this.af.auth.login({ email: email, password: password }, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
    this.modal.close();
    //this.messageInput = email.value();
    //this.sendMessage.emit({msg: this.messageInput});


}




}
