import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../reducers';
import { genreType } from '../../models/movie.model';
import { capitalizeFirstLetter } from '../../../utils/string-utils';
import * as MovieListActions from '../../actions/movie-list.actions';
import { filtersVisible } from '../../selectors/movie-list.selectors';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent implements OnInit {
  genres: any[] = [];
  movieFiltersVisible: boolean;

  constructor(private store: Store<AppState>) {
    this.store
      .select(filtersVisible)
      .subscribe(data => (this.movieFiltersVisible = data));
  }

  ngOnInit() {
    this.getMovieGenres();
  }

  getMovieGenres() {
    Object.entries(genreType).forEach(([value]) => {
      this.genres.push(capitalizeFirstLetter(value));
    });
  }

  toggleMovieFilters() {
    this.movieFiltersVisible
      ? this.store.dispatch(new MovieListActions.UI_HideFilters())
      : this.store.dispatch(new MovieListActions.UI_ShowFilters());
  }

  movieFilterClick(filter) {
    this.store.dispatch(new MovieListActions.ApplyFilter(filter.toLowerCase()));
  }
}
