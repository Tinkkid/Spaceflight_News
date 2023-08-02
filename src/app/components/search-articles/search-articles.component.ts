import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Articles } from 'src/app/models/articles';
import { ArticlesApiService } from 'src/app/services/articles-api.service';

@Component({
  selector: 'app-search-articles',
  templateUrl: './search-articles.component.html',
  styleUrls: ['./search-articles.component.scss'],
})
export class SearchArticlesComponent implements OnInit {
  results: Articles[] = [];
  searchValue = '';
  searchForm = this.fb.nonNullable.group({
    searchValue: ''
  })

    constructor(private ArticlesApiService: ArticlesApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.ArticlesApiService.searchArticles(this.searchValue).subscribe((articles) => {
      this.results = articles.articles;
      console.log(articles.articles)
    })
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? ''
    this.fetchData()
  }
}
