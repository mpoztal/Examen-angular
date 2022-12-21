import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import { Category } from 'src/app/interfaces/category.interface';


@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {
  post: Post | any;
  category: Category | any;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsServices: PostService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any) =>{
      let id: number = parseInt(params.idpost)
      this.post = this.postsServices.getById(id);
      this.category = this.categoryService.getById(this.post.categoryId);
    })
  }

}
