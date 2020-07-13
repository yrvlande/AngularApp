import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    return items.filter(it => it.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }
}
