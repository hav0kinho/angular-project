import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipesService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg'),
  ];


  getRecipes(){
    return this.recipes.slice();
  }
}
