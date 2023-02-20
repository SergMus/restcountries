import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CountryListRoutingModule } from './country-list-routing.module';
import { CountryListComponent } from './country-list.component';
import { UiModule } from 'src/app/UI/ui.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CountryListComponent],
  imports: [
    CommonModule,
    CountryListRoutingModule,
    ScrollingModule,
    UiModule,
    RouterModule,
  ],
})
export class CountryListModule {}
