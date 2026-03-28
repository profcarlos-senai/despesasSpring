import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiBaseurl } from './api.baseurl';

@Injectable({ providedIn: 'root' })
export class ApiCategorias {
  constructor(private http: HttpClient) {}

  // CATEGORIAS
  getCategorias(): Observable<any> {
    return this.http.get(`${apiBaseurl}/categorias`);
  }

  getCategoriaById(id: number): Observable<any> {
    return this.http.get(`${apiBaseurl}/categorias/${id}`);
  }

  createCategoria(categoria: any): Observable<any> {
    return this.http.post(`${apiBaseurl}categorias`, categoria);
  }

  updateCategoria(id: number, categoria: any): Observable<any> {
    return this.http.put(`${apiBaseurl}/categorias/${id}`, categoria);
  }

  deleteCategoria(id: number): Observable<any> {
    return this.http.delete(`${apiBaseurl}/categorias/${id}`);
  }
}
