package carlos.despesas.modelo;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity // significa que essa classe é uma tabela de banco de dados
public class Categoria {
    @Id // diz que o campo abaixo é a chave primária
    @GeneratedValue(strategy = GenerationType.IDENTITY) // numeração automática
    private Integer id;

    @NotNull
    @NotBlank(message = "Nome não pode ficar em branco")
    @Size(min = 3, max = 30, message = "Nome tem que ter entre 3 e 30 caracteres")
    @Column(nullable = false, unique = true, length = 30) // isso vai pro banco de dados
    private String nome;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
