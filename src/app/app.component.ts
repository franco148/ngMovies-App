import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _moviesService: MoviesService) {
    // this._moviesService.getPopulares()
    //     .subscribe(data => console.log(data));
  }
}
