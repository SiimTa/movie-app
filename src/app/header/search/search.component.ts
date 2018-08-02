import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers/index';
import * as SearchActions from '../actions/search.actions';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  doSearch(searchString) {
    this.store.dispatch(new SearchActions.DoSearch(searchString.toLowerCase()));
  }
}
