import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId$: Observable<any>;
  movie$: Observable<any>; //Todo: type MovieModel
  constructor(route: ActivatedRoute) {
    this.movieId$ = route.params.pipe(map(params => params.id));
  }

  ngOnInit() {
    // 1) get movie ID from route params
    // 2) dispatch action with movieID...
    // 3) Select the corresponding movie from state
    console.log('in details');
  }
}
