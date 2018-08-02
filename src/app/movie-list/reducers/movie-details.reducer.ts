import {
  MovieDetailsActionTypes,
  MovieDetailsActions
} from '../actions/movie-details.actions';
import { MovieModel } from '../models/movie.model';

/**
 * Movie-List component state interface
 */
export interface State {
  movie: MovieModel;
}

const initialState: State = {
  movie: {
    id: 0,
    key: '',
    name: '',
    description: '',
    genres: [],
    rate: '',
    length: '',
    img: ''
  }
};

export function reducer(state = initialState, action: MovieDetailsActions) {
  switch (action.type) {
    case MovieDetailsActionTypes.GET_SELECTED_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    default:
      return state;
  }
}
