import { Component, OnInit, Inject } from '@angular/core';
import { Region } from 'src/app/shared/models/regions.interface';
import { RegionsData } from './service/regions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public regions: Region[] = [];

  constructor(private regionData: RegionsData) {}

  public ngOnInit(): void {
    this.regions = this.regionData.applyAll;
  }
}
