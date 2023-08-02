import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable,Subject, throwError } from 'rxjs';
import { Articles } from '../models/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesApiService {
  url: string = 'https://api.spaceflightnewsapi.net/v4/articles';
  
  searchResults = new Subject();
  api_key: '20fe346ace044f759646706f39a86897';

  constructor(private http: HttpClient) { }
  
  searchArticles(searchValue:string):Observable<any>{
    return this.http.get<Articles []>(`${this.url}/?title_contains=${searchValue}`)
  }

  getArticles() {
    return this.http
      .get<Articles[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  getArticlesById(id: string): Observable<Articles> {
    return this.http.get<Articles>(`${this.url}/${id}`).pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => errorMessage);
  }
}
