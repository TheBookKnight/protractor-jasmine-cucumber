import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

// path is used to navigate with 'localhost:4200/heroes'

const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];

@NgModule({
  // configures it to Routermodule
  imports: [RouterModule.forRoot(routes)],
  // exports so it's available throughout the app
  exports: [RouterModule],
})
export class AppRoutingModule {}
