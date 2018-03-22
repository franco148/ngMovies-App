import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search:string="";

  constructor(public _moviesService: MoviesService) { }

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
