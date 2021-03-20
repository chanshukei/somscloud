import { Component, OnInit, ViewChild } from '@angular/core';
import { EcAccessRight, EcAccessRightService } from '../ec-access-right.service';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { EcSelectComponent, EcSelectOption } from '../ec-select/ec-select.component';
import { EcAutocompleteComponent } from '../ec-autocomplete/ec-autocomplete.component';
import { Quotation, QuotationService } from '../quotation.service';
import { DeliveryAddress, DeliveryAddressService } from '../delivery-address.service';
import { HashtagService } from '../hashtag.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.sass']
})
export class PlaceOrderComponent implements OnInit {

  @ViewChild('customerNo') customerNo: EcAutocompleteComponent = new EcAutocompleteComponent();
  @ViewChild('quotationNo') quotationNo: EcSelectComponent = new EcSelectComponent();
  @ViewChild('deliveryAddress') deliveryAddress: EcSelectComponent = new EcSelectComponent();
  @ViewChild('hashtag') hashtag: EcAutocompleteComponent = new EcAutocompleteComponent();

  accessRights: Observable<EcAccessRight[]> = new Observable<EcAccessRight[]>();
  constructor(
    private accessRightService: EcAccessRightService,
    private customerService: CustomerService,
    private quotationService: QuotationService,
    private deliveryAddressService: DeliveryAddressService,
    private hashtagService: HashtagService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.accessRights = this.accessRightService.getAccessRight("PlaceOrder", "create");
    this.customerService.getCustomers().subscribe(
      e => {
          var options: EcSelectOption[] = new Array();
          for(var i=0; i<e.length; i++){
            options.push(new EcSelectOption(e[i].englishName, e[i].customerNo));
          };
          this.customerNo.updateOptions(options);
      }
    );
    this.hashtagService.getHashtags().subscribe(
      e => {
          var options: EcSelectOption[] = new Array();
          for(var i=0; i<e.length; i++){
            options.push(new EcSelectOption(e[i].text, e[i].text));
          };
          this.hashtag.updateOptions(options);
      }
    );
  }

  onCustomerNoChanged(){
    this.updateQuotations();
    this.updateDeliveryAddresses();
  }

  private updateDeliveryAddresses(){
    console.log('updateDeliveryAddresses');
    var _customerNo: string = this.customerNo._value;
    this.deliveryAddressService.getDeliveryAddresses(_customerNo).subscribe(
      e => {
          var options: EcSelectOption[] = new Array();
          for(var i=0; i<e.length; i++){
            options.push(new EcSelectOption(e[i].address, e[i].address));
          };
          this.deliveryAddress.updateOptions(options);
      }
    );
  }

  private updateQuotations(){
    console.log('updateQuotations');
    var _customerNo: string = this.customerNo._value;
    this.quotationService.getQuotations(_customerNo).subscribe(
      e => {
          var options: EcSelectOption[] = new Array();
          for(var i=0; i<e.length; i++){
            options.push(new EcSelectOption(e[i].quotationId, e[i].description));
          };
          this.quotationNo.updateOptions(options);
      }
    );
  }

}
