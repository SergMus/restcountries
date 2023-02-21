import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICountries, ICountry } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpCountryService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  public getCountriesByRegion(region: string): Observable<ICountries[]> {
    return this.http.get(`${this.apiUrl}/region/${region}`).pipe(
      map((countries: any) =>
        countries.map((country: ICountries) => ({
          name: country.name.common,
          flags: country.flags.svg,
          desc: country.flag,
        }))
      ),
      catchError(this.handleError)
    );
  }

  public getOneCountry(name: string): Observable<any> {
    return this.http.get<ICountry[]>(`${this.apiUrl}/name/${name}`).pipe(
      map((country: any) =>
        country.map(
          ({
            name,
            cioc,
            capital,
            flag,
            flags,
            currencies,
            population,
          }: ICountry) => ({
            name: name?.official,
            cioc,
            capital,
            flag,
            flags: flags?.svg,
            currencies: currencies ? Object.values(currencies)[0].symbol : null,
            population,
          })
        )
      ),
      catchError(this.handleError)
    );
  }

  public handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    errorMessage =
      error.error instanceof ErrorEvent
        ? error.error.message
        : `Error Code: ${error.status}\nMessage: ${error.message}`;

    return throwError((): string => errorMessage);
  }
}
