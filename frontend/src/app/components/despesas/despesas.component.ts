import { Component, OnInit } from '@angular/core';
import { ApiDespesas } from '../../services/api.despesas';
import { ApiCategorias } from '../../services/api.categorias';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Despesa } from '../../models/despesa.model';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrl: './despesas.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class DespesasComponent implements OnInit {

  despesas: Despesa[] = [];
  categorias: Categoria[] = [];

  showForm = false;
  editingId: number | null = null;

  form: any = {
    descricao: '',
    valor: null,
    categoria: '',
    data: ''
  };

  constructor(
    private apiDespesas: ApiDespesas,
    private apiCategorias: ApiCategorias
  ) {}

  ngOnInit(): void {
    this.getDespesas();
    this.getCategorias();
  }

  getCategorias() {
    this.apiCategorias.getCategorias().subscribe((data: Categoria[]) => {
      this.categorias = data;
    });
  }

  getDespesas() {
    this.apiDespesas.getDespesas().subscribe((data: Despesa[]) => {
      this.despesas = data;
    });
  }

  abrirFormulario() {
    this.showForm = true;
    this.editingId = null;
    this.form = {
      descricao: '',
      valor: null,
      categoria: '',
      data: ''
    };
  }

  fecharFormulario() {
    this.showForm = false;
  }

  salvar() {
    if (this.editingId) {
      this.apiDespesas.updateDespesa(this.editingId, this.form)
        .subscribe(() => {
          this.getDespesas();
          this.fecharFormulario();
        });
    } else {
      this.apiDespesas.createDespesa(this.form)
        .subscribe((nova: Despesa) => {
          this.despesas.push(nova);
          this.fecharFormulario();
        });
    }
  }

  editar(despesa: Despesa) {
    this.editingId = despesa.id ?? null;
    this.form = { ...despesa };
    this.showForm = true;
  }

  deletar(id: number) {
    this.apiDespesas.deleteDespesa(id).subscribe(() => {
      this.despesas = this.despesas.filter(d => d.id !== id);
    });
  }

  obterNomeCategoria(id: number) {
    const cat = this.categorias.find(c => c.id == id);
    return cat ? cat.nome : 'Sem categoria';
  }
}
