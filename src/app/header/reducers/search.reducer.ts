import { SearchActionTypes, SearchActions } from '../actions/search.actions';

export interface State {
  searchString: String;
}

const initialState: State = {
  searchString: ''
};

export function reducer(state = initialState, action: SearchActions) {
  switch (action.type) {
    case SearchActionTypes.DO_SEARCH:
      return {
        searchString: action.payload
      };
    default:
      return state;
  }
}
