import { Routes } from '@angular/router';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieFormComponent } from './pages/movie-form/movie-form.component';
import { MovieApiListComponent } from './pages/movie-api-list/movie-api-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MovieFormComponent,
  },
  {
    path: 'movie-list',
    component: MovieListComponent,
  },
  {
    path: 'movie-api-list',
    component: MovieApiListComponent,
  },
];
