import * as fromMovieList from './movie-list.reducer';
import * as fromMovieDetails from './movie-details.reducer';

export interface MovieListModuleStore {
  moviesList: fromMovieList.State;
  movieDetails: fromMovieDetails.State;
}

export const reducers = {
  movieListReducer: fromMovieList.reducer,
  movieDetailsReducer: fromMovieDetails.reducer
};
