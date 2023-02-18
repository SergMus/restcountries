import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = 'restcountries';
  public isVisible: boolean = true;

  constructor(private location: Location) {}

  public ngOnInit(): void {
    this.checkBannerVisibility();
  }

  public checkBannerVisibility(): void {
    this.isVisible = this.location.isCurrentPathEqualTo('');
  }
}
