import { Component, OnInit, ViewChild } from '@angular/core';
import { EcAccessRight, EcAccessRightService } from '../ec-access-right.service';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { EcSelectComponent, EcSelectOption } from '../ec-select/ec-select.component';
import { EcAutocompleteComponent } from '../ec-autocomplete/ec-autocomplete.component';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.sass']
})
export class PlaceOrderComponent implements OnInit {

  @ViewChild('customerNo') customerNo: EcAutocompleteComponent = new EcAutocompleteComponent();

  accessRights: Observable<EcAccessRight[]> = new Observable<EcAccessRight[]>();
  constructor(
    private accessRightService: EcAccessRightService,
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.accessRights = this.accessRightService.getAccessRight("PlaceOrder", "create");
    this.customerService.getCustomers().subscribe(
      e => {
          var options: EcSelectOption[] = new Array();
          for(var i=0; i<e.length; i++){            
            options.push(new EcSelectOption(e[i].customerNo, e[i].englishName));
          };
          this.customerNo.updateOptions(options);
      }
    );
  }


}
