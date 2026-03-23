/**
 * Configuração base para as chamadas de API.
 * Centraliza a URL do servidor e o tratamento de erros genéricos.
 */

// Se o seu frontend for servido pelo mesmo servidor Java (Tomcat), 
// o caminho relativo costuma ser suficiente.
const API_CONFIG = {
    baseURL: '/', // Ajuste para o contexto do seu Tomcat
    headers: {
        'Content-Type': 'application/json',
    }
};

export const api = {
    /**
     * Wrapper genérico para requisições fetch
     * @param {string} endpoint - Ex: '/api/despesas'
     * @param {object} options - Opções extras do fetch (method, body, etc)
     */
    async request(endpoint, options = {}) {
        const url = `${API_CONFIG.baseURL}${endpoint}`;
        
        const config = {
            ...options,
            headers: {
                ...API_CONFIG.headers,
                ...options.headers
            }
        };

        try {
            const response = await fetch(url, config);

            // Trata o status 204 No Content (comum no seu doDelete)
            if (response.status === 204) return null;

            // Se a resposta não for ok (4xx ou 5xx), lança erro
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `Erro na requisição: ${response.status}`);
            }

            // Retorna o JSON para os métodos GET, POST e PUT
            return await response.json();
        } catch (error) {
            console.error(`Erro em ${endpoint}:`, error);
            throw error;
        }
    }
};