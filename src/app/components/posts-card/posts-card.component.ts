import { Component, OnInit,Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { Post } from 'src/app/interfaces/post.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.css']
})
export class PostsCardComponent implements OnInit {
  @Input() myPost: Post | any;
  category: Category | any;
  
  constructor(
    private categoryService: CategoryService,

  ) { }

  ngOnInit(): void {
    this.category = this.categoryService.getById(this.myPost.categoryId);
    
  }



}
