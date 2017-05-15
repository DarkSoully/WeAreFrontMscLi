import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterOutlet} from '@angular/router';


import { AppComponent } from './app/app.component';
import { SpotifyService } from './app/services/spotify.service'
import { routing, appRoutingProviders }  from './app/app.routing';
import { HomeComponent } from './app/components/home/home.component';
import { AddReleaseComponent } from './app/components/addRelease/addRelease.component';
import { PageNotFoundComponent} from './app/components/pageNotFound/pageNotFound.component';
import { ArtistComponent } from './app/components/artist/artist.component';
import { AlbumComponent } from './app/components/album/album.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './app/components/login/login.component';
import { SignUpComponent } from './app/components/signup/signup.component';
import * as firebase from 'firebase';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
