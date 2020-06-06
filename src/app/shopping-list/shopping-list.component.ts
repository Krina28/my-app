import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Capsicums', 2),
    new Ingredients('Tomatos', 5),
    new Ingredients('Onions', 5),
    new Ingredients('Corns', 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
