import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Modules used within the App
import { MovieListModule } from './movie-list/movie-list.module';

// Import root component
import { AppComponent } from './app.component';

// Import store & -devtools dependencies
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Import reducers from SDK
import { reducers } from '../SDK/reducers';

// Import routing module & application routes
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MovieListModule,
    RouterModule.forRoot(appRoutes),
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
