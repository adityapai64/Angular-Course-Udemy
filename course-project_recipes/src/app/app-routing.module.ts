import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { NoRecipeSelectedComponent } from "./recipes/no-recipe-selected/no-recipe-selected.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            {
                path: '',
                component: NoRecipeSelectedComponent
            },
            {
                path: 'new',
                component: RecipeEditComponent
            },
            {
                path: ':id',
                component: RecipeDetailComponent
            },
            {
                path: ':id/edit',
                component: RecipeEditComponent
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recipes'
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }