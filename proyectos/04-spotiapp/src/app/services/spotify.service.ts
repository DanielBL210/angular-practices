import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'Bearer BQCfUhKOApBSS0b_k4hgcs5QzYn8r7-NJjYKBmqzQLy6yoSK9eFreGQaTsjCd91lJKVPqogCd6p_qpp7JBc';

  constructor(private http: HttpClient) {
    console.log('Spotify services listo');
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {    

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data) => data['albums'].items));
  }

  getArtistas(termino: string) {   
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data) => data['artists'].items));
  }

  getArtist(id: string) {   
    
    return this.getQuery(`artists/${id}`);
      //.pipe(map((data) => data['artists'].items));
  }

  getTopTracks(id: string) {       
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data) => data['tracks']));
  }

}
