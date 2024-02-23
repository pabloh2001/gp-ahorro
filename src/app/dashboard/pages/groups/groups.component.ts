import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css',
})
export default class GroupsComponent { }
