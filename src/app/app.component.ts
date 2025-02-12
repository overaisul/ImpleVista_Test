import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="bg-blue-700 text-white px-4 py-4">
      <div class="flex justify-between items-center max-w-4xl mx-auto">
        <h1 class="text-lg font-bold">ImpleVistaTest</h1>
        <div class="flex gap-8">
          <a routerLink="/" class="hover:text-gray-300">Add Movies</a>
          <a routerLink="/movie-list" class="hover:text-gray-300"
            >Added Movies List</a
          >
          <a routerLink="/movie-api-list" class="hover:text-gray-300"
            >Popular Movies</a
          >
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ImpleVista-Test';
}
