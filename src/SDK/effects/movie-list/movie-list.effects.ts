import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as MovieListActions from '../../actions/movie-list/movie-list.actions';
import { MovieService } from '../../services/movie/movie.service';

@Injectable()
export class MovieListEffects {
  @Effect()
  getMovies$: Observable<Action> = this.actions$.pipe(
    ofType(MovieListActions.MovieListActionTypes.GET_ALL),
    mergeMap(() =>
      this.service.getMovies().pipe(
        // If successful, dispatch success action with response data
        map(data => new MovieListActions.GetMoviesSuccess(data)),

        // Dispatch fail action
        catchError(() => of(new MovieListActions.GetMoviesFail()))
      )
    )
  );

  constructor(private actions$: Actions, private service: MovieService) {}
}
