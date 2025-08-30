import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationCommonModule } from './common';
import { HomeModule } from './features/home';

import { ScenarioModule } from './features/scenario';


const AppModules = [HomeModule, ScenarioModule];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ApplicationCommonModule,
    AppModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
