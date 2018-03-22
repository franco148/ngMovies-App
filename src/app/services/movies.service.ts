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
