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
  isLoading: boolean;
  filtersVisible: boolean;
  appliedFilter: string;
}

const initialState: State = {
  movies: [],
  isLoading: false,
  filtersVisible: false,
  appliedFilter: ''
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
        filtersVisible: false,
        isLoading: false
      };

    case MovieListActionTypes.GET_ALL_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case MovieListActionTypes.APPLY_FILTER:
      return {
        ...state,
        appliedFilter: action.payload.toLowerCase()
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
