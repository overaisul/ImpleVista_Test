import { Component, signal } from '@angular/core';
import { ListMovieService } from '../../services/list-movie.service';
import { MovieDetails } from '../../Models/MovieDetails.model';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [FormsModule, TodoFormComponent],
  template: `
    <div class="flex justify-center items-center h-screen bg-blue-200">
      <form
        (ngSubmit)="onSubmit()"
        class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4"
      >
        <h1 class="text-2xl font-bold text-blue-600">Add Movie</h1>

        <app-todo-form [movie]="movieDetails()" />

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer mt-4"
        >
          Add Movie
        </button>
      </form>
    </div>
  `,
})
export class MovieFormComponent {
  movieDetails = signal<MovieDetails>({
    id: 0,
    title: '',
    language: 'English',
    rating: 0,
  });

  constructor(
    private listMovieService: ListMovieService,
    private router: Router
  ) {}

  onSubmit() {
    console.log(this.movieDetails());
    if (this.movieDetails().title && this.movieDetails().rating >= 0) {
      this.listMovieService.addMovie(this.movieDetails());
      this.movieDetails.set({
        id: 0,
        title: '',
        language: 'English',
        rating: 0,
      });
      this.router.navigate(['/movie-list']);
    }
  }
}
