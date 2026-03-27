import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  // DESPESAS
  getDespesas(): Observable<any> {
    return this.http.get('/api/despesas');
  }

  getDespesaById(id: number): Observable<any> {
    return this.http.get(`/api/despesas/${id}`);
  }

  createDespesa(despesa: any): Observable<any> {
    return this.http.post('/api/despesas', despesa);
  }

  updateDespesa(id: number, despesa: any): Observable<any> {
    return this.http.put(`/api/despesas/${id}`, despesa);
  }

  deleteDespesa(id: number): Observable<any> {
    return this.http.delete(`/api/despesas/${id}`);
  }

  // CATEGORIAS
  getCategorias(): Observable<any> {
    return this.http.get('/api/categorias');
  }

  getCategoriaById(id: number): Observable<any> {
    return this.http.get(`/api/categorias/${id}`);
  }

  createCategoria(categoria: any): Observable<any> {
    return this.http.post('/api/categorias', categoria);
  }

  updateCategoria(id: number, categoria: any): Observable<any> {
    return this.http.put(`/api/categorias/${id}`, categoria);
  }

  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(`/api/categorias/${id}`);
  }
}
