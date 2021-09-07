# 🏪 Omni Channel 

## índice

* [Proposta](#proposta)
* [Introdução](#introducao)<br>
  * [Objetivo](#objetivo)
  * [Requisitos funcionais](#req_funcional)
  * [Requisitos não funcionais](#req_naoFuncional)
* [Tecnologias Utilizadas](#tecnologias)
* [Aplicação](#aplicacao)
* [Banco de Dados](#banco)
* [Equipe de Desenvolvimento](#equipe)
* [Orientadores](#orientadores)

---

<div id='proposta'/>

## 📝 Proposta 
Este é um repositório referente ao desafio final do curso do Luiza Code - 3º Edição sobre NodeJS com parceria com a Gama Academy.</br>
A proposta desse projeto é desenvolver um software para demonstrar os nossos conhecimentos adquiridos durante o curso.

<div id='introducao'/>
 
 ## 💡 Introdução 
 Uma das funcionalidades mais interessantes em um e-commerce é o <i>Omni Channel</i>, ou seja, não há mais diferença entre loja física ou na web. O consumidor pode procurar o produto em uma loja física e comprar pela internet ou vice-versa.</br>
 Resumidamente, o cliente Omni Channel é aquele que utiliza de todos os canais simultaneamente, cruzando compras em ambientes físicos e online.

<div id='objetivo'/>
 
 ### 🎯 Objetivo
 O objetivo desse projeto é desenvolver um serviço HTTP que resolva as funcionalidades de Omni Channel do cliente. Esse serviço atende os seguintes requisitos:
 - Adiciona um produto na lista de compra do cliente;
 - Remove um produto da lista de compra do cliente;
 - Consulta todos os produtos disponíveis;
 - Consulta a lista de compras do cliente.
 Onde o cliente poderá somente comprar um produto de cada tipo. Após realizar a compra o status dessa compra é "Realizada" e após a retirada do produto na loja física o status passa a ser "Retirado".

<div id='req_funcional'/>

 ## ✅ Requisitos funcionais
 A API contém os seguintes endponits:
 - Listagem de produtos
 - Listagem de loja física
 - Cadastro de cliente
 - Adição de um produto na lista de compra do cliente;
 - Remoção do produto da lista de compra do cliente;
 - Finalização da compra;
 - Consulta de todas as compras realizadas pelo cliente.

<div id='req_naoFuncional'/>

## ✅ Requisitos não funcionais
- Performance (volume de milhões de transações por dia)
- Testes automatizados, integração e unitários
- Logs/ Rastreabilidade
- Tratamento de exceção
- Front-end da aplicação
- Controle de concorrência na persistência de objetos
- Autenticação/ Login da API

<div id='tecnologias'/>
 
 ## 🛠 Tecnologias utilizadas 
Para o desenvolvimento do projeto foi utilizado tecnologias adequadas ao contexto desse desenvolvimente e elas são:

[<img title="JavaScript" width="25" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"> JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):  linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.

[<img title="NodeJS" width="20" src="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png"> NodeJS](https://nodejs.org/pt-br/): plataforma em que é possível criar aplicações Javascript sem depender de um browser para a execução.

[<img title="MySQL" width="20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"> MySQL](https://www.mysql.com/): é um sistema gerenciador de banco de dados relacional de código aberto usado na maioria das aplicações gratuitas para gerir suas bases de dados.

[<img title="Sequelize" width="20" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg"> Sequelize](https://sequelize.org/): é um ORM (Object-Relational Mapper) para Node. js, ou seja, ele faz o mapeamento de dados relacionais (tabelas, colunas e linhas) para objetos Javascript.

<div id='aplicacao'/>

## 💻 Aplicação

Essas instruções fornecerão uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.

### 1º Passo - Clonar o respositório
Comece clonando esse projeto para a sua máquina local.
```sh
git clone https://github.com/janainasantana/luiza-code-omni-channel.git
cd luiza-code-omni-channel
```

### 2º Passo - Instalando as dependências
Para instalar as dependências do projeto, digite o seguinte comando no terminal:
```sh
yarn
```

### 3º Passo - Configurar o ambiente
Para configurar o ambiente é necessário duplicar o arquivo `.env.example` e renomea-lo somente para `.env`.</br>
Em seguida, altere as informações desse arquivo `.env` para as informações correspondentes a sua máquina.

### 4º Passo - Criando database
No seu banco de dados escolhido nas configurações do passo acima, crie um database. </br>
Esse projeto foi criado utilizando o MySQL, portanto o comando é:
```mysql
create database luiza_code;
```

### 5º Passo - Criando as migrations do banco de dados
Para criar as migrations do banco de dados para criar o mapeamento do projeto e já ter uma estrutra de relacionamento predefinidos com uma organização de linhas e colunas, digite o seguinte comando no terminal:
```sh
npx sequelize-cli db:migrate
```

### 6º Passo - Criando os seeders do banco de dados
Para criar os seeders que é para deixar um padrão de preenchimento das tabelas com informações, digite o seguinte comando:
```sh
npx sequelize-cli db:seed:all
```

### 7º Passo - Executando a aplicação
Depois de tudo configurado, é hora de rodar a nossa aplicação, para executa-la basta digitar o seguinte comando no terminal:
```sh
yarn start
```

<div id='banco'/>
 
## 🎲 Banco de dados 
O banco de dados é uma parte essencial de uma aplicação. Ele é o responsável por armazenar os dados que poderão ser transformados em informações importantes para o usuário.

🚧 Em desenvolvimento...
  
<div id='equipe'/> 

## 👨‍👩‍👧‍👦 Equipe de desevolvimento  

 <table>
    <tbody>
        <tr>
        <!--Ana Carolliny Santos Sacramento-->      
            <td align="center">
                <a href="https://github.com/anacarolliny">
                    <img src="https://avatars.githubusercontent.com/u/80598323?v=4" width="100px;" alt="Foto da Ana Carolliny no Github" style="max-width:100%;">
                </a><br><br>
                <b>Ana Carolliny</b><br>
                <a href="https://github.com/anacarolliny">
                    <img src="https://ssoucie.github.io/images/giticon2.png" width="27px">
                </a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-e-6b075110b/">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" width="27px">
                </a>
            </td>
        <!--Janaina Santana-->      
            <td align="center">
                <a href="https://github.com/janainasantana/">
                    <img src="https://avatars.githubusercontent.com/u/72051834?v=4" width="100px;" alt="Foto da Janaina Santana no Github" style="max-width:100%;">
                </a><br><br>
                <b>Janaina Santana</b><br>
                <a href="https://github.com/janainasantana/">
                    <img src="https://ssoucie.github.io/images/giticon2.png" width="27px">
                </a>
                <a href="https://www.linkedin.com/in/janaina-c-santana">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" width="27px">
                </a>
            </td>
        <!--Jennifer Dominique-->      
            <td align="center">
                <a href="https://github.com/JenniferDominique">
                    <img src="https://avatars.githubusercontent.com/u/51061097?s=460&u=1da8c819e69228edf6cc6a2b529d06f9121c0e62&v=4" width="100px;" alt="Foto da Jennifer Dominique no GitHub" style="max-width:100%;">
                </a><br><br>
                <b>Jennifer Dominique</b><br>
                <a href="https://github.com/JenniferDominique">
                    <img src="https://ssoucie.github.io/images/giticon2.png" width="27px">
                </a>
                <a href="https://www.linkedin.com/in/jenniferdominique/">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" width="27px">
                </a>
            </td> 
        <!--Jessica Andreoli de Oliveira-->      
            <td align="center">
                <a href="https://github.com/jessicaandreoli">
                    <img src="https://avatars.githubusercontent.com/u/86447208?v=4" width="100px;" alt="Foto da Jessica Andreoli no Github" style="max-width:100%;">
                </a><br><br>
                <b>Jessica Andreoli</b><br>
                <a href="https://github.com/jessicaandreoli">
                    <img src="https://ssoucie.github.io/images/giticon2.png" width="27px">
                </a>
                <a href="https://www.linkedin.com/in/j%C3%A9ssica-andreoli-de-oliveira-543bb915a">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" width="27px">
                </a>
            </td>
        <!--Michele Passos-->      
            <td align="center">
                <a href="https://github.com/michellecrodrigues">
                    <img src="https://avatars.githubusercontent.com/u/88988287?v=4" width="100px;" alt="Foto da Michele Passos no Github" style="max-width:100%;">
                </a><br><br>
                <b>Michele Passos</b><br>
                <a href="https://github.com/michellecrodrigues">
                    <img src="https://ssoucie.github.io/images/giticon2.png" width="27px">
                </a>
                <a href="https://www.linkedin.com/in/michelle-rodrigues-passos-17070131/">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" width="27px">
                </a>
            </td>
        </tr>
    </tbody>
</table>


<div id='orientadores'/>

## 👨🏻‍🏫 Orientadores 

* Profº [Luiz Silva](https://github.com/luizreverso)
* [Gama Academy](https://www.gama.academy/)
* [Luiza Code](https://corp.gama.academy/luiza-code/inscricao)
