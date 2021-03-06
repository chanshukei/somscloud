import { Component, OnInit, ViewChild } from '@angular/core';
import { EcAccessRight, EcAccessRightService } from '../ec-access-right.service';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.sass']
})
export class PlaceOrderComponent implements OnInit {

  accessRights: Observable<EcAccessRight[]> = new Observable<EcAccessRight[]>();
  constructor(
    private accessRightService: EcAccessRightService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.accessRights = this.accessRightService.getAccessRight("PlaceOrder", "create");
  }


}
