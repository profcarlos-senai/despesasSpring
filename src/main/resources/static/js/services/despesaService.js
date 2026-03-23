import { api } from './api.js';

const BASE = 'api/despesas';

export const despesaService = {
    listarTodas: () => api.request(BASE),

    buscarPorId: (id) => api.request(`${BASE}/${id}`),

    salvar: (despesa) => api.request(BASE, {
        method: 'POST',
        body: JSON.stringify(despesa)
    }),

    atualizar: (despesa) => api.request(`${BASE}/${despesa.id}`, {
        method: 'PUT',
        body: JSON.stringify(despesa)
    }),

    deletar: (id) => api.request(`${BASE}/${id}`, {
        method: 'DELETE'
    })
};