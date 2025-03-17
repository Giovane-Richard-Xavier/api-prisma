# API PRISMA - Library
Descrição do Projeto
O Library API é uma aplicação desenvolvida utilizando o framework Nest.js em conjunto com o ORM Prisma. Este projeto tem como objetivo gerenciar um sistema de biblioteca, permitindo operações de cadastro, consulta, atualização e exclusão de livros, além do gerenciamento de empréstimos.

Principais Tecnologias Utilizadas
Nest.js: Framework Node.js progressivo para a construção de aplicações server-side eficientes e escaláveis.
Prisma: ORM de próxima geração que facilita o acesso ao banco de dados com segurança de tipos e produtividade.
PostgreSQL: Banco de dados relacional utilizado para armazenamento das informações.
Docker: Plataforma para desenvolvimento, envio e execução de aplicações em containers.
Funcionalidades Principais
Gerenciamento de Livros
Cadastro de livros: Permite adicionar novos livros com informações como título, autor e ISBN.
Consulta de livros: Possibilita a busca de livros por parâmetros como título ou autor.
Atualização de livros: Facilita a modificação das informações dos livros cadastrados.
Exclusão de livros: Permite remover livros do sistema.
Gerenciamento de Empréstimos
Registro de empréstimos: Vincula empréstimos a livros e usuários, registrando datas e prazos.
Devolução de livros: Controla a devolução de livros, garantindo o cumprimento dos prazos estabelecidos.
Listagem de empréstimos: Exibe empréstimos em aberto e históricos de empréstimos concluídos.
Arquitetura e Design
API RESTful: A aplicação segue os princípios REST para comunicação entre cliente e servidor.
Banco de Dados Relacional: Utilização do PostgreSQL para armazenamento estruturado e eficiente dos dados.
Boas Práticas de Código: Implementação de padrões como DTOs, Services e Repositories para manter a separação de responsabilidades e facilitar a manutenção do código.
Como Executar o Projeto
Pré-requisitos
Node.js versão 14 ou superior.
Docker instalado e em execução.
Banco de dados PostgreSQL configurado ou utilização de container Docker para o banco.
