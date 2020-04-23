import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// Angular HTTP Client to fetch the heroes
import { Observable, of } from 'rxjs';

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

  // this method returns the mock heroes
  getHeroes(): Observable<Hero[]> {
    // sends the message after fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
