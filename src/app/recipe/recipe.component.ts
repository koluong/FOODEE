import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  showing = false;
  viewingRecipe= {name: "", description: "", imagePath: ""};

  constructor() { }

  ngOnInit() {
  }

  viewRecipe(data) {
    this.showing = true;
    this.viewingRecipe = data;

  }

}
