import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { HomeContainer } from './features/home/container';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'scenario',
    loadChildren: () =>
      import('./features/scenario/scenario.module').then((m) => m.ScenarioModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
