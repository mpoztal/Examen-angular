import { Injectable } from '@angular/core';
import { CATEGORIES } from '../db/categories.db';
import { Category } from '../interfaces/category.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private arrCategories: Category[] = [];
  
  

  constructor() {
    this.arrCategories = CATEGORIES;
  }

  getAll(): Category[] {
    return this.arrCategories;
  }
  
  getById(pId: number): Category | any {
    return this.arrCategories.find(category => category.id === pId);

  }

  
}
