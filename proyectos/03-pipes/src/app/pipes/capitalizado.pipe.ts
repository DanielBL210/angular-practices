import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);
    return 'Hola mundo';
  }*/

/*
  transform(value: unknown, edad: number, activo: boolean, mensaje: string): unknown {
    console.log(value);
    console.log({edad, activo, mensaje});
    return 'Hola mundo';
  }
*/

  transform(value: string, todas: boolean = true): unknown {

    value = value.toLowerCase();
    let nombres=value.split(' ');    
    if(todas){
      nombres= nombres.map(nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      });      
    }else{
      nombres[0]=nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }    
    return nombres.join(' ');    
  }

}
