package carlos.despesas.controle;
import carlos.despesas.modelo.Despesa;
import carlos.despesas.dados.DespesaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.YearMonth;
import java.util.List;

@RestController
@RequestMapping("/api/despesas")
public class DespesaController {

    @Autowired
    private DespesaRepository repository;

    @GetMapping
    public List<Despesa> listar() {
        List<Despesa> lista = repository.findAllByOrderByDataDesc();
        return lista;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Despesa> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/mes")
    public ResponseEntity<List<Despesa>> buscarPorMes(
            @RequestParam int ano,
            @RequestParam int mes) {

        // validação básica
        if (mes < 1 || mes > 12) {
            return ResponseEntity.badRequest().build();
        }

        YearMonth yearMonth = YearMonth.of(ano, mes);

        Date inicio = Date.valueOf(yearMonth.atDay(1));
        Date fim = Date.valueOf(yearMonth.atEndOfMonth());

        List<Despesa> despesas = repository
                .findByDataBetweenOrderByDataDesc(inicio, fim);

        return ResponseEntity.ok(despesas);
    }

    @PostMapping
    public Despesa salvar(@Valid @RequestBody Despesa despesa) {
        return repository.save(despesa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Despesa> atualizar(@PathVariable Long id, @Valid @RequestBody Despesa despesaAtualizada) {
        return repository.findById(id)
                .map(despesa -> {
                    despesa.setDescricao(despesaAtualizada.getDescricao());
                    despesa.setValor(despesaAtualizada.getValor());
                    despesa.setData(despesaAtualizada.getData());
                    Despesa atualizada = repository.save(despesa);
                    return ResponseEntity.ok(atualizada);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}