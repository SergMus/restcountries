import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public buttonText = '';

  @Input() set text(name: string) {
    this.buttonText = name;
  }

  get name(): string {
    return this.buttonText;
  }

  @Input() type: string = 'type';
  @Input() color: string = '0068B4';
  @Input() isDisabled = false;
  @Output() btnClick = new EventEmitter();

  public onClick(): void {
    this.btnClick.emit();
  }
}
