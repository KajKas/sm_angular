import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'test desc',
      'https://foodrevolution.org/' +
      'wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg',
      [
        new Ingredient('dupa', 2),
        new Ingredient('cycki', 4)
      ]
    ),
    new Recipe(
      'Another test recipe',
      'test desc',
      'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg',
      [
        new Ingredient('dupa', 22),
        new Ingredient('cycki', 44)
      ]
    ),
    new Recipe(
      'Yet another test recipe',
      'test desc',
      'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg',
      [
        new Ingredient('dupa', 222),
        new Ingredient('cycki', 444)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
