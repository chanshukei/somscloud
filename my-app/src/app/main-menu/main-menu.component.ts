import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderSummaryService } from '../ordersummary.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit{

  constructor(
    private orderSummaryService: OrderSummaryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.orderSummaryService.getOrderSummaries('P');
  }

  searchOrder(){
    console.log("Clicked Search Order");
  }

  placeOrder(){
    console.log("Clicked Place Order");
    this.router.navigate(['../placeorder'], {relativeTo: this.route});
  }

}