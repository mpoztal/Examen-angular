import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/interfaces/category.interface';
import { Post } from 'src/app/interfaces/post.interface';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  categories: Category[] = [];      

  constructor(private categoriesService: CategoryService,
    private postService: PostService
    ) {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3) 
      ]),
      author: new FormControl('', [
        Validators.required,
      ]),      
      text: new FormControl('', [
        Validators.required,
      ]),      
      img: new FormControl('', [
        this.imgvalidator,
      ]),
      categoryId: new FormControl('', []),

      date: new FormControl('', [
        Validators.required,
      ]),
      
    },)
   }


   imgvalidator(pControlUrl: AbstractControl): any {
    const url = pControlUrl.value;
    const expReg =  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

    if (expReg.test(url)) {
      return  null;

    } else {
      return { 'imgvalidator': 'Formato de Url incorrecto' }
    }
  }

  ngOnInit(): void {
    this.categories = this.categoriesService.getAll()
   
  }

  getDataForm(){
    if (this.form.valid) {
      console.log(this.form.value)
      let newPost: Post = this.form.value
      newPost.categoryId = parseInt(this.form.value.categoryId)
      this.postService.agregarPost(newPost)
      this.form.reset()
      alert('Post creado correctamente')
    } else {
      console.log('cenutrio no toques el inspector')
    }
  }

  checkControl(pControlTitle: string, pError: string) : boolean {
    if (this.form.get(pControlTitle)?.hasError(pError) && this.form.get(pControlTitle)?.touched) {
      return true
    
    }else{
      return false
    }
  }


}
