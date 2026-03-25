import { despesaService } from './services/despesaService.js';
import {categoriaService} from './services/categoriaService.js';
import { formatar } from './utils.js';

// navegador de meses
const hoje = new Date();
let anoAtual = hoje.getFullYear();
let mesAtual = hoje.getMonth() + 1; // getMonth() vai de 0 a 11

// pega o mês e o ano dos parâmetros da URL
function pegaMesEAno(){
    // se tiver mês e ano na URL, passa para as variáveis
    const urlParams = new URLSearchParams(window.location.search);
    // multiplica por 1 pra garantir que é um número
    const mes = urlParams.get('mes')*1;
    const ano = urlParams.get('ano')*1;

    // se tiver algo errado cai fora
    if(!Number.isInteger(ano)) return;
    if(!Number.isInteger(mes)) return;
    if(mes < 1 || mes > 12) return;

    // se tá tudo certo, atualiza as globais
    anoAtual = ano;
    mesAtual = mes;
    console.log(`mes: ${mesAtual}, ano: ${anoAtual}`);
}

// atualizar a tabela assim que carregar o documento
document.addEventListener("DOMContentLoaded", () => {
    pegaMesEAno();
    atualizarTabela();

    // configura botões
    document.getElementById('btnAtualizar')
        .addEventListener('click', atualizarTabela);
});

// enche a tabela
async function atualizarTabela() {
    try {
        const tabelaCorpo = document.getElementById('tabelaCorpo');
        const selectCategoria = document.getElementById('select-categoria');

        // 1. Busca os dados (Despesas e Categorias)
        // Dica: Usar Promise.all ajuda se o service tiver métodos separados
        const [despesas, categorias] = await Promise.all([
            despesaService.buscarPorAnoEMes(anoAtual, mesAtual),
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

        atualizaTituloMes();

    } catch (error) {
        console.error("Erro ao atualizar dados:", error);
    }
}

function atualizaTituloMes(){
    const titulo = document.getElementById('tituloMes');

    const nomesMeses = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
    ];

    titulo.textContent = `${nomesMeses[mesAtual - 1]} / ${anoAtual}`;
}

// navegador de meses
window.mesAnterior = function () {
    mesAtual--;

    if (mesAtual < 1) {
        mesAtual = 12;
        anoAtual--;
    }

    trocarMes(mesAtual, anoAtual);
};

window.proximoMes = function () {
    mesAtual++;

    if (mesAtual > 12) {
        mesAtual = 1;
        anoAtual++;
    }

    trocarMes(mesAtual, anoAtual);
};

function trocarMes(mes, ano){
    // Atualiza as variáveis globais
    mesAtual = mes;
    anoAtual = ano;

    // Atualiza a URL sem recarregar a página
    const novaUrl = `${window.location.pathname}?mes=${mes}&ano=${ano}`;
    window.history.pushState({ path: novaUrl }, '', novaUrl);

    // Chama a atualização dos dados
    atualizarTabela();
}