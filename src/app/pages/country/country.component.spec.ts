import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpCountryService } from 'src/app/shared/services/http-country.service';
import { BackButtonComponent } from 'src/app/UI/buttons/back-button/back-button.component';
import { ArrowIconComponent } from 'src/app/UI/buttons/icons/arrow-icon/arrow-icon.component';

import { CountryComponent } from './country.component';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryComponent, BackButtonComponent, ArrowIconComponent],
      imports: [HttpClientTestingModule],
      providers: [
        HttpCountryService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => '' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
