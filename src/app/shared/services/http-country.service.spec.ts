import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ICountries, ICountry } from '../models/country.interface';
import { COUNTRIES_MOCKS, COUNTRY_MOCK } from '../mocks/country.mocks';
import { HttpCountryService } from './http-country.service';

describe('HttpCountryService', () => {
  let service: HttpCountryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpCountryService],
    });
    service = TestBed.inject(HttpCountryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve countries by region', () => {
    const region = 'europe';
    const mockCountries: ICountries[] = COUNTRIES_MOCKS;

    service.getCountriesByRegion(region).subscribe((countries) => {
      expect(countries.length).toBe(2);
    });

    const req = httpTestingController.expectOne(
      `https://restcountries.com/v3.1/region/${region}`
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockCountries);
  });

  it('should retrieve one country by name', () => {
    const mockCountry = COUNTRY_MOCK;

    service.getOneCountry('brazil').subscribe((country) => {
      expect(country).toEqual([mockCountry]);
    });

    const req = httpTestingController.expectOne(
      'https://restcountries.com/v3.1/name/brazil'
    );
    expect(req.request.method).toBe('GET');
    req.flush([mockCountry]);
  });

  it('should handle error when retrieving one country by name', () => {
    const mockError = new ErrorEvent('network error');
    let errorResponse: string;

    service.getOneCountry('invalid').subscribe(
      () => {},
      (error: string) => {
        errorResponse = error;
        expect(errorResponse).toContain('');
        expect(errorResponse).toContain('network error');
        req.error(mockError);
      }
    );

    const req = httpTestingController.expectOne(
      'https://restcountries.com/v3.1/name/invalid'
    );
    expect(req.request.method).toBe('GET');
  });
});
