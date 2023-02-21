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
  public isModal: boolean = false;

  constructor(private location: Location) {}

  public ngOnInit(): void {
    this.location.onUrlChange(() => {
      this.isVisible = this.location.isCurrentPathEqualTo('');
    });
  }

  public toggle(): void {
    this.isModal = !this.isModal;
  }
}
