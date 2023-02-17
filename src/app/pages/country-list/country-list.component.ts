import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/interfaces/country';
import { HttpCountryService } from 'src/app/services/http-country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  @Input() title = 'Europe';
  public countries$?: Observable<Country[]>;

  constructor(public httpCountryService: HttpCountryService) {}

  public ngOnInit(): void {
    this.countries$ = this.httpCountryService.getCountriesByRegion(this.title);
  }
}
