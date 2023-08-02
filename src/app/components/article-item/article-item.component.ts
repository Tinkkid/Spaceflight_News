import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticlesApiService } from 'src/app/services/articles-api.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {
 
  article: any;
  articleSubscription: Subscription;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private articlesApiService: ArticlesApiService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.articlesApiService
    //     .getArticlesById(params['id'])
    //     .subscribe((res) => {
    //       this.article = res
    //       console.log(res)
    //     });
    // });
  }
}
