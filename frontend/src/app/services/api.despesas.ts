import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiBaseurl } from './api.baseurl';

@Injectable({ providedIn: 'root' })
export class ApiDespesas {
  constructor(private http: HttpClient) {}

  // DESPESAS
  getDespesas(): Observable<any> {
    return this.http.get(`${apiBaseurl}/despesas`);
  }

  getDespesaById(id: number): Observable<any> {
    return this.http.get(`${apiBaseurl}/despesas/${id}`);
  }

  createDespesa(despesa: any): Observable<any> {
    return this.http.post(`${apiBaseurl}/despesas`, despesa);
  }

  updateDespesa(id: number, despesa: any): Observable<any> {
    return this.http.put(`${apiBaseurl}/despesas/${id}`, despesa);
  }

  deleteDespesa(id: number): Observable<any> {
    return this.http.delete(`${apiBaseurl}/despesas/${id}`);
  }
}
