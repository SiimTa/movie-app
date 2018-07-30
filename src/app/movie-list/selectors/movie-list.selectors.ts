import { AppState } from '../../reducers';

/**
 * Selectors used by movie-list component
 */
export const allMovies = (state: AppState) => state.moviesList.movies;
