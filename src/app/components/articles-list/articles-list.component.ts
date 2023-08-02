import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Articles } from 'src/app/models/articles';
import { ArticlesApiService } from 'src/app/services/articles-api.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  loading = false;
  articles: Articles[];
  articlesSubscription: Subscription;
  showArticle = false;

  results: Articles[];
  searchValue = '';

  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(
    private ArticlesApiService: ArticlesApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.fetchData();
    this.fetchSearchDataBySummary();
    this.fetchSearchData();
  
  }

  fetchData(): void {
    this.articlesSubscription = this.ArticlesApiService.getArticles().subscribe(
      (data: any) => {
        this.articles = data.results;
        this.loading = false;
      }
    );
  }

 async fetchSearchDataBySummary(): Promise<void> {
    this.showArticle = true;
    await this.ArticlesApiService.searchArticlesBySummary(this.searchValue).subscribe(
      (articles) => {
        this.results = articles.results;
        console.log(articles.results);
      }
    );
 }
  
  fetchSearchData(): void {
    this.showArticle = true;
    this.ArticlesApiService.searchArticles(this.searchValue).subscribe(
      (articles) => {
        this.results = articles.results;
        console.log(articles.results);
      }
    );
  }

 

  onSearchSubmit(): void {
    this.showArticle = true;
    this.searchValue = this.searchForm.value.searchValue ?? '';
     this.fetchSearchDataBySummary();
    this.fetchSearchData();
  }

  ngOnDestroy() {
    if (this.articlesSubscription) this.articlesSubscription.unsubscribe;
    this.showArticle = false;
  }
}
