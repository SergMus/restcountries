import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './buttons/back-button/back-button.component';
import { ButtonComponent } from './buttons/button/button.component';
import { ArrowIconComponent } from './buttons/icons/arrow-icon/arrow-icon.component';
import { CloseButtonComponent } from './buttons/close-button/close-button.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    ButtonComponent,
    ArrowIconComponent,
    CloseButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    BackButtonComponent,
    ButtonComponent,
    ArrowIconComponent,
    CloseButtonComponent,
  ],
})
export class UiModule {}
