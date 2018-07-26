import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import root module
import { AppComponent } from './app.component';

// Import store & -devtools dependencies
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Import components
import { MovieListComponent } from './movie-list/movie-list.component';

// Import reducers from SDK
import { reducers } from '../SDK/reducers';

// Import App Effects & ngrx dependency
import { EffectsModule } from '@ngrx/effects';
import { MovieListEffects } from '../SDK/effects/movie-list/movie-list.effects';
import { MoviePreviewComponent } from './movie-list/movie-preview/movie-preview.component';
import { MovieDetailsComponent } from './movie-list/movie-details/movie-details.component';

// Import routing module & application routes
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MoviePreviewComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    EffectsModule.forRoot([MovieListEffects]),
    StoreModule.forRoot({
      moviesList: reducers.movieListReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
