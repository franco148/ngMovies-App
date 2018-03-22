import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImg'
})
export class MovieImgPipe implements PipeTransform {

  transform(movie: any, seePoster:boolean = false): any {

    let url = "http://image.tmdb.org/t/p/w500";

    if (seePoster) {
        return url + movie.poster_path;
    }

    if (movie.backdrop_path) {
        return url + movie.backdrop_path;
    } else {
      if (movie.poster_path) {
          return url + movie.poster_path;
      }
    }
    return "assets/img/no-image.jpg";
  }

}
