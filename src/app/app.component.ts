import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule, MatDrawerMode} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatSidenavModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title= 'ahorraplus';
  sidenavMode:MatDrawerMode = 'side';
  isSidenavOpen = true;

  readonly breakpointObserver$ = inject(BreakpointObserver);

  ngOnInit(): void {
    this.breakpointObserver$
      .observe('(max-width: 768px)')
      .subscribe(state => {
        this.isSidenavOpen = !state.matches;
        this.sidenavMode = state.matches ? this.sidenavMode = 'over' : this.sidenavMode = 'side' ;
      });      
  }

  openSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
