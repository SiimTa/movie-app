import { AppState } from '../../reducers/';

export const allMovies = (state: AppState) => state.moviesList.movies;
