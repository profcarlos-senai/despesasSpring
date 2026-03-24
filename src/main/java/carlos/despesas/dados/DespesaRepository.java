package carlos.despesas.dados;

import carlos.despesas.modelo.Despesa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface DespesaRepository extends JpaRepository<Despesa, Long> {
    public List <Despesa> findAllByOrderByDataDesc();
    List<Despesa> findByDataBetweenOrderByDataDesc(Date inicio, Date fim);
}