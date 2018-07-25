import * as fromMovieList from './movie-list/movie-list.reducer';

export interface AppState {
  moviesList: fromMovieList.State;
}

export const reducers = {
  movieListReducer: fromMovieList.reducer
};
