import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any[], filterText : string): any[] {
  //   return value.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()));
  // }

  transform(value: any[], filterText: string): any[] {
    
    return value.filter(p => {
      return p.name.toLowerCase().includes(filterText.toLowerCase()) + p.price.toString().includes(filterText.toLowerCase())
    })

  }

}
