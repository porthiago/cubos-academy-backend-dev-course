![](https://i.imgur.com/xG74tOh.png)

# Exercício 03

## Biblioteca Online

Neste exercício, deverá ser criado o back-end de uma biblioteca online. Esta aplicação será uma API REST nodejs que deverá ser acessada através de http://localhost:3000.

Para atender a necessidade da biblioteca, será necessário no servidor da aplicação um array de objetos chamado **livros**, que será uma coleção onde cada objeto representa um livro. Cada livro possuirá as propriedades: **id** (que será o identificador do livro), **titulo**, **autor**, **ano** e **numPaginas**.

Portanto no servidor deverá existir um array como no exemplo abaixo:

```javascript
const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197,
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158,
    },
]
```

O sistema da biblioteca deverá também possuir os principais métodos para **consultar a coleção**, e para **consultar**, **adicionar**, **alterar** e **remover livros**. Para construir as funcionalidades, deverão ser utilizados os verbos HTTP, seguindo o padrão REST. Todas as funcionalidades deverão ser acessadas através do recurso http://localhost:3000/livros.

Nos passos abaixo detalharemos como deverão funcionar cada um dos métodos:

**a) Consulta da coleção**

Através do método (verbo) HTTP GET deverá ser possível requisitar a completa coleção de livros.
Portanto, considerando o array de exemplo do início do exercício, ao requisitar o endereço http://localhost:3000/livros utilizando o GET, deverá ser retornado no body do response:

```javascript
;[
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197,
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158,
    },
]
```

**b) Consulta de um livro por ID**

Também utilizando o método HTTP GET, quando for realizada uma requisição ao recurso **livros** adicionando um parâmetro do tipo path (params), da seguinte forma: http://localhost:3000/2

Considerando o array de exemplo lá do início, deverá ser retornado o seguinte objeto JSON:

```javascript
{
  "id": 2,
  "titulo": "Jonas e a sociedade escondida",
  "autor": "Claire Crawling",
  "ano": 2004,
  "numPaginas": 158
}
```

Quando for enviado um valor que não seja um número válido para o parâmetro ID na URL, deverá ser retornado um objeto JSON com uma propriedade **mensagem** informando que o valor do parâmetro não é um número válido, conforme exemplo a seguir:

```javascript
{
  "mensagem": "O valor do parâmetro ID da URL não é um número válido."
}
```

Se o valor do parâmetro for um número válido, porém não existir um livro na coleção para aquele ID, deverá ser retornado um objeto JSON com a seguinte mensagem:

```javascript
{
  "mensagem": "Não existe livro para o ID informado."
}
```

**c) Adicionar um livro**

Para contemplar a funcionalidade de adicionar um livro à coleção, deverá ser utilizado o verbo HTTP POST no mesmo recurso http://localhost:3000/livros. As requisições para este método deverão possuir em seu conteúdo (body), um objeto JSON com as propriedades que o livro deve ter na coleção, exceto o ID que deverá ser controlado automaticamente pelo servidor.

Portanto, a cada requisição POST a este recurso, o servidor deve encontrar o próximo ID livre para poder utilizar no novo livro que será adicionado.

Considerando o array de exemplo do exercício, quando for enviada uma requisição POST ao recurso **livros** com o seguinte objeto JSON em seu conteúdo (body):

```javascript
{
	"titulo": "Jonas e a pedra sentimental",
	"autor": "Clarice Crawling",
	"ano": "2015",
	"numPaginas": 184
}
```

O livro deverá ser adicionado à coleção utilizando o ID 3 (já que o último ID utilizado foi 2), e o objeto criado deverá ser retornado no body do response conforme o seguinte JSON:

```javascript
{
  "id": 3,
  "titulo": "Jonas e a pedra sentimental",
  "autor": "Clarice Crawling",
  "ano": "2015",
  "numPaginas": 184
}
```

Após adicionar o livro, se tentarmos consultá-lo na mesma execução do servidor, ele deverá estar presente na coleção.

**d) Substituindo um livro**

Utilizando o verbo HTTP PUT no recurso http://localhost:3000/livros, deverá ser possível substituir um livro utilizando o mesmo ID existente.

Para isso, o ID deverá ser informado no path da URL e o novo livro deverá ser enviado no body da requisição no mesmo formato de quando um livro é adicionado.

Portanto, considerando o array de exemplo do exercício, se for enviada a seguinte requisição:

PUT http://localhost:3000/livros/2

```javascript
{
  "titulo": "Jonas e a pedra sentimental",
  "autor": "Clarice Crawling",
  "ano": "2015",
  "numPaginas": 184
}
```

O livro enviado deverá **substituir** na coleção, todos os valores das quatro propriedades do livro que existia com o ID 2 e retornar o seguinte objeto com uma mensagem informando da alteração:

```javascript
{
  "mensagem": "Livro substituído."
}
```

Caso não exista um livro na coleção com o ID fornecido pela requisição, deverá ser retornado um objeto com a mensagem:

```javascript
{
  "mensagem": "Não existe livro a ser substituído para o ID informado."
}
```

**e) Alterando um livro**

Além de poder substituir um livro, deverá ser possível também alterar as proriedades de um livro, uma a uma, separadamente. Para isso, deverá ser criado um método para atender requisições enviadas com o verbo HTTP PATCH para o recurso http://localhost:3000/livros.

Para esta requisição, deverá ser enviado o ID do livro a ser alterado como parâmetro path (params) e um objeto JSON no conteúdo (body), que conterá apenas as propriedades que devem ser alteradas no livro com seus respectivos novos valores. Não deverá ser permitido alterar o ID.

Portanto, considerando o array de exemplo do exercício, quando for enviada uma requisição PATCH http://localhost:3000/livros/1 com o seguinte conteúdo (body):

```javascript
{
	"titulo": "Jonas, o Guerreiro"
}
```

O valor da propriedade **titulo** do livro de ID 1 da coleção deve ser alterado e em seguida deve ser retornado:

```javascript
{
  "mensagem": "Livro alterado."
}
```

Caso não exista um livro na coleção com o ID informado pelo request, deve ser retornado:

```javascript
{
  "mensagem": "Não existe livro a ser alterado para o ID informado."
}
```

Este fluxo deve funcionar para qualquer uma das propriedades existentes nos objetos de **livro**, inclusive quando mais de uma propriedade for enviada no request. A única propriedade que não pode ser alterada é o ID.

Após testar uma alteração com o PATCH, execute uma requisição GET sem parâmetro no recurso para conferir se a alteração foi realizada corretamente.

**f) Remoção de um livro**

Para finalizar, deverá ser criado o método de remoção de livros da coleção utilizando o verbo HTTP DELETE em http://localhost:3000/livros.

A requisição para este método deverá conter um parâmetro no path (params) da URL que deverá ser o ID do livro a ser removido, e não deverá conter qualquer conteúdo body.

Portanto, para o array de exemplo do exercício, caso seja enviada uma requisição DELETE http://localhost:3000/livros/1, deverá ser removido o livro que utiliza o ID 1 e em seguida deverá ser retornado:

```javascript
{
  "mensagem": "Livro removido."
}
```

Caso não exista livro na coleção utilizando o ID enviado pela requisição, deverá ser retornado:

```javascript
{
  "mensagem": "Não existe livro a ser removido para o ID informado."
}
```

Após a criação de todos os métodos, teste todos eles em ordens variadas para verificar se funcionarão conforme esperado.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício` `nodeJS` `JavaScript`
