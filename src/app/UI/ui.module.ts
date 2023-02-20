import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './buttons/back-button/back-button.component';
import { ButtonComponent } from './buttons/button/button.component';
import { ArrowIconComponent } from './buttons/icons/arrow-icon/arrow-icon.component';

@NgModule({
  declarations: [BackButtonComponent, ButtonComponent, ArrowIconComponent],
  imports: [CommonModule],
  exports: [BackButtonComponent, ButtonComponent, ArrowIconComponent],
})
export class UiModule {}
