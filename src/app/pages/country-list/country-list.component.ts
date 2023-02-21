import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { ICountries } from 'src/app/shared/models/country.interface';
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
  public countries$?: Observable<ICountries[]>;

  constructor(
    private httpCountryService: HttpCountryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.title = params.get('name') || '';
      this.getCountries(this.title);
    });
  }

  public getCountries(title: string): void {
    this.countries$ = this.httpCountryService.getCountriesByRegion(title);
  }

  public navigateToCountry(name: string) {
    this.router.navigate(['country', name]);
  }
}
