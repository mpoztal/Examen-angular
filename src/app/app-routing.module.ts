import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostsViewComponent } from './components/posts-view/posts-view.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "home" },
  { path: "home", component: BlogComponent },
  { path: "new", component: FormComponent },
  { path: "post/:idpost", component: PostsViewComponent },
  { path: "category/:categoryId", component: BlogComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
