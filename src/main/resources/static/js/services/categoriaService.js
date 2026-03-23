import { api } from './api.js';

const BASE = 'api/categorias';

/**
 * Serviço para comunicação com o CategoriaServlet.java
 */
export const categoriaService = {
    
    /**
     * Busca todas as categorias cadastradas.
     * Aciona o método doGet (listarTodos) no Servlet.
     */
    listarTodas: () => api.request(`${BASE}`),

    /**
     * Busca uma categoria específica pelo ID.
     * Aciona o método doGet (listarPorId) no Servlet.
     */
    buscarPorId: (id) => api.request(`${BASE}/${id}`),

    /**
     * Cadastra uma nova categoria.
     * O Servlet espera um JSON que mapeie para o modelo Categoria.
     * @param {Object} categoria - Objeto contendo { nome: "Exemplo" }
     */
    salvar: (categoria) => api.request(`${BASE}`, {
        method: 'POST',
        body: JSON.stringify(categoria)
    }),
    
    /**
     * Atualiza uma categoria existente.
     * Aciona o método doPut no Servlet.
     * @param {Object} categoria - Objeto contendo { id: 1, nome: "Novo Nome" }
     */
    atualizar: (categoria) => api.request(`${BASE}`, {
        method: 'PUT',
        body: JSON.stringify(categoria)
    }),

    /**
     * Remove uma categoria pelo ID.
     * Aciona o método doDelete no Servlet.
     */
    deletar: (id) => api.request(`${base}/${id}`, {
        method: 'DELETE'
    })
};