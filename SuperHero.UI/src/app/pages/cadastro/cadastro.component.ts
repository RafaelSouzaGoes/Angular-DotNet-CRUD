import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHeroService } from 'src/app/services/super-hero.service'
import { SuperHero } from 'src/app/models/dados-superHero';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Input()
  hero: SuperHero = new SuperHero;
  @Output() heroesUpdate = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void {
  }

  createHero(hero: SuperHero){
    this.superHeroService
        .createHero(hero)
        .subscribe((heroes:SuperHero[]) => this.heroesUpdate.emit(heroes))

        alert("Criado")

  }

}
