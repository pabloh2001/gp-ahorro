import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>title works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TitleComponent { }
