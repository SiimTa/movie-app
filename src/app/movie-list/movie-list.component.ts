import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as MovieListActions from '../../SDK/actions/movie-list/movie-list.actions';
import { allMovies } from '../../SDK/selectors/movie-list/movie-list.selectors';
import { MovieModel } from '../../content/movie-details.model';

import { AppState } from '../../SDK/reducers';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<MovieModel[]>;

  constructor(private store: Store<AppState>) {
    this.movies$ = this.store.select(allMovies);
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.store.dispatch(new MovieListActions.GetMovies());
  }
}
