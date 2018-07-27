import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import module components
import { MovieListComponent } from './movie-list.component';
import { MoviePreviewComponent } from './components/movie-preview/movie-preview.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

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
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forRoot([MovieListEffects, MovieDetailsEffects]),
    RouterModule.forChild(movieListRoutes)
  ],
  exports: [MovieListComponent, MoviePreviewComponent, MovieDetailsComponent]
})
export class MovieListModule {}
