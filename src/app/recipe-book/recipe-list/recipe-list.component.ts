import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'test desc', 'https://foodrevolution.org/' +
      'wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'),
    new Recipe('Another test recipe', 'test desc', 'https://foodrevolution.org/' +
      'wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'),
    new Recipe('Yet another test recipe', 'test desc', 'https://foodrevolution.org/' +
      'wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
