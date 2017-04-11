import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('Chicken Stew', 'Chicken  stewed with tomatoes and sumac.', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('Curly Fries', 'Yukon gold potatoes deep fried with cajun spices.', 'https://idahopotato.com/uploads/media/recipes/southwest-tuna-casserole-with-curly-idaho-fries.jpg'),
    new Recipe('Flat Iron Steak', 'Top sirloin steak grilled to medium-rare doneness.', 'http://www.omahasteaks.com/gifs/990x594/fi004.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);

  }

}
