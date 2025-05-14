import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tomb:any, szo:any): any {
    if (!tomb) return [];
    if (!szo) return tomb
    tomb=tomb.filter(
      (termek:any)=>{return termek.leiras.toLowerCase().includes(szo.toLowerCase())}
    )

    return tomb
  }

}
