import { Injectable } from '@angular/core';
import { of } from 'rxjs';

// Import mocked data
import { movies } from '../../../content/movie.mock-data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor() {}

  // Transform mocked data into an Observable, so we could 'pipe' it in 'movie-list.effects'
  getMovies() {
    return of(movies);
  }
}
