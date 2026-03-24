package carlos.despesas.dados;

import carlos.despesas.modelo.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
    public Boolean existsByNome(String nome);
}
