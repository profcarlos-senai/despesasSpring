
-- dados

insert into categoria (nome) values
('Moradia'),
('Alimentação'),
('Transporte'),
('Internet'),
('Celular'),
('Lazer'),
('Material de Estudo'),
('Saúde'),
('Higiene'),
('Outros');

insert into despesa (descricao, valor, data, categoria_id) values
('Aluguel do quarto', 750.00, '2025-01-05', 1),
('Supermercado mês', 220.50, '2025-01-06', 2),
('Cartão transporte recarga', 120.00, '2025-01-07', 3),
('Plano de internet', 89.90, '2025-01-08', 4),
('Recarga celular', 30.00, '2025-01-10', 5),
('Cinema com amigos', 35.00, '2025-01-12', 6),
('Caderno e canetas', 42.70, '2025-01-13', 7),
('Farmácia - analgésico', 18.90, '2025-01-14', 8),
('Shampoo e sabonete', 25.40, '2025-01-16', 9),
('Café na cantina', 9.50, '2025-01-18', 2),

('Almoço RU', 6.00, '2025-01-20', 2),
('Uber para voltar da faculdade', 22.30, '2025-01-22', 3),
('Pizza com colegas', 48.00, '2025-01-24', 6),
('Impressões trabalho faculdade', 12.00, '2025-01-25', 7),
('Recarga celular extra', 15.00, '2025-01-27', 5),

('Aluguel do quarto', 750.00, '2025-02-05', 1),
('Supermercado mês', 210.80, '2025-02-06', 2),
('Cartão transporte recarga', 120.00, '2025-02-07', 3),
('Plano de internet', 89.90, '2025-02-08', 4),
('Recarga celular', 30.00, '2025-02-10', 5),
('Hambúrguer com amigos', 32.00, '2025-02-11', 6),
('Livro usado da disciplina', 55.00, '2025-02-12', 7),
('Farmácia - antialérgico', 24.50, '2025-02-13', 8),
('Desodorante e pasta de dente', 19.90, '2025-02-15', 9),
('Café na cantina', 8.50, '2025-02-17', 2),

('Almoço RU', 6.00, '2025-02-19', 2),
('Uber noite chuvosa', 18.40, '2025-02-21', 3),
('Barzinho com colegas', 40.00, '2025-02-23', 6),
('Pendrive para trabalhos', 35.00, '2025-02-25', 7),
('Taxa bancária', 12.00, '2025-02-27', 10);

INSERT INTO despesas (id, descricao, valor, data, categoria_id) VALUES
(1, 'Aluguel do mês', 1200.00, '2026-03-01', 1),
(2, 'Supermercado', 320.50, '2026-03-02', 2),
(3, 'Uber e ônibus', 95.40, '2026-03-04', 3),
(4, 'Internet residencial', 110.00, '2026-03-05', 4),
(5, 'Plano de celular', 55.90, '2026-03-06', 5),
(6, 'Cinema e lanche', 70.00, '2026-03-08', 6),
(7, 'Material de estudo', 150.00, '2026-03-10', 7),
(8, 'Farmácia', 85.75, '2026-03-12', 8),
(9, 'Produtos de higiene', 60.30, '2026-03-15', 9),
(10, 'Outros gastos', 40.00, '2026-03-20', 10);
