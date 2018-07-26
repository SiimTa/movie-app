import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<any>;
  constructor() {}

  ngOnInit() {
    // 1) get movie ID from route params
    // 2) dispatch action...
    console.log('in details');
  }
}
