import { Injectable, signal } from '@angular/core';
import { MovieDetails } from '../Models/MovieDetails.model';

@Injectable({
  providedIn: 'root',
})
export class ListMovieService {
  private storageKey = 'movieList';

  movieList = signal<MovieDetails[]>(this.getStoredMovieList());

  addMovie(movie: MovieDetails) {
    const newId = this.movieList().length
      ? this.movieList()[this.movieList().length - 1].id + 1
      : 1;
    const movieWithId = { ...movie, id: newId };
    const updatedList = [...this.movieList(), movieWithId];
    this.movieList.set(updatedList);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedList));
  }

  private getStoredMovieList(): MovieDetails[] {
    const storedList = localStorage.getItem(this.storageKey);
    return storedList ? JSON.parse(storedList) : [];
  }
}
