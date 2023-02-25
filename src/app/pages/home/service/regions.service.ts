import { Injectable } from '@angular/core';
import { Region } from 'src/app/shared/models/regions.interface';

@Injectable({ providedIn: 'root' })
export class RegionsData {
  private regions: Region[] = [
    {
      name: 'africa',
      icon: './../../../assets/images/webp/africa.webp',
    },
    {
      name: 'americas',
      icon: './../../../assets/images/webp/americas.webp',
    },
    { name: 'asia', icon: './../../../assets/images/webp/asia.webp' },
    { name: 'europe', icon: './../../../assets/images/webp/europe.webp' },
    { name: 'oceania', icon: './../../../assets/images/webp/oceania.webp' },
  ];

  get applyAll(): Region[] {
    return this.regions;
  }
}
