import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  singers: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string) {

    this.loading = true;

    if(termino.length>0){
      this.spotify.getArtistas(termino)
        .subscribe((artist: any) => {
          console.log('artist',artist);
          this.singers = artist;
          this.loading = false;
        });
      }else{
        this.singers=[];
        this.loading = false;
      }

  }

}
