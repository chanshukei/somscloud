import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent {

  constructor() { }

  searchOrder(){
    console.log("Clicked Search Order");
  }

  placeOrder(){
    console.log("Clicked Place Order");
  }

}
