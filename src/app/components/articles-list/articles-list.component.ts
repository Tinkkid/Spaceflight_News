import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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

  constructor(private ArticlesApiService: ArticlesApiService) {}

  ngOnInit(): void {
    // this.loading = true;

    // this.articlesSubscription = this.ArticlesApiService.getArticles().subscribe(
    //   (data: any) => {
    //     this.articles = data.results;
    //     this.loading = false;
    //   }
    // );
  }

  ngOnDestroy() {
    if (this.articlesSubscription) this.articlesSubscription.unsubscribe;
  }
}
