![](https://i.imgur.com/xG74tOh.png)

# Exercício 02

## API Pokemon

Neste exercício criaremos uma API para responder informações de pokemons.
Para isso, utilizaremos como fonte dos dados as funções `listarPokemons` e `detalharPokemon`, da biblioteca `utils-playground`, que pode ser baixada no NPM.

Deste modo, o fluxo acabará sendo:

1. O usuário vai chamar a API que você vai criar
2. Sua API vai chamar as funções e aguardar o retorno dela
3. Sua API vai retornar os dados que forem pedidos abaixo para o usuário

Todas as requisições deverão ser assíncronas **aguardando o retorno de cada chamada (quando necessário)**, antes de executar qualquer outro comando.

Criaremos apenas dois métodos (verbos HTTP) para o mesmo recurso **pokemon** (http://localhost:8000/pokemon):

-   GET para listar os pokemons
-   GET com id ou nome para retornar informações de 1 pokemon

Abaixo detalharemos como cada um dos métodos deverão funcionar:

**A) GET sem parâmetro de rota**

Como a quantidade existente de pokemons é bem grande será necessário trabalhar com paginação dos dados.

A função `listarPokemons` que utilizaremos já é preparada para a paginação, sendo possível informar um argumento com a página desejada. Cada página retornam 10 pokemons e caso a página não seja informada como argumento da função, será retornada a primeira página.

Exemplo:

```javascript
const pokemons = listarPokemons()
// aqui será listado os 10 pokemons da primeira página.

const pokemons = listarPokemons(3)
// aqui será listado os 10 pokemons da terceira página.
```

**IMPORTANTE:**

Perceba que é retornada a informação sobre a página além dos objetos dos pokemons que estão na propriedade **results**.

Na nossa API queremos retornar apenas os objetos dos pokemons, portanto deveremos retornar apenas o array que está em **results** do retorno da função.

**B) GET com parâmetro de rota (id ou nome)**

Agora criaremos um novo método em nova rota GET que receba um parâmetro do tipo path (params) que poderá ser o **id** ou o **nome (em inglês)** do pokemon.

A função `detalharPokemon` já é preparada para receber um argumento com id ou nome nos seguintes formatos:

```javascript
const pokemons = detalharPokemon(1)
// aqui será detalhado as informações do bulbasaur.

const pokemons = detalharPokemon("bulbasaur")
// aqui será detalhado as informações do bulbasaur.
```

O objeto retornado pela função `detalharPokemon` é bastaaaaanteee grandeeee!!!
E nós não precisamos de todas as propriedades. Portanto, selecionaremos algumas propriedades do pokemon retornado pela função para repassar para os consumidores da nossa api. As propriedades selecionadas deverão ser:

-   id
-   name
-   height
-   weight
-   base_experience
-   forms
-   abilities
-   species

Sendo assim, como exemplo, ao requisitarmos http://localhost:8000/pokemon/1/ ou http://localhost:8000/pokemon/bulbasaur/ na nossa API, deverá ser retornado:

```json
{
    "id": 1,
    "name": "bulbasaur",
    "height": 7,
    "weight": 69,
    "base_experience": 64,
    "forms": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
        }
    ],
    "abilities": [
        {
            "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "species": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    }
}
```

Obs.:

-   É necessário se atentar para o uso do await quando uma função utiliza promises.
-   Todas as rotas deverão seguir os padrões REST o mais fielmente possível.
-   Todas as requisições deverão ser assíncronas.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `módulo 2` `exercícios` `lógica` `nodeJS`
