import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args=args.toLowerCase();
    debugger;
    return value.filter(function(category: any){
      return JSON.stringify(category).toLowerCase().includes(args);
    });
  }

}
