import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEmpleados'
})
export class FiltroEmpleadosPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultFiltro = [];

    for (const filt of value) {
      if (filt.name.indexOf(args) > -1) {
        resultFiltro.push(filt)
      };
    };
    return resultFiltro;
  }

}
