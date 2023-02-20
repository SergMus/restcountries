import { TestBed } from '@angular/core/testing';
import { RegionsData } from './regions.service';

describe('RegionsData', () => {
  let service: RegionsData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegionsData],
    });
    service = TestBed.inject(RegionsData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of regions', () => {
    expect(service.applyAll.length).toBe(5);
  });
});
