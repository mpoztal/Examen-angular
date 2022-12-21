import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  categoryId: number = 0;

  constructor(
    private postsService: PostService,
    private activatedRoute: ActivatedRoute,
  
    ) { }

  ngOnInit(): void {

  }

  ngDoCheck(){
    let response = this.activatedRoute.snapshot.url;
   
    if(response.length > 1){
      this.categoryId = parseInt(response[1].path); 
      this.posts = this.postsService.getByCategory(this.categoryId);
    }else {
      this.posts = this.postsService.getAll()
    }

  }

}
