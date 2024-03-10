import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit{
  selectedRecipe: Recipe;

  constructor(private recipeSelected: RecipesService){

  }

  ngOnInit() {
      this.recipeSelected.recipeSelected.subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
      });
  }
}
