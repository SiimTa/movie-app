import { Action } from '@ngrx/store';

export const enum MovieDetailsActionTypes {
  GET_SELECTED_MOVIE = '[Movie-Details] Get Selected Movie',
  GET_SELECTED_MOVIE_SUCCESS = '[Movie-Details] Get Selected Movie Success',
  GET_SELECTED_MOVIE_FAIL = '[Movie-Details] Get Selected Movie Fail'
}

export class GetSelectedMovie implements Action {
  readonly type = MovieDetailsActionTypes.GET_SELECTED_MOVIE;
  constructor(public payload) {}
}

export class GetSelectedMovieSuccess implements Action {
  readonly type = MovieDetailsActionTypes.GET_SELECTED_MOVIE_SUCCESS;
  constructor(public payload) {}
}

export class GetSelectedMovieFail implements Action {
  readonly type = MovieDetailsActionTypes.GET_SELECTED_MOVIE_FAIL;
}

export type MovieDetailsActions =
  | GetSelectedMovie
  | GetSelectedMovieSuccess
  | GetSelectedMovieFail;
