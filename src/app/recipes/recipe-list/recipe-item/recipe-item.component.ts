import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor (private route: ActivatedRoute,
    private router: Router){}

  ngOnInit() {}

  onDetailEditRecipe() {
    this.router.navigate(['recipes', this.index, 'edit'],);
  }
}
