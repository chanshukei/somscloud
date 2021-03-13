import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { EcAccessrightComponent } from '../ec-accessright/ec-accessright.component';
import { EcSelectOption } from '../ec-select/ec-select.component';


@Component({
  selector: 'ec-autocomplete',
  templateUrl: './ec-autocomplete.component.html',
  styleUrls: ['./ec-autocomplete.component.sass']
})
export class EcAutocompleteComponent extends EcAccessrightComponent {

  @Input()
  label: string = "";

  @Input()
  value: string = "";

  @Input()
  maxItems: number = 100;

  showOptionList: boolean = false;
  options: EcSelectOption[] = new Array();
  _value: string = "";
  _name: string = "";
  filterText: string = "";
  filterCount = {count: 0};

  changeFilterText(value: string){    
    this.filterText = value;
  }

  popupOptionList(){
    this.showOptionList = true;
  }

  outFocus(){
    this.showOptionList = false;
  }

  selectOption(pValue: string, pName: string){
    this._value = pValue;
    this._name = pName;
    this.showOptionList = false;
    this.filterText = "";
  }

  clear(){
    this.value = "";
  }

  updateValue(event: any){
    this.value = event.target.value;
  }

  updateOptions(pOptions: EcSelectOption[]){
    console.log('updateOptions');
    this.options = pOptions;
  }

}
