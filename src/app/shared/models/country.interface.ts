export interface ICountries {
  name: { common: string };
  flags: { svg: string };
  flag?: string;
}

export interface ICountry {
  name: {
    official: string;
  };
  currencies?: ICurrency;
  cioc: string;
  capital: string[];
  population: number;
  flags: {
    svg: string;
  };
  flag?: string;
}

export interface ICurrency {
  [key: string]: {
    symbol: string;
  };
}
