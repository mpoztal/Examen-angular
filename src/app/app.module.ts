import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostsCardComponent } from './components/posts-card/posts-card.component';
import { PostsViewComponent } from './components/posts-view/posts-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltrosComponent } from './components/filtros/filtros.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BlogComponent,
    PostsCardComponent,
    PostsViewComponent,
    HeaderComponent,
    FiltrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
