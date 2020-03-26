import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralOrNot'
})
export class PluralOrNotPipe implements PipeTransform {

  public transform(count: number, pluralForm: string = 's'): string {
    return count === 1 ? '' : pluralForm;
  }
}
