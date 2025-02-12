import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private http: HttpClient) {}

  getPopularMovies(page: number = 1): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmQwMWZhYjE0NTMyZmQ2OWYxZTZhNjA3MGFmMjYyNSIsIm5iZiI6MTczOTM3NzE5NC4wNTcsInN1YiI6IjY3YWNjYTJhM2VlNzA4MzI3YzM2Y2U4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Gx1vxbBVzDnX5PV0dVASwnXjgKJXeiEMpFBLmeV5Rc`,
    });
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?page=${page}`,
      {
        headers,
      }
    );
  }
}
