import { Component, Input } from '@angular/core';
import { IIcons } from 'src/app/shared/interfaces/icons.interface';

@Component({
  selector: 'app-arrow-icon',
  template: `
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7915 4.9951L3.62148 4.9951L6.50148 2.1151C6.89148 1.7251 6.89148 1.0951 6.50148 0.705098C6.11148 0.315098 5.48148 0.315098 5.09148 0.705098L0.501484 5.2951C0.111484 5.6851 0.111484 6.3151 0.501484 6.7051L5.09148 11.2951C5.48148 11.6851 6.11148 11.6851 6.50148 11.2951C6.89148 10.9051 6.89148 10.2751 6.50148 9.8851L3.62148 6.9951L16.7915 6.9951C17.3415 6.9951 17.7915 6.5451 17.7915 5.9951C17.7915 5.4451 17.3415 4.9951 16.7915 4.9951Z"
        fill="#6DB720"
      />
    </svg>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
      }

      svg {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class ArrowIconComponent implements IIcons {
  @Input() color: string = '#6db720';
  @Input() size: string = '24px';
}
