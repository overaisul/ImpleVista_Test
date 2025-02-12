import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-items',
  imports: [CommonModule],
  template: `
    <div
      class="p-4 bg-white shadow-md rounded-lg mt-2 flex flex-col items-center"
    >
      <img
        *ngIf="movie.poster"
        [src]="movie.poster"
        alt="Movie Poster"
        class="mb-2 w-32 h-32 object-cover rounded-md"
      />
      <h2 class="text-4xl font-bold text-blue-600 mb-4">
        {{ movie.title }}
      </h2>
      <p class="text-gray-600">
        <strong>Language:</strong> {{ movie.language }}
      </p>
      <p class="text-gray-600"><strong>Rating:</strong> {{ movie.rating }}</p>

      <div class="mt-4 flex space-x-3">
        <button
          (click)="view.emit(movie)"
          class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          View
        </button>
        <button
          (click)="edit.emit(movie)"
          class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          (click)="delete.emit(movie)"
          class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class MovieItemsComponent {
  @Input() movie: any;
  @Output() view = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
}
