import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import module components
import { MovieListComponent } from './movie-list.component';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';

// Import Module Effects & ngrx dependency
import { EffectsModule } from '@ngrx/effects';
import { MovieListEffects } from './effects/movie-list.effects';
import { MovieDetailsEffects } from './effects/movie-details.effects';

// Import module routing
import { RouterModule } from '@angular/router';
import { movieListRoutes } from './movie-list-routing.module';

@NgModule({
  declarations: [
    MovieListComponent,
    MoviePreviewComponent,
    MovieDetailsComponent,
    MovieFilterComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([MovieListEffects, MovieDetailsEffects]),
    RouterModule.forChild(movieListRoutes)
  ],
  exports: [
    MovieListComponent,
    MoviePreviewComponent,
    MovieDetailsComponent,
    MovieFilterComponent
  ]
})
export class MovieListModule {}
