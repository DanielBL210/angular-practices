import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre    : string  = 'Daniel Botero Londoño';
  nombre2   : string  = 'thOmAs boTEro LOnDOñO';
  arreglo             = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI        : number  = Math.PI;
  porcentaje: number  = 0.235;
  salario   : number  = 102350000.00;
  salario2   : string  = "";
  fecha     : Date    = new Date();
  activar   : boolean = true;
  idioma    : string  = 'en';
  videoUrl  : string  = 'https://www.youtube.com/embed/ZVXoYpG8CgY';
  
  httpHeaders = new HttpHeaders({ 
    'Content-Type': 'application/json'
    
  });

  constructor(private httpClient: HttpClient) { }

  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('llevo la data ');
    }, 4500);
  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '20'
    }
  };

  changeLanguage(newLanguage: string) {
    this.idioma = newLanguage;
  }

  formatCurrency(value, field) {    
    let newValue = '';
    //let splited = [];    
    newValue = value.replace(/[^0-9]/g, '');
    newValue = newValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");    
    /* splited = newValue.split(/(?=(?:\d{3})+(?:\.|$))/g);
    console.log(newValue, splited); */
    this.salario2=newValue == "" ? "" : "$ "+newValue;
    this.salario=Number(this.getValueCurrency(this.salario2));
  }

  getValueCurrency(value){
    return value.replace(/[^0-9]/g, '');
  }

  postInboxManagerWOW()  {
    const form = new FormData();
    form.append('pepito','hola');
    console.log('Entra');
    this.httpClient.post<any>('https://vaha6rry5d.execute-api.us-east-1.amazonaws.com/redirect', form).subscribe(x => 
    {
      console.log('respuetsa asdfjkah',x);
    }
    );
    ;
  }

}
