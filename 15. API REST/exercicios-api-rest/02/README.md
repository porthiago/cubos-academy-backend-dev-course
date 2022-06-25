![](https://i.imgur.com/xG74tOh.png)

# Exercício 02

## Lista de convidados

Neste exercício deveremos criar o back-end de um sistema para controle de convidados de evento. Este controle de convidados deverá ser executado em um servidor nodejs e deverá ser acessado através do endereço http://localhost:3000. O sistema deverá possuir uma lista de nomes dos convidados, e funcionalidades para poder: **consultar a lista** de convidados **inteira**, **consultar** se **um nome específico** existe na lista, **adicionar** um nome na lista e por fim, **remover** um nome da lista de convidados. Além de solicitar essas funcionalidades, foi exigido que este serviço back-end utilize o **padrão REST** o mais fielmente possível.

A seguir, detalharemos cada uma das funcionalidades necessárias, uma a uma, que deverão todas estar no mesmo script do servidor.

Todas as funcionalidades deverão estar disponíveis em um recurso chamado "convidados" que deverá ser acessado através do endereço http://localhost:3000/convidados.

**a) Consulta a lista inteira de convidados**

A primeira funcionalidade deverá ser aquela através da qual será possível consultar a lista completa de convidados.
Esta funcionalidade deverá utilizar o método (verbo) **GET**. Ao ser requisitada, esta funcionalidade deverá retornar no body do response um array de strings, onde cada item é um nome de convidado. Por enquanto esta funcionalidade não deverá receber parâmetros de qualquer tipo.

Caso considere necessário, crie um array inicial com quaisquer nomes para poder testar a funcionalidade.

**Exemplo:**
Caso seja criado um array inicial no servidor conforme abaixo

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao requisitar esta funcionalidade, deverá ser retornado:

```
[
  "Carlos",
  "Amanda",
  "Fernanda",
  "Juliana",
  "Lucas",
  "Roberto"
]
```

**b) Consulta se existe um nome específico na lista de convidados**

Agora vamos adicionar uma funcionalidade à anterior de consulta. Adicionaremos a possibilidade de especificar um nome através de um parâmetro query chamado **nome** e deverá ser retornado se o nome existe ou não na lista. Portanto neste passo apenas alteraremos à funcionalidade anterior que é acessada através do método (verbo) **GET**, através do endereço http://localhost:3000/convidados.

Portanto quando um valor for enviado na propriedade **nome** do tipo query, deverá ser retornado um objeto com apenas uma propriedade chamada **mensagem** que deverá receber uma string informando se o nome existe na lista ou não. Caso não seja fornecido valor à propriedade **nome** deverá ser retornado o array completo da lista de convidados, conforme funcionalidade anterior da letra **a)**.

**Exemplos:**

Caso seja criado um array inicial no servidor conforme abaixo

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao requisitar o recurso **convidados** com GET http://localhost:3000/convidados?nome=Renato, deverá ser retornado o seguinte objeto:

```
{
  "mensagem": "O convidado buscado não está presente na lista."
}
```

E ao requisitar o recurso **convidados** com GET http://localhost:3000/convidados?nome=Carlos, deverá ser retornado o seguinte objeto:

```
{
  "mensagem": "Convidado presente."
}
```

**c) Adicionar um nome na lista de convidados**

Deverá ser criada também uma funcionalidade para adicionar nomes à lista. Para isto, deverá ser utilizado o método (verbo) **POST** através do endereço http://localhost:3000/convidados.

O body da requisição (request) deverá ser um objeto JSON onde existirá apenas uma propriedade chamada **nome**, a qual deverá possuir como valor, uma string que será o nome do novo convidado a ser adicionado na lista.

Caso já exista na lista um nome idêntico ao fornecido pelo request, deverá ser retornada uma resposta com o body preenchido com um objeto com apenas uma propriedade **mensagem** que terá como valor uma string que é a mensagem informando que o convidado já existe na lista.

Caso o nome do convidado ainda não exista, após ser adicionado na lista deverá retornar uma resposta com um objeto JSON no body onde haverá apenas uma propriedade **mensagem** com uma mensagem dizendo que o convidado foi adicionado.

**Exemplos:**

Caso seja criado um array inicial no servidor conforme abaixo

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao enviar uma requisição POST http://localhost:3000/convidados com o objeto a seguir no conteúdo:

```
{
	"nome": "Amanda"
}
```

Deverá ser retornada uma mensagem com o seguinte objeto no conteúdo JSON no body:

```
{
    "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
}
```

Se for enviada uma requisição POST http://localhost:3000/convidados com um nome que ainda não exista na lista, conforme a seguir:

```
{
	"nome": "Gabriel"
}
```

Deverá ser retornada uma resposta com o seguinte objeto JSON no body do response:

```
{
    "mensagem": "Convidado adicionado."
}
```

**d) Remover um nome da lista de convidados**

Para finalizar, deve ser criada a funcionalidade para remover convidados da lista. Para isto, deverá ser utilizado o método (verbo) **DELETE** através do endereço http://localhost:3000/convidados.

O nome a ser removido deverá ser fornecido através de um parâmetro de URL do tipo path (params) chamado **nome**.

O body da requisição (request) não deverá possuir qualquer conteúdo e se possuir, deverá ser ignorado.

Caso não exista um convidado na lista com o nome enviado pela requisição, deverá ser retornada uma resposta com objeto json com a propriedade **mensagem** dizendo que não há convidado na lista com aquele nome e que portanto nenhum convidado foi removido.

Caso exista na lista um convidado com o exato nome enviado pela requisição, a string correspondente deverá ser removida do array, e em seguida o servidor deverá retornar uma mensagem com objeto json com a propriedade **mensagem** com uma string informando que o convidado foi removido.

**Exemplos:**

Caso seja criado um array inicial no servidor conforme abaixo

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao enviar uma requisição DELETE http://localhost:3000/convidados/Fernando

Deverá ser retornada uma mensagem com o seguinte objeto no conteúdo JSON no body:

```
{
    "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
}
```

Se for enviada uma requisição DELETE http://localhost:3000/convidados/Juliana

Deverá ser retornada uma resposta com o seguinte objeto JSON no body do response:

```
{
    "mensagem": "Convidado removido."
}
```

Após criar todas as funcionalidades, teste todas elas em ordens variadas para verificar se todas estão funcionando como deveriam! =]

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício` `nodeJS` `JavaScript`
