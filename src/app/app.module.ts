
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { SpotifyService } from './services/spotify.service'
import { routing, appRoutingProviders }  from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { AddReleaseComponent } from './components/addRelease/addRelease.component';
import { PageNotFoundComponent} from './components/pageNotFound/pageNotFound.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { UserService } from './components/signup/user.service';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import * as firebase from 'firebase';
import { LoginPopupComponent } from './components/Login/login-popup/login-popup.component';
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";

export const myFirebaseConfig = {
    apiKey: "AIzaSyBq-7R3eNEB1K8_SV5UZukyPp5iBaU64xo",
    authDomain: "wearefront-e1e98.firebaseapp.com",
    databaseURL: "https://wearefront-e1e98.firebaseio.com",
    storageBucket: "wearefront-e1e98.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    AddReleaseComponent,
    HomeComponent,
    PageNotFoundComponent,
    ArtistComponent,
    AlbumComponent,
    LoginComponent,
    SignUpComponent,
    LoginPopupComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    routing,
      HttpModule,
    Ng2Bs3ModalModule,
      AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [appRoutingProviders, SpotifyService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
