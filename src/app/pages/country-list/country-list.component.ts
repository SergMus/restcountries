import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ICountry } from 'src/app/shared/models/country.interface';
import { HttpCountryService } from 'src/app/shared/services/http-country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent implements OnInit {
  public title: string = '';
  public numberOfCountries = 6;
  public element?: HTMLElement;
  public countries$?: Observable<ICountry[]>;

  constructor(
    private httpCountryService: HttpCountryService,
    private router: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.title = params.get('name') || '';
      this.getCountries();
    });
  }

  public getCountries(): void {
    this.countries$ = this.httpCountryService
      .getCountriesByRegion(this.title)
      .pipe(
        catchError((err) => {
          console.log(err);
          return [];
        })
      );
  }
}
