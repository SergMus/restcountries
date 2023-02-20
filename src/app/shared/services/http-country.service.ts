import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICountry } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpCountryService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  public getCountriesByRegion(region: string): Observable<ICountry[]> {
    return this.http.get(`${this.apiUrl}/region/${region}`).pipe(
      map((countries: any) =>
        countries.map((country: ICountry) => ({
          name: country.name.common,
          flags: country.flags.svg,
        }))
      )
    );
  }
}
