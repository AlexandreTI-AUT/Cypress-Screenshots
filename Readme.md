## Pré-requisitos

Instale as dependências do projeto e executar os testes automatizados, é necessário que o [Node.js] ( https://nodejs.org/en/) e [NPM] (https://www.npmjs.com/) estejam instaldos em seu computador.

> Instale o Node.js, o NPM é automaticamente instalado.

## Instalação 

Abrir terminal na pasta do projeto;

Execute o comando  `npm install --save-dev cypress` para instalar as dependências de desenvolvimento.

## Executando os testes

Execute o comando `./node_modules/.bin/cypress open`para abrir o Cyprees e executar os testes.

## Executando Allure Report

`npx cypress run --env allure=true ` - Executa os testes em modo headles

`allure generate allure-results` - Gera o report

`allure open allure-report` - Abre o report no navegador

`npm run allure:clear` - Limpa os reports

