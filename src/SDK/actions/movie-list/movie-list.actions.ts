import { Action } from '@ngrx/store';

export const enum MovieListActionTypes {
  GET_ALL = '[Movie-List] Get All'
}

// action creators
export class GetMovies implements Action {
  readonly type = MovieListActionTypes.GET_ALL;
  constructor(public payload) {}
}

// Exports Movie-List Actions
export type MovieListActions = GetMovies;
