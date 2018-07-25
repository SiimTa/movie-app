import { Injectable } from '@angular/core';

// Import mocked data
import { movies } from '../../../content/movie.mock-data';

@Injectable()
export class MovieService {
  constructor() {}

  // Request movie data
  getMovies() {
    return movies;
  }
}
