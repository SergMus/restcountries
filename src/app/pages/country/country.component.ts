import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ICountry } from 'src/app/shared/models/country.interface';
import { HttpCountryService } from 'src/app/shared/services/http-country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  public country$?: Observable<ICountry[]>;
  public countryName: string = '';
  constructor(
    private httpCountryService: HttpCountryService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.countryName = params.get('name') || '';
      this.getCountry(this.countryName);
    });
  }

  public getCountry(name: string): void {
    this.country$ = this.httpCountryService.getOneCountry(name);
  }
}
