import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() id: number; //From author's solution to the challenge from lesson 160. Explained in lesson 166


  // constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  /*   onSelected() {
      this.recipeService.recipeSelected.emit(this.recipe);
    } */

}
