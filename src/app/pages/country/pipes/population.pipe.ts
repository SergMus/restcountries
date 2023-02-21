import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population',
})
export class PopulationPipe implements PipeTransform {
  transform(population: number = 0): string | number | null {
    let populationStr = population.toString();

    if (!population) {
      return null;
    }

    switch (true) {
      case populationStr.length === 4:
        return (populationStr = populationStr.slice(0, 1) + ' K');

      case populationStr.length === 5:
        return (populationStr = populationStr.slice(0, 2) + ' K');

      case populationStr.length === 6:
        return (populationStr = populationStr.slice(0, 3) + ' K');

      case populationStr.length === 7 && Number(populationStr.charAt(1)) > 0:
        return populationStr.slice(0, 2).split('').join('.') + ' mln';

      case populationStr.length === 7:
        return (populationStr = populationStr.slice(0, 1) + ' mln');

      case populationStr.length === 8:
        return (populationStr = populationStr.slice(0, 2) + ' mln');

      case populationStr.length === 9:
        return (populationStr = populationStr.slice(0, 3) + ' mln');

      case populationStr.length === 10:
        return (populationStr =
          populationStr.slice(0, 2).split('').join('.') + ' bln');

      default:
        return population;
    }
  }
}
