import { Routes } from '@angular/router';
import { DespesasComponent } from './despesas/despesas.component';
import { CategoriasComponent } from './categorias/categorias.component';

export const routes = [
  { path: '', component: DespesasComponent },
  { path: 'categoria', component: CategoriasComponent},
];
