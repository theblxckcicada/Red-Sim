import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ScenarioContainer } from './container';

const routes: Route[] = [{ path: '', component: ScenarioContainer }];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenarioRoutingModule {}
