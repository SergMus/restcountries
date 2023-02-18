import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpCountryService } from 'src/app/shared/services/http-country.service';

import { CountryListComponent } from './country-list.component';

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryListComponent],
      imports: [HttpClientTestingModule],
      providers: [HttpCountryService],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
