/**
 * Utilitários globais de formatação
 */

export const formatar = {
    /**
     * Converte data ISO (yyyy-mm-dd) para padrão brasileiro (dd/mm/yyyy)
     * Utilizado para exibir a data vinda do java.sql.Date
     */
    dataBR: (dataSql) => {
        if (!dataSql) return '-';
        const data = new Date(dataSql+"T00:00:00");
        return data.toLocaleDateString('pt-BR');
    },

    /**
     * Formata um número para moeda brasileira (R$)
     * Ideal para exibir o campo 'valor' da Despesa
     */
    moedaBR: (valor) => {
        if (!valor) return 'R$ 0,00';
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
};