import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './toolbar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ToolbarComponent { }
