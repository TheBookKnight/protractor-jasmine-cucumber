import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// path is used to navigate with 'localhost:4200/heroes'
const routes: Routes = [
  // 'redirectTo' defaults the link to the 'dashboard'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // creates a path pattern to the hero detail view
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  // configures it to Routermodule
  imports: [RouterModule.forRoot(routes)],
  // exports so it's available throughout the app
  exports: [RouterModule],
})
export class AppRoutingModule {}
