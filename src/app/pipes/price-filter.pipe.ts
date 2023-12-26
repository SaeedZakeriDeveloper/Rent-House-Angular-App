import {Pipe, PipeTransform} from '@angular/core';
import {Price} from '../models/price';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: Price[], priceFilter: string): Price[] {
    priceFilter = priceFilter ? priceFilter.toLocaleLowerCase() : "";
    return priceFilter ? value.filter((c: Price) => c.title.toLocaleLowerCase().indexOf(priceFilter) !== -1) : value;
  }
}
