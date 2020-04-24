import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    // ActivatedRoute holds information about the route to this instance
    // the id param is the id of the hero to display
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // route.snapshot is a static image of the route information shortly after the component was created
    // paramMap is a dictionary of route parameter values extracted from the URL
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
