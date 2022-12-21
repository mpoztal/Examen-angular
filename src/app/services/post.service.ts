import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private arrPosts: Post[] = [];
  private id: number = 9;

  constructor() {
    this.arrPosts = POSTS;
   }

  agregarPost(pPost: Post){
    pPost.id = this.id;
    this.arrPosts.push(pPost)
    this.id++;
    return { id: pPost.id }
  }

  getAll(): Post[] {
    return this.arrPosts;
  }

  

  getByCategory(pCategory: number): Post[] {
    return this.arrPosts.filter(post => post.categoryId === pCategory);
  }

  getById(pId: number): Post | any {
    return this.arrPosts.find(post => post.id === pId);

  }

 


}
