import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dategenerate'
})
export class DategeneratePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
