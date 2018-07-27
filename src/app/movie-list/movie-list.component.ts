import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as MovieListActions from './actions/movie-list.actions';
import { allMovies } from './selectors/movie-list.selectors';
import { MovieModel } from './models/movie-details.model';

import { MovieListModuleStore } from './reducers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<MovieModel[]>;

  constructor(
    private store: Store<MovieListModuleStore>,
    route: ActivatedRoute
  ) {
    this.movies$ = this.store.select(allMovies);
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.store.dispatch(new MovieListActions.GetMovies());
  }
}
