import { Injectable } from '@angular/core';
import { of } from 'rxjs';

// Import mocked data
import { movies } from '../../../content/movie.mock-data';

@Injectable({
  providedIn: 'root'
})

/**
 * Service class responsible for requesting Movies data
 */
export class MovieService {
  constructor() {}

  /**
   * Transform mocked data into an Observable, so we could 'pipe' it in 'movie-list.effects'
   */
  getMovies() {
    return of(movies);
  }

  /**
   *  Mock a service call for certain movie when app is first accesed via direct url
   *  ex: movie-details/:movieId
   * @param id - requestable movie ID
   */
  getMovie(id) {
    const movie = movies.filter(item => item.id == id)[0];
    return of(movie);
  }
}
