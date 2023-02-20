import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryListComponent } from './country-list.component';
import { HttpCountryService } from 'src/app/shared/services/http-country.service';
import { ActivatedRoute } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { of } from 'rxjs';
import { BackButtonComponent } from 'src/app/UI/buttons/back-button/back-button.component';
import { ArrowIconComponent } from 'src/app/UI/buttons/icons/arrow-icon/arrow-icon.component';

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CountryListComponent,
        BackButtonComponent,
        ArrowIconComponent,
      ],
      imports: [ScrollingModule],
      providers: [
        {
          provide: HttpCountryService,
          useValue: {
            getCountriesByRegion: () => of([]),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => '' }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
