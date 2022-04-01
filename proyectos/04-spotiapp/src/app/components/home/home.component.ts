import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  new_songs: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe((releases: any) => {
        this.new_songs = releases;
        this.loading = false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        console.log('ERROR =>',errorServicio.error.error.message);
        this.mensajeError=errorServicio.error.error.message;
      });

  }



}
