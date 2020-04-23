import { Injectable } from '@angular/core';
// Angular HTTP Client to fetch the heroes
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// 'Injectable' marks the class that participates
// in the dependency injection system
@Injectable({
  // providers create or deliver service
  providedIn: 'root',
})
export class HeroService {
  // 'service-in-service' scenario
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // Send the message after fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  // this method returns the mock heroes
  getHero(id: number): Observable<Hero> {
    // sends the message after fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES.find((hero) => hero.id === id));
  }
}
