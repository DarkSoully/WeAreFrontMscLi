import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../../Artist';
import {Album} from '../../../../Album';
import {AlbumComponent} from '../album/album.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription } from 'rxjs';

@Component({
    selector: 'artist',
    templateUrl: 'artist.component.html',
  styleUrls: ['./artist.component.css'],
})

export class ArtistComponent implements OnInit{ 
    id:string;
    artist: Artist[];
    albums:Album[];
    private subscription: Subscription;
    
    
    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute){
        
    }
    
    ngOnInit(){
        console.log('artist test');
        this.subscription=this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                console.log(id);     
                this._spotifyService.getAlbums(id)
                    .subscribe(albums => {
                        console.log(albums);
                        this.albums = albums.items;
                    })
            })
    }
}
