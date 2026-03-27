import { Categoria } from './categoria.model';

export interface Despesa {
  id?: number;
  descricao: string;
  valor: number;
  categoria: Categoria;
  data: string;
}
