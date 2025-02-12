import { Component } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-api-list',
  imports: [CommonModule],
  template: `
    <div class="bg-blue-200 min-h-screen p-6">
      <div class="p-6 max-w-2xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-6 text-blue-700">
          Popular Movies
        </h2>
        <div
          *ngFor="let movie of popularMovies"
          class="p-4 bg-white shadow-md rounded-lg mt-2 flex flex-col items-center"
        >
          <img
            *ngIf="movie.poster_path"
            [src]="'https://image.tmdb.org/t/p/w200' + movie.poster_path"
            alt="Movie Poster"
            class="mb-2 w-32 h-32 object-cover rounded-md"
          />

          <h2 class="text-2xl font-bold text-blue-600">{{ movie.title }}</h2>
          <p class="text-gray-600">
            <strong>Language:</strong> {{ movie.original_language }}
          </p>
          <p class="text-gray-600">
            <strong>Rating:</strong> {{ movie.vote_average }}
          </p>
        </div>
        <div class="mt-4 flex justify-between">
          <button
            (click)="changePage(-1)"
            [disabled]="currentPage === 1"
            class="px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span class="px-4 py-2 text-lg font-bold"
            >Page {{ currentPage }}</span
          >
          <button
            (click)="changePage(1)"
            class="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MovieApiListComponent {
  popularMovies: any[] = [];
  currentPage: number = 1;
  constructor(private movieApiService: MovieApiService) {}
  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.movieApiService
      .getPopularMovies(this.currentPage)
      .subscribe((data) => {
        this.popularMovies = data.results;
        console.log('what', this.popularMovies);
      });
  }
  changePage(direction: number) {
    this.currentPage += direction;
    this.fetchMovies();
  }
}
