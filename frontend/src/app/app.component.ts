import { Component } from '@angular/core';
import { DespesasComponent } from './components/despesas/despesas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DespesasComponent],
  template: '<app-despesas></app-despesas>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}