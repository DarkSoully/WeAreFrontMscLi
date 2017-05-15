import { Component, OnInit} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../../../Album';
import {Artist} from '../../../../Artist';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription } from 'rxjs';
import {AddReleaseComponent} from '../addRelease/addRelease.component';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
    selector: 'album',
    templateUrl: 'album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit { 
    album:Album[];
    release: FirebaseObjectObservable<any>;
    artistLocal:string;
    releaseNameLocal:string;
    typeLocal:string;
    imageLocal:string;

    
    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute,
        private _addRelease:AddReleaseComponent,
        public af: AngularFire){
            //this.release = af.database.object('/users/deftones/releases/');
        
    }
    
     ngOnInit(){
         console.log("test");
         
         console.log(this._addRelease.id);
        this._spotifyService.getAlbum(this._addRelease.id)
                    .subscribe(album => {
                        this.releaseNameLocal=album.name;
                        this.releaseNameLocal=this.releaseNameLocal;
                        this.release = this.af.database.object('/users/deftones/releases/'+this.releaseNameLocal.toLowerCase().replace(/ /g,'')+'/');
                        this.album = album;
                        this.artistLocal=album.artists[0].name;
                        this.typeLocal=album.type;
                        this.imageLocal=album.images[0].url;
                        console.log(album);
                        console.log(album.type);
                        console.log(this.release);
                    })  
    }

    addRelease()
    {
        //console.log(this.album);
        this.release.set({ 
            artist:  this.artistLocal, 
            release:  this.releaseNameLocal, 
            type: this.typeLocal,
            image: this.imageLocal
        });
    }


}