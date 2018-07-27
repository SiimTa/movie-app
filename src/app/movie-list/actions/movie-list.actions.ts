import { Action } from '@ngrx/store';

export const enum MovieListActionTypes {
  GET_ALL = '[Movie-List] Get All',
  GET_ALL_SUCCESS = '[Movie-List] Get All Success',
  GET_ALL_FAIL = '[Movie-List] Get All Fail'
}

// action creators
export class GetMovies implements Action {
  readonly type = MovieListActionTypes.GET_ALL;
}

export class GetMoviesSuccess implements Action {
  readonly type = MovieListActionTypes.GET_ALL_SUCCESS;
  constructor(public payload) {}
}

export class GetMoviesFail implements Action {
  readonly type = MovieListActionTypes.GET_ALL_FAIL;
}

// Exports Movie-List Actions
export type MovieListActions = GetMovies | GetMoviesSuccess | GetMoviesFail;
