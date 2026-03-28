import { Routes } from '@angular/router';
import { DespesasComponent} from './components/despesas/despesas.component';
import {BananaComponent} from './components/banana/banana';

export const routes: Routes = [
  { path: '', component: BananaComponent },
  { path: 'despesas', component: DespesasComponent }
];
