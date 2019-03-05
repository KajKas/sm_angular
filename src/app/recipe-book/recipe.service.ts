import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'test desc', 'https://foodrevolution.org/' +
      'wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'),
    new Recipe('Another test recipe', 'test desc', 'https://foodrevolution.org/' +
      'wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'),
    new Recipe('Yet another test recipe', 'test desc', 'https://foodrevolution.org/' +
      'wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
