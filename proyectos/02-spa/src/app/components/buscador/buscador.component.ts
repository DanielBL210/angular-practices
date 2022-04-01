import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];

  termino:string;

  constructor(private _heroesService:HeroesService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino=params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  


}
