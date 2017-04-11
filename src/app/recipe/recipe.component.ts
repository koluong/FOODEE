import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "./recipe.model"

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  viewingRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  viewRecipe(data) {
    this.viewingRecipe = data;

  }

}
