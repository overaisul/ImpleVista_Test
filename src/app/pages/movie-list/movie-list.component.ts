import { Component, signal } from '@angular/core';
import { ListMovieService } from '../../services/list-movie.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieViewComponent } from '../../components/movie-view/movie-view.component';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';
import { MovieItemsComponent } from '../../components/movie-items/movie-items.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    MovieViewComponent,
    TodoFormComponent,
    MovieItemsComponent,
  ],
  template: `
    <div class="bg-blue-200 min-h-screen">
      <div class="p-6 max-w-2xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-6 text-blue-700">
          Movie List
        </h2>

        <div
          *ngIf="listMovieService.movieList().length === 0"
          class="text-center text-gray-600"
        >
          No movies added yet.
        </div>

        <div class="space-y-4">
          <app-movie-items
            *ngFor="
              let movie of listMovieService.movieList();
              trackBy: trackById
            "
            [movie]="movie"
            (view)="viewMovie($event)"
            (edit)="editMovie($event)"
            (delete)="deleteMovie($event)"
          ></app-movie-items>
        </div>

        <div class="mt-6">
          <button
            routerLink="/"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Add Movie
          </button>
        </div>

        <div
          *ngIf="selectedMovie"
          class="fixed inset-0 flex items-center justify-center bg-black"
        >
          <app-movie-view
            [movie]="selectedMovie"
            (closeModalEvent)="closeModal()"
          ></app-movie-view>
        </div>

        <div
          *ngIf="editingMovieIndex !== null"
          class="fixed inset-0 flex items-center justify-center bg-black"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h2 class="text-2xl font-bold text-blue-600">Edit Movie</h2>

            <app-todo-form [movie]="editingMovie"></app-todo-form>
            <div class="flex justify-between items-center mt-4">
              <label for="" class="font-bold">Attach Picture</label>
              <input
                type="file"
                name="file"
                id="file"
                class="w-full p-2 border border-gray-300 rounded-md"
                accept="image/*"
                (change)="onFileSelected($event)"
              />
            </div>
            <img
              *ngIf="editingMovie.poster"
              [src]="editingMovie.poster"
              alt="Movie Poster"
              class="mt-2 w-32 h-32 object-cover rounded-md"
            />
            <div class="mt-4 flex space-x-3">
              <button
                (click)="saveEdit()"
                class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                (click)="cancelEdit()"
                class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MovieListComponent {
  selectedMovie: any = null;
  editingMovieIndex: number | null = null;
  editingMovie: any = { id: 0, title: '', language: '', rating: 0, poster: '' };

  constructor(public listMovieService: ListMovieService) {}

  viewMovie(movie: any) {
    this.selectedMovie = movie;
  }

  closeModal() {
    this.selectedMovie = null;
  }
  deleteMovie(movie: any) {
    let updatedMovies = this.listMovieService
      .movieList()
      .filter((m) => m.id !== movie.id);
    this.listMovieService.movieList.set([...updatedMovies]);
    localStorage.setItem('movieList', JSON.stringify(updatedMovies));
  }
  editMovie(movie: any) {
    this.editingMovie = { ...movie };
    this.editingMovieIndex = this.listMovieService
      .movieList()
      .findIndex((m) => m.id === movie.id);
  }

  saveEdit() {
    if (this.editingMovieIndex !== null) {
      let updatedMovies = this.listMovieService.movieList();
      updatedMovies[this.editingMovieIndex] = this.editingMovie;
      this.listMovieService.movieList.set([...updatedMovies]);
      localStorage.setItem('movieList', JSON.stringify(updatedMovies));
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingMovieIndex = null;
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.editingMovie.poster = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  trackById(index: number, movie: any): number {
    return movie.id;
  }
}
