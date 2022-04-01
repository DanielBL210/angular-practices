import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  /*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  */

  /**
   * Mi solucion 
   * @param value  
   * @param activar 
   *
  transform(value: string, activar: boolean): string {
    let resp: string = "";
    if(activar){
      for (let index = 0; index < value.length; index++) {
        resp+='*';        
      }
    }else{
      resp=value;
    }
    return resp;
  }

}
*/

  transform(value: string, activar: boolean = false): string {
    return (activar)? '*'.repeat(value.length):value;
  }

}
