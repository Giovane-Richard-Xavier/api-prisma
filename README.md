# Library API

## Descrição do Projeto

O **Library API** é uma aplicação desenvolvida utilizando o framework [Nest.js](https://nestjs.com/) em conjunto com o ORM [Prisma](https://www.prisma.io/). Este projeto tem como objetivo gerenciar um sistema de biblioteca, permitindo operações de cadastro, consulta, atualização e exclusão de livros, além do gerenciamento de empréstimos.

## Principais Tecnologias Utilizadas

- **Nest.js**: Framework Node.js progressivo para a construção de aplicações server-side eficientes e escaláveis.
- **Prisma**: ORM de próxima geração que facilita o acesso ao banco de dados com segurança de tipos e produtividade.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenamento das informações.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em containers.

## Funcionalidades Principais

### Gerenciamento de Livros

- **Cadastro de livros**: Permite adicionar novos livros com informações como título, autor e ISBN.
- **Consulta de livros**: Possibilita a busca de livros por parâmetros como título ou autor.
- **Atualização de livros**: Facilita a modificação das informações dos livros cadastrados.
- **Exclusão de livros**: Permite remover livros do sistema.

### Gerenciamento de Empréstimos

- **Registro de empréstimos**: Vincula empréstimos a livros e usuários, registrando datas e prazos.
- **Devolução de livros**: Controla a devolução de livros, garantindo o cumprimento dos prazos estabelecidos.
- **Listagem de empréstimos**: Exibe empréstimos em aberto e históricos de empréstimos concluídos.

## Arquitetura e Design

- **API RESTful**: A aplicação segue os princípios REST para comunicação entre cliente e servidor.
- **Banco de Dados Relacional**: Utilização do PostgreSQL para armazenamento estruturado e eficiente dos dados.
- **Boas Práticas de Código**: Implementação de padrões como DTOs, Services e Repositories para manter a separação de responsabilidades e facilitar a manutenção do código.

## Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 14 ou superior.
- [Docker](https://www.docker.com/) instalado e em execução.
- Banco de dados PostgreSQL configurado ou utilização de container Docker para o banco.

### Configurações Iniciais

1. **Clone o repositório para a sua máquina**

   ```bash
   git clone https://github.com/seu-usuario/library-api.git


### Configurações iniciais:
  Clone o repositório para a sua máquina
  
  ### Execução do docker
    docker-compose up --build

  ### Acesso ao container
    docker exec -it -u node prismaapi-app sh

  ### Dentro do conatainer rode o comando para gerar as migrations:
    npx prisma migrate dev --name init

  ### Acesso ao PgAdmin4 via browser
    localhost:http://localhost:15432
    
  ### Ou no container execute:
    npx prisma studio
    
  ### Acesso ao Prisma studio via browser
    localhost:5555

  
### Acessando a API
A API estará disponível no endereço padrão: http://localhost:3000.

### Endpoints Principais
## Livros
### POST /api/books: Cadastrar livro.
### GET /api/books: Listar livros.
### PUT /api/books/{id}: Atualizar livro.
### DELETE /api/books/{id}: Remover livro.

## Empréstimos
### POST /api/loans: Registrar empréstimo.
### PUT /api/loans/{id}: Finalizar empréstimo.
### GET /api/loans: Listar empréstimos.

# Considerações Finais
Este projeto serve como uma base para sistemas de gerenciamento de bibliotecas e pode ser expandido conforme as necessidades específicas de cada implementação. A utilização do Nest.js em conjunto com o Prisma proporciona uma estrutura robusta e escalável, facilitando o desenvolvimento e a manutenção da aplicação.
