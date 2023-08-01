import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Articles } from 'src/app/models/articles';
import { ArticlesApiService } from 'src/app/services/articles-api.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles: Articles[];
  
  articlesSubscription: Subscription;

  constructor(private ArticlesApiService: ArticlesApiService) {}

  ngOnInit(): void {
    this.articlesSubscription = this.ArticlesApiService.getArticles().subscribe((data:any) => {
      console.log(data.results)
      this.articles = data.results;
 })
  }

  ngOnDestroy() {
    if (this.articlesSubscription) this.articlesSubscription.unsubscribe
  }
}
