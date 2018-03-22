import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  billboard:any;
  populars:any;
  childrenMovies:any;

  constructor(public _moviesService: MoviesService) {
    this._moviesService.getCartelera()
                       .subscribe(data => {
                         // console.log(data);
                         this.billboard = data;
                         // console.log('billboard !!!!!', this.billboard);
                       });

    this._moviesService.getPopulares()
                       .subscribe(data => this.populars = data );

    this._moviesService.getPopularsForChildren()
                       .subscribe(data => this.childrenMovies = data );
  }

  ngOnInit() {
  }

}
