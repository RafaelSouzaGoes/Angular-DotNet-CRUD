import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/dados-superHero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-or-delete',
  templateUrl: './edit-or-delete.component.html',
  styleUrls: ['./edit-or-delete.component.css']
})
export class EditOrDeleteComponent implements OnInit {

  @Input() hero?: SuperHero;
  @Output() heroesUpdate = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService:SuperHeroService) { }

  ngOnInit(): void {
  }

  updateHero(hero: SuperHero) {
    this.superHeroService
      .updateHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdate.emit(heroes));
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService
      .deleteHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdate.emit(heroes));
  }

}
