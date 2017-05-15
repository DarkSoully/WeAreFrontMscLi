import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    item: FirebaseObjectObservable<any>;
    values: any = { title: "" };
    constructor(af: AngularFire) {
        this.item = af.database.object('/releases/gore', { preserveSnapshot: true });
        this.item.subscribe(snapshot => {
            this.values = snapshot.val();
            console.warn(this.values);
        });
    }

}
