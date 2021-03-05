import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EcAccessRight } from '../ec-access-right.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'ec-password',
  template:   `<div *ngIf="isVisible">
                  <label class="form-label" for="{{id}}">{{label}}</label>
                  <input  class="form-control" type="password" id="{{id}}" maxLength="{{maxLength}}" 
                          [disabled]="!isEnable ? 'disabled': null"
                          (keyup)="updateValue($event)"
                          [value]="value"/>
              </div>`,
  styleUrls: ['./ec-password.component.sass']
})
export class EcPasswordComponent implements OnChanges {

  isVisible: boolean = false;
  isEnable: boolean = false;
  value: string = "";

  @Input() 
  id: string = "";

  @Input()
  label: string = "";

  @Input()
  maxLength: number = 0;

  @Input()
  accessRights: Observable<EcAccessRight[]> = new Observable<EcAccessRight[]>();

  updateValue(event: any){
    this.value = event.target.value;
  }

  clear(){
    this.value = "";
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
