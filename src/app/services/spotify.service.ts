import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private deezerUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;
    
    constructor(private _http:Http){
        
    }
    
    searchMusic(str:string, type='artist', artist='Deftones'){
        this.searchUrl = 'https://api.spotify.com/v1/search?q=album:'+str+'%20artist:'+artist+'&type=album';
        return this._http.get(this.searchUrl)
            .map(res => res.json());
            
    }
    
    getArtist(id:string){
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this._http.get(this.artistUrl)
            .map(res => res.json());
    }
    
    getAlbums(artistId:string){
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums?market=BE';
        return this._http.get(this.albumsUrl)
            .map(res => res.json());
    }
    
    getAlbum(id:string){
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
        return this._http.get(this.albumUrl)
            .map(res => res.json());
    }
}