import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { EcAccessRight } from '../ec-access-right.service';
import { Observable} from 'rxjs';

export class EcSelectOption{
  name: string = "";
  value: string = "";
}

@Component({
  selector: 'ec-select',
  template:   `<div *ngIf="isVisible">
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
export class EcSelectComponent implements OnInit, OnChanges {

  @Input()
  id: string = "";

  @Input()
  label: string = "";

  @Input()
  value: string = "";

  @Input()
  accessRights: Observable<EcAccessRight[]> = new Observable<EcAccessRight[]>();

  isVisible: boolean = false;
  isEnable: boolean = false;
  options: EcSelectOption[] = new Array();
  
  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    this.value = "";
  }

  updateValue(event: any){
    this.value = event.target.value;
  }

  ngOnChanges(changes: SimpleChanges) {
    var self = this;
    if(changes.accessRights && changes.accessRights.currentValue){
      this.accessRights = changes.accessRights.currentValue;
      this.accessRights.subscribe(event => {
        for(var i=event.length-1; i>=0; i--){
          var accessRight = event[i];
          if(accessRight.componentId == '*'){
            self.isVisible = accessRight.isVisible==1;
            self.isEnable = accessRight.isEnable==1;
          }else if(accessRight.componentId == self.id){
            self.isVisible = accessRight.isVisible==1;
            self.isEnable = accessRight.isEnable==1;            
            return;
          }
        }
      });
    }
  }

}
