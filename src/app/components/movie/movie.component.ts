import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie:any;
  returnTo:string="";

  constructor(public _moviesService: MoviesService,
              public route: ActivatedRoute) {
    this.route.params.subscribe(parameters => {
      //When parameters are mandatory, if they do not exist, angular will never
      //call the page
      //console.log(parameters);
      this._moviesService.getMovieById(parameters['id'])
                         .subscribe(movieReponse => {
        console.log(movieReponse);
        this.movie = movieReponse;
        this.returnTo = parameters['prevpage'];
      });
    });
  }

  ngOnInit() {
  }

}
