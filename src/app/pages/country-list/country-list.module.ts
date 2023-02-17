import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryListRoutingModule } from './country-list-routing.module';
import { CountryListComponent } from './country-list.component';

@NgModule({
  declarations: [CountryListComponent],
  imports: [CommonModule, CountryListRoutingModule],
})
export class CountryListModule {}
