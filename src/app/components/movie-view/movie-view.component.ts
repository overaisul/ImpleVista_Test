import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-view',
  imports: [CommonModule],
  template: `
    <div
      class="bg-white p-6 rounded-lg flex flex-col justify-center items-center"
    >
      <img
        *ngIf="movie.poster"
        [src]="movie.poster"
        alt="Movie Poster"
        class="mb-2 w-32 h-32 object-cover rounded-md"
      />
      <h2 class="text-4xl font-bold text-blue-600 mb-4">{{ movie.title }}</h2>
      <p class="text-gray-600">
        <strong>Language:</strong> {{ movie.language }}
      </p>
      <p class="text-gray-600"><strong>Rating:</strong> {{ movie.rating }}</p>
      <button
        (click)="closeModalEvent.emit()"
        class="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Close
      </button>
    </div>
  `,
})
export class MovieViewComponent {
  @Input() movie: any;
  @Output() closeModalEvent = new EventEmitter<void>();
}
