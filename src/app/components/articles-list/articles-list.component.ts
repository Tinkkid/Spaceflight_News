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
  articlesSubscription: Subscription;
  totalResult: any;
  limit=10;

  results: Articles[] =[];
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
    this.fetchSearchData();
  }

  fetchSearchData(): void {
    this.ArticlesApiService.searchArticles(this.searchValue, this.limit).subscribe(
      (articles) => {
        this.results = articles.results;
        this.totalResult = articles.count;
        this.loading = false;
        this.limit = articles.results.length;
      }
    );
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchSearchData();
  }

    showMore() {
    this.limit += 10;
      this.fetchSearchData();
  }

  ngOnDestroy() {
    if (this.articlesSubscription) this.articlesSubscription.unsubscribe;
  }

}
