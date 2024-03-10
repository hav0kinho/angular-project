import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService){

  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
