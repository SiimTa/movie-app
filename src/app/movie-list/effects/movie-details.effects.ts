import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as MovieDetailsActions from '../actions/movie-details.actions';
import { MovieService } from '../services/movie.service';

@Injectable()
export class MovieDetailsEffects {
  @Effect()
  getMovie$: Observable<Action> = this.actions$.pipe(
    ofType(MovieDetailsActions.MovieDetailsActionTypes.GET_SELECTED_MOVIE),
    map((action: MovieDetailsActions.GetSelectedMovie) => action.payload), // We need this typing, because payload is not in ngrx Action by default
    mergeMap(payload =>
      this.service.getMovie(payload).pipe(
        // If successful, dispatch success action with response data
        map(data => new MovieDetailsActions.GetSelectedMovieSuccess(data)),

        // Dispatch fail action
        catchError(() => of(new MovieDetailsActions.GetSelectedMovieFail()))
      )
    )
  );

  constructor(private actions$: Actions, private service: MovieService) {}
}
