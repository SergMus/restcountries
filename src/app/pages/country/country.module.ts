import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { UiModule } from '../../UI/ui.module';
import { PopulationPipe } from './pipes/population.pipe';

@NgModule({
  declarations: [CountryComponent, PopulationPipe],
  imports: [CommonModule, CountryRoutingModule, UiModule],
})
export class CountryModule {}
