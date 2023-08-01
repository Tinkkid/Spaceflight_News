import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../models/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesApiService {
  url: string = 'https://api.spaceflightnewsapi.net/v4/articles';

  constructor(private http: HttpClient) { }
  
  getArticles() {
    return this.http.get<Articles []>(this.url)
  }

  getArticlesById(id: string): Observable<Articles> {
    return this.http.get<Articles>(`${this.url}/${id}`)
  }

}
