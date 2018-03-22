import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public _moviesService: MoviesService) {
    this._moviesService.getCartelera()
                       .subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
