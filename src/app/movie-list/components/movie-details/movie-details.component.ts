import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { MovieModel } from '../../models/movie.model';
import * as MovieDetailsActions from '../../actions/movie-details.actions';
import { AppState } from '../../../reducers';
import { selectMovie } from '../../selectors/movie-details.selectors';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie$: MovieModel;

  constructor(private store: Store<AppState>, route: ActivatedRoute) {
    route.params
      .pipe(map(params => params.id))
      .subscribe(id => this.requestMovie(id));

    store.pipe(select(selectMovie)).subscribe(data => (this.movie$ = data));
  }

  ngOnInit() {}

  requestMovie(movieId) {
    this.store.dispatch(new MovieDetailsActions.GetSelectedMovie(movieId));
  }
}
