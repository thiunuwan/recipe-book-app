import {Component, OnInit} from "@angular/core";


@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit{
navOpen=false;
dropDownStatus=false;

  ngOnInit(): void {
  }

 navBarOpen(){
    this.navOpen=!this.navOpen;
 }

 dropDownOpen(){
    this.dropDownStatus=!this.dropDownStatus;
 }

}
