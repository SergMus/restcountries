import { PopulationPipe } from './population.pipe';

describe('PopulationPipe', () => {
  let pipe: PopulationPipe;

  beforeEach(() => {
    pipe = new PopulationPipe();
  });

  it('should return null if the population is 0', () => {
    expect(pipe.transform(0)).toBeNull();
  });

  it('should abbreviate thousands', () => {
    expect(pipe.transform(5000)).toBe('5 K');
    expect(pipe.transform(12000)).toBe('12 K');
    expect(pipe.transform(67000)).toBe('67 K');
  });

  it('should abbreviate millions', () => {
    expect(pipe.transform(1000000)).toBe('1 mln');
    expect(pipe.transform(2500000)).toBe('2.5 mln');
    expect(pipe.transform(90000000)).toBe('90 mln');
  });

  it('should abbreviate billions', () => {
    expect(pipe.transform(1500000000)).toBe('1.5 bln');
  });

  it('should not abbreviate numbers smaller than 1000', () => {
    expect(pipe.transform(500)).toBe(500);
    expect(pipe.transform(999)).toBe(999);
  });

  it('should return null if no arguments', () => {
    expect(pipe.transform()).toBeNull();
  });
});
