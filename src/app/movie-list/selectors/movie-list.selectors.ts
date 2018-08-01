import { createSelector } from '@ngrx/store';

import { AppState } from '../../reducers';
import { State } from '../reducers/movie-list.reducer';

/**
 * Selectors used by movie-list component
 */

export const selectMovieList = (state: AppState) => state.moviesList;

export const selectAllMovies = createSelector(
  selectMovieList,
  (state: State) => state.movies
);

export const selectFiltersVisible = createSelector(
  selectMovieList,
  (state: State) => state.filtersVisible
);

export const selectAppliedFilter = createSelector(
  selectMovieList,
  (state: State) => state.appliedFilter
);
