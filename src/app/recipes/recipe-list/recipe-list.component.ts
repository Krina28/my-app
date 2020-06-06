import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Pizza', 'A test recipe desc', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'),
        new Recipe('Pizza', 'A test recipe desc', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png')
    ];

    constructor() {

    }

    ngOnInit() {

    }
}