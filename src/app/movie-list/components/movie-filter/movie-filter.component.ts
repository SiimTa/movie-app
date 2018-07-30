import { Component, OnInit } from '@angular/core';
import { genreType } from '../../models/movie-details.model';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent implements OnInit {
  genres: any[] = [];
  movieFiltersVisible: boolean = false;

  constructor() {}

  ngOnInit() {
    this.getMovieGenres();
  }

  getMovieGenres() {
    Object.entries(genreType).forEach(([value]) => {
      this.genres.push(value);
    });
  }
  toggleMovieFilters() {
    this.movieFiltersVisible = !this.movieFiltersVisible;
  }

  movieFilterClick(e) {
    //TODO: Filter movies
    console.log(e);
  }
}
