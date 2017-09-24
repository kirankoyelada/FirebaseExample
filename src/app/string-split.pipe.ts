import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSplit'
})
export class StringSplitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
