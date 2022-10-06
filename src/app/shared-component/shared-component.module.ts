import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { PlanningComponent } from './planning/planning.component';
import { CardsComponent } from './cards/cards.component';
import { ExpertiesComponent } from './experties/experties.component';
import { ExpertiescardsComponent } from './expertiescards/expertiescards.component';
import { LookingforwardComponent } from './lookingforward/lookingforward.component';

@NgModule({
  declarations: [
    HeroComponent,
    BadgesComponent,
    ButtonsComponent,
    PlanningComponent,
    CardsComponent,
    ExpertiesComponent,
    ExpertiescardsComponent,
    LookingforwardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroComponent,
    PlanningComponent,
    ExpertiesComponent,
    LookingforwardComponent,
    ButtonsComponent,
    BadgesComponent,
    ExpertiescardsComponent
  ]
})
export class SharedComponentModule { }
