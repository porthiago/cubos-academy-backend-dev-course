![](https://i.imgur.com/xG74tOh.png)

# Exercício 02

## RoundControllerEvolution.com

Para este exercício deverá ser criado um servidor com nodejs para controlar rodadas de um jogo. Dado um array de nomes de jogadores que estará no script do servidor, deveremos a cada requisição ao servidor, responder com uma mensagem dizendo de quem é a vez de jogar.

O servidor deverá utilizar a porta 8000 e ser acessado através de http://localhost:8000 onde ficará o recurso principal da letra a) abaixo.

Para todas as letras a seguir do exercício, utilizaremos o array **jogadores** abaixo:

```javascript=
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
```

Todos os passos (letras) do exercício deverão ser implementadas no mesmo script do servidor.

Vamos aos recursos do servidor:

**a)** Crie um recurso na home (http://localhost:8000) do servidor para que seja retornada uma mensagem informando de quem é a vez de jogar.
A mensagem retornada ao navegador deverá seguir o seguinte formato:

```
É a vez de {nomeDoJogador} jogar!
```

Portanto, considerando o array de exemplo acima, na primeira requisição deverá ser retornado:

```
É a vez de José jogar!
```

Na segunda requisição:

```
É a vez de Maria jogar!
```

E assim por diante.

Após apresentar o nome do último jogador, a rodada finaliza e portanto, o próximo nome a ser retornado na próxima requisição deverá ser o do primeiro jogador, iniciando uma nova rodada.

**b)** Agora criaremos um novo recurso no servidor para remover jogadores do array. Este recurso deverá ser acessado através do endereço http://localhost:8000/remover e deverá receber um parâmetro da query chamado **indice** onde deverá ser informado o índice no array do jogador a ser removido.

Portanto, considerando o array de exemplo do início do exercício, ao fazer a seguinte requisição:

http://localhost:8000/remover?indice=2

O servidor deverá remover o jogador da posição 2 do array e retornar ao navegador o array após a remoção. Lembrando que os índices do array é base 0, portanto o primeiro jogador estará na posição 0 e o último jogador do array de exemplo estará na posição 4.

Desta forma, após a remoção do jogador no índice 2, deverá ser retornado ao navegador o array assim:

```javascript=
["José","Maria","Marcos","Fernanda"]
```

Caso não exista jogador na posição (índice) informado pela requisição, nenhum jogador deverá ser removido do array e deverá ser retornada a resposta com a seguinte mensagem:

```
Não existe jogador no índice informado (2) para ser removido.
```

**Importante:** Após a remoção de um jogador, o recurso principal da home que mostra o próximo jogador deverá continuar funcionando normal e corretamente.

**c)** Para finalizar, criaremos o recurso de adicionar jogadores. Este recurso deverá ser acessado através do endereço http://localhost:8000/adicionar e receber um parâmetro query obrigatório **nome** onde deverá ser informado o nome do jogador a ser adicionado, e outro parâmetro query opcional **indice** que poderá ser utilizado para especificar a posição (índice) do array onde se deseja adicionar o jogador. Portanto, se o parâmetro **indice** **NÃO** for informado, o jogador deverá ser adicionado ao final do array. Se o parâmetro **indice** for informado, o jogador deverá ser incluído no índice informado, movendo para uma posição posterior cada um dos jogadores que já existiam a partir daquele índice informado de forma que a ordem seja mantida.

Os nomes dos jogadores deverão ser sempre adcionados ao array com a primeira letra maiúscula e as demais letras minúsculas.

Se o valor do indice informado no parâmetro for uma posição que não existe no array, o novo jogador não deve ser adicionado e deverá ser retornada a mensagem:

```
O índice informado ({indice}) não existe no array. Novo jogador não adicionado.
```

Após adicionar o novo jogador, deverá ser retornado ao navegador o array de jogadores alterado.

**Exemplos:**

Se for requisitado ao servidor este recurso com os seguintes parâmetros:

http://localhost:8000/adicionar?nome=luiza

Considerando o estado inicial do array, após a adição da nova jogadora, deverá ser retornado ao navegador o seguinte array:

```
["José","Maria","João","Marcos","Fernanda","Luiza"]
```

Se for adicionado o parametro **indice** na requisição anterior ficando assim:

http://localhost:8000/adicionar?nome=luiza&indice=2

Considerando o estado inicial do array, após a adição da nova jogadora, deverá ser retornado ao navegador o seguinte array:

```
["José","Maria","Luiza","João","Marcos","Fernanda"]
```

Se for adicionado o parametro **indice** na requisição do primeiro exemplo com um valor de índice não existente no array, ficando assim:

http://localhost:8000/adicionar?nome=luiza&indice=80

Considerando o estado inicial do array, deverá ser retornada a seguinte mensagem:

```
O índice informado (80) não existe no array. Novo jogador não adicionado.
```

**Importante:** Após a adição de um novo jogador, o recurso principal da home que mostra o próximo jogador deverá continuar funcionando normal e corretamente.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício` `nodeJS` `JavaScript`
