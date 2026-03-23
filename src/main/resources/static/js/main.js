import { despesaService } from './services/despesaService.js';
import {categoriaService} from './services/categoriaService.js';
import { formatar } from './utils.js';

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
        const selectCategoria = document.getElementById('select-categoria');

        // 1. Busca os dados (Despesas e Categorias)
        // Dica: Usar Promise.all ajuda se o service tiver métodos separados
        const [despesas, categorias] = await Promise.all([
            despesaService.listarTodas(),
            categoriaService.listarTodas()
        ]);

        // 2. Preenche o Select de Categorias no Modal
        selectCategoria.innerHTML = `
            <option value="" selected disabled>Selecione uma categoria...</option>
            ${categorias.map(c => `
                <option value="${c.id}">${c.nome}</option>
            `).join('')}
        `;

        // 3. Preenche a Tabela com os novos botões (Visualizar, Editar, Excluir)
        tabelaCorpo.innerHTML = despesas.map(d => `
            <tr>
                <td>${formatar.dataBR(d.data)}</td>
                <td>${d.descricao}</td>
                <td><span class="badge bg-secondary">${d.categoria.nome}</span></td>
                <td class="text-end">${formatar.moedaBR(d.valor)}</td>
                <td class="text-end">
                    <div class="btn-group">
                        <button class="btn btn-sm btn-outline-info" onclick="window.visualizarDespesa(${d.id})">
                            Ver
                        </button>
                        <button class="btn btn-sm btn-outline-warning" onclick="window.editarDespesa(${d.id})">
                            Editar
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="window.excluirDespesa(${d.id})">
                            Excluir
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');

    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
    }
}
