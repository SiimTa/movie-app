import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { MovieModel } from '../../models/movie-details.model';
import * as MovieDetailsActions from '../../actions/movie-details.actions';
import { MovieListModuleStore } from '../../reducers/index';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: Subscription;
  movie$: Observable<MovieModel>;
  id: any;

  constructor(
    private store: Store<MovieListModuleStore>,
    route: ActivatedRoute
  ) {
    this.movieId = route.params
      .pipe(map(params => params.id))
      .subscribe(id => this.requestMovie(id));

    this.movie$ = store.select(state => state.movieDetails.movie);
    this.id = store.select(state => state.movieDetails.movieId);
  }

  ngOnInit() {}

  requestMovie(movieId) {
    this.store.dispatch(new MovieDetailsActions.GetSelectedMovie(movieId));
  }
}
