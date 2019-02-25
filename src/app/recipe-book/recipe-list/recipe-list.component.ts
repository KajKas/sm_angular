import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'test desc', 'https://foodrevolution.org/' +
      'wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'),
    new Recipe('Test recipe', 'test desc', 'https://foodrevolution.org/' +
      'wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'),
    new Recipe('Test recipe', 'test desc', 'https://foodrevolution.org/' +
      'wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}