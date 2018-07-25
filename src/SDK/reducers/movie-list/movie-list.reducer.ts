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
        movies: [...action.payload]
      };
  }
}
