import { AppState } from '../../reducers';

/**
 * Selectors used by movie-details component
 */
export const selectedMovie = (state: AppState) => state.movieDetails.movie;
