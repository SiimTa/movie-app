import { MovieListModuleStore } from '../reducers';

export const allMovies = (state: MovieListModuleStore) =>
  state.moviesList.movies;
