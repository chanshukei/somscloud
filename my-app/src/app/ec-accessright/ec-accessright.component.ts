import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EcAccessRight } from '../ec-access-right.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'ec-accessright',
  template: '',
  styleUrls: ['./ec-accessright.component.sass']
})
export class EcAccessrightComponent implements OnChanges{
  
  isVisible: boolean = false;
  isEnable: boolean = false;

  @Input() 
  id: string = "";

  @Input()
  accessRights: Observable<EcAccessRight[]> = new Observable<EcAccessRight[]>();

  ngOnChanges(changes: SimpleChanges) {
    if(changes.accessRights && changes.accessRights.currentValue){
      this.accessRights = changes.accessRights.currentValue;
      this.accessRights.subscribe(event => {
        for(var i=event.length-1; i>=0; i--){
          var accessRight = event[i];
          if(accessRight.componentId == '*'){
            this.isVisible = accessRight.isVisible==1;
            this.isEnable = accessRight.isEnable==1;
          }else if(accessRight.componentId == this.id){
            this.isVisible = accessRight.isVisible==1;
            this.isEnable = accessRight.isEnable==1;            
            return;
          }
        }
      });
    }
  }

}
