import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() private isVisible = new EventEmitter<boolean>();

  public close(): void {
    this.isVisible.emit(false);
  }
}
