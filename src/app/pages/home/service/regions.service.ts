import { Injectable } from '@angular/core';
import { Region } from 'src/app/shared/models/regions.interface';

@Injectable({ providedIn: 'root' })
export class RegionsData {
  private regions: Region[] = [
    {
      name: 'africa',
      icon: './../../../assets/images/png/africa.png',
    },
    {
      name: 'americas',
      icon: './../../../assets/images/png/americas.png',
    },
    { name: 'asia', icon: './../../../assets/images/png/asia.png' },
    { name: 'europe', icon: './../../../assets/images/png/europe.png' },
    { name: 'oceania', icon: './../../../assets/images/png/oceania.png' },
  ];

  get applyAll(): Region[] {
    return this.regions;
  }
}
