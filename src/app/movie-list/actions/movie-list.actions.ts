import { Action } from '@ngrx/store';
import { GenreType } from '../models/movie.model';

export const enum MovieListActionTypes {
  GET_ALL = '[Movie-List] Get All',
  GET_ALL_SUCCESS = '[Movie-List] Get All Success',
  GET_ALL_FAIL = '[Movie-List] Get All Fail',
  APPLY_FILTER = '[Movie-List] Apply Filter',

  /**
   * Movie List UI State ActionTypes
   */
  UI_SHOW_FILTERS = '[UI-Movie-List] Show Filters',
  UI_HIDE_FILTERS = '[UI-Movie-List] Hide Filters'
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

export class ApplyFilter implements Action {
  readonly type = MovieListActionTypes.APPLY_FILTER;
  constructor(public payload: GenreType) {}
}

/**
 * Movie List UI State Actions
 */
export class UI_ShowFilters implements Action {
  readonly type = MovieListActionTypes.UI_SHOW_FILTERS;
}

export class UI_HideFilters implements Action {
  readonly type = MovieListActionTypes.UI_HIDE_FILTERS;
}

// Exports Movie-List Actions
export type MovieListActions =
  | GetMovies
  | GetMoviesSuccess
  | GetMoviesFail
  | ApplyFilter
  | UI_ShowFilters
  | UI_HideFilters;
