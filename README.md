<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

> API para cadastro de Médicos e suas Especialidades criada como `Desafio para o Grupo GCB` por meio da https://blueedtech.com.br/, utilizando a linguagem de programação JavaScript (TypeScript) e o banco de dados PostgreeSQL. Nessa API eu crio um CRUD completo tano para médicos como para especialidades com relacionamento de tabelas.

Para utilizar o projeto faça  o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Executando o projeto

_Essa API utiliza o PostgreeSql como banco de dados e o TypeORM, então antes de testar a API certifique se você possui o PostgreeSql instalado em seu computador(https://www.postgresql.org/download/)._

Agora você pode executar o projeto:

- Para executar o projeto com o nodemon, digite no terminal:

```bash
npm run start:dev
```

- Para executar o projeto com o node, digite no terminal:

```bash
npm start
```

## Testando a API

Você pode utilizar as ferramentas:

- Insomnia
- Thunder Client (plugin no vsCode)

Exemplos de URLs:

- Essa é a URL de teste padrão: http://localhost:3000/doctors
- Para buscar por ID, Editar ou Apagar, insira o ID na URL: exemplo http://localhost:3000/doctors/613fdaa4c25e7d70de41dd5c

Infraestrutura:

```NodeJs
{
  Back End: TypeORM, TypeScript, NestJs
  Persistência: PostgreeSQL
  Documentação: Compodoc, Swagger
  Ferramentas: Insomnia, Docker
}
```

Obrigado, volte sempre!
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

## License

Nest is [MIT licensed](LICENSE).
