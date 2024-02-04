import {Pipe, PipeTransform} from '@angular/core';
import {Bedroom} from '../models/bedroom';

@Pipe({
  name: 'bedroomFilter'
})
export class BedroomFilterPipe implements PipeTransform {

  transform(value: Bedroom[], bedroomFilter: string): Bedroom[] {
    bedroomFilter = bedroomFilter ? bedroomFilter.toLocaleLowerCase() : "";
    return bedroomFilter ? value.filter((c: Bedroom) => c.title.toLocaleLowerCase().indexOf(bedroomFilter) !== -1) : value;
  }
}


// filterString: Reza

// momahammadRezA * index = 10
// negar index = -1
// rezaAmir * index = 0
// reZa * index = 0
