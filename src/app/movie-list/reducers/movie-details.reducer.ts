import {
  MovieDetailsActionTypes,
  MovieDetailsActions
} from '../actions/movie-details.actions';
import { MovieModel } from '../models/movie-details.model';

/**
 * Movie-List component state interface
 */
export interface State {
  movie: MovieModel;
  isLoading: Boolean;
  movieId: null;
}

const initialState: State = {
  movieId: null,
  movie: {
    id: 0,
    key: '',
    name: '',
    description: '',
    genres: [],
    rate: '',
    length: '',
    img: ''
  },
  isLoading: false
};

export function reducer(state = initialState, action: MovieDetailsActions) {
  switch (action.type) {
    case MovieDetailsActionTypes.GET_SELECTED_MOVIE:
      return {
        ...state,
        movieId: action.payload,
        isLoading: true
      };

    case MovieDetailsActionTypes.GET_SELECTED_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        isLoading: false
      };

    case MovieDetailsActionTypes.GET_SELECTED_MOVIE_FAIL:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
