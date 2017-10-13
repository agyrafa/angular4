import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'numberformat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: any, decimals?: any, dec_point?: any, thousands_sep?: string): any {
            var number = ( value  + '').replace(/[^0-9+\-Ee.]/g, '');
            var n = !isFinite(+number) ? 0 : + number,
                prec = !isFinite(+decimals) ? 0 :  Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point;
           var tmp = number + '';
        tmp = tmp.replace(/([0-9]{2})$/g, dec+"$1");
        if( tmp.length > 6 )
                tmp = tmp.replace('/([0-9]{3}),([0-9]{'+prec+'}$)/g', sep +"$1"+ dec +"$2");
        return tmp;
    

  }


 

}
