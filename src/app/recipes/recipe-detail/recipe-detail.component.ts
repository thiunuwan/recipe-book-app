import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
dropdownStatus=false;
  toggleDropDown(){
    this.dropdownStatus=!this.dropdownStatus;
  }

}
