import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// mock data
import { HEROES } from '../mock-heroes';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // assigns the Hero property
  selectedHero: Hero;
  heroes: Hero[];

  // constructors are meant for simple initialization
  // it can call 'getHeroes' but it's not best practice
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // ngOnInit lifecycle hook will call 'getHeroes'
  // afer it's done constructing a HeroesComponent instance
  ngOnInit() {
    this.getHeroes();
  }

  // assign click event handler
  onSelect(hero: Hero): void {
    // assigns selectedHero properties
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // Observable
    // helps with the remote service since it's an async approach
    // waits for the Observable to emit the array of heroes
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
