import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';


const routes: Routes = [
  { path: '', component: ArticlesListComponent },
  { path: 'articles/:id', component: ArticleItemComponent },
  { path: '**', redirectTo: '', component: ArticlesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
