import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() public isVisible = new EventEmitter<boolean>();
  @ViewChild('modal') public modalWindow?: ElementRef;

  @HostListener('click', ['$event'])
  public clickOut(event: MouseEvent): void {
    if (
      !(this.modalWindow?.nativeElement as HTMLElement).contains(
        event.target as Element
      )
    ) {
      this.close();
    }
  }

  public close(): void {
    this.isVisible.emit(false);
  }
}
