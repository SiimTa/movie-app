import {
  MovieListActionTypes,
  MovieListActions
} from '../actions/movie-list.actions';
import { MovieModel, GenreType } from '../models/movie.model';

/**
 * Movie-List component state interface
 */
export interface State {
  movies: MovieModel[];
  moviesCached: MovieModel[];
  isLoading: boolean;
  filtersVisible: boolean;
}

const initialState: State = {
  movies: [],
  moviesCached: [],
  isLoading: false,
  filtersVisible: false
};

export function reducer(state = initialState, action: MovieListActions) {
  switch (action.type) {
    case MovieListActionTypes.GET_ALL:
      return {
        ...state,
        isLoading: true
      };
    case MovieListActionTypes.GET_ALL_SUCCESS:
      return {
        ...state,
        movies: [...action.payload],
        moviesCached: [...action.payload],
        filtersVisible: false,
        isLoading: false
      };

    case MovieListActionTypes.GET_ALL_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case MovieListActionTypes.APPLY_FILTER:
      let filteredMovies;
      const filter = action.payload;

      /**
       * Show all or apply filter to visible movies
       */
      if (filter === 'all') {
        filteredMovies = state.moviesCached;
      } else {
        filteredMovies = state.moviesCached.filter(
          movie => movie.genres.indexOf(filter) > -1
        );
      }

      return {
        ...state,
        movies: filteredMovies
      };
    case MovieListActionTypes.UI_SHOW_FILTERS:
      return {
        ...state,
        filtersVisible: true
      };

    case MovieListActionTypes.UI_HIDE_FILTERS:
      return {
        ...state,
        filtersVisible: false
      };
    default:
      return state;
  }
}
