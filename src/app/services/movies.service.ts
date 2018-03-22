import { Injectable } from '@angular/core';

import { Jsonp, Http } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class MoviesService {

  private apikey:string = "7f87cf9007c9f4f28e01345f8f1ebf37";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  movies:any[] = [];

  constructor( private jsonp:Jsonp,
               private http: Http) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    // return this.http.get(url)
    //                 .map(resp => resp.json());

    return this.jsonp.get( url )
                .map( res=> res.json().results);
  }

  getPopularsForChildren() {
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                .map( res=> res.json().results);
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> {
                  this.movies = res.json().results;
                  return res.json().results;
                });
  }

  getCartelera() {

    let fromDate = new Date();
    let toDate = new Date();
    toDate.setDate(toDate.getDate() + 7);

    let fromDateStr = `${ fromDate.getFullYear() }-${ fromDate.getMonth() + 1 }-${ fromDate.getDate() }`;
    let toDateStr = `${ toDate.getFullYear() }-${ toDate.getMonth() + 1 }-${ toDate.getDate() }`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ fromDateStr }&primary_release_date.lte=${ toDateStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json().results);
  }

}


// this._service.getMovie("wall-e").subscribe(data=>console.log(data));
//
// image.tmdb.org/t/p/w300/iX3RJLK
// ======================================================================
// - crear una aplicacion de peliculas
// - Usar el API de themoviedb.org
// - Deben usar rutas.
// - Deben de usar parametros de ruta
// - Deben de usar bootstrap 4
// - Tiene q tener por lo menos la siguiente estructura
// * NavBar con por lo menos home, y busqueda
// * home
// 	- Peliculas en la cartelera de cines actual
// 	- Peliculas populares
// 	- Peliculas para ninios mas populares
// 		* Al hacer click en cualquier pelicula, debe de llevarme
// 		  a una pantalla que me permita ver informacion de la pelicula.
// * Bucador
// 	- Debe de poder buscar peliculas
// 	- Deben de aparecer de forma elegante con la imagen del poster
// 	- Al hacer click, llevarme a ver la informacion de la pelicula.
//
// * Pagina de informacion.
// 	- Esta pantalla debe de mostrar por lo menos, la imagen del poster grande.
// 	- Debe de mostrar la sinopsis de la pelicula.
// 	- Debe poder regresar a la pagina anterior
// 		* La pagina anterior, es decir, silo llame del HOME, debe de regresar
// 		  al HOME, si la llame del buscador, debe de regresarme al BUSCADOR.
