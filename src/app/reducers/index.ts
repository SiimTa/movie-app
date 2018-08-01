import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

// Import all reducers from the app
import * as fromMovieList from '../movie-list/reducers/movie-list.reducer';
import * as fromMovieDetails from '../movie-list/reducers/movie-details.reducer';

export interface AppState {
  router: any;
  moviesList: fromMovieList.State;
  movieDetails: fromMovieDetails.State;
}

// Combine all reducers
export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  moviesList: fromMovieList.reducer,
  movieDetails: fromMovieDetails.reducer
};
