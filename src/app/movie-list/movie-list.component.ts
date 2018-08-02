import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  selectAllMovies,
  selectAppliedFilter,
  selectFiltersVisible
} from './selectors/movie-list.selectors';
import { MovieModel } from './models/movie.model';
import * as MovieListActions from './actions/movie-list.actions';

import { AppState } from '../reducers';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<MovieModel[]>;
  movieFilter$: Subscription;
  movieFiltersVisible: boolean;

  constructor(private store: Store<AppState>, route: ActivatedRoute) {
    this.movies$ = store.pipe(select(selectAllMovies));
    this.movieFilter$ = store
      .pipe(select(selectAppliedFilter))
      .subscribe(filter => this.applyMovieFilter(filter));

    store
      .pipe(select(selectFiltersVisible))
      .subscribe(data => (this.movieFiltersVisible = data));
  }
  ngOnInit() {
    this.applyMovieFilterFromHash(location.hash.slice(1));
  }

  applyMovieFilter(filter) {
    // Avoid filtering process for initial state '' & 'all' - show all movies
    if (filter === '' || filter.toLowerCase() === 'all') {
      this.movies$ = this.store.pipe(select(selectAllMovies));
      return;
    }

    this.movies$ = this.store.pipe(
      select(selectAllMovies),
      map(movies => movies.filter(movie => movie.genres.indexOf(filter) > -1))
    );
  }

  applyMovieFilterFromHash(hash) {
    if (hash) {
      this.store.dispatch(new MovieListActions.ApplyFilter(hash));
      this.store.dispatch(new MovieListActions.UI_ShowFilters());
    }
  }
}
