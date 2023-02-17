export interface Country {
  name: CountryName;
  flags: CountryFlag;
}

interface CountryName {
  common: string;
}

interface CountryFlag {
  svg: string;
}
