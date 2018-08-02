import { Action } from '@ngrx/store';

export const enum SearchActionTypes {
  DO_SEARCH = '[Search] Do Search'
}

export class DoSearch implements Action {
  readonly type = SearchActionTypes.DO_SEARCH;
  constructor(public payload) {}
}

export type SearchActions = DoSearch;
