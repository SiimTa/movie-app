import { createSelector } from '@ngrx/store';

import { AppState } from '../../reducers';
import { State } from '../reducers/movie-details.reducer';

/**
 * Selectors used by movie-details component
 */
export const selectMovieDetails = (state: AppState) => state.movieDetails;

export const selectMovie = createSelector(
  selectMovieDetails,
  (state: State) => state.movie
);
