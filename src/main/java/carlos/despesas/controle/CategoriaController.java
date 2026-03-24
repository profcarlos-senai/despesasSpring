package carlos.despesas.controle;

import carlos.despesas.modelo.Categoria;
import carlos.despesas.dados.CategoriaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaRepository repository;

    // Listar todas as categorias
    @GetMapping
    public List<Categoria> listar() {
        List<Categoria> lista = repository.findAll();
        return lista;
    }

    @GetMapping("/banana/{quant}")
    public String banana(@PathVariable int quant) {
        return "banana".repeat(quant);
    }

    // Buscar uma categoria por ID
    @GetMapping("/{id}")
    public ResponseEntity<Categoria> buscarPorId(@PathVariable Integer id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Criar nova categoria
    @PostMapping
    public ResponseEntity<?> salvar(@Valid @RequestBody Categoria categoria) {
        if (repository.existsByNome(categoria.getNome())) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT) // Ou .badRequest()
                    .body("Já existe uma categoria com o nome \"" + categoria.getNome() + "\"");
        }
        categoria = repository.save(categoria); // salvei
        return ResponseEntity.ok(categoria); // mandei de volta
    }

    // Atualizar categoria existente
    @PutMapping("/{id}")
    public ResponseEntity<Categoria> atualizar(@PathVariable Integer id, @Valid @RequestBody Categoria categoriaAtualizada) {
        return repository.findById(id)
                .map(categoria -> {
                    categoria.setNome(categoriaAtualizada.getNome());
                    Categoria atualizada = repository.save(categoria);
                    return ResponseEntity.ok(atualizada);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Deletar categoria
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}