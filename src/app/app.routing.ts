import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddReleaseComponent} from './components/addRelease/addRelease.component';
import {PageNotFoundComponent} from './components/pageNotFound/pageNotFound.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/signup/signup.component';
import {LoginPopupComponent} from "./components/Login/login-popup/login-popup.component";


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-release', component: AddReleaseComponent },
  { path: 'artist/:id', component: ArtistComponent},
  { path: 'album/:id', component: AlbumComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},
  { path: '', component: LoginPopupComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
