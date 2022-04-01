import { Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl :'body.component.html'
})
export class BodyComponent{

    frase:any = {
        mensaje :'un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    }

    personajes:string []=['Super','Man','America']

    btntitle:string = 'Ocultar';

    mostrar =true;

    mostrarOcultar(){
        this.mostrar=!this.mostrar;
        if(!this.mostrar){
            this.btntitle='Mostrar';
        }else{
            this.btntitle='Ocultar';
        }
    }
}