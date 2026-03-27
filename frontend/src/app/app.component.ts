import { Component } from '@angular/core';
import { DespesasComponent } from './despesas/despesas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DespesasComponent],
  template: '<app-despesas></app-despesas>',
  styleUrls: ['./app.scss']
})
export class AppComponent {}
