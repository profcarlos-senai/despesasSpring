import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss'],
})
export class DespesasComponent implements OnInit {
  despesas: any[] = [];
  newDespesa: any = {};
  editDespesa: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getDespesas();
  }

  getDespesas() {
    this.apiService.getDespesas().subscribe((data) => {
      this.despesas = data;
    });
  }

  addDespesa() {
    this.apiService.addDespesa(this.newDespesa).subscribe((despesa) => {
      this.despesas.push(despesa);
      this.newDespesa = {};
    });
  }

  updateDespesa() {
    this.apiService.updateDespesa(this.editDespesa).subscribe(() => {
      this.getDespesas();
      this.editDespesa = null;
    });
  }

  deleteDespesa(id: number) {
    this.apiService.deleteDespesa(id).subscribe(() => {
      this.despesas = this.despesas.filter(d => d.id !== id);
    });
  }

  selectDespesa(despesa: any) {
    this.editDespesa = { ...despesa };
  }

  cancelEdit() {
    this.editDespesa = null;
  }
}
