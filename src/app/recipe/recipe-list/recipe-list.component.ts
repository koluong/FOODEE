import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<{name: string, description: string, imagePath: string}>();

  recipes:Recipe[] = [
    new Recipe('Chicken Stew', 'Chicken drumsticks stewed with tomatoes and sumac.', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Curly Fries', 'Yukon gold potatoes deep fried with cajun spices.', 'https://eat24-files-live.s3.amazonaws.com/cuisines/v4/fast-food.jpg?Signature=zjXItllcwKm%2Bu7WzbHJftDdnvSc%3D&Expires=1491864879&AWSAccessKeyId=AKIAIEJ2GCCJRT63TBYA')

  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: {name: string, description: string, imagePath: string}) {
    this.selectedRecipe.emit(recipe);

  }

}
