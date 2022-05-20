<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">
  <img src=".github/node.svg">
  <img src=".github/visual_studio_code.svg">
</p>

## 💻 Projeto

Projeto desenvolvido para permitir o adição/edição/exclusão de produtos de uma loja virtual. Também sendo possível pôr produtos em promoção.

Para uma experiência completa, clone também o repositório do frontend [clicando aqui](https://github.com/vitorsemidio-dev/ng-ecommerce)

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nestjs](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/vitorsemidio-dev/nestjs-ecommerce.git
$ cd nestjs-ecommerce
```

### 🛑 Pré-requisito

É necessário ter um banco de dados PostgreSQL rodando para conectar a aplicação ao banco.

Após ter um banco já executando, é necessário confirar as variáveis de ambiente no arquivo `.env`. Há um exemplo em `.env.example`.

```
# API
API_PORT=3333

# DATABASE
TYPEORM_HOST=localhost
TYPEORM_PORT=5432
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=postgres
TYPEORM_DATABASE=ecommerce
TYPEORM_LOGGING=false
```

Para iniciá-lo, siga os passos abaixo:

```bash
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn start:dev
```
