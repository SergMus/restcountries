import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ICountry } from '../interfaces/country.interface';
import { COUNTRIES_MOCKS } from '../mocks/country.mocks';
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
    const mockCountries: ICountry[] = COUNTRIES_MOCKS;

    service.getCountriesByRegion(region).subscribe((countries) => {
      expect(countries.length).toBe(2);
    });

    const req = httpTestingController.expectOne(
      `https://restcountries.com/v3.1/region/${region}`
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockCountries);
  });
});
