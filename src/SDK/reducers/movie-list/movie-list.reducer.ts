import {
  MovieListActionTypes,
  MovieListActions
} from '../../actions/movie-list/movie-list.actions';

import { MovieModel } from '../../../content/movie-details.model';

export interface State {
  movies: MovieModel[];
  isLoading: boolean;
}

const initialState: State = {
  movies: [],
  isLoading: false
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
        isLoading: false
      };

    case MovieListActionTypes.GET_ALL_FAIL:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
