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

        // cria um objeto a partir da data
        const dataObjeto = new Date(dataSql);

        // retorna uma string a partir do objeto
        return dataObjeto.toLocaleDateString('pt-BR');
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