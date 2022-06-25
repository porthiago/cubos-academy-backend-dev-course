![](https://i.imgur.com/xG74tOh.png)

# Exercício 01

## Cálculo de frete

Vamos criar uma API para cálcular o frete de um produto.

A nossa API deverá possuir três rotas e todas utilizarão o método GET.

A rota `GET /produtos` deverá fazer a listagem dos produtos que estão listados no arquivo `produtos.js`, na pasta `bancodedados`.

A rota `GET /produtos/:idProduto` deverá fazer o detalhamento de um produto através do `id`, passado como parâmetro na rota.

A rota `GET /produtos/:idProduto/frete/:cep` receberá dois parâmetros de rota. O primeiro `idProduto` receberá o id do produto que será calculado o frete e o segundo `cep` receberá o cep (sem pontuação) para que seja encontrado o estado referente ao cep informado. Esta rota deverá calcular o frete do produto de acordo com as regras abaixo.

Para encontrar o estado atravé do cep informado, usaremos a função `getStateFromZipcode`, da biblioteca `utils-playground`, que pode ser baixada no NPM.

**Regras para cálculo de frete**

-   O valor padrão do frete será de `12%` do valor do produto
-   Para os estados `BA, SE, AL, PE e PB` o valor do frete será de `10%`
-   Para os estados `SP e RJ` o valor do frete será de `15%`

Exemplo:

Caso chamado a rota `GET /produtos/1/frete/41256250`, a resposta deverá ser:

```javascript
    {
        produto: {
            id: 1,
            nome: 'Teclado mecânico Keychron K2',
            valor: 100000
        },
        estado: 'BA',
        frete: 10000
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
