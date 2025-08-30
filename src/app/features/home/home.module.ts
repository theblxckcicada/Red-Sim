import { NgModule } from '@angular/core';
import { HomeComponent } from './container/component';
import { HomeContainer } from './container';
import { HomeRoutingModule } from './home-routing.module';
import { ApplicationCommonModule } from 'src/app/common';

const Components = [HomeComponent, HomeContainer];
@NgModule({
  declarations: [Components],
  imports: [HomeRoutingModule, ApplicationCommonModule],
  exports: [Components, HomeRoutingModule],
})
export class HomeModule {}
