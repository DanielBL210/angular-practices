import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[]=[];
  loading: boolean;
  urlBase:string='https://open.spotify.com/embed?uri=';

  constructor(private router: ActivatedRoute,
    private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params['id']);
      this.getArtist(params['id']);      
      this.getTopTracks(params['id']);      
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id)
      .subscribe(artistData => {
        console.log('artistData', artistData);
        this.artista = artistData;
        this.loading = false;
      })
  }

  getTopTracks(id: string) {
    
    this.spotify.getTopTracks(id)
      .subscribe(topTracksData => {
        console.log('getTopTracks', topTracksData);
        this.topTracks=topTracksData;
        
      })
  }

}
