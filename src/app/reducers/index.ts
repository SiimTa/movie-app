import { ActionReducerMap } from '@ngrx/store';

// Import all reducers from the app
import * as fromMovieList from '../movie-list/reducers/movie-list.reducer';
import * as fromMovieDetails from '../movie-list/reducers/movie-details.reducer';
import * as fromSearch from '../header/reducers/search.reducer';

export interface AppState {
  moviesList: fromMovieList.State;
  movieDetails: fromMovieDetails.State;
  search: fromSearch.State;
}

// Combine all reducers
export const reducers: ActionReducerMap<AppState> = {
  moviesList: fromMovieList.reducer,
  movieDetails: fromMovieDetails.reducer,
  search: fromSearch.reducer
};
