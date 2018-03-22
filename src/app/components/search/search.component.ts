import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search:string="";

  constructor(public _moviesService: MoviesService,
              public route: ActivatedRoute) {
    this.route.params.subscribe(parameters => {
      //console.log(parameters);
      if (parameters['movie']) {
          // this._moviesService.buscarPelicula(parameters['movie'])
          //                    .subscribe();
          this.search = parameters['movie'];
          this.searchMovie();
      }
    });
  }

  ngOnInit() {
  }

  searchMovie() {
    if (this.search.length == 0) {
        return;
    }

    this._moviesService.buscarPelicula(this.search)
                       .subscribe();
  }

}
