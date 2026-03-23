package carlos.despesas.modelo;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Despesa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotEmpty(message = "Descrição não pode ficar em branco")
    @Size(max = 100, message = "Descrição deve no máximo 100 caracteres")
    @Column(nullable = false, length = 100)
    private String descricao;

    @NotNull(message = "Valor é obrigatório")
    private BigDecimal valor;

    @NotNull(message = "Data é obrigatória")
    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false) // Cria a FK no banco
    @NotNull(message = "A categoria é obrigatória")
    private Categoria categoria;
}
