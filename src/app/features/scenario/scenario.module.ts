import { NgModule } from '@angular/core';
import { ScenarioComponent } from './container/component';
import { ScenarioContainer } from './container';
import { CommonModule } from '@angular/common';
import { ApplicationCommonModule } from 'src/app/common';
import { ScenarioRoutingModule } from './scenario-routing.module';

const Components = [ScenarioComponent, ScenarioContainer];
@NgModule({
  declarations: [Components],
  imports: [CommonModule, ApplicationCommonModule, ScenarioRoutingModule],
  exports: [ScenarioRoutingModule, Components],
})
export class ScenarioModule {}
