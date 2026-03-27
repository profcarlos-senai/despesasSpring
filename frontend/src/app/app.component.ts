import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './partes/header/header';
import { Footer } from './partes/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer,
  ],
  template: `
    <app-header></app-header>

    <main class="content">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./app.scss']
})
export class AppComponent {}
