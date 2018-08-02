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

  constructor(private store: Store<AppState>, route: ActivatedRoute) {}
  ngOnInit() {
    this.store
      .pipe(select(state => state.search.searchString))
      .subscribe(searchString => this.searchMovies(searchString));

    this.store
      .pipe(select(selectFiltersVisible))
      .subscribe(data => (this.movieFiltersVisible = data));

    this.movies$ = this.store.pipe(select(selectAllMovies));
    this.movieFilter$ = this.store
      .pipe(select(selectAppliedFilter))
      .subscribe(filter => this.applyMovieFilter(filter));

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

  searchMovies(searchString) {
    console.log(searchString);
    this.movies$ = this.store.pipe(
      select(selectAllMovies),
      map(movies =>
        movies.filter(
          movie =>
            (movie.name || movie.description)
              .toLowerCase()
              .indexOf(searchString) > -1
        )
      )
    );
  }

  applyMovieFilterFromHash(hash) {
    if (hash) {
      this.store.dispatch(new MovieListActions.ApplyFilter(hash));
      this.store.dispatch(new MovieListActions.UI_ShowFilters());
    }
  }
}
