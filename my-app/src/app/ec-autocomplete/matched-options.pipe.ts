import { Pipe, PipeTransform } from '@angular/core';
import { EcSelectOption } from '../ec-select/ec-select.component';

@Pipe({ name: 'matchedOptions' })
export class MatchedOptionsPipe implements PipeTransform {
  transform(allOptions: EcSelectOption[], filterText: string, maxItems: number, filterCount: any) {
    var index = 0;
    var max = maxItems;
    var count = 0;
    var result = allOptions.filter(option => {
        filterText = filterText.toUpperCase();
        if(option.name.toUpperCase().indexOf(filterText) >= 0){
          count++;
          if(index<max){ 
            index++;
            return true;
          }
        }
        return false;
    });
    filterCount.count = count;
    return result;
  }
}