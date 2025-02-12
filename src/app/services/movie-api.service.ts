import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private accessToken = environment.AccessToken;
  constructor(private http: HttpClient) {}

  getPopularMovies(page: number = 1): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    });
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?page=${page}`,
      {
        headers,
      }
    );
  }
}
