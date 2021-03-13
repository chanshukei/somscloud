import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { EcAccessrightComponent } from '../ec-accessright/ec-accessright.component';

export class EcSelectOption{
  name: string = "";
  value: string = "";
  constructor(pName: string, pValue:string){
    this.name = pName;
    this.value = pValue;
  }
}

@Component({
  selector: 'ec-select',
  template: `<div *ngIf="isVisible">
              <label class="form-label" for="{{id}}">{{label}}</label>
              <select  class="form-select" id="{{id}}" 
                      [disabled]="!isEnable ? 'disabled': null"
                      (change)="updateValue($event)">
                  <option value="" i18n>Please select</option>
                  <option *ngFor="let opt of options" value="{{opt.value}}">
                    {{opt.name}}
                  </option>
              </select>
            </div>`,
  styleUrls: ['./ec-select.component.sass']
})
export class EcSelectComponent extends EcAccessrightComponent {

  @Input()
  label: string = "";

  @Input()
  value: string = "";

  options: EcSelectOption[] = new Array();
  
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
