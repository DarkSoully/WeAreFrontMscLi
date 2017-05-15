import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {Artist} from '../../../../Artist';
import {Album} from '../../../../Album';
import {AlbumComponent} from '../album/album.component';

@Component({
    selector: 'add-release',
    templateUrl: 'addRelease.component.html',
  styleUrls: ['./addRelease.component.css'],
  providers: [SpotifyService],
})
export class AddReleaseComponent {
    id: string;
    searchStr:string;
    searchRes: Artist[];
    selectedAlbum: Album;
    public visible = false;
    
    constructor(private _spotifyService:SpotifyService){
        
    }
    
    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.albums.items;
                if(res.albums.items[0].id!=undefined)
                {
                    console.log(res.albums.items[0].id);
                    this.id=res.albums.items[0].id;
                }
                console.log('search log test');
                this.visible = true;
            });   
    }
    clearMusic(){
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.albums.items;
                    console.log(res.albums.items[0].id);
                    this.id=res.albums.items[0].id;
                
                console.log('search log test');
                this.visible = false;
            });  
    }
  }
 
