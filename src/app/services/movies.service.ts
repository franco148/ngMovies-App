import { Injectable } from '@angular/core';

import { Jsonp, Http } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class MoviesService {

  private apikey:string = "7f87cf9007c9f4f28e01345f8f1ebf37";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private jsonp:Jsonp,
               private http: Http) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    // return this.http.get(url)
    //                 .map(resp => resp.json());

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

}
