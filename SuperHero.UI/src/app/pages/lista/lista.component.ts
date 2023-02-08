import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/dados-superHero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  heroes:SuperHero[] = []
  editHeroes?:SuperHero

  @Input() hero?:SuperHero[]
  @Output() heroesUpdate = new EventEmitter<SuperHero[]>()

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void {
    this.superHeroService
        .getSuperHeroes()
        .subscribe((result: SuperHero[]) => (this.heroes = result));
        console.log(this.heroes);
  }

  updateListHeroes(heroes: SuperHero[]){
    this.heroes = heroes;
  }

  editHero(hero:SuperHero) {
      this.editHeroes = hero
  }

}
