import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoriesService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.getAll()
  }

}
