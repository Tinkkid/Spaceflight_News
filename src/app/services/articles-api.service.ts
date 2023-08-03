import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Articles } from '../models/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesApiService {
  url: string = 'https://api.spaceflightnewsapi.net/v4/articles';

  constructor(private http: HttpClient) { }
  
  searchArticles(searchValue:string):Observable<any>{
    return this.http.get<Articles []>(`${this.url}/?title_contains=${searchValue}&limit=10`).pipe(
        catchError(this.handleError)
      );
  }

  searchArticlesBySummary(searchValue:string):Observable<any>{
    return this.http.get<Articles []>(`${this.url}/?summary_contains=${searchValue}&limit=10`).pipe(
        catchError(this.handleError)
      );
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
