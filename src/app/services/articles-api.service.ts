import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable,Subject, throwError } from 'rxjs';
import { Articles } from '../models/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesApiService {
  url: string = 'https://api.spaceflightnewsapi.net/v4/articles';

  constructor(private http: HttpClient) { }
  
  searchArticles(searchValue:string):Observable<any>{
    return this.http.get<Articles []>(`${this.url}/?title_contains_one=${searchValue}&limit=10`)
  }

  searchArticlesBySummary(searchValue:string):Observable<any>{
    return this.http.get<Articles []>(`${this.url}/?summary_contains_one=${searchValue}&limit=10`)
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
