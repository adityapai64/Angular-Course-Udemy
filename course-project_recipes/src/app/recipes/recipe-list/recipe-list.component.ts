import { Component, OnInit, } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipeClick() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  //Part of my solution to challenge in lesson 160
  // onItemClick(index: number) {
  //   this.router.navigate([index], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  // }
}
