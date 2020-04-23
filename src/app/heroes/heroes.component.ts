import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// mock data
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  // assigns the Hero property
  selectedHero: Hero;

  constructor() {}

  ngOnInit(): void {}

  // assign click event handler
  onSelect(hero: Hero): void {
    // assigns selectedHero properties
    this.selectedHero = hero;
  }
}
