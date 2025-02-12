import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieDetails } from '../../Models/MovieDetails.model';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <label class="block text-gray-700 font-bold">Movie Title:</label>
    <input
      type="text"
      [(ngModel)]="movie.title"
      name="title"
      required
      class="w-full p-2 border border-gray-300 rounded-md"
    />

    <label class="block text-gray-700 font-bold mt-2">Language:</label>
    <select
      [(ngModel)]="movie.language"
      name="language"
      required
      class="w-full p-2 border border-gray-300 rounded-md"
    >
      <option value="English">English</option>
      <option value="Bangla">Bangla</option>
      <option value="Hindi">Hindi</option>
    </select>

    <label class="block text-gray-700 font-bold mt-2">Rating:</label>
    <input
      type="number"
      [(ngModel)]="movie.rating"
      name="rating"
      required
      step="0.5"
      class="w-full p-2 border border-gray-300 rounded-md"
    />
  `,
})
export class TodoFormComponent {
  @Input() movie: MovieDetails = {
    id: 0,
    title: '',
    language: 'English',
    rating: 0,
  };
}
