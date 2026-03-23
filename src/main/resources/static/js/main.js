import { despesaService } from './services/despesaService.js';
import { formatar } from './utils.js';
import {categoriaService} from "./services/categoriaService";

// atualizar a tabela assim que carregar o documento
document.addEventListener("DOMContentLoaded", () => {
    atualizarTabela();

    // 2. Tenta encontrar o botão
    const btn = document.getElementById('btnAtualizar');

    // 3. Só adiciona o evento se o botão realmente estiver na página
    if (btn) {
        btn.addEventListener('click', atualizarTabela);
    }
});

// enche a tabela
async function atualizarTabela() {
    try {
        const tabelaCorpo = document.getElementById('tabelaCorpo');
        const despesas = await despesaService.listarTodas();
        tabelaCorpo.innerHTML = despesas.map(d => `
            <tr>
                <td>${formatar.dataBR(d.data)}</td>
                <td>${d.descricao}</td>
                <td><span class="badge bg-secondary">${d.categoria.nome}</span></td>
                <td class="text-end">${formatar.moedaBR(d.valor)}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-danger" onclick="window.excluirDespesa(${d.id})">
                        Excluir
                    </button>
                </td>
            </tr>
        `).join('');

        const categorias = await categoriaService.listarTodas();

    } catch (error) {
        console.error("Erro ao atualizar tabela:", error);
    }
}
